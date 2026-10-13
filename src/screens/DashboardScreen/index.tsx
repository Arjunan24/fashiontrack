import { router } from "expo-router";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

import { BrandScreen } from "@/components/layout/BrandScreen";
import { Carousel } from "@/components/ui/Carousel";
import { useBrandTheme } from "@/theme";

import { styles } from "./styles";

export function DashboardScreen() {
  const { brandAssets, theme, screenContent } = useBrandTheme();
  const dashboard = screenContent.dashboard;
  const items = brandAssets.dashboardItems;
  const [selectedItemId, setSelectedItemId] = useState(
    items[0]?.id ?? "",
  );
  const selectedItem =
    items.find((item) => item.id === selectedItemId) ?? items[0];

  return (
    <BrandScreen title={dashboard.title}>
      <View>
            <View
              style={[
                styles.tierBadge,
                { backgroundColor: theme.colors.accent },
              ]}
            >
              <Text
                style={[
                  styles.tierText,
                  { color: theme.colors.secondary },
                ]}
              >
                {dashboard.membershipTier}
              </Text>
            </View>
          <View
            style={[
              styles.statusCard,
              {
                backgroundColor: theme.colors.surface,
                borderColor: theme.colors.border,
              },
            ]}
          >
            <View style={styles.cardHeaderRow}>
              <Text
                style={[styles.cardTitle, { color: theme.colors.secondary }]}
              >
                {dashboard.dispatchTitle}
              </Text>
              <Text style={[styles.cardMeta, { color: theme.colors.muted }]}>
                {dashboard.arrivalLabel}
              </Text>
            </View>

            <View style={styles.routeRow}>
              <View style={styles.routeBlock}>
                <Text
                  style={[styles.routeLabel, { color: theme.colors.muted }]}
                >
                  {dashboard.packageLabel}
                </Text>
                <Text
                  style={[styles.routeValue, { color: theme.colors.secondary }]}
                >
                  {dashboard.packageStatus}
                </Text>
              </View>

              <View style={styles.routeBlockRight}>
                <Text
                  style={[styles.routeLabel, { color: theme.colors.muted }]}
                >
                  {selectedItem?.arrivalDay ?? dashboard.arrivalDay}
                </Text>
                <Text
                  style={[styles.routeValue, { color: theme.colors.secondary }]}
                >
                  {selectedItem?.arrivalTime ?? dashboard.arrivalTime}
                </Text>
                <Text
                  style={[styles.routeLabel, { color: theme.colors.muted }]}
                >
                  {selectedItem?.arrivalPeriod ?? dashboard.arrivalPeriod}
                </Text>
              </View>
            </View>

            <View style={styles.routeDivider} />

            <View style={styles.routeFooterRow}>
              <Text style={[styles.footerText, { color: theme.colors.muted }]}>
                {dashboard.locations[0]}
              </Text>
              <Text style={[styles.footerText, { color: theme.colors.muted }]}>
                {selectedItem?.courierName ?? dashboard.locations[1]}
              </Text>
              <Text style={[styles.footerText, { color: theme.colors.muted }]}>
                {selectedItem?.courierStatus ?? dashboard.locations[2]}
              </Text>
            </View>
          </View>

          <View style={styles.metricsRow}>
            {dashboard.metrics.map((metric) => (
              <View
                key={metric.label}
                style={[
                  styles.metricBox,
                  { borderBottomColor: theme.colors.border },
                ]}
              >
                <Text
                  style={[
                    styles.metricValue,
                    { color: theme.colors.secondary },
                  ]}
                >
                  {metric.value}
                </Text>
                <Text
                  style={[styles.metricLabel, { color: theme.colors.muted }]}
                >
                  {metric.label}
                </Text>
              </View>
            ))}
          </View>

          <View style={styles.actionRow}>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={dashboard.actions[0]}
              style={[
                styles.actionButton,
                {
                  backgroundColor: theme.colors.surface,
                  borderColor: theme.colors.border,
                },
              ]}
            >
              <Text
                style={[
                  styles.actionButtonText,
                  { color: theme.colors.secondary },
                ]}
              >
                {dashboard.actions[0]}
              </Text>
            </Pressable>
            <Pressable
              onPress={() =>
                router.push({
                  pathname: "/(app)/(tabs)/live-tracking",
                  params: selectedItem ? { itemId: selectedItem.id } : {},
                })
              }
              accessibilityRole="button"
              accessibilityLabel={dashboard.actions[1]}
              style={[
                styles.actionButton,
                {
                  backgroundColor: theme.colors.secondary,
                  borderColor: theme.colors.secondary,
                },
              ]}
            >
              <Text style={[styles.trackButtonText]}>{dashboard.actions[1]}</Text>
            </Pressable>
          </View>

          {selectedItem ? (
            <View style={styles.promoCard}>
              <Image
                source={{ uri: selectedItem.image }}
                style={styles.promoImage}
              />
              <View style={styles.promoOverlay}>
                <Text style={styles.promoMeta}>
                  {dashboard.promotion.eyebrow}
                </Text>
                <Text style={styles.promoTitle}>
                  {selectedItem.campaignTitle}
                </Text>
                <Text style={styles.promoCopy}>
                  {selectedItem.campaignDescription}
                </Text>
                <View style={styles.promoButton}>
                  <Text style={styles.promoButtonText}>
                    {dashboard.promotion.button}
                  </Text>
                  <Text style={styles.promoArrow}>→</Text>
                </View>
              </View>
            </View>
          ) : null}

          <View
            style={[
              styles.messageCard,
              {
                backgroundColor: theme.colors.surface,
                borderColor: theme.colors.border,
              },
            ]}
          >
            <View style={styles.messageHeader}>
              <View style={styles.messageAvatar}>
                <Text style={styles.messageAvatarText}>
                  {dashboard.stylistMessage.stylist.charAt(0)}
                </Text>
              </View>
              <View style={styles.messageMeta}>
                <Text
                  style={[
                    styles.messageName,
                    { color: theme.colors.secondary },
                  ]}
                >
                  {dashboard.stylistMessage.stylist}
                </Text>
                <Text
                  style={[styles.messageTime, { color: theme.colors.muted }]}
                >
                  {dashboard.stylistMessage.time}
                </Text>
              </View>
            </View>

            <Text
              style={[styles.messageText, { color: theme.colors.secondary }]}
            >
              {dashboard.stylistMessage.message}
            </Text>

            <View style={styles.replyRow}>
              <Text style={[styles.replyText, { color: theme.colors.primary }]}>
                {dashboard.stylistMessage.suggestions}
              </Text>
              <Text style={[styles.replyText, { color: theme.colors.primary }]}>
                {dashboard.stylistMessage.reply}
              </Text>
            </View>
          </View>

          <View style={styles.curationHeader}>
            <Text
              style={[styles.curationTitle, { color: theme.colors.secondary }]}
            >
              {dashboard.curationTitle}
            </Text>
            <Pressable
              onPress={() => router.push("/(app)/(tabs)/wardrobe")}
              accessibilityRole="button"
              accessibilityLabel={dashboard.viewAll}
            >
              <Text style={[styles.viewAll, { color: theme.colors.primary }]}>
              {dashboard.viewAll}
              </Text>
            </Pressable>
          </View>

          <Carousel
            items={items}
            selectedItemId={selectedItem?.id}
            onSelect={(item) => setSelectedItemId(item.id)}
            renderItem={({ item, itemWidth, isSelected }) => (
              <Pressable
                accessibilityRole="button"
                accessibilityState={{ selected: isSelected }}
                accessibilityLabel={`${item.name}, ${item.state}`}
                onPress={() => setSelectedItemId(item.id)}
                style={[
                  styles.wardrobeCard,
                  {
                    width: itemWidth,
                    backgroundColor: isSelected
                      ? theme.colors.accent
                      : theme.colors.surfaceAlt,
                    borderColor: isSelected
                      ? theme.colors.primary
                      : theme.colors.border,
                  },
                ]}
              >
                <Image
                  source={{ uri: item.image }}
                  style={styles.wardrobeImage}
                />
                <View style={styles.wardrobeInfo}>
                  <Text
                    style={[
                      styles.wardrobeState,
                      { color: theme.colors.muted },
                    ]}
                  >
                    {item.state}
                  </Text>
                  <Text
                    style={[
                      styles.wardrobeName,
                      { color: theme.colors.secondary },
                    ]}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={[
                      styles.wardrobePrice,
                      { color: theme.colors.secondary },
                    ]}
                  >
                    {item.price}
                  </Text>
                </View>
                {isSelected ? (
                  <Text
                    style={[
                      styles.wardrobeTag,
                      {
                        color: theme.colors.secondary,
                        backgroundColor: theme.colors.surface,
                      },
                    ]}
                  >
                    {dashboard.selectedLabel}
                  </Text>
                ) : null}
              </Pressable>
            )}
          />
      </View>
    </BrandScreen>
  );
}
