import {
    createContext,
    useContext,
    useMemo,
    useState,
    type ReactNode,
} from "react";

import { BRAND_OPTIONS, BRAND_PALETTES, type BrandKey } from "./brand";

export type AppTheme = {
  brand: BrandKey;
  colors: (typeof BRAND_PALETTES)[BrandKey];
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  radius: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
};

const baseTokens = {
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 28,
  },
  radius: {
    sm: 8,
    md: 12,
    lg: 18,
    xl: 24,
  },
};

export const createTheme = (brand: BrandKey): AppTheme => ({
  brand,
  colors: BRAND_PALETTES[brand],
  ...baseTokens,
});

type BrandContextValue = {
  brand: BrandKey;
  theme: AppTheme;
  setBrand: (brand: BrandKey) => void;
};

const BrandContext = createContext<BrandContextValue | undefined>(undefined);

export function BrandProvider({ children }: { children: ReactNode }) {
  const [brand, setBrand] = useState<BrandKey>("luxury");

  const value = useMemo<BrandContextValue>(
    () => ({
      brand,
      theme: createTheme(brand),
      setBrand,
    }),
    [brand],
  );

  return (
    <BrandContext.Provider value={value}>{children}</BrandContext.Provider>
  );
}

export function useBrandTheme() {
  const context = useContext(BrandContext);

  if (!context) {
    throw new Error("useBrandTheme must be used inside BrandProvider");
  }

  return context;
}

export { BRAND_OPTIONS, BRAND_PALETTES };
export type { BrandKey };

