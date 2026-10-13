import { AuthProvider } from "@/store/auth-store";
import { BrandProvider } from "@/theme";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <AuthProvider>
      <BrandProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </BrandProvider>
    </AuthProvider>
  );
}
