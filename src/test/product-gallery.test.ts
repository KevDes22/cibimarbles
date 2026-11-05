import { describe, expect, it } from "vitest";
import { products } from "@/lib/catalogue";

const expectedPhotos = [
  ["Champagne", "Champagne_Gold"],
  ["amc", "AMC_Yakowa"],
  ["IceGrey", "Ice_Grey"],
  ["Yellow_Fantasy", "Yellow_Fantasy"],
  ["tata", "Tatara"],
  ["afri", "Africa_Black"],
  ["KAKANY", "Kakanya"],
  ["Crystal_Whi", "Crystal_White"],
  ["Champagne_Whi", "Champagne_White"],
  ["Jigawa_Red", "Jigawa_Red"],
  ["Green_Pearl", "Green_Pearl"],
  ["Gudi_White_Template", "Gudi_White"],
];

describe("Product photograph matching", () => {
  it.each(expectedPhotos)("preserves %s's showroom and matches its own extra photos", (slug, prefix) => {
    const product = products.find((item) => item.slug === slug);
    expect(product).toBeDefined();
    expect(product?.gallery).toHaveLength(3);
    expect(product?.gallery[0]?.src).toBe(product?.image);
    expect(product?.gallery[1]?.src).toContain(`${prefix}_Side_View.png`);
    expect(product?.gallery[2]?.src).toContain(`${prefix}_Texture_View.png`);
  });
});