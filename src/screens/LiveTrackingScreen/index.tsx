import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

import { BrandScreen } from "@/components/layout/BrandScreen";
import { useBrandTheme } from "@/theme";

import { styles } from "./styles";

export function LiveTrackingScreen() {
  const { brandAssets, theme, screenContent } = useBrandTheme();
  const tracking = screenContent.tracking;
  const { itemId } = useLocalSearchParams<{ itemId?: string }>();
  const selectedItem =
    brandAssets.dashboardItems.find((item) => item.id === itemId) ??
    brandAssets.dashboardItems[0];

  return (
    <BrandScreen title={tracking.title}>
          <View
            style={[
              styles.trackingCard,
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
                {tracking.dispatchTitle}
              </Text>
              <Text style={[styles.cardMeta, { color: theme.colors.muted }]}>
                {tracking.arrivalLabel}
              </Text>
            </View>

            <View style={styles.cardBodyRow}>
              <View style={styles.routeInfo}>
                <Text style={[styles.routeHint, { color: theme.colors.muted }]}>
                  {tracking.packageLabel}
                </Text>
                <Text
                  style={[styles.routeMain, { color: theme.colors.secondary }]}
                >
                  {tracking.packageStatus}
                </Text>
              </View>

              <View style={styles.timeInfo}>
                <Text style={[styles.routeHint, { color: theme.colors.muted }]}>
                  {selectedItem?.arrivalDay ?? tracking.arrivalDay}
                </Text>
                <Text
                  style={[styles.routeTime, { color: theme.colors.secondary }]}
                >
                  {selectedItem?.arrivalTime ?? tracking.arrivalTime}
                </Text>
                <Text style={[styles.routeHint, { color: theme.colors.muted }]}>
                  {selectedItem?.arrivalPeriod ?? tracking.arrivalPeriod}
                </Text>
              </View>
            </View>

            <View style={styles.routeDivider} />

            <View style={styles.locationRow}>
              <Text
                style={[styles.locationText, { color: theme.colors.muted }]}
              >
                {tracking.locations[0]}
              </Text>
              <Text
                style={[styles.locationText, { color: theme.colors.muted }]}
              >
                {selectedItem?.courierName ?? tracking.locations[1]}
              </Text>
              <Text
                style={[styles.locationText, { color: theme.colors.muted }]}
              >
                {selectedItem?.courierStatus ?? tracking.locations[2]}
              </Text>
            </View>
          </View>

          <View
            style={[
              styles.mapCard,
              {
                backgroundColor: theme.colors.surfaceAlt,
                borderColor: theme.colors.border,
              },
            ]}
          >
            <View style={styles.mapHeader}>
              <Text
                style={[styles.mapTitle, { color: theme.colors.secondary }]}
              >
                {tracking.routeTitle}
              </Text>
              <Text
                style={[
                  styles.mapBadge,
                  {
                    color: theme.colors.secondary,
                    backgroundColor: theme.colors.accent,
                  },
                ]}
              >
                {tracking.routeDistance}
              </Text>
            </View>

            <View
              style={[
                styles.mapIllustration,
                { backgroundColor: theme.colors.accent },
              ]}
            >
              <View style={styles.routeDot} />
              <View style={styles.routeLine} />
              <View
                style={[
                  styles.routeMarker,
                  { backgroundColor: theme.colors.secondary },
                ]}
              />
              <View
                style={[
                  styles.routeMarkerSmall,
                  { backgroundColor: theme.colors.primary },
                ]}
              />
            </View>
          </View>

          <View
            style={[
              styles.progressCard,
              {
                backgroundColor: theme.colors.surface,
                borderColor: theme.colors.border,
              },
            ]}
          >
            <View style={styles.progressHeader}>
              <Text
                style={[
                  styles.progressTitle,
                  { color: theme.colors.secondary },
                ]}
              >
                {tracking.progressTitle}
              </Text>
              <Text
                style={[
                  styles.progressValue,
                  { color: theme.colors.secondary },
                ]}
              >
                {tracking.progress}%
              </Text>
            </View>
            <View
              style={[
                styles.progressBar,
                { backgroundColor: theme.colors.surfaceAlt },
              ]}
            >
              <View
                style={[
                  styles.progressFill,
                  {
                    width: `${tracking.progress}%`,
                    backgroundColor: theme.colors.primary,
                  },
                ]}
              />
            </View>
          </View>

          {tracking.checkpoints.map((item, index) => (
            <View key={item.id} style={styles.checkpointRow}>
              <View style={styles.dotColumn}>
                <View
                  style={[
                    styles.dot,
                    {
                      backgroundColor: item.completed
                        ? theme.colors.primary
                        : theme.colors.border,
                    },
                  ]}
                />
                {index < tracking.checkpoints.length - 1 ? (
                  <View
                    style={[
                      styles.verticalLine,
                      { backgroundColor: theme.colors.border },
                    ]}
                  />
                ) : null}
              </View>

              <View
                style={[
                  styles.checkpointBox,
                  {
                    backgroundColor: theme.colors.surface,
                    borderColor: theme.colors.border,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.checkpointLabel,
                    { color: theme.colors.secondary },
                  ]}
                >
                  {item.label}
                </Text>
                <Text
                  style={[styles.checkpointTime, { color: theme.colors.muted }]}
                >
                  {item.time}
                </Text>
                <Text
                  style={[
                    styles.checkpointState,
                    {
                      color: item.completed
                        ? theme.colors.primary
                        : theme.colors.muted,
                    },
                  ]}
                >
                  {item.completed
                    ? tracking.completedLabel
                    : tracking.pendingLabel}
                </Text>
              </View>
            </View>
          ))}

    </BrandScreen>
  );
}
