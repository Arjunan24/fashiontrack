import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useAuth } from "@/store/auth-store";
import { useBrandTheme } from "@/theme";

const metrics = [
  { label: "IN TRANSIT", value: "01" },
  { label: "WARDROBE", value: "24" },
  { label: "STYLIST NOTES", value: "02" },
];

const wardrobeItems = [
  {
    id: "1",
    name: "Silk Cambric Trench",
    price: "$3,450",
    state: "ATTIRE",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "2",
    name: "Pleated Midi Pop",
    price: "$1,980",
    state: "ARCHIVE",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
  },
];

const navItems = [
  { label: "HOME", active: true },
  { label: "WARDROBE" },
  { label: "TRACKING" },
  { label: "CHAT" },
];

export function DashboardScreen() {
  const { theme } = useBrandTheme();
  const { user } = useAuth();

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
              Bonjour, {user?.name?.split(" ")[0] || "Camille"}
            </Text>

            <View style={styles.tierBadge}>
              <Text style={styles.tierText}>GOLD TIER PATRON</Text>
            </View>
          </View>

          <View style={styles.statusCard}>
            <View style={styles.cardHeaderRow}>
              <Text
                style={[styles.cardTitle, { color: theme.colors.secondary }]}
              >
                DISPATCH IN MOTION
              </Text>
              <Text style={[styles.cardMeta, { color: theme.colors.muted }]}>
                EST. ARRIVAL
              </Text>
            </View>

            <View style={styles.routeRow}>
              <View style={styles.routeBlock}>
                <Text
                  style={[styles.routeLabel, { color: theme.colors.muted }]}
                >
                  Couture Package in
                </Text>
                <Text
                  style={[styles.routeValue, { color: theme.colors.secondary }]}
                >
                  Transit
                </Text>
              </View>

              <View style={styles.routeBlockRight}>
                <Text
                  style={[styles.routeLabel, { color: theme.colors.muted }]}
                >
                  Today
                </Text>
                <Text
                  style={[styles.routeValue, { color: theme.colors.secondary }]}
                >
                  4:15
                </Text>
                <Text
                  style={[styles.routeLabel, { color: theme.colors.muted }]}
                >
                  PM
                </Text>
              </View>
            </View>

            <View style={styles.routeDivider} />

            <View style={styles.routeFooterRow}>
              <Text style={[styles.footerText, { color: theme.colors.muted }]}>
                Atelier Paris Central
              </Text>
              <Text style={[styles.footerText, { color: theme.colors.muted }]}>
                FINAL COURIER
              </Text>
              <Text style={[styles.footerText, { color: theme.colors.muted }]}>
                HURRY AND-OFF
              </Text>
            </View>
          </View>

          <View style={styles.metricsRow}>
            {metrics.map((metric) => (
              <View key={metric.label} style={styles.metricBox}>
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
                + LOG GARMENT
              </Text>
            </Pressable>
            <Pressable
              style={[
                styles.actionButton,
                {
                  backgroundColor: theme.colors.secondary,
                  borderColor: theme.colors.secondary,
                },
              ]}
            >
              <Text style={[styles.trackButtonText]}>@ TRACK ORDER</Text>
            </Pressable>
          </View>

          <View style={styles.promoCard}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
              }}
              style={styles.promoImage}
            />
            <View style={styles.promoOverlay}>
              <Text style={styles.promoMeta}>EXCLUSIVE PREVIEW</Text>
              <Text style={styles.promoTitle}>Spring Runway Edit 2025</Text>
              <Text style={styles.promoCopy}>
                Filo silhouettes tailored in Como silk and hand-spun cashmere.
              </Text>
              <Pressable style={styles.promoButton}>
                <Text style={styles.promoButtonText}>CURATE YOUR LOOK</Text>
                <Text style={styles.promoArrow}>→</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.messageCard}>
            <View style={styles.messageHeader}>
              <View style={styles.messageAvatar}>
                <Text style={styles.messageAvatarText}>E</Text>
              </View>
              <View style={styles.messageMeta}>
                <Text
                  style={[
                    styles.messageName,
                    { color: theme.colors.secondary },
                  ]}
                >
                  Éléonore (Senior Stylist)
                </Text>
                <Text
                  style={[styles.messageTime, { color: theme.colors.muted }]}
                >
                  10m ago
                </Text>
              </View>
            </View>

            <Text
              style={[styles.messageText, { color: theme.colors.secondary }]}
            >
              Camille, I reviewed the properties of the new silk collection.
              Your look is ready and can be tailored for your event.
            </Text>

            <View style={styles.replyRow}>
              <Text style={[styles.replyText, { color: theme.colors.primary }]}>
                2 PENDING SUGGESTIONS
              </Text>
              <Text style={[styles.replyText, { color: theme.colors.primary }]}>
                TAP TO REPLY
              </Text>
            </View>
          </View>

          <View style={styles.curationHeader}>
            <Text
              style={[styles.curationTitle, { color: theme.colors.secondary }]}
            >
              Wardrobe Curation
            </Text>
            <Text style={[styles.viewAll, { color: theme.colors.primary }]}>
              VIEW ALL
            </Text>
          </View>

          <View style={styles.wardrobeGrid}>
            {wardrobeItems.map((item, index) => (
              <View
                key={item.id}
                style={[
                  styles.wardrobeCard,
                  index === 0 ? styles.cardLarge : null,
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
                {index === 0 ? (
                  <Text style={styles.wardrobeTag}>ATTIRE</Text>
                ) : null}
              </View>
            ))}
          </View>

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
    fontSize: 14,
    fontWeight: "600",
    marginTop: 16,
    marginBottom: 8,
  },
  tierBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#E8D9B4",
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  tierText: {
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 1.1,
    color: "#2B2121",
  },
  statusCard: {
    backgroundColor: "#F9F5F2",
    marginHorizontal: 12,
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 10,
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
  },
  cardMeta: {
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 0.9,
  },
  routeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 10,
  },
  routeBlock: {
    flex: 1,
  },
  routeBlockRight: {
    alignItems: "flex-end",
  },
  routeLabel: {
    fontSize: 10,
    letterSpacing: 0.8,
    fontWeight: "700",
  },
  routeValue: {
    fontSize: 28,
    fontWeight: "700",
    lineHeight: 32,
  },
  routeDivider: {
    height: 1,
    backgroundColor: "#D7CFC6",
    marginVertical: 10,
  },
  routeFooterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  footerText: {
    fontSize: 8,
    fontWeight: "700",
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },
  metricsRow: {
    flexDirection: "row",
    marginHorizontal: 12,
    marginTop: 14,
    gap: 8,
  },
  metricBox: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#D6C9B8",
  },
  metricValue: {
    fontSize: 22,
    fontWeight: "700",
  },
  metricLabel: {
    marginTop: 4,
    fontSize: 8,
    fontWeight: "700",
    letterSpacing: 1.1,
    textAlign: "center",
  },
  actionRow: {
    flexDirection: "row",
    gap: 10,
    marginHorizontal: 12,
    marginTop: 16,
    marginBottom: 14,
  },
  actionButton: {
    flex: 1,
    borderRadius: 14,
    borderWidth: 1,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  actionButtonText: {
    fontSize: 11,
    letterSpacing: 1.2,
    fontWeight: "700",
  },
  trackButtonText: {
    fontSize: 11,
    letterSpacing: 1.2,
    fontWeight: "700",
    color: "#F7F1E9",
  },
  promoCard: {
    position: "relative",
    marginHorizontal: 12,
    borderRadius: 22,
    overflow: "hidden",
    height: 165,
    backgroundColor: "#d0c4b2",
  },
  promoImage: {
    width: "100%",
    height: "100%",
  },
  promoOverlay: {
    ...StyleSheet.absoluteFill,
    paddingHorizontal: 16,
    paddingTop: 18,
    justifyContent: "flex-end",
    backgroundColor: "rgba(15, 12, 10, 0.18)",
  },
  promoMeta: {
    fontSize: 9,
    fontWeight: "700",
    color: "#f5efe7",
    letterSpacing: 1.6,
    marginBottom: 8,
  },
  promoTitle: {
    fontSize: 26,
    lineHeight: 28,
    fontWeight: "700",
    color: "#fff",
    width: "72%",
  },
  promoCopy: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 11,
    lineHeight: 15,
    width: "68%",
    marginTop: 8,
  },
  promoButton: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  promoButtonText: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1.2,
    color: "#FFFFFF",
  },
  promoArrow: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "700",
  },
  messageCard: {
    marginHorizontal: 12,
    marginTop: 18,
    backgroundColor: "#F5F1EC",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E7DCC8",
    padding: 12,
  },
  messageHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  messageAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#E7D7C8",
    alignItems: "center",
    justifyContent: "center",
  },
  messageAvatarText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#26221F",
  },
  messageMeta: {
    flex: 1,
  },
  messageName: {
    fontSize: 13,
    fontWeight: "700",
  },
  messageTime: {
    fontSize: 10,
    fontWeight: "700",
    marginTop: 2,
  },
  messageText: {
    marginTop: 12,
    fontSize: 13,
    lineHeight: 19,
  },
  replyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    gap: 8,
  },
  replyText: {
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 1.1,
  },
  curationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 12,
    marginTop: 20,
    marginBottom: 12,
  },
  curationTitle: {
    fontSize: 18,
    fontWeight: "700",
  },
  viewAll: {
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.2,
  },
  wardrobeGrid: {
    marginHorizontal: 12,
    marginBottom: 10,
    flexDirection: "row",
    gap: 12,
  },
  wardrobeCard: {
    flex: 1,
    backgroundColor: "#F0E7DE",
    borderRadius: 18,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E9DCC7",
    position: "relative",
  },
  cardLarge: {
    flex: 1.1,
  },
  wardrobeImage: {
    width: "100%",
    height: 150,
  },
  wardrobeInfo: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  wardrobeState: {
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 1.1,
    textTransform: "uppercase",
  },
  wardrobeName: {
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 17,
    marginTop: 4,
  },
  wardrobePrice: {
    fontSize: 12,
    fontWeight: "700",
    marginTop: 4,
  },
  wardrobeTag: {
    position: "absolute",
    right: 10,
    top: 10,
    backgroundColor: "rgba(255,255,255,0.78)",
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontSize: 9,
    fontWeight: "700",
    color: "#221F1B",
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
    marginTop: 8,
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
