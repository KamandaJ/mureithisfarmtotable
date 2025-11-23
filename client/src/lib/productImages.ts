import amaranthImage from "@assets/generated_images/amaranth_product_photo.png";
import blackNightshadeImage from "@assets/generated_images/black_nightshade_product_photo.png";
import cowpeaImage from "@assets/generated_images/cowpea_leaves_product_photo.png";
import swissChardImage from "@assets/generated_images/swiss_chard_product_photo.png";

export const productImageMap: Record<string, string> = {
  "amaranth_product_photo.png": amaranthImage,
  "black_nightshade_product_photo.png": blackNightshadeImage,
  "cowpea_leaves_product_photo.png": cowpeaImage,
  "swiss_chard_product_photo.png": swissChardImage,
};

export function getProductImage(imageName: string): string {
  return productImageMap[imageName] || imageName;
}
