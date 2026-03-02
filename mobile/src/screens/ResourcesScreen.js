import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, Linking, TouchableOpacity } from 'react-native';
import { colors, spacing, radius, typography } from '../theme';

const PURPOSE_CARDS = [
  { icon: '🎯', title: 'Simplify Pet Adoption', desc: 'No more visiting multiple shelters or filling out endless paperwork. One platform to browse, apply, and adopt.' },
  { icon: '🤝', title: 'Connect Communities', desc: 'We bridge the gap between shelters, rescue organizations, and adopters across the Bay Area.' },
  { icon: '❤️', title: 'Save More Lives', desc: 'Better visibility means more adoptions, reducing shelter overcrowding and giving pets a second chance.' },
  { icon: '📚', title: 'Educate & Support', desc: 'Comprehensive resources and ongoing support to ensure successful, long-term adoptions.' },
];

const PROCESS_STEPS = [
  { step: '1', title: 'Browse Pets', desc: 'Search our database of available pets by type, age, size, or shelter.' },
  { step: '2', title: 'View Details', desc: 'Learn about each pet — breed, age, weight, and health status.' },
  { step: '3', title: 'Apply Online', desc: 'Submit an adoption application directly through the app.' },
  { step: '4', title: 'Meet & Greet', desc: 'The shelter contacts you to schedule a meet-and-greet with your potential pet.' },
  { step: '5', title: 'Welcome Home', desc: 'Complete the adoption and bring your new best friend home!' },
];

const TIPS = [
  { icon: '🏠', tip: 'Pet-proof your home before bringing your new pet home.' },
  { icon: '🩺', tip: 'Schedule a vet appointment within the first week of adoption.' },
  { icon: '🛏️', tip: 'Set up a dedicated sleeping area to help your pet feel safe.' },
  { icon: '⏳', tip: 'Be patient — it can take 3–4 weeks for a pet to fully adjust.' },
  { icon: '🎓', tip: 'Consider obedience training, even for adult dogs.' },
  { icon: '🧡', tip: 'Establish a routine for feeding, walks, and playtime.' },
];

export default function ResourcesScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Pet Adoption Resources</Text>
          <Text style={styles.headerSub}>Everything you need to know about adopting responsibly.</Text>
        </View>

        {/* Our Goals */}
        <Section title="🎯 Our Goals & Purpose">
          <View style={styles.cardGrid}>
            {PURPOSE_CARDS.map((c) => (
              <View key={c.title} style={styles.purposeCard}>
                <Text style={styles.purposeIcon}>{c.icon}</Text>
                <Text style={styles.purposeTitle}>{c.title}</Text>
                <Text style={styles.purposeDesc}>{c.desc}</Text>
              </View>
            ))}
          </View>
        </Section>

        {/* Adoption Process */}
        <Section title="📋 The Adoption Process">
          {PROCESS_STEPS.map((s, i) => (
            <View key={s.step} style={styles.stepRow}>
              <View style={styles.stepCircle}>
                <Text style={styles.stepNum}>{s.step}</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>{s.title}</Text>
                <Text style={styles.stepDesc}>{s.desc}</Text>
              </View>
              {i < PROCESS_STEPS.length - 1 && <View style={styles.stepLine} />}
            </View>
          ))}
        </Section>

        {/* Tips */}
        <Section title="💡 First-Time Adopter Tips">
          {TIPS.map((t) => (
            <View key={t.tip} style={styles.tipRow}>
              <Text style={styles.tipIcon}>{t.icon}</Text>
              <Text style={styles.tipText}>{t.tip}</Text>
            </View>
          ))}
        </Section>

        {/* External links */}
        <Section title="🔗 Helpful Links">
          <LinkRow label="ASPCA — Pet Care Guides" url="https://www.aspca.org/pet-care" />
          <LinkRow label="Petfinder — Find Pets" url="https://www.petfinder.com" />
          <LinkRow label="Humane Society" url="https://www.humanesociety.org" />
          <LinkRow label="AVMA — Vet Locator" url="https://www.avma.org" />
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
}

function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

function LinkRow({ label, url }) {
  return (
    <TouchableOpacity style={styles.linkRow} onPress={() => Linking.openURL(url)}>
      <Text style={styles.linkText}>{label}</Text>
      <Text style={styles.linkArrow}>→</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bgLight },
  header: {
    backgroundColor: colors.secondary, paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl, paddingBottom: spacing.xxl,
  },
  headerTitle: { color: colors.white, fontSize: 24, fontWeight: '800' },
  headerSub: { color: 'rgba(255,255,255,0.85)', fontSize: 14, marginTop: 6 },
  section: {
    backgroundColor: colors.white, margin: spacing.md, marginBottom: 0,
    borderRadius: radius.lg, padding: spacing.lg,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.07, shadowRadius: 3, elevation: 2,
  },
  sectionTitle: { ...typography.h3, marginBottom: spacing.md, paddingBottom: spacing.sm, borderBottomWidth: 1, borderColor: colors.border },
  cardGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  purposeCard: { width: '47%', backgroundColor: colors.bgLight, borderRadius: radius.md, padding: spacing.md },
  purposeIcon: { fontSize: 24, marginBottom: spacing.xs },
  purposeTitle: { fontSize: 14, fontWeight: '700', color: colors.textDark, marginBottom: 4 },
  purposeDesc: { fontSize: 12, color: colors.textLight, lineHeight: 17 },
  stepRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: spacing.md, position: 'relative' },
  stepCircle: {
    width: 36, height: 36, borderRadius: 18, backgroundColor: colors.primary,
    alignItems: 'center', justifyContent: 'center', marginRight: spacing.md,
  },
  stepNum: { color: colors.white, fontWeight: '700', fontSize: 16 },
  stepContent: { flex: 1 },
  stepTitle: { fontSize: 15, fontWeight: '700', color: colors.textDark },
  stepDesc: { fontSize: 13, color: colors.textLight, marginTop: 2, lineHeight: 18 },
  stepLine: { position: 'absolute', left: 17, top: 36, width: 2, height: 16, backgroundColor: colors.border },
  tipRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: spacing.sm },
  tipIcon: { fontSize: 20, marginRight: spacing.sm, marginTop: 1 },
  tipText: { flex: 1, ...typography.body, lineHeight: 21 },
  linkRow: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingVertical: spacing.sm, borderBottomWidth: 1, borderColor: colors.border,
  },
  linkText: { fontSize: 15, color: colors.primary, fontWeight: '500' },
  linkArrow: { fontSize: 18, color: colors.primary },
});
