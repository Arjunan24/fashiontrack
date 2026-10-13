import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
});
