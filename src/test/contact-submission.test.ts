import { afterEach, describe, expect, it, vi } from "vitest";
import { submitContactEnquiry } from "@/lib/contact-submission";

afterEach(() => vi.unstubAllGlobals());

describe("contact enquiry delivery", () => {
  it("posts all enquiry details to Barbara's Formspree endpoint", async () => {
    const send = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal("fetch", send);
    const data = new FormData();
    data.set("name", "CIBI test");
    data.set("email", "test@example.com");
    data.set("product", "Champagne Gold");
    await submitContactEnquiry(data);
    expect(send).toHaveBeenCalledWith("https://formspree.io/f/mgaaqbdw", {
      method: "POST", body: data, headers: { Accept: "application/json" },
    });
  });
  it("rejects failed submissions instead of confirming delivery", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, status: 422 }));
    await expect(submitContactEnquiry(new FormData())).rejects.toThrow("could not be sent");
  });
  it("rejects a connection failure", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("Network unavailable")));
    await expect(submitContactEnquiry(new FormData())).rejects.toThrow("Network unavailable");
  });
});