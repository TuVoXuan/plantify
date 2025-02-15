import typographyPlugin from "./src/styles/Typography";
import layoutPlugin from "./src/styles/Layout";

/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,ts,jsx,tsx,mdx}"];
export const theme = {
  extend: {
    fontFamily: {
      onset: ["var(--font-onset)"],
      "dm-serif-display": ["var(--font-dm-serif-display)"],
    },
    colors: {
      "white-cs": "#ffffff",
      "black-cs": "#0a0a0a",
      "neutral-50": "#F8FAFC",
      "neutral-100": "#F1F5F9",
      "neutral-200": "#E2E8F0",
      "neutral-300": "#CBD5E1",
      "neutral-400": "#94A3B8",
      "neutral-500": "#64748B",
      "neutral-600": "#475569",
      "neutral-700": "#334155",
      "neutral-800": "#1E293B",
      "neutral-900": "#0F172A",
      "primary-50": "#E6F1EF",
      "primary-100": "#C2DDD8",
      "primary-200": "#91C2B9",
      "primary-300": "#5EA699",
      "primary-400": "#2E8B7A",
      "primary-500": "#00715D",
      "primary-600": "#00604F",
      "primary-700": "#005042",
      "primary-800": "#004035",
      "primary-900": "#00332A",
      "success-50": "#f0fdf4",
      "success-100": "#dcfce7",
      "success-200": "#bbf7d0",
      "success-300": "#86efac",
      "success-400": "#4ade80",
      "success-500": "#22c55e",
      "success-600": "#16a34a",
      "success-700": "#15803d",
      "success-800": "#166534",
      "success-900": "#14532d",
      "info-50": "#eff6ff",
      "info-100": "#dbeafe",
      "info-200": "#bfdbfe",
      "info-300": "#93c5fd",
      "info-400": "#60a5fa",
      "info-500": "#3b82f6",
      "info-600": "#2563eb",
      "info-700": "#1d4ed8",
      "info-800": "#1e40af",
      "info-900": "#1e3a8a",
      "warning-50": "#fefce8",
      "warning-100": "#fef9c3",
      "warning-200": "#fef08a",
      "warning-300": "#fde047",
      "warning-400": "#facc15",
      "warning-500": "#eab308",
      "warning-600": "#ca8a04",
      "warning-700": "#a16207",
      "warning-800": "#854d0e",
      "warning-900": "#713f12",
      "error-50": "#fef2f2",
      "error-100": "#fee2e2",
      "error-200": "#fecaca",
      "error-300": "#fca5a5",
      "error-400": "#f87171",
      "error-500": "#ef4444",
      "error-600": "#dc2626",
      "error-700": "#b91c1c",
      "error-800": "#991b1b",
      "error-900": "#7f1d1d",
    },
    screens: {
      xs: "320px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1440px",
      "3xl": "1920px",
    },
    boxShadow: {
      cs: "0 4px 20px 0 rgba(0, 0, 0, 0.08)",
    },
  },
  container: {
    center: true,
    screens: {
      md: "754px",
      lg: "984px",
      xl: "1200px",
      "2xl": "1280px",
    },
  },
};
export const plugins = [typographyPlugin, layoutPlugin];
