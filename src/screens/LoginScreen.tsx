import { router } from "expo-router";
import { useState } from "react";
import {
    Image,
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    TextInput,
    View,
} from "react-native";

import { Alert } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import brandConfig from "@/content/brand-config.json";
import { useAuth } from "@/store/auth-store";
import { BrandKey, useBrandTheme } from "@/theme";

const BRAND_CONTENT = brandConfig as Record<string, any>;

export function LoginScreen() {
  const { theme, brand, setBrand } = useBrandTheme();
  const { login } = useAuth();
  const [email, setEmail] = useState("e.g. client.noir@atelier.com");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");
  console.log(brand);

  const content = BRAND_CONTENT[brand] ?? BRAND_CONTENT.luxury;

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      setError("Please add both email and password.");
      return;
    }

    setError("");
    login(email.replace("e.g. ", ""), password);
    router.replace("/(app)/(tabs)/dashboard");
  };
  const brands: { label: string; value: BrandKey }[] = [
    { label: "Luxury", value: "luxury" },
    { label: "Fashion", value: "fashion" },
  ];

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        {
          backgroundColor:
            content?.palette.background || theme.colors.background,
        },
      ]}
    >
      <View style={styles.brandContainer}>
        {brands.map((item) => (
          <Pressable
            key={item.value}
            onPress={() => setBrand(item.value)}
            style={[
              styles.brandButton,
              brand === item.value && styles.selectedBrand,
            ]}
          >
            <Label style={styles.brandMark}>{item.label}</Label>
          </Pressable>
        ))}
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.pageShell}>
          <View style={styles.topBar}>
            <View style={styles.dotBadge} />
            <Label style={styles.badgeText}>{content.badgeText}</Label>
            <Pressable style={styles.menuButton}>
              <Label style={styles.menuIcon}>◌</Label>
            </Pressable>
          </View>

          <View style={styles.heroWrap}>
            <Image
              source={{ uri: content.images.hero }}
              style={styles.heroImage}
              resizeMode="cover"
            />
            <View style={styles.logoBadge}>
              <Label style={styles.logoMark}>{content.logoText}</Label>
            </View>
          </View>

          <View style={styles.contentBox}>
            <Label
              style={[
                styles.sectionTitle,
                { color: content.palette.text || theme.colors.text },
              ]}
            >
              {content.headerTitle}
            </Label>
            <Label
              style={[
                styles.sectionSubtitle,
                { color: content.palette.muted || theme.colors.muted },
              ]}
            >
              {content.headerSubtitle}
            </Label>

            <Label
              style={[
                styles.mainTitle,
                {
                  color: content.palette.text || theme.colors.text,
                  fontFamily: content.fontFamily,
                },
              ]}
            >
              {content.title}
            </Label>
            <Label
              style={[
                styles.subtext,
                { color: content.palette.muted || theme.colors.muted },
              ]}
            >
              {content.description}
            </Label>

            <View style={styles.inputBlock}>
              <Label
                style={[
                  styles.label,
                  { color: content.palette.muted || theme.colors.muted },
                ]}
              >
                {content.clientId}
              </Label>
              <View
                style={[
                  styles.inputRow,
                  {
                    backgroundColor:
                      content.palette.surface || theme.colors.surface,
                    borderColor: content.palette.border || theme.colors.border,
                  },
                ]}
              >
                <Label style={styles.inputIcon}>✉</Label>
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  autoCapitalize="none"
                  placeholder="e.g. client.noir@atelier.com"
                  placeholderTextColor={
                    content.palette.muted || theme.colors.muted
                  }
                  style={[
                    styles.textInput,
                    {
                      color: content.palette.text || theme.colors.text,
                      fontFamily: content.fontFamily,
                    },
                  ]}
                />
              </View>
            </View>

            <View style={styles.inputBlock}>
              <View style={styles.inlineLabelRow}>
                <Label
                  style={[
                    styles.label,
                    { color: content.palette.muted || theme.colors.muted },
                  ]}
                >
                  {content.password}
                </Label>
                <Label
                  style={[
                    styles.linkText,
                    { color: content.palette.primary || theme.colors.primary },
                  ]}
                >
                  {content.forgotKeyText}
                </Label>
              </View>

              <View
                style={[
                  styles.inputRow,
                  {
                    backgroundColor:
                      content.palette.surface || theme.colors.surface,
                    borderColor: content.palette.border || theme.colors.border,
                  },
                ]}
              >
                <Label style={styles.inputIcon}>◌</Label>
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                  placeholder={content.passwordPlaceholder}
                  placeholderTextColor={
                    content.palette.muted || theme.colors.muted
                  }
                  style={[
                    styles.textInput,
                    {
                      color: content.palette.text || theme.colors.text,
                      fontFamily: content.fontFamily,
                    },
                  ]}
                />
                <Label style={styles.inputIcon}>◉</Label>
              </View>
            </View>

            <View style={styles.inlineOptionRow}>
              <Pressable
                onPress={() => setRemember(!remember)}
                style={styles.checkboxRow}
              >
                <View
                  style={[
                    styles.checkbox,
                    {
                      borderColor:
                        content.palette.border || theme.colors.border,
                      backgroundColor: remember
                        ? content.palette.primary || theme.colors.primary
                        : "transparent",
                    },
                  ]}
                >
                  {remember ? <Label style={styles.checkMark}>✓</Label> : null}
                </View>
                <Label
                  style={[
                    styles.optionText,
                    { color: content.palette.text || theme.colors.text },
                  ]}
                >
                  {content.rememberClientText}
                </Label>
              </Pressable>

              <View
                style={[
                  styles.passkeyPill,
                  {
                    backgroundColor:
                      content.palette.accent || theme.colors.accent,
                  },
                ]}
              >
                <Label style={styles.passkeyText}>{content.passkeyText}</Label>
              </View>
            </View>

            {error ? <Alert type="error" message={error} /> : null}

            <Button
              title={content.buttonText}
              variant="primary"
              onPress={handleLogin}
              style={{
                backgroundColor:
                  content.palette.secondary || theme.colors.secondary,
                borderColor:
                  content.palette.secondary || theme.colors.secondary,
                marginTop: 18,
                borderRadius: 18,
              }}
            />

            <View style={styles.dividerRow}>
              <View
                style={[
                  styles.dividerLine,
                  {
                    backgroundColor:
                      content.palette.border || theme.colors.border,
                  },
                ]}
              />
              <Label
                style={[
                  styles.dividerText,
                  { color: content.palette.muted || theme.colors.muted },
                ]}
              >
                {content.authenticateText}
              </Label>
              <View
                style={[
                  styles.dividerLine,
                  {
                    backgroundColor:
                      content.palette.border || theme.colors.border,
                  },
                ]}
              />
            </View>

            <View style={styles.socialRow}>
              <Pressable
                style={[
                  styles.socialButton,
                  {
                    backgroundColor:
                      content.palette.surface || theme.colors.surface,
                    borderColor: content.palette.border || theme.colors.border,
                  },
                ]}
              >
                <Label style={styles.socialText}> {content.appleId}</Label>
              </Pressable>
              <Pressable
                style={[
                  styles.socialButton,
                  {
                    backgroundColor:
                      content.palette.surface || theme.colors.surface,
                    borderColor: content.palette.border || theme.colors.border,
                  },
                ]}
              >
                <Label style={styles.socialText}>G {content.Google}</Label>
              </Pressable>
            </View>

            <Label
              style={[
                styles.registerText,
                { color: content.palette.muted || theme.colors.muted },
              ]}
            >
              {content.notRegisteredText}
            </Label>
            <Pressable
              style={[
                styles.inviteButton,
                {
                  borderColor: content.palette.border || theme.colors.border,
                  backgroundColor:
                    content.palette.primary || theme.colors.primary,
                },
              ]}
            >
              <Label style={styles.inviteButtonText}>
                {content.requestInviteText}
              </Label>
            </Pressable>

            <Label
              style={[
                styles.footerText,
                { color: content.palette.muted || theme.colors.muted },
              ]}
            >
              {content.handCraftText}
            </Label>
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
  brandContainer: {
    flexDirection: "row",
    gap: 1,
    paddingHorizontal: 20,
  },
  brandButton: {
    flex: 1,
    padding: 6,
    borderWidth: 1,
    borderColor: "#ccc",
    margin: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  brandMark: {
    fontSize: 20,
    color: "#D0B06A",
    fontWeight: "700",
    lineHeight: 20,
  },
  selectedBrand: {
    backgroundColor: "#222",
    borderColor: "#222",
  },
  scrollContent: {
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  pageShell: {
    width: "100%",
    maxWidth: 430,
    alignSelf: "center",
    borderRadius: 28,
    overflow: "hidden",
    backgroundColor: "#F3EDE5",
    borderWidth: 1,
    borderColor: "#E2D4C2",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 4,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingVertical: 14,
    backgroundColor: "rgba(255,255,255,0.15)",
  },
  dotBadge: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#1E1A17",
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1.2,
    color: "#1E1A17",
    flex: 1,
    marginLeft: 10,
  },
  menuButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "rgba(255,255,255,0.6)",
    alignItems: "center",
    justifyContent: "center",
  },
  menuIcon: {
    fontSize: 18,
    color: "#1E1A17",
  },
  heroWrap: {
    position: "relative",
    height: 190,
    backgroundColor: "#d9d0c7",
  },
  heroImage: {
    width: "100%",
    height: "100%",
  },
  logoBadge: {
    position: "absolute",
    bottom: -26,
    left: "50%",
    width: 92,
    height: 92,
    borderRadius: 46,
    marginLeft: -46,
    backgroundColor: "#0F0D0C",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: "#F3E9D9",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
  },
  logoMark: {
    fontSize: 42,
    color: "#D0B06A",
    fontWeight: "700",
    lineHeight: 42,
  },
  contentBox: {
    paddingTop: 34,
    paddingHorizontal: 22,
    paddingBottom: 22,
    backgroundColor: "#F1EBE2",
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1.6,
    textAlign: "center",
    marginTop: 8,
  },
  sectionSubtitle: {
    marginTop: 4,
    fontSize: 9,
    textAlign: "center",
    letterSpacing: 1.5,
    fontWeight: "600",
  },
  mainTitle: {
    fontSize: 34,
    lineHeight: 40,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 12,
    fontFamily: "Georgia",
  },
  subtext: {
    textAlign: "center",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 22,
  },
  inputBlock: {
    marginTop: 14,
    gap: 8,
  },
  inlineLabelRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.2,
  },
  linkText: {
    fontSize: 11,
    fontWeight: "700",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    height: 52,
    borderRadius: 14,
    borderWidth: 1,
    paddingHorizontal: 12,
    gap: 10,
  },
  inputIcon: {
    fontSize: 18,
    color: "#7A6D63",
    width: 20,
    textAlign: "center",
  },
  textInput: {
    flex: 1,
    fontSize: 15,
    paddingVertical: 0,
  },
  inlineOptionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
    marginBottom: 12,
    gap: 12,
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flex: 1,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderRadius: 4,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkMark: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "700",
  },
  optionText: {
    fontSize: 13,
  },
  passkeyPill: {
    backgroundColor: "#E5D7B8",
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  passkeyText: {
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.2,
    color: "#1F1A17",
  },
  primaryButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 56,
    borderRadius: 18,
    marginTop: 18,
    gap: 10,
  },
  primaryButtonText: {
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 1.3,
    color: "#F5F0EA",
  },
  primaryButtonArrow: {
    fontSize: 22,
    color: "#F5F0EA",
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 22,
    marginBottom: 16,
    gap: 10,
  },
  dividerLine: {
    flex: 1,
    height: 1,
  },
  dividerText: {
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.2,
  },
  socialRow: {
    flexDirection: "row",
    gap: 12,
  },
  socialButton: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 14,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  socialText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#201C1A",
  },
  registerText: {
    textAlign: "center",
    fontSize: 13,
    marginTop: 20,
    marginBottom: 12,
  },
  inviteButton: {
    borderWidth: 1,
    height: 46,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  inviteButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 13,
    letterSpacing: 1.1,
  },
  footerText: {
    textAlign: "center",
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 1.3,
    lineHeight: 18,
    marginTop: 18,
  },
});
