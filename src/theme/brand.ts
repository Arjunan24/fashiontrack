import brandConfig from "@/content/brand-config.json";

export const BRAND_OPTIONS = ["luxury", "fashion"] as const;
export type BrandKey = (typeof BRAND_OPTIONS)[number];
export type BrandPalette = (typeof brandConfig.luxury)["palette"];

export const BRAND_PALETTES: Record<BrandKey, BrandPalette> = {
  luxury: brandConfig.luxury.palette,
  fashion: brandConfig.fashion.palette,
};
