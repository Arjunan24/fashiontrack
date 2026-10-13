import { Text, View } from "react-native";

import { BrandScreen } from "@/components/layout/BrandScreen";
import { useBrandTheme } from "@/theme";

import { styles } from "./styles";

export function ChatScreen() {
  const { theme, screenContent } = useBrandTheme();
  const chat = screenContent.chat;

  return (
    <BrandScreen title={chat.title}>
          <View
            style={[
              styles.chatCard,
              {
                backgroundColor: theme.colors.surface,
                borderColor: theme.colors.border,
              },
            ]}
          >
            <View style={styles.chatHeader}>
              <View style={styles.chatAvatar}>
                <Text style={styles.chatAvatarText}>
                  {chat.stylist.charAt(0)}
                </Text>
              </View>

              <View style={styles.chatHeaderMeta}>
                <Text
                  style={[styles.chatName, { color: theme.colors.secondary }]}
                >
                  {chat.stylist}
                </Text>
                <Text
                  style={[styles.chatStatus, { color: theme.colors.muted }]}
                >
                  {chat.status}
                </Text>
              </View>

              <View style={styles.dotGroup}>
                <View
                  style={[
                    styles.dot,
                    { backgroundColor: theme.colors.primary },
                  ]}
                />
              </View>
            </View>

            <View style={styles.messageList}>
              {chat.messages.map((message) => (
                <View
                  key={message.id}
                  style={[
                    styles.messageBubble,
                    message.type === "outgoing"
                      ? [styles.outgoingBubble, { backgroundColor: theme.colors.secondary }]
                      : [styles.incomingBubble, { backgroundColor: theme.colors.accent }],
                  ]}
                >
                  <Text
                    style={[
                      styles.messageText,
                      {
                        color:
                          message.type === "outgoing"
                            ? theme.colors.surface
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
                            ? theme.colors.surface
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
                {chat.pendingSuggestions}
              </Text>
              <Text
                style={[
                  styles.quickActionText,
                  { color: theme.colors.primary },
                ]}
              >
                {chat.replyAction}
              </Text>
            </View>

            <View
              style={[
                styles.replyBox,
                {
                  backgroundColor: theme.colors.surfaceAlt,
                  borderColor: theme.colors.border,
                },
              ]}
            >
              <Text
                style={[styles.replyPlaceholder, { color: theme.colors.muted }]}
              >
                {chat.messagePlaceholder}
              </Text>
              <Text style={styles.sendIcon}>➤</Text>
            </View>
          </View>

    </BrandScreen>
  );
}
