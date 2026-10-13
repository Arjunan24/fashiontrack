import type { ReactNode } from "react";
import { StyleSheet, View, type ViewProps } from "react-native";

import { Label } from "./Label";

type HeaderProps = ViewProps & {
  title: string;
  subtitle?: string;
  action?: ReactNode;
};

export function Header({
  title,
  subtitle,
  action,
  style,
  ...props
}: HeaderProps) {
  return (
    <View {...props} style={[styles.container, style]}>
      <View style={styles.textBlock}>
        <Label variant="subtitle">{title}</Label>
        {subtitle ? <Label variant="muted">{subtitle}</Label> : null}
      </View>
      {action ? <View style={styles.action}>{action}</View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  textBlock: {
    flex: 1,
    gap: 4,
  },
  action: {
    alignItems: "center",
    justifyContent: "center",
  },
});
