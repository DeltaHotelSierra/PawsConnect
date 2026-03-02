// PawsConnect color theme — mirrors the web app CSS variables
export const colors = {
  primary: '#6366f1',
  primaryDark: '#4f46e5',
  secondary: '#8b5cf6',
  success: '#10b981',
  danger: '#ef4444',
  textDark: '#1f2937',
  textLight: '#6b7280',
  border: '#e5e7eb',
  bgLight: '#f9fafb',
  white: '#ffffff',
  shadow: 'rgba(0,0,0,0.1)',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const radius = {
  sm: 6,
  md: 10,
  lg: 16,
  full: 999,
};

export const typography = {
  h1: { fontSize: 28, fontWeight: '700', color: colors.textDark },
  h2: { fontSize: 22, fontWeight: '700', color: colors.textDark },
  h3: { fontSize: 18, fontWeight: '600', color: colors.textDark },
  body: { fontSize: 15, color: colors.textDark, lineHeight: 22 },
  small: { fontSize: 13, color: colors.textLight },
  label: { fontSize: 12, fontWeight: '600', color: colors.textLight, textTransform: 'uppercase', letterSpacing: 0.5 },
};
