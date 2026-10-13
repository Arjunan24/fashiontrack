import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useBrandTheme } from "@/theme";

const checkpoints = [
  {
    id: "1",
    label: "Dispatch package in",
    status: "Transit",
    time: "08:55",
    completed: true,
  },
  {
    id: "2",
    label: "Approval at concierge",
    status: "Processing",
    time: "09:40",
    completed: true,
  },
  {
    id: "3",
    label: "Store arrival",
    status: "Scheduled",
    time: "10:25",
    completed: false,
  },
];

const navItems = [
  { label: "HOME", active: false },
  { label: "WARDROBE", active: false },
  { label: "TRACKING", active: true },
  { label: "CHAT", active: false },
];

export function LiveTrackingScreen() {
  const { theme } = useBrandTheme();

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: "#E8E2DB" }]}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={[
            styles.shell,
            { borderColor: theme.colors.secondary, backgroundColor: "#F4EFE9" },
          ]}
        >
          <View style={styles.topHeader}>
            <View style={styles.brandWrap}>
              <View style={styles.brandBadge}>
                <Text style={styles.brandBadgeText}>V</Text>
              </View>
              <Text
                style={[styles.brandText, { color: theme.colors.secondary }]}
              >
                Atelier
              </Text>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>C</Text>
              </View>
            </View>

            <Text style={[styles.greeting, { color: theme.colors.secondary }]}>
              Generating Screen...
            </Text>
          </View>

          <View style={styles.trackingCard}>
            <View style={styles.cardHeaderRow}>
              <Text
                style={[styles.cardTitle, { color: theme.colors.secondary }]}
              >
                Dispatch in motion
              </Text>
              <Text style={[styles.cardMeta, { color: theme.colors.muted }]}>
                EST. ARRIVAL
              </Text>
            </View>

            <View style={styles.cardBodyRow}>
              <View style={styles.routeInfo}>
                <Text style={[styles.routeHint, { color: theme.colors.muted }]}>
                  Couture Package in
                </Text>
                <Text
                  style={[styles.routeMain, { color: theme.colors.secondary }]}
                >
                  Transit
                </Text>
              </View>

              <View style={styles.timeInfo}>
                <Text style={[styles.routeHint, { color: theme.colors.muted }]}>
                  Today
                </Text>
                <Text
                  style={[styles.routeTime, { color: theme.colors.secondary }]}
                >
                  4:15
                </Text>
                <Text style={[styles.routeHint, { color: theme.colors.muted }]}>
                  PM
                </Text>
              </View>
            </View>

            <View style={styles.routeDivider} />

            <View style={styles.locationRow}>
              <Text
                style={[styles.locationText, { color: theme.colors.muted }]}
              >
                Atelier Paris Central
              </Text>
              <Text
                style={[styles.locationText, { color: theme.colors.muted }]}
              >
                FINAL COURIER
              </Text>
              <Text
                style={[styles.locationText, { color: theme.colors.muted }]}
              >
                HURRY AND-OFF
              </Text>
            </View>
          </View>

          <View style={styles.mapCard}>
            <View style={styles.mapHeader}>
              <Text
                style={[styles.mapTitle, { color: theme.colors.secondary }]}
              >
                Live Route
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
                16 KM
              </Text>
            </View>

            <View style={styles.mapIllustration}>
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

          <View style={styles.progressCard}>
            <View style={styles.progressHeader}>
              <Text
                style={[
                  styles.progressTitle,
                  { color: theme.colors.secondary },
                ]}
              >
                Delivery progress
              </Text>
              <Text
                style={[
                  styles.progressValue,
                  { color: theme.colors.secondary },
                ]}
              >
                68%
              </Text>
            </View>
            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progressFill,
                  { width: "68%", backgroundColor: theme.colors.primary },
                ]}
              />
            </View>
          </View>

          {checkpoints.map((item) => (
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
                {item.id !== "3" ? (
                  <View
                    style={[
                      styles.verticalLine,
                      { backgroundColor: theme.colors.border },
                    ]}
                  />
                ) : null}
              </View>

              <View style={styles.checkpointBox}>
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
                  {item.completed ? "Completed" : "Pending"}
                </Text>
              </View>
            </View>
          ))}

          <View style={styles.bottomNav}>
            {navItems.map((item) => (
              <View
                key={item.label}
                style={[styles.navItem, item.active && styles.navItemActive]}
              >
                <Text
                  style={[styles.navIcon, item.active && styles.navIconActive]}
                >
                  {item.active
                    ? "⌂"
                    : item.label === "WARDROBE"
                      ? "◫"
                      : item.label === "TRACKING"
                        ? "△"
                        : "◌"}
                </Text>
                <Text
                  style={[styles.navText, item.active && styles.navTextActive]}
                >
                  {item.label}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 18,
    paddingHorizontal: 10,
  },
  shell: {
    borderWidth: 4,
    borderRadius: 28,
    overflow: "hidden",
    alignSelf: "center",
    width: "100%",
    maxWidth: 440,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 18,
    elevation: 6,
  },
  topHeader: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: "#F5F0E9",
  },
  brandWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  brandBadge: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#111111",
    alignItems: "center",
    justifyContent: "center",
  },
  brandBadgeText: {
    color: "#D7BB72",
    fontWeight: "700",
    fontSize: 16,
  },
  brandText: {
    flex: 1,
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#D6C9BBB0",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#231F20",
  },
  greeting: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 14,
    marginBottom: 4,
  },
  trackingCard: {
    marginHorizontal: 12,
    marginTop: 12,
    backgroundColor: "#F9F5F2",
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#E6D7C3",
  },
  cardHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  cardMeta: {
    fontSize: 9,
    letterSpacing: 1.1,
    fontWeight: "700",
  },
  cardBodyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 10,
  },
  routeInfo: {
    flex: 1,
  },
  timeInfo: {
    alignItems: "flex-end",
  },
  routeHint: {
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },
  routeMain: {
    fontSize: 28,
    fontWeight: "700",
    lineHeight: 32,
  },
  routeTime: {
    fontSize: 28,
    fontWeight: "700",
    lineHeight: 32,
  },
  routeDivider: {
    height: 1,
    backgroundColor: "#D7CFC6",
    marginTop: 10,
    marginBottom: 8,
  },
  locationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  locationText: {
    fontSize: 8,
    fontWeight: "700",
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },
  mapCard: {
    marginHorizontal: 12,
    marginTop: 14,
    backgroundColor: "#F8F2EB",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E5D5BE",
    padding: 12,
  },
  mapHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  mapTitle: {
    fontSize: 14,
    fontWeight: "700",
  },
  mapBadge: {
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 10,
    fontWeight: "700",
  },
  mapIllustration: {
    height: 100,
    borderRadius: 14,
    backgroundColor: "#E6E6E6",
    position: "relative",
    overflow: "hidden",
  },
  routeDot: {
    position: "absolute",
    left: 30,
    top: 30,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#2d241f",
  },
  routeLine: {
    position: "absolute",
    left: 110,
    top: 34,
    width: 150,
    height: 2,
    backgroundColor: "#bbb",
    transform: [{ rotate: "24deg" }],
  },
  routeMarker: {
    position: "absolute",
    right: 60,
    top: 22,
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 3,
    borderColor: "#fff",
  },
  routeMarkerSmall: {
    position: "absolute",
    left: 96,
    bottom: 24,
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  progressCard: {
    marginHorizontal: 12,
    marginTop: 14,
    backgroundColor: "#F7F0E9",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E5D5BE",
    padding: 12,
  },
  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  progressTitle: {
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  progressValue: {
    fontSize: 12,
    fontWeight: "700",
  },
  progressBar: {
    height: 8,
    backgroundColor: "#E9DDCF",
    borderRadius: 999,
    overflow: "hidden",
    marginTop: 10,
  },
  progressFill: {
    height: "100%",
    borderRadius: 999,
  },
  checkpointRow: {
    marginHorizontal: 12,
    marginTop: 14,
    flexDirection: "row",
    gap: 12,
  },
  dotColumn: {
    alignItems: "center",
    width: 18,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginTop: 4,
  },
  verticalLine: {
    width: 2,
    height: 42,
    marginTop: 5,
  },
  checkpointBox: {
    flex: 1,
    backgroundColor: "#F7F0E9",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5D5BE",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  checkpointLabel: {
    fontSize: 12,
    fontWeight: "700",
  },
  checkpointTime: {
    marginTop: 4,
    fontSize: 10,
    fontWeight: "700",
  },
  checkpointState: {
    marginTop: 4,
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 12,
    backgroundColor: "#F7F3EE",
    borderTopWidth: 1,
    borderTopColor: "#E0D6C9",
    marginTop: 18,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    width: 72,
    gap: 4,
    paddingVertical: 4,
  },
  navItemActive: {
    borderRadius: 12,
    backgroundColor: "#F2E0B8",
  },
  navIcon: {
    fontSize: 18,
    color: "#3b2f2a",
  },
  navIconActive: {
    color: "#2a2230",
  },
  navText: {
    fontSize: 8,
    color: "#5d524c",
    fontWeight: "700",
    letterSpacing: 1.1,
  },
  navTextActive: {
    color: "#2a2230",
  },
});
