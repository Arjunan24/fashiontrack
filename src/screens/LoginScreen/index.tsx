import { router } from "expo-router";
import { useState } from "react";
import {
    Image,
    Pressable,
    SafeAreaView,
    ScrollView,
    TextInput,
    View,
} from "react-native";

import { Alert } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { useAuth } from "@/store/auth-store";
import { BRAND_OPTIONS, useBrandTheme } from "@/theme";
import brandConfig from "@/content/brand-config.json";

import { styles } from "./styles";

export function LoginScreen() {
  const { theme, brand, setBrand, content } = useBrandTheme();
  const { login } = useAuth();
  const [email, setEmail] = useState(content.emailPlaceholder);
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");
  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      setError(content.requiredFieldsMessage);
      return;
    }

    setError("");
    login(email.replace("e.g. ", ""), password);
    router.replace("/(app)/(tabs)/dashboard");
  };
  const brands = BRAND_OPTIONS.map((value) => ({
    label: brandConfig[value].brandName,
    value,
  }));

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
        <View
          style={[
            styles.pageShell,
            { backgroundColor: content.palette.surface },
          ]}
        >
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

          <View
            style={[
              styles.contentBox,
              { backgroundColor: content.palette.background },
            ]}
          >
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
                  placeholder={content.emailPlaceholder}
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
