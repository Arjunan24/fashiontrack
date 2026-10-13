export type BrandKey = "luxury" | "fashion";

export type BrandPalette = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  surfaceAlt: string;
  text: string;
  muted: string;
  border: string;
  success: string;
  warning: string;
  danger: string;
  info: string;
};

export const BRAND_PALETTES: Record<BrandKey, BrandPalette> = {
  luxury: {
    primary: "#C6A96A",
    secondary: "#1F1A17",
    accent: "#EADFC7",
    background: "#F4F0EA",
    surface: "#F7F3EE",
    surfaceAlt: "#EAE0D2",
    text: "#181411",
    muted: "#70675F",
    border: "#DCCEB8",
    success: "#2D8C70",
    warning: "#D7A84B",
    danger: "#BE5A4B",
    info: "#4876B7",
  },
  fashion: {
    primary: "#D9487B",
    secondary: "#4E3D6D",
    accent: "#FFD0D8",
    background: "#FFF7FA",
    surface: "#FFFFFF",
    surfaceAlt: "#F7F1F5",
    text: "#1F1A2D",
    muted: "#6E667A",
    border: "#EADDE6",
    success: "#20B26B",
    warning: "#F4B740",
    danger: "#E24D5E",
    info: "#5B8DEF",
  },
};

export const BRAND_OPTIONS = Object.keys(BRAND_PALETTES) as BrandKey[];
