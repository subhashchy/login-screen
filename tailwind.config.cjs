module.exports = {
 darkMode: 'class',
 content: [
 './index.html',
 './src/**/*.{js,jsx,ts,tsx}',
 ],
 theme: {
 extend: {
 fontFamily: {
 sans: ['Inter', 'ui-sans-serif', 'system-ui'],
 },
 colors: {
 primary: {
 DEFAULT: '#3B82F6', // blue-500
 dark: '#1D4ED8', // blue-700
 light: '#60A5FA', // blue-400
 },
 accent: {
 DEFAULT: '#F59E42', // orange-400
 },
 background: {
 DEFAULT: '#F3F4F6', // gray-100
 dark: '#1E293B', // slate-800
 },
 },
 backgroundImage: {
 'login-bg': "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')",
 },
 },
 },
 plugins: [require('tailwindcss-animate')],
};