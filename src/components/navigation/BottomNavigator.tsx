import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

import { useBrandTheme } from "@/theme";

const iconMap: Record<string, keyof typeof Ionicons.glyphMap> = {
  dashboard: "grid-outline",
  wardrobe: "shirt-outline",
  chat: "chatbubbles-outline",
  "live-tracking": "location-outline",
};

export function BottomNavigator() {
  const { theme } = useBrandTheme();

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopColor: theme.colors.border,
          borderTopWidth: 1,
          height: 84,
          paddingTop: 8,
          paddingBottom: 12,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.muted,
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
        },
        tabBarIcon: ({ color, size }) => (
          <Ionicons
            name={iconMap[route.name] ?? "ellipse-outline"}
            size={size}
            color={color}
          />
        ),
      })}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="wardrobe"
        options={{
          title: "Wardrobe",
        }}
      />
      <Tabs.Screen
        name="live-tracking"
        options={{
          title: "Tracking",
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
        }}
      />
    </Tabs>
  );
}
