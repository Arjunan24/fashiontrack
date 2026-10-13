import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useBrandTheme } from "@/theme";

const navItems = [
  { label: "HOME", active: false },
  { label: "WARDROBE", active: false },
  { label: "TRACKING", active: false },
  { label: "CHAT", active: true },
];

const chatThread = [
  {
    id: "1",
    type: "incoming",
    text: "Good morning Camille, we’ve arranged the fitting pieces for your evening appointment.",
    time: "08:16",
  },
  {
    id: "2",
    type: "outgoing",
    text: "Please confirm the final selection before 11 AM.",
    time: "08:18",
  },
  {
    id: "3",
    type: "incoming",
    text: "Absolutely. The silk gown and blazer are ready, with the final alterations scheduled for today.",
    time: "08:19",
  },
  {
    id: "4",
    type: "outgoing",
    text: "Perfect. I will review the styling notes and confirm by this afternoon.",
    time: "08:22",
  },
];

export function ChatScreen() {
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

          <View style={styles.chatCard}>
            <View style={styles.chatHeader}>
              <View style={styles.chatAvatar}>
                <Text style={styles.chatAvatarText}>E</Text>
              </View>

              <View style={styles.chatHeaderMeta}>
                <Text
                  style={[styles.chatName, { color: theme.colors.secondary }]}
                >
                  Éléonore (Senior Stylist)
                </Text>
                <Text
                  style={[styles.chatStatus, { color: theme.colors.muted }]}
                >
                  Online now
                </Text>
              </View>

              <View style={styles.dotGroup}>
                <View
                  style={[
                    styles.dot,
                    { backgroundColor: theme.colors.secondary },
                  ]}
                />
              </View>
            </View>

            <View style={styles.messageList}>
              {chatThread.map((message) => (
                <View
                  key={message.id}
                  style={[
                    styles.messageBubble,
                    message.type === "outgoing"
                      ? styles.outgoingBubble
                      : styles.incomingBubble,
                  ]}
                >
                  <Text
                    style={[
                      styles.messageText,
                      {
                        color:
                          message.type === "outgoing"
                            ? "#F8F3EE"
                            : theme.colors.secondary,
                      },
                    ]}
                  >
                    {message.text}
                  </Text>
                  <Text
                    style={[
                      styles.messageTime,
                      {
                        color:
                          message.type === "outgoing"
                            ? "rgba(255,255,255,0.75)"
                            : theme.colors.muted,
                      },
                    ]}
                  >
                    {message.time}
                  </Text>
                </View>
              ))}
            </View>

            <View style={styles.quickActions}>
              <Text
                style={[styles.quickActionText, { color: theme.colors.muted }]}
              >
                2 pending suggestions
              </Text>
              <Text
                style={[
                  styles.quickActionText,
                  { color: theme.colors.primary },
                ]}
              >
                Tap to reply
              </Text>
            </View>

            <View style={styles.replyBox}>
              <Text
                style={[styles.replyPlaceholder, { color: theme.colors.muted }]}
              >
                Type a message...
              </Text>
              <Text style={styles.sendIcon}>➤</Text>
            </View>
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
    fontSize: 16,
    fontWeight: "600",
    marginTop: 14,
    marginBottom: 4,
  },
  chatCard: {
    marginHorizontal: 12,
    marginTop: 12,
    backgroundColor: "#F8F4F1",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E7DCC8",
    padding: 14,
  },
  chatHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 14,
  },
  chatAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#E6D6BD",
    alignItems: "center",
    justifyContent: "center",
  },
  chatAvatarText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#231F20",
  },
  chatHeaderMeta: {
    flex: 1,
  },
  chatName: {
    fontSize: 14,
    fontWeight: "700",
  },
  chatStatus: {
    fontSize: 10,
    fontWeight: "700",
    marginTop: 2,
  },
  dotGroup: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#EFE5D9",
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  messageList: {
    gap: 10,
  },
  messageBubble: {
    maxWidth: "82%",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  incomingBubble: {
    alignSelf: "flex-start",
    backgroundColor: "#F2E4D2",
    borderTopLeftRadius: 4,
  },
  outgoingBubble: {
    alignSelf: "flex-end",
    backgroundColor: "#2A2330",
    borderTopRightRadius: 4,
  },
  messageText: {
    fontSize: 12,
    lineHeight: 18,
  },
  messageTime: {
    fontSize: 9,
    fontWeight: "700",
    marginTop: 6,
    alignSelf: "flex-end",
  },
  quickActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    gap: 8,
  },
  quickActionText: {
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 1,
  },
  replyBox: {
    marginTop: 12,
    backgroundColor: "#F3EDE7",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E7D7C8",
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  replyPlaceholder: {
    flex: 1,
    fontSize: 12,
  },
  sendIcon: {
    fontSize: 18,
    color: "#2A2330",
    marginLeft: 8,
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
