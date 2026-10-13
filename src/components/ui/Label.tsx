import { StyleSheet, Text, type TextProps } from "react-native";

import { useBrandTheme } from "@/theme";

type LabelVariant =
  | "title"
  | "subtitle"
  | "body"
  | "caption"
  | "muted"
  | "primary"
  | "success"
  | "danger";

export function Label({
  variant = "body",
  style,
  ...props
}: TextProps & { variant?: LabelVariant }) {
  const { theme } = useBrandTheme();

  const variantStyles = {
    title: { fontSize: 28, fontWeight: "700", color: theme.colors.text },
    subtitle: { fontSize: 18, fontWeight: "700", color: theme.colors.text },
    body: { fontSize: 15, fontWeight: "500", color: theme.colors.text },
    caption: { fontSize: 12, fontWeight: "600", color: theme.colors.muted },
    muted: { fontSize: 13, fontWeight: "500", color: theme.colors.muted },
    primary: { fontSize: 15, fontWeight: "700", color: theme.colors.primary },
    success: { fontSize: 14, fontWeight: "700", color: theme.colors.success },
    danger: { fontSize: 14, fontWeight: "700", color: theme.colors.danger },
  } as const;

  return (
    <Text {...props} style={[styles.base, variantStyles[variant], style]} />
  );
}

const styles = StyleSheet.create({
  base: {
    includeFontPadding: false,
  },
});
