import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, ScrollView,
  StyleSheet, SafeAreaView, Alert, KeyboardAvoidingView, Platform,
} from 'react-native';
import { colors, spacing, radius, typography } from '../theme';

export default function AdoptionFormScreen({ route, navigation }) {
  const { pet } = route.params;

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    housingType: '',
    hasYard: 'no',
    otherPets: '',
    experience: '',
    reason: '',
  });

  const set = (key) => (val) => setForm((f) => ({ ...f, [key]: val }));

  function handleSubmit() {
    if (!form.name || !form.email || !form.phone || !form.housingType) {
      Alert.alert('Missing Information', 'Please fill in all required fields (*).');
      return;
    }
    Alert.alert(
      'Application Submitted! 🎉',
      `Your application to adopt ${pet.name} has been submitted. ${pet.shelter?.name} will contact you at ${form.email} within 2–3 business days.`,
      [{ text: 'Back to Pet', onPress: () => navigation.pop(2) }],
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerEmoji}>{pet.emoji}</Text>
            <Text style={styles.headerTitle}>Adopt {pet.name}</Text>
            <Text style={styles.headerSub}>Complete this form to begin the adoption process</Text>
          </View>

          {/* Section: Your Information */}
          <FormSection title="Your Information">
            <Field label="Full Name *">
              <TextInput style={styles.input} placeholder="Jane Doe" value={form.name} onChangeText={set('name')} />
            </Field>
            <Field label="Email Address *">
              <TextInput style={styles.input} placeholder="jane@example.com" keyboardType="email-address" autoCapitalize="none" value={form.email} onChangeText={set('email')} />
            </Field>
            <Field label="Phone Number *">
              <TextInput style={styles.input} placeholder="(555) 123-4567" keyboardType="phone-pad" value={form.phone} onChangeText={set('phone')} />
            </Field>
          </FormSection>

          {/* Section: Application Details */}
          <FormSection title="Application Details">
            <Field label="Housing Type *">
              <View style={styles.optionGroup}>
                {['house', 'apartment', 'condo', 'other'].map((opt) => (
                  <TouchableOpacity
                    key={opt}
                    style={[styles.optionChip, form.housingType === opt && styles.optionChipActive]}
                    onPress={() => set('housingType')(opt)}
                  >
                    <Text style={[styles.optionChipText, form.housingType === opt && styles.optionChipTextActive]}>
                      {opt.charAt(0).toUpperCase() + opt.slice(1)}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </Field>

            <Field label="Do you have a yard?">
              <View style={styles.optionGroup}>
                {['yes', 'no'].map((opt) => (
                  <TouchableOpacity
                    key={opt}
                    style={[styles.optionChip, form.hasYard === opt && styles.optionChipActive]}
                    onPress={() => set('hasYard')(opt)}
                  >
                    <Text style={[styles.optionChipText, form.hasYard === opt && styles.optionChipTextActive]}>
                      {opt === 'yes' ? 'Yes' : 'No'}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </Field>

            <Field label="Current pets (if any)">
              <TextInput style={[styles.input, styles.textarea]} placeholder="Describe any pets you currently have…" multiline numberOfLines={3} value={form.otherPets} onChangeText={set('otherPets')} />
            </Field>

            <Field label="Pet ownership experience *">
              <TextInput style={[styles.input, styles.textarea]} placeholder="Describe your experience with pets…" multiline numberOfLines={3} value={form.experience} onChangeText={set('experience')} />
            </Field>

            <Field label="Why do you want to adopt {pet.name}?">
              <TextInput style={[styles.input, styles.textarea]} placeholder={`Tell us why ${pet.name} is the right fit for you…`} multiline numberOfLines={4} value={form.reason} onChangeText={set('reason')} />
            </Field>
          </FormSection>

          {/* Submit */}
          <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
            <Text style={styles.submitBtnText}>Submit Application</Text>
          </TouchableOpacity>

          <Text style={styles.disclaimer}>
            By submitting, you agree to be contacted by {pet.shelter?.name ?? 'the shelter'} regarding this adoption.
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

function FormSection({ title, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

function Field({ label, children }) {
  return (
    <View style={styles.field}>
      <Text style={styles.fieldLabel}>{label}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bgLight },
  scroll: { padding: spacing.lg, paddingBottom: spacing.xxl },
  header: { alignItems: 'center', marginBottom: spacing.xl },
  headerEmoji: { fontSize: 48 },
  headerTitle: { ...typography.h2, marginTop: spacing.sm },
  headerSub: { ...typography.small, textAlign: 'center', marginTop: 4 },
  section: {
    backgroundColor: colors.white, borderRadius: radius.lg, padding: spacing.lg,
    marginBottom: spacing.lg,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.07, shadowRadius: 3, elevation: 2,
  },
  sectionTitle: { ...typography.h3, marginBottom: spacing.lg, paddingBottom: spacing.sm, borderBottomWidth: 1, borderColor: colors.border },
  field: { marginBottom: spacing.md },
  fieldLabel: { ...typography.label, marginBottom: spacing.xs },
  input: {
    borderWidth: 1, borderColor: colors.border, borderRadius: radius.md,
    paddingHorizontal: spacing.md, paddingVertical: 10, fontSize: 15,
    backgroundColor: colors.bgLight, color: colors.textDark,
  },
  textarea: { minHeight: 80, textAlignVertical: 'top', paddingTop: 10 },
  optionGroup: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  optionChip: {
    borderRadius: radius.full, paddingHorizontal: spacing.md, paddingVertical: 6,
    borderWidth: 1, borderColor: colors.border, backgroundColor: colors.bgLight,
  },
  optionChipActive: { backgroundColor: colors.primary, borderColor: colors.primary },
  optionChipText: { fontSize: 14, color: colors.textLight },
  optionChipTextActive: { color: colors.white, fontWeight: '600' },
  submitBtn: {
    backgroundColor: colors.primary, borderRadius: radius.full,
    paddingVertical: spacing.md + 2, alignItems: 'center',
    marginBottom: spacing.md,
    shadowColor: colors.primary, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.35, shadowRadius: 8, elevation: 5,
  },
  submitBtnText: { color: colors.white, fontSize: 17, fontWeight: '700' },
  disclaimer: { ...typography.small, textAlign: 'center', color: colors.textLight },
});
