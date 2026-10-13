import { Stack } from "expo-router";

import { AuthProvider } from "@/store/auth-store";
import { BrandProvider } from "@/theme";

export default function RootLayout() {
  return (
    <AuthProvider>
      <BrandProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </BrandProvider>
    </AuthProvider>
  );
}
