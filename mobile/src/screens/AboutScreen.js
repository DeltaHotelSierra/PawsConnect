import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { enrichedPets, shelters } from '../data/data';
import { colors, spacing, radius, typography } from '../theme';

const VALUES = [
  { icon: '❤️', title: 'Compassion', desc: 'We treat every animal with love, dignity, and respect.' },
  { icon: '🤝', title: 'Partnership', desc: 'We work closely with shelters, vets, and communities.' },
  { icon: '🎯', title: 'Integrity', desc: 'Transparency and ethical practices in all adoption processes.' },
  { icon: '🌟', title: 'Excellence', desc: 'We continuously improve to provide the best experience for pets and adopters.' },
];

const TEAM = [
  { name: 'Sarah Martinez', role: 'Founder & CEO', emoji: '👩‍💼' },
  { name: 'James Lee', role: 'Head of Shelter Relations', emoji: '👨‍🤝‍👨' },
  { name: 'Priya Sharma', role: 'Lead Engineer', emoji: '👩‍💻' },
  { name: 'Carlos Rivera', role: 'Community Manager', emoji: '🧑‍🤝‍🧑' },
];

export default function AboutScreen() {
  const totalAdoptions = 2847;
  const totalAvailable = enrichedPets.length;
  const totalShelters = shelters.length;

  const STATS = [
    { value: totalAdoptions.toLocaleString(), label: 'Adoptions' },
    { value: `${totalShelters}+`, label: 'Shelters' },
    { value: `${totalAvailable}+`, label: 'Pets Available' },
    { value: '98%', label: 'Satisfaction' },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.paw}>🐾</Text>
          <Text style={styles.headerTitle}>About PawsConnect</Text>
          <Text style={styles.headerSub}>Connecting pets with loving homes since 2020</Text>
        </View>

        {/* Stats */}
        <View style={styles.statsRow}>
          {STATS.map((s) => (
            <View key={s.label} style={styles.statBox}>
              <Text style={styles.statValue}>{s.value}</Text>
              <Text style={styles.statLabel}>{s.label}</Text>
            </View>
          ))}
        </View>

        {/* Mission */}
        <Card title="Our Mission">
          <Text style={styles.bodyText}>
            PawsConnect was founded with a simple but powerful mission: to connect every adoptable pet with a loving forever home. We believe every animal deserves a chance at happiness, and every family deserves the unconditional love that comes from pet companionship.
          </Text>
          <Text style={[styles.bodyText, { marginTop: spacing.sm }]}>
            Through our platform, we partner with local shelters and rescue organizations to streamline adoption, making it easier than ever to find your perfect pet companion.
          </Text>
        </Card>

        {/* Our Story */}
        <Card title="Our Story">
          <Text style={styles.bodyText}>
            PawsConnect began when our founder, Sarah Martinez, struggled to navigate the fragmented pet adoption landscape. Visiting multiple shelters and filling out countless paper forms, she saw the process was unnecessarily complicated.
          </Text>
          <Text style={[styles.bodyText, { marginTop: spacing.sm }]}>
            Inspired to make a difference, Sarah assembled a team of animal lovers and technologists to create a unified platform. What started in the Bay Area has grown into a comprehensive network serving communities across California.
          </Text>
        </Card>

        {/* Values */}
        <Card title="Our Values">
          <View style={styles.valuesGrid}>
            {VALUES.map((v) => (
              <View key={v.title} style={styles.valueCard}>
                <Text style={styles.valueIcon}>{v.icon}</Text>
                <Text style={styles.valueTitle}>{v.title}</Text>
                <Text style={styles.valueDesc}>{v.desc}</Text>
              </View>
            ))}
          </View>
        </Card>

        {/* Team */}
        <Card title="Meet the Team">
          {TEAM.map((m) => (
            <View key={m.name} style={styles.teamRow}>
              <View style={styles.teamAvatar}>
                <Text style={styles.teamEmoji}>{m.emoji}</Text>
              </View>
              <View>
                <Text style={styles.teamName}>{m.name}</Text>
                <Text style={styles.teamRole}>{m.role}</Text>
              </View>
            </View>
          ))}
        </Card>

        <Text style={styles.footer}>Made with ❤️ for pets everywhere · PawsConnect © 2020–2026</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

function Card({ title, children }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bgLight },
  header: {
    backgroundColor: colors.primaryDark, alignItems: 'center',
    paddingTop: spacing.xl, paddingBottom: spacing.xxl, paddingHorizontal: spacing.lg,
  },
  paw: { fontSize: 52, marginBottom: spacing.sm },
  headerTitle: { color: colors.white, fontSize: 26, fontWeight: '800' },
  headerSub: { color: 'rgba(255,255,255,0.8)', fontSize: 14, marginTop: 6, textAlign: 'center' },
  statsRow: {
    flexDirection: 'row', backgroundColor: colors.white,
    paddingVertical: spacing.md, marginBottom: spacing.md,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.07, shadowRadius: 3, elevation: 2,
  },
  statBox: { flex: 1, alignItems: 'center', borderRightWidth: 1, borderColor: colors.border },
  statValue: { fontSize: 20, fontWeight: '800', color: colors.primary },
  statLabel: { fontSize: 11, color: colors.textLight, marginTop: 2 },
  card: {
    backgroundColor: colors.white, margin: spacing.md, marginBottom: 0,
    borderRadius: radius.lg, padding: spacing.lg,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.07, shadowRadius: 3, elevation: 2,
  },
  cardTitle: { ...typography.h3, marginBottom: spacing.md, paddingBottom: spacing.sm, borderBottomWidth: 1, borderColor: colors.border },
  bodyText: { ...typography.body, lineHeight: 22, color: colors.textLight },
  valuesGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  valueCard: { width: '47%', backgroundColor: colors.bgLight, borderRadius: radius.md, padding: spacing.md },
  valueIcon: { fontSize: 22, marginBottom: spacing.xs },
  valueTitle: { fontSize: 14, fontWeight: '700', color: colors.textDark, marginBottom: 4 },
  valueDesc: { fontSize: 12, color: colors.textLight, lineHeight: 17 },
  teamRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: spacing.sm, borderBottomWidth: 1, borderColor: colors.border },
  teamAvatar: {
    width: 42, height: 42, borderRadius: 21, backgroundColor: colors.primary + '22',
    alignItems: 'center', justifyContent: 'center', marginRight: spacing.md,
  },
  teamEmoji: { fontSize: 22 },
  teamName: { ...typography.body, fontWeight: '600' },
  teamRole: { ...typography.small },
  footer: { textAlign: 'center', color: colors.textLight, fontSize: 12, padding: spacing.xl },
});
