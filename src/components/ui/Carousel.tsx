import { useMemo } from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";

import { useBrandTheme } from "@/theme";

import { Label } from "./Label";

type CarouselItem = {
  id: string;
  title: string;
  subtitle: string;
  accent?: string;
};

type CarouselProps = {
  items: CarouselItem[];
};

export function Carousel({ items }: CarouselProps) {
  const { width } = Dimensions.get("window");
  const { theme } = useBrandTheme();

  const itemWidth = useMemo(() => width * 0.76, [width]);

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={itemWidth}
      decelerationRate="fast"
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <View
          style={[
            styles.slide,
            {
              width: itemWidth,
              backgroundColor: item.accent ?? theme.colors.primary,
            },
          ]}
        >
          <Label variant="subtitle" style={{ color: "#FFFFFF" }}>
            {item.title}
          </Label>
          <Label variant="muted" style={{ color: "rgba(255,255,255,0.8)" }}>
            {item.subtitle}
          </Label>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    gap: 14,
    paddingRight: 20,
  },
  slide: {
    borderRadius: 22,
    padding: 18,
    height: 150,
    justifyContent: "flex-end",
    gap: 8,
  },
});
