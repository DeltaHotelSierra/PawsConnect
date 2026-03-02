import React from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, SafeAreaView,
} from 'react-native';
import { colors, spacing, radius, typography } from '../theme';

const AGE_LABELS = { baby: 'Baby (< 1yr)', young: 'Young (1–2yr)', adult: 'Adult (2–7yr)', senior: 'Senior (7yr+)' };
const SIZE_LABELS = { small: 'Small', medium: 'Medium', large: 'Large' };

export default function PetDetailScreen({ route, navigation }) {
  const { pet } = route.params;

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero block */}
        <View style={[styles.heroBlock, { backgroundColor: typeColor(pet.type) }]}>
          <Text style={styles.heroEmoji}>{pet.emoji}</Text>
          <Text style={styles.heroName}>{pet.name}</Text>
          <Text style={styles.heroBreed}>{pet.breed}</Text>
        </View>

        <View style={styles.content}>
          {/* Stats row */}
          <View style={styles.statsRow}>
            <StatBox label="Age" value={pet.ageLabel} />
            <StatBox label="Category" value={AGE_LABELS[pet.ageCategory] ?? pet.ageCategory} />
            <StatBox label="Size" value={SIZE_LABELS[pet.size]} />
            <StatBox label="Weight" value={`${pet.weight} kg`} />
          </View>

          {/* Shelter info */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Shelter Information</Text>
            <InfoRow icon="🏠" label="Name" value={pet.shelter?.name} />
            <InfoRow icon="📍" label="Address" value={pet.shelter?.address} />
            <InfoRow icon="📞" label="Phone" value={pet.shelter?.contact} />
          </View>

          {/* Pet details */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About {pet.name}</Text>
            <InfoRow icon="🐾" label="Type" value={pet.type.charAt(0).toUpperCase() + pet.type.slice(1)} />
            <InfoRow icon="🎂" label="Date of Birth" value={new Date(pet.birth_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} />
            <InfoRow icon="🆔" label="Pet ID" value={`#${String(pet.pet_id).padStart(4, '0')}`} />
          </View>

          {/* Health notes placeholder */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Health & Notes</Text>
            <Text style={styles.noteText}>
              {pet.name} is up to date on vaccinations and has been spayed/neutered. They have received a clean bill of health from the shelter vet. Please contact the shelter for full medical records.
            </Text>
          </View>

          {/* Adopt CTA */}
          <TouchableOpacity
            style={[styles.adoptBtn, { backgroundColor: typeColor(pet.type) }]}
            onPress={() => navigation.navigate('AdoptionForm', { pet })}
          >
            <Text style={styles.adoptBtnText}>Apply to Adopt {pet.name}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function StatBox({ label, value }) {
  return (
    <View style={styles.statBox}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoIcon}>{icon}</Text>
      <View style={styles.infoTexts}>
        <Text style={styles.infoLabel}>{label}</Text>
        <Text style={styles.infoValue}>{value ?? '—'}</Text>
      </View>
    </View>
  );
}

function typeColor(type) {
  return { dog: '#6366f1', cat: '#8b5cf6', rabbit: '#f59e0b', bird: '#10b981' }[type] ?? colors.primary;
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bgLight },
  heroBlock: { alignItems: 'center', paddingVertical: spacing.xxl, paddingHorizontal: spacing.lg },
  heroEmoji: { fontSize: 72, marginBottom: spacing.sm },
  heroName: { fontSize: 30, fontWeight: '800', color: colors.white },
  heroBreed: { fontSize: 16, color: 'rgba(255,255,255,0.85)', marginTop: 4 },
  content: { padding: spacing.lg },
  statsRow: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    marginBottom: spacing.lg,
    overflow: 'hidden',
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.08, shadowRadius: 4, elevation: 2,
  },
  statBox: { flex: 1, alignItems: 'center', paddingVertical: spacing.md, borderRightWidth: 1, borderColor: colors.border },
  statValue: { fontSize: 18, fontWeight: '700', color: colors.textDark },
  statLabel: { fontSize: 11, color: colors.textLight, marginTop: 2 },
  section: {
    backgroundColor: colors.white, borderRadius: radius.lg, padding: spacing.lg,
    marginBottom: spacing.lg,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.07, shadowRadius: 3, elevation: 2,
  },
  sectionTitle: { ...typography.h3, marginBottom: spacing.md, paddingBottom: spacing.sm, borderBottomWidth: 1, borderColor: colors.border },
  infoRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: spacing.sm },
  infoIcon: { fontSize: 18, marginRight: spacing.sm, marginTop: 2 },
  infoTexts: { flex: 1 },
  infoLabel: { ...typography.label, marginBottom: 2 },
  infoValue: { ...typography.body },
  noteText: { ...typography.body, lineHeight: 22, color: colors.textLight },
  adoptBtn: {
    borderRadius: radius.full, paddingVertical: spacing.md + 2, alignItems: 'center',
    marginBottom: spacing.xl,
    shadowColor: '#000', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.2, shadowRadius: 6, elevation: 4,
  },
  adoptBtnText: { color: colors.white, fontSize: 17, fontWeight: '700' },
});
