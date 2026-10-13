import { StyleSheet, View } from "react-native";

import { useBrandTheme } from "@/theme";

import { Label } from "./Label";

type AlertKind = "success" | "warning" | "error" | "info";

type AlertProps = {
  type?: AlertKind;
  title?: string;
  message: string;
};

export function Alert({ type = "info", title, message }: AlertProps) {
  const { theme } = useBrandTheme();

  const palette = {
    success: {
      background: `${theme.colors.success}20`,
      color: theme.colors.success,
      border: theme.colors.success,
    },
    warning: {
      background: `${theme.colors.warning}20`,
      color: theme.colors.warning,
      border: theme.colors.warning,
    },
    error: {
      background: `${theme.colors.danger}20`,
      color: theme.colors.danger,
      border: theme.colors.danger,
    },
    info: {
      background: `${theme.colors.info}20`,
      color: theme.colors.info,
      border: theme.colors.info,
    },
  }[type];

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: palette.background,
          borderColor: palette.border,
        },
      ]}
    >
      {title ? (
        <Label
          variant="body"
          style={{ color: palette.color, fontWeight: "700" }}
        >
          {title}
        </Label>
      ) : null}
      <Label variant="muted" style={{ color: palette.color }}>
        {message}
      </Label>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    gap: 4,
  },
});
