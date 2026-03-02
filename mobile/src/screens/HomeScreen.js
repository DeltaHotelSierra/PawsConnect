import React, { useState, useMemo } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  FlatList, StyleSheet, SafeAreaView, StatusBar,
} from 'react-native';
import PetCard from '../components/PetCard';
import { enrichedPets } from '../data/data';
import { colors, spacing, radius, typography } from '../theme';

const TYPES = ['all', 'dog', 'cat', 'rabbit', 'bird'];
const AGES = ['all', 'baby', 'young', 'adult', 'senior'];
const SIZES = ['all', 'small', 'medium', 'large'];

export default function HomeScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('all');
  const [age, setAge] = useState('all');
  const [size, setSize] = useState('all');

  const filtered = useMemo(() => {
    return enrichedPets.filter((p) => {
      const q = query.toLowerCase();
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.breed.toLowerCase().includes(q) ||
        p.shelter?.name.toLowerCase().includes(q);
      return (
        matchesQuery &&
        (type === 'all' || p.type === type) &&
        (age === 'all' || p.ageCategory === age) &&
        (size === 'all' || p.size === size)
      );
    });
  }, [query, type, age, size]);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />

      {/* Hero header */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>🐾 Find Your Best Friend</Text>
        <View style={styles.searchRow}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search by breed, name, or shelter…"
            placeholderTextColor={colors.textLight}
            value={query}
            onChangeText={setQuery}
          />
        </View>
      </View>

      {/* Filter chips */}
      <View style={styles.filtersContainer}>
        <FilterRow label="Type" options={TYPES} value={type} onSelect={setType} />
        <FilterRow label="Age" options={AGES} value={age} onSelect={setAge} />
        <FilterRow label="Size" options={SIZES} value={size} onSelect={setSize} />
      </View>

      {/* Results */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => String(item.pet_id)}
        renderItem={({ item }) => (
          <PetCard pet={item} onPress={(p) => navigation.navigate('PetDetail', { pet: p })} />
        )}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <Text style={styles.resultsLabel}>
            {filtered.length} pet{filtered.length !== 1 ? 's' : ''} available
          </Text>
        }
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyEmoji}>🔍</Text>
            <Text style={styles.emptyText}>No pets match your search.</Text>
          </View>
        }
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

function FilterRow({ label, options, value, onSelect }) {
  return (
    <View style={styles.filterRow}>
      <Text style={styles.filterLabel}>{label}</Text>
      <View style={styles.chips}>
        {options.map((opt) => (
          <TouchableOpacity
            key={opt}
            style={[styles.chip, value === opt && styles.chipActive]}
            onPress={() => onSelect(opt)}
          >
            <Text style={[styles.chipText, value === opt && styles.chipTextActive]}>
              {opt === 'all' ? 'All' : opt.charAt(0).toUpperCase() + opt.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bgLight },
  hero: {
    background: colors.primary,
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
  },
  heroTitle: { color: colors.white, fontSize: 22, fontWeight: '700', marginBottom: spacing.md },
  searchRow: { flexDirection: 'row', alignItems: 'center' },
  searchInput: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: radius.full,
    paddingHorizontal: spacing.md,
    paddingVertical: 10,
    fontSize: 15,
    color: colors.textDark,
  },
  filtersContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderColor: colors.border,
    gap: spacing.xs,
  },
  filterRow: { flexDirection: 'row', alignItems: 'center' },
  filterLabel: { ...typography.label, width: 40, color: colors.textLight },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.xs, flex: 1 },
  chip: {
    borderRadius: radius.full,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.bgLight,
  },
  chipActive: { backgroundColor: colors.primary, borderColor: colors.primary },
  chipText: { fontSize: 13, color: colors.textLight },
  chipTextActive: { color: colors.white, fontWeight: '600' },
  list: { padding: spacing.md, paddingBottom: spacing.xl },
  resultsLabel: { ...typography.small, marginBottom: spacing.md },
  empty: { alignItems: 'center', marginTop: spacing.xxl },
  emptyEmoji: { fontSize: 48, marginBottom: spacing.md },
  emptyText: { ...typography.body, color: colors.textLight },
});
