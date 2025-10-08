export const defaultTheme = {
  // ---- Neutral (dark-first) scale: spaced for legibility & layering
  neutral: {
    "950": "#0B0B0C",
    "900": "#0F0F11", // app background
    "850": "#141519",
    "800": "#17181C", // surface
    "750": "#1E2025", // card
    "700": "#262A32",
    "650": "#2C3039", // borders
    "600": "#333845",
    "500": "#444B57", // button base
    "400": "#5B6370",
    "300": "#7A828E",
    "200": "#A4AAB3", // muted text
    "100": "#CDD2D9",
    "50":  "#EEF1F5"  // light text on dark
  },

  // ---- Accent (Orange) scale centered on your original hue
  accent: {
    "50":  "#FFF2E8",
    "100": "#FFDCC5",
    "200": "#FFC29A",
    "300": "#FFA36B",
    "400": "#FF8541",
    "500": "#FF6A2A", // primary accent
    "600": "#E2541E",
    "700": "#B84418",
    "800": "#8F3614",
    "900": "#742C11"
  },

  // ---- Semantic tokens (use these in components)
  bg: "#0F0F11",           // neutral.900
  surface: "#17181C",      // neutral.800
  card: "#1E2025",         // neutral.750
  border: "#2C3039",       // neutral.650
  text: "#EEF1F5",         // neutral.50
  textMuted: "#A4AAB3",    // neutral.200
  link: "#FF8541",         // accent.400
  primary: "#FF6A2A",      // accent.500
  primaryHover: "#E2541E", // accent.600
  onPrimary: "#0B0B0C",    // readable text on accent buttons
  focusRing: "#7A828E",    // neutral.300

  // ---- Feedback (optional but handy)
  success: "#2ECC71",
  warning: "#F4B740",
  danger:  "#FF5A5A",

  // ---- Backwards-compatible aliases (keeps your existing keys working)
  white: "#FFFFFF",
  textOld: "#EEF1F5",
  primaryOld: "#1E2025",
  accentOld: "#FF6A2A",
  baseBtn: "#444B57",
  baseCard: "#1E2025",
} as const;
