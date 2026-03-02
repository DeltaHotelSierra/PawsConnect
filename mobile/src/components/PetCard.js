import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, radius, spacing, typography } from '../theme';

const SIZE_LABELS = { small: 'Small', medium: 'Medium', large: 'Large' };
const AGE_LABELS = { baby: 'Baby', young: 'Young', adult: 'Adult', senior: 'Senior' };

export default function PetCard({ pet, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(pet)} activeOpacity={0.85}>
      {/* Emoji avatar */}
      <View style={[styles.avatar, { backgroundColor: typeColor(pet.type) + '22' }]}>
        <Text style={styles.emoji}>{pet.emoji}</Text>
      </View>

      <View style={styles.info}>
        <View style={styles.nameRow}>
          <Text style={styles.name}>{pet.name}</Text>
          <View style={[styles.typeBadge, { backgroundColor: typeColor(pet.type) }]}>
            <Text style={styles.typeBadgeText}>{pet.type}</Text>
          </View>
        </View>
        <Text style={styles.breed}>{pet.breed}</Text>

        <View style={styles.tags}>
          <Tag label={AGE_LABELS[pet.ageCategory]} />
          <Tag label={SIZE_LABELS[pet.size]} />
          <Tag label={`${pet.weight} kg`} />
        </View>

        <Text style={styles.shelter} numberOfLines={1}>
          📍 {pet.shelter?.name ?? 'Unknown Shelter'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

function Tag({ label }) {
  return (
    <View style={styles.tag}>
      <Text style={styles.tagText}>{label}</Text>
    </View>
  );
}

function typeColor(type) {
  return (
    { dog: '#6366f1', cat: '#8b5cf6', rabbit: '#f59e0b', bird: '#10b981' }[type] ??
    colors.textLight
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
    flexDirection: 'row',
    alignItems: 'flex-start',
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 3,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  emoji: { fontSize: 38 },
  info: { flex: 1 },
  nameRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 },
  name: { ...typography.h3, flex: 1 },
  typeBadge: {
    borderRadius: radius.full,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: spacing.xs,
  },
  typeBadgeText: { color: colors.white, fontSize: 11, fontWeight: '600', textTransform: 'capitalize' },
  breed: { ...typography.small, marginBottom: spacing.xs },
  tags: { flexDirection: 'row', flexWrap: 'wrap', gap: 4, marginBottom: spacing.xs },
  tag: {
    backgroundColor: colors.bgLight,
    borderRadius: radius.full,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: colors.border,
  },
  tagText: { fontSize: 12, color: colors.textLight },
  shelter: { ...typography.small, color: colors.textLight },
});
