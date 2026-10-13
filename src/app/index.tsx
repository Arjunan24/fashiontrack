import { Redirect } from "expo-router";

import { useAuth } from "@/store/auth-store";

export default function HomeRedirect() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <Redirect href="/(app)/(tabs)/dashboard" />
  ) : (
    <Redirect href="/(auth)/login" />
  );
}
