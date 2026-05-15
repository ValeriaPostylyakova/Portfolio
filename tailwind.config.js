/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: 'var(--bg-primary)',
                secondary: 'var(--bg-secondary)',
                tertiary: 'var(--bg-tertiary)',
                footer: 'var(--bg-footer)',

                textPrimary: 'var(--text-primary)',
                textSecondary: 'var(--text-secondary)',
                textTertiary: 'var(--text-tertiary)',
                textAccent: 'var(--text-accent)',
                textFooter: 'var(--text-footer)',

                grayPrimary: 'var(--gray-primary)',
                graySecondary: 'var(--gray-secondary)',
                grayTertiary: 'var(--gray-tertiary)',
                grayAccent: 'var(--gray-accent)',

                inputBg: 'var(--bg-input)',
                inputText: 'var(--text-input)',

                greenPrimary: 'var(--green-primary)',
                greenSecondary: 'var(--green-secondary)',
            },
        },
        screens: {
            '2xl': { max: '1535px' },
            xl: { max: '1279px' },
            lg: { max: '1023px' },
            md: { max: '767px' },
            sm: { max: '639px' },
            xs: { max: '430px' },
            xxs: { max: '350px' },
        },
    },
    plugins: [],
};
