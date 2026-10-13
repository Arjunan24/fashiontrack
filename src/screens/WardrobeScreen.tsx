import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useBrandTheme } from "@/theme";

const wardrobeCollection = [
  {
    id: "1",
    title: "Silk Cambric Trench",
    subtitle: "Monochrome Atelier Issue",
    price: "$3,450",
    status: "Closed",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "2",
    title: "Sculpted Gabrardino Trench",
    subtitle: "Monochrome Atelier Issue",
    price: "$3,100",
    status: "Closed",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "3",
    title: "Fine Gauge Cashmere Mock",
    subtitle: "Hand-knit wool blend",
    price: "$1,890",
    status: "Ready",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
  },
];

const navItems = [
  { label: "HOME", active: false },
  { label: "WARDROBE", active: true },
  { label: "TRACKING", active: false },
  { label: "CHAT", active: false },
];

export function WardrobeScreen() {
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
              Bonjour, Camille
            </Text>

            <View style={styles.headerRow}>
              <View style={styles.pill}>
                <Text style={styles.pillText}>Add Garment</Text>
              </View>
              <View style={styles.pillMuted}>
                <Text style={styles.pillText}>Collection (2)</Text>
              </View>
            </View>
          </View>

          <View style={styles.heroCard}>
            <Text style={[styles.heroTitle, { color: theme.colors.secondary }]}>
              Archive Entry
            </Text>
            <Text style={[styles.heroSubtitle, { color: theme.colors.muted }]}>
              Design a new couture parcel for personalization and styling.
            </Text>

            <View style={styles.cardRow}>
              <View style={styles.uploadBox}>
                <Text style={styles.uploadIcon}>⊕</Text>
              </View>
              <View style={styles.cardInfo}>
                <Text style={[styles.cardLabel, { color: theme.colors.muted }]}>
                  Upload Garment or Runway Shot
                </Text>
                <Text
                  style={[styles.cardSubText, { color: theme.colors.muted }]}
                >
                  High-resolution details by style, occasion or fabric.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.metaSection}>
            <Text style={[styles.sectionLabel, { color: theme.colors.muted }]}>
              GARMENT &amp; COUTURE
            </Text>
            <View style={styles.metaRow}>
              <Text style={[styles.metaKey, { color: theme.colors.muted }]}>
                Draped Silk Evening Dress
              </Text>
              <Text
                style={[styles.metaValue, { color: theme.colors.secondary }]}
              >
                Ready
              </Text>
            </View>
            <View style={styles.metaRow}>
              <Text style={[styles.metaKey, { color: theme.colors.muted }]}>
                Tailored Jacket
              </Text>
              <Text
                style={[styles.metaValue, { color: theme.colors.secondary }]}
              >
                In review
              </Text>
            </View>
          </View>

          <View style={styles.footerButtonWrap}>
            <Pressable
              style={[
                styles.primaryButton,
                { backgroundColor: theme.colors.secondary },
              ]}
            >
              <Text style={styles.primaryButtonText}>
                SAVE TO WARDROBE &amp; SYNC
              </Text>
            </Pressable>
          </View>

          <View style={styles.catalogHeader}>
            <Text
              style={[styles.catalogTitle, { color: theme.colors.secondary }]}
            >
              Atelier Curation
            </Text>
            <Text style={[styles.viewAll, { color: theme.colors.primary }]}>
              VIEW ALL
            </Text>
          </View>

          <View style={styles.catalogList}>
            {wardrobeCollection.map((item, index) => (
              <View key={item.id} style={styles.itemCard}>
                <Image source={{ uri: item.image }} style={styles.itemImage} />

                <View style={styles.itemContent}>
                  <View style={styles.itemTopRow}>
                    <Text
                      style={[
                        styles.itemTitle,
                        { color: theme.colors.secondary },
                      ]}
                    >
                      {item.title}
                    </Text>
                    <Text
                      style={[
                        styles.itemPrice,
                        { color: theme.colors.secondary },
                      ]}
                    >
                      {item.price}
                    </Text>
                  </View>

                  <Text
                    style={[styles.itemSubtitle, { color: theme.colors.muted }]}
                  >
                    {item.subtitle}
                  </Text>

                  <View style={styles.itemMetaRow}>
                    <Text
                      style={[styles.itemMeta, { color: theme.colors.muted }]}
                    >
                      ◌ {item.status}
                    </Text>
                    <Text
                      style={[styles.itemMeta, { color: theme.colors.muted }]}
                    >
                      ◌ Rose
                    </Text>
                  </View>

                  <View style={styles.itemActions}>
                    <Pressable
                      style={[
                        styles.itemAction,
                        {
                          backgroundColor: theme.colors.surface,
                          borderColor: theme.colors.border,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.itemActionText,
                          { color: theme.colors.secondary },
                        ]}
                      >
                        Close
                      </Text>
                    </Pressable>
                    <Pressable
                      style={[
                        styles.itemAction,
                        {
                          backgroundColor: theme.colors.accent,
                          borderColor: theme.colors.border,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.itemActionText,
                          { color: theme.colors.secondary },
                        ]}
                      >
                        Style Look
                      </Text>
                    </Pressable>
                  </View>
                </View>
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
  headerRow: {
    flexDirection: "row",
    gap: 8,
  },
  pill: {
    backgroundColor: "#E7D9B5",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },
  pillMuted: {
    backgroundColor: "#F0E6D8",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },
  pillText: {
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1,
    color: "#201C1A",
  },
  heroCard: {
    marginHorizontal: 12,
    marginTop: 12,
    backgroundColor: "#F2EAE2",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E7D8C6",
    padding: 14,
    gap: 12,
  },
  heroTitle: {
    fontSize: 15,
    fontWeight: "700",
  },
  heroSubtitle: {
    fontSize: 11,
    lineHeight: 16,
  },
  cardRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  uploadBox: {
    width: 62,
    height: 62,
    borderRadius: 16,
    backgroundColor: "#E7D9B9",
    alignItems: "center",
    justifyContent: "center",
  },
  uploadIcon: {
    fontSize: 28,
    color: "#261F1C",
  },
  cardInfo: {
    flex: 1,
    gap: 3,
  },
  cardLabel: {
    fontSize: 11,
    fontWeight: "700",
  },
  cardSubText: {
    fontSize: 10,
    lineHeight: 14,
  },
  metaSection: {
    marginHorizontal: 12,
    marginTop: 12,
    backgroundColor: "#F7F0E9",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E8DCC8",
    padding: 12,
    gap: 8,
  },
  sectionLabel: {
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 1.2,
  },
  metaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  metaKey: {
    fontSize: 11,
    flex: 1,
  },
  metaValue: {
    fontSize: 10,
    fontWeight: "700",
  },
  footerButtonWrap: {
    marginHorizontal: 12,
    marginTop: 14,
  },
  primaryButton: {
    borderRadius: 14,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButtonText: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1.2,
    color: "#F8F0E8",
  },
  catalogHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 12,
    marginTop: 20,
    marginBottom: 12,
  },
  catalogTitle: {
    fontSize: 18,
    fontWeight: "700",
  },
  viewAll: {
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.2,
  },
  catalogList: {
    marginHorizontal: 12,
    gap: 12,
    marginBottom: 10,
  },
  itemCard: {
    backgroundColor: "#F8F3ED",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E7DAC6",
    overflow: "hidden",
  },
  itemImage: {
    width: "100%",
    height: 140,
  },
  itemContent: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    gap: 8,
  },
  itemTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  itemTitle: {
    flex: 1,
    fontSize: 15,
    fontWeight: "700",
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: "700",
  },
  itemSubtitle: {
    fontSize: 10,
    fontWeight: "600",
  },
  itemMetaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  itemMeta: {
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 0.7,
  },
  itemActions: {
    flexDirection: "row",
    gap: 8,
    marginTop: 4,
  },
  itemAction: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  itemActionText: {
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1,
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
