import { StyleSheet, View, type ViewProps } from "react-native";

import { useBrandTheme } from "@/theme";

type CardProps = ViewProps & {
  elevated?: boolean;
  soft?: boolean;
};

export function Card({
  elevated = true,
  soft = false,
  style,
  children,
  ...props
}: CardProps) {
  const { theme } = useBrandTheme();

  return (
    <View
      {...props}
      style={[
        styles.card,
        {
          backgroundColor: soft
            ? theme.colors.surfaceAlt
            : theme.colors.surface,
          borderColor: theme.colors.border,
          shadowColor: elevated ? theme.colors.secondary : "transparent",
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 18,
    borderWidth: 1,
    padding: 16,
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },
});
