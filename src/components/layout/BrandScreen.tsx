import type { ReactNode } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useAuth } from "@/store/auth-store";
import { useBrandTheme } from "@/theme";

type BrandScreenProps = {
  title: string;
  children: ReactNode;
};

export function BrandScreen({ title, children }: BrandScreenProps) {
  const { user } = useAuth();
  const { content, screenContent, theme } = useBrandTheme();
  const firstName =
    user?.name.split(" ")[0] ?? screenContent.header.fallbackName;
  const avatarInitial = firstName.charAt(0).toUpperCase();

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.colors.background }]}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={[
            styles.page,
            { backgroundColor: theme.colors.surface },
          ]}
        >
          <View style={styles.header}>
            <View
              style={[
                styles.logo,
                { backgroundColor: theme.colors.secondary },
              ]}
            >
              <Text style={[styles.logoText, { color: theme.colors.primary }]}>
                {content.logoText}
              </Text>
            </View>
            <Text style={[styles.brandName, { color: theme.colors.secondary }]}>
              {content.brandName}
            </Text>
            <View
              style={[
                styles.avatar,
                { backgroundColor: theme.colors.accent },
              ]}
            >
              <Text
                style={[
                  styles.avatarText,
                  { color: theme.colors.secondary },
                ]}
              >
                {avatarInitial}
              </Text>
            </View>
          </View>
          <Text style={[styles.title, { color: theme.colors.secondary }]}>
            {title.replace("{name}", firstName)}
          </Text>
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingBottom: 32,
  },
  page: {
    alignSelf: "center",
    width: "100%",
    maxWidth: 440,
    paddingBottom: 16,
    paddingHorizontal: 12,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingTop: 16,
  },
  logo: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    fontSize: 16,
    fontWeight: "700",
  },
  brandName: {
    flex: 1,
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    fontSize: 12,
    fontWeight: "700",
  },
  title: {
    paddingHorizontal: 0,
    paddingTop: 14,
    paddingBottom: 12,
    fontSize: 16,
    fontWeight: "600",
  },
});
