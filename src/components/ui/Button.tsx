import { Pressable, StyleSheet, View, type PressableProps } from "react-native";

import { useBrandTheme } from "@/theme";

import { Label } from "./Label";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";

type ButtonProps = PressableProps & {
  title: string;
  variant?: ButtonVariant;
  fullWidth?: boolean;
};

export function Button({
  title,
  variant = "primary",
  fullWidth = true,
  style,
  ...props
}: ButtonProps) {
  const { theme } = useBrandTheme();

  const colorMap = {
    primary: {
      background: theme.colors.primary,
      text: "#FFFFFF",
      border: theme.colors.primary,
    },
    secondary: {
      background: theme.colors.accent,
      text: theme.colors.secondary,
      border: theme.colors.accent,
    },
    ghost: {
      background: "transparent",
      text: theme.colors.primary,
      border: theme.colors.primary,
    },
    danger: {
      background: theme.colors.danger,
      text: "#FFFFFF",
      border: theme.colors.danger,
    },
  } as const;

  const palette = colorMap[variant];

  return (
    <Pressable
      {...props}
      style={({ pressed, hovered }) => [
        styles.base,
        {
          backgroundColor: palette.background,
          borderColor: palette.border,
          width: fullWidth ? "100%" : "auto",
          opacity: pressed ? 0.9 : 1,
        },
        typeof style === "function" ? style({ pressed, hovered }) : style,
      ]}
    >
      <View style={styles.inner}>
        <Label
          variant="body"
          style={{ color: palette.text, fontWeight: "700" }}
        >
          {title}
        </Label>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 16,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 52,
    paddingHorizontal: 16,
  },
  inner: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
