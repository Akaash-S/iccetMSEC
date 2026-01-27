import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "6rem",
            },
        },
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "#3D5975", // Navy Blue
                    light: "#5A7B9C",   // Lighter Navy
                    dark: "#2A3E52",    // Darker Navy
                    50: "#F0F4F8",
                    100: "#D9E2EC",
                    200: "#BCCCDC",
                    300: "#9FB3C8",
                    400: "#829AB1",
                    500: "#3D5975",     // Base Primary
                    600: "#314963",
                    700: "#26394F",
                    800: "#1B2A3B",
                    900: "#101924",
                },
                accent: {
                    DEFAULT: "#E93462", // Red/Pink
                    hover: "#D12852",
                    light: "#F58FA6",
                },
                secondary: {
                    DEFAULT: "#F2C94C", // Gold/Yellow (Highlight)
                    light: "#F5D575",
                },
                neutral: {
                    100: "#F3F4F6",
                    200: "#E5E7EB",
                    800: "#1F2937",
                    900: "#111827",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                dark: "#0B1120", // Deep Navy/Black for backgrounds
            },
            fontFamily: {
                sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
                heading: ["var(--font-outfit)", "ui-sans-serif", "system-ui"],
            },
            animation: {
                "fade-in": "fadeIn 0.5s ease-out forwards",
                "slide-up": "slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                "slide-down": "slideDown 0.3s ease-out forwards",
                marquee: "marquee 30s linear infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                slideDown: {
                    "0%": { opacity: "0", transform: "translateY(-10px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                marquee: {
                    "0%": { transform: "translateX(100%)" },
                    "100%": { transform: "translateX(-100%)" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
