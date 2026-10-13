import { FlatList, type FlatListProps, StyleSheet } from "react-native";

export function AppFlatList<T>({
  contentContainerStyle,
  ...props
}: FlatListProps<T>) {
  return (
    <FlatList
      {...props}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[styles.container, contentContainerStyle]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
    paddingBottom: 24,
  },
});
