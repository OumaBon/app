module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      fontWeight: {
        heading: '700',  // Custom weight for headings
        body: '400',     // Default weight for body text
      },
      fontSize: {
        'h1': '2.25rem',  // e.g., 36px
        'h2': '1.875rem', // e.g., 30px
        'h3': '1.5rem',   // e.g., 24px
        'body': '1rem',   // e.g., 16px
      },
    },
  },
  plugins: [],
};


// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#e1003c',
        background: {
          light: '#f3f4f6',
          dark: '#1f2937',
        },
        text: {
          light: '#111827',
          dark: '#d1d5db',
        },
        primary: {
          DEFAULT: '#3b82f6',
          hover: '#1d4ed8',
        },
        accent: {
          DEFAULT: '#14b8a6',
          hover: '#fb7185',
        },
        gray: {
          light: '#e5e7eb',
          dark: '#4b5563',
        },
      },
    },
  },
  plugins: [],
};
