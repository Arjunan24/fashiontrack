import {
  Image,
  Pressable,
  Text,
  View,
} from "react-native";

import { BrandScreen } from "@/components/layout/BrandScreen";
import { useBrandTheme } from "@/theme";

import { styles } from "./styles";

export function WardrobeScreen() {
  const { brandAssets, theme, screenContent } = useBrandTheme();
  const wardrobe = screenContent.wardrobe;

  return (
    <BrandScreen title={wardrobe.title}>
            <View style={styles.headerRow}>
              <View
                style={[
                  styles.pill,
                  { backgroundColor: theme.colors.accent },
                ]}
              >
                <Text
                  style={[
                    styles.pillText,
                    { color: theme.colors.secondary },
                  ]}
                >
                  {wardrobe.addGarment}
                </Text>
              </View>
              <View
                style={[
                  styles.pillMuted,
                  { backgroundColor: theme.colors.surfaceAlt },
                ]}
              >
                <Text
                  style={[
                    styles.pillText,
                    { color: theme.colors.secondary },
                  ]}
                >
                  {wardrobe.collectionCount.replace(
                    "{count}",
                    String(wardrobe.items.length),
                  )}
                </Text>
              </View>
            </View>

          <View
            style={[
              styles.heroCard,
              {
                backgroundColor: theme.colors.surfaceAlt,
                borderColor: theme.colors.border,
              },
            ]}
          >
            <Text style={[styles.heroTitle, { color: theme.colors.secondary }]}>
              {wardrobe.archiveTitle}
            </Text>
            <Text style={[styles.heroSubtitle, { color: theme.colors.muted }]}>
              {wardrobe.archiveDescription}
            </Text>

            <View style={styles.cardRow}>
              <View
                style={[
                  styles.uploadBox,
                  { backgroundColor: theme.colors.accent },
                ]}
              >
                <Text
                  style={[
                    styles.uploadIcon,
                    { color: theme.colors.secondary },
                  ]}
                >
                  ⊕
                </Text>
              </View>
              <View style={styles.cardInfo}>
                <Text style={[styles.cardLabel, { color: theme.colors.muted }]}>
                  {wardrobe.uploadLabel}
                </Text>
                <Text
                  style={[styles.cardSubText, { color: theme.colors.muted }]}
                >
                  {wardrobe.uploadDescription}
                </Text>
              </View>
            </View>
          </View>

          <View
            style={[
              styles.metaSection,
              {
                backgroundColor: theme.colors.surface,
                borderColor: theme.colors.border,
              },
            ]}
          >
            <Text style={[styles.sectionLabel, { color: theme.colors.muted }]}>
              {wardrobe.sectionLabel}
            </Text>
            {wardrobe.garments.map((garment) => (
              <View key={garment.name} style={styles.metaRow}>
                <Text style={[styles.metaKey, { color: theme.colors.muted }]}>
                  {garment.name}
                </Text>
                <Text
                  style={[styles.metaValue, { color: theme.colors.secondary }]}
                >
                  {garment.status}
                </Text>
              </View>
            ))}
          </View>

          <View style={styles.footerButtonWrap}>
            <Pressable
              style={[
                styles.primaryButton,
                { backgroundColor: theme.colors.secondary },
              ]}
            >
              <Text style={styles.primaryButtonText}>
                {wardrobe.saveButton}
              </Text>
            </Pressable>
          </View>

          <View style={styles.catalogHeader}>
            <Text
              style={[styles.catalogTitle, { color: theme.colors.secondary }]}
            >
              {wardrobe.curationTitle}
            </Text>
            <Text style={[styles.viewAll, { color: theme.colors.primary }]}>
              {wardrobe.viewAll}
            </Text>
          </View>

          <View style={styles.catalogList}>
            {wardrobe.items.map((item, index) => (
              <View
                key={item.id}
                style={[
                  styles.itemCard,
                  {
                    backgroundColor: theme.colors.surfaceAlt,
                    borderColor: theme.colors.border,
                  },
                ]}
              >
                <Image
                  source={{
                    uri:
                      brandAssets.wardrobeImages[index] ?? item.image,
                  }}
                  style={styles.itemImage}
                />

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
                      ◌ {wardrobe.colorName}
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
                        {wardrobe.closeAction}
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
                        {wardrobe.styleAction}
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            ))}
          </View>

    </BrandScreen>
  );
}
