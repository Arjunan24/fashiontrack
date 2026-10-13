import { Redirect } from "expo-router";

import { BottomNavigator } from "@/components/navigation/BottomNavigator";
import { useAuth } from "@/store/auth-store";

export default function AppLayout() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect href="/(auth)/login" />;
  }

  return <BottomNavigator />;
}
