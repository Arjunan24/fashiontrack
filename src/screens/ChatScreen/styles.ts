import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  chatCard: {
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
});
