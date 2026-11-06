export const contactEndpoint = "https://formspree.io/f/mgaaqbdw";

export async function submitContactEnquiry(data: FormData) {
  const response = await fetch(contactEndpoint, {
    method: "POST",
    body: data,
    headers: { Accept: "application/json" },
  });
  if (!response.ok) {
    throw new Error("Your enquiry could not be sent. Please try again or contact CIBI directly.");
  }
}