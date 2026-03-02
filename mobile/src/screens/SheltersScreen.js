import React, { useState, useMemo } from 'react';
import {
  View, Text, TextInput, FlatList, TouchableOpacity,
  StyleSheet, SafeAreaView, Linking, Alert,
} from 'react-native';
import { shelters, enrichedPets } from '../data/data';
import { colors, spacing, radius, typography } from '../theme';

export default function SheltersScreen() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(
    () =>
      shelters.filter(
        (s) =>
          !query ||
          s.name.toLowerCase().includes(query.toLowerCase()) ||
          s.address.toLowerCase().includes(query.toLowerCase()),
      ),
    [query],
  );

  function callShelter(phone) {
    const url = `tel:${phone.replace(/\D/g, '')}`;
    Linking.canOpenURL(url).then((ok) => {
      if (ok) Linking.openURL(url);
      else Alert.alert('Unable to make call', phone);
    });
  }

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.title}>Partner Shelters</Text>
        <Text style={styles.sub}>{shelters.length} shelters across the Bay Area</Text>
        <TextInput
          style={styles.search}
          placeholder="Search shelters…"
          placeholderTextColor={colors.textLight}
          value={query}
          onChangeText={setQuery}
        />
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(s) => String(s.shelter_id)}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          const petCount = enrichedPets.filter((p) => p.shelter_id === item.shelter_id).length;
          return (
            <View style={styles.card}>
              <View style={styles.cardTop}>
                <View style={styles.avatarCircle}>
                  <Text style={styles.avatarText}>{item.name.charAt(0)}</Text>
                </View>
                <View style={styles.cardInfo}>
                  <Text style={styles.shelterName} numberOfLines={1}>{item.name}</Text>
                  <Text style={styles.shelterAddress} numberOfLines={2}>📍 {item.address}</Text>
                </View>
              </View>
              <View style={styles.cardFooter}>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{petCount} pet{petCount !== 1 ? 's' : ''} available</Text>
                </View>
                <TouchableOpacity style={styles.callBtn} onPress={() => callShelter(item.contact)}>
                  <Text style={styles.callBtnText}>📞 {item.contact}</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyText}>No shelters match your search.</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bgLight },
  header: {
    backgroundColor: colors.primary, paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg, paddingBottom: spacing.xl,
  },
  title: { color: colors.white, fontSize: 24, fontWeight: '800' },
  sub: { color: 'rgba(255,255,255,0.8)', fontSize: 14, marginTop: 4, marginBottom: spacing.md },
  search: {
    backgroundColor: colors.white, borderRadius: radius.full,
    paddingHorizontal: spacing.md, paddingVertical: 10, fontSize: 15, color: colors.textDark,
  },
  list: { padding: spacing.md, paddingBottom: spacing.xl },
  card: {
    backgroundColor: colors.white, borderRadius: radius.lg, padding: spacing.md,
    marginBottom: spacing.md,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 2,
  },
  cardTop: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: spacing.sm },
  avatarCircle: {
    width: 44, height: 44, borderRadius: 22, backgroundColor: colors.primary + '22',
    alignItems: 'center', justifyContent: 'center', marginRight: spacing.sm,
  },
  avatarText: { fontSize: 20, fontWeight: '700', color: colors.primary },
  cardInfo: { flex: 1 },
  shelterName: { ...typography.h3, fontSize: 16 },
  shelterAddress: { ...typography.small, marginTop: 2, lineHeight: 18 },
  cardFooter: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: spacing.sm, borderTopWidth: 1, borderColor: colors.border },
  badge: { backgroundColor: colors.success + '22', borderRadius: radius.full, paddingHorizontal: 10, paddingVertical: 3 },
  badgeText: { color: colors.success, fontSize: 12, fontWeight: '600' },
  callBtn: { backgroundColor: colors.bgLight, borderRadius: radius.full, paddingHorizontal: 10, paddingVertical: 4, borderWidth: 1, borderColor: colors.border },
  callBtnText: { fontSize: 12, color: colors.textDark },
  empty: { padding: spacing.xl, alignItems: 'center' },
  emptyText: { ...typography.body, color: colors.textLight },
});
