import type { Config } from "tailwindcss";

export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./App.tsx",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                "background-secondary": "var(--background-secondary)",
                foreground: "var(--foreground)",
                "foreground-secondary": "var(--foreground-secondary)",
                "muted-foreground": "var(--muted-foreground)",
                card: "var(--card)",
                "card-foreground": "var(--card-foreground)",
                "card-border": "var(--card-border)",
                primary: "var(--primary)",
                "primary-foreground": "var(--primary-foreground)",
                secondary: "var(--secondary)",
                "secondary-foreground": "var(--secondary-foreground)",
                accent: "var(--accent)",
                "accent-foreground": "var(--accent-foreground)",
                "accent-teal": "var(--accent-teal)",
                "accent-orange": "var(--accent-orange)",
                destructive: "var(--destructive)",
                "destructive-foreground": "var(--destructive-foreground)",
                border: "var(--border)",
                input: "var(--input)",
                ring: "var(--ring)",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                poppins: ["Poppins", "sans-serif"],
                mono: ["Space Mono", "monospace"],
            },
            boxShadow: {
                sm: "var(--shadow-sm)",
                md: "var(--shadow-md)",
                lg: "var(--shadow-lg)",
                xl: "var(--shadow-xl)",
                glow: "var(--shadow-glow)",
            },
            backgroundImage: {
                "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
                "primary-gradient": "var(--primary-gradient)",
                "secondary-gradient": "var(--secondary-gradient)",
            },
            animation: {
                float: "float 6s ease-in-out infinite",
                glow: "glow 2s ease-in-out infinite",
                "pulse-glow": "pulse-glow 2s ease-in-out infinite",
                "blob-morph": "blob-morph 7s ease-in-out infinite",
                shimmer: "shimmer 2s infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                glow: {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: "0.7" },
                },
                "pulse-glow": {
                    "0%, 100%": { boxShadow: "0 0 20px rgba(37, 99, 235, 0.3)" },
                    "50%": { boxShadow: "0 0 30px rgba(37, 99, 235, 0.5)" },
                },
                "blob-morph": {
                    "0%": { borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" },
                    "25%": { borderRadius: "58% 42% 75% 25% / 76% 46% 54% 24%" },
                    "50%": { borderRadius: "50% 50% 33% 67% / 55% 27% 73% 45%" },
                    "75%": { borderRadius: "33% 67% 58% 42% / 63% 68% 32% 37%" },
                    "100%": { borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" },
                },
                shimmer: {
                    "0%": { backgroundPosition: "-200% 0" },
                    "100%": { backgroundPosition: "200% 0" },
                },
            },
        },
    },
    plugins: [
        function({ addUtilities }: any) {
            const newUtilities = {
                '.glass': {
                    background: 'var(--glass-bg)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid var(--glass-border)',
                    boxShadow: 'var(--glass-shadow)',
                },
                '.glass-card': {
                    background: 'var(--card)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid var(--card-border)',
                    boxShadow: 'var(--shadow-lg)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                },
                '.gradient-primary': {
                    background: 'var(--primary-gradient)',
                },
                '.gradient-secondary': {
                    background: 'var(--secondary-gradient)',
                },
                '.gradient-text-primary': {
                    background: 'var(--primary-gradient)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                },
                '.gradient-text-secondary': {
                    background: 'var(--secondary-gradient)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                },
                '.glow-primary': {
                    boxShadow: '0 0 20px rgba(37, 99, 235, 0.3)',
                },
                '.glow-secondary': {
                    boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)',
                },
                '.glow-teal': {
                    boxShadow: '0 0 20px rgba(20, 184, 166, 0.3)',
                },
                '.glow-orange': {
                    boxShadow: '0 0 20px rgba(245, 158, 11, 0.3)',
                },
                '.interactive-card': {
                    background: 'var(--card)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid var(--card-border)',
                    boxShadow: 'var(--shadow-lg)',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                },
                '.interactive-button': {
                    transition: 'all 300ms ease-out',
                },
                '.blob': {
                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                    animation: 'blob-morph 7s ease-in-out infinite',
                },
                '.shimmer': {
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                    backgroundSize: '200% 100%',
                    animation: 'shimmer 2s infinite',
                },
            };
            addUtilities(newUtilities);
        },
    ],
    safelist: [
        'glass',
        'glass-card',
        'gradient-primary',
        'gradient-secondary',
        'gradient-text-primary',
        'gradient-text-secondary',
        'glow-primary',
        'glow-secondary',
        'glow-teal',
        'glow-orange',
        'interactive-card',
        'interactive-button',
        'animate-float',
        'animate-glow',
        'animate-pulse-glow',
        'blob',
        'shimmer',
    ],
} satisfies Config;


