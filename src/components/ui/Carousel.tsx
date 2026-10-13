import {
  FlatList,
  type ListRenderItemInfo,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import type { ReactElement } from "react";

type CarouselItem = {
  id: string;
};

type CarouselRenderInfo<T> = {
  item: T;
  index: number;
  itemWidth: number;
  isSelected: boolean;
};

type CarouselProps<T extends CarouselItem> = {
  items: T[];
  selectedItemId?: string;
  onSelect?: (item: T) => void;
  renderItem: (info: CarouselRenderInfo<T>) => ReactElement;
};

const ITEM_GAP = 12;

export function Carousel<T extends CarouselItem>({
  items,
  selectedItemId,
  onSelect,
  renderItem,
}: CarouselProps<T>) {
  const { width } = useWindowDimensions();
  const itemWidth = Math.min(width * 0.76, 340);
  const snapInterval = itemWidth + ITEM_GAP;

  const handleMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    if (!onSelect || items.length === 0) return;
    const index = Math.round(
      event.nativeEvent.contentOffset.x / snapInterval,
    );
    const item = items[index];
    if (item) onSelect(item);
  };

  const renderCarouselItem = ({ item, index }: ListRenderItemInfo<T>) =>
    renderItem({
      item,
      index,
      itemWidth,
      isSelected: item.id === selectedItemId,
    });

  return (
    <View>
      <FlatList
        horizontal
        data={items}
        extraData={selectedItemId}
        keyExtractor={(item) => item.id}
        renderItem={renderCarouselItem}
        showsHorizontalScrollIndicator={false}
        snapToInterval={snapInterval}
        decelerationRate="fast"
        getItemLayout={(_, index) => ({
          length: itemWidth,
          offset: snapInterval * index,
          index,
        })}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={ItemSeparator}
        onScrollEndDrag={handleMomentumScrollEnd}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        nestedScrollEnabled
      />
    </View>
  );
}

function ItemSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 0,
  },
  separator: {
    width: ITEM_GAP,
  },
});
