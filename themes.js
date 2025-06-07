const themes = {
    light: {
        primary: '#006495',
        surface: '#fafcff',
        surfaceContainer: '#edf0f3',
        onSurface: '#191c1e'
    },
    dark: {
        primary: '#89cbff',
        surface: '#191c1e',
        surfaceContainer: '#2d3133',
        onSurface: '#e1e2e4'
    },
    sepia: {
        primary: '#8b4513',
        surface: '#f4ecd8',
        surfaceContainer: '#e8d5b7',
        onSurface: '#463020'
    },
    nosferatu: {
        primary: '#800000',
        surface: '#1a1a1a',
        surfaceContainer: '#2a2a2a',
        onSurface: '#c0c0c0'
    }
};

function applyTheme(themeName) {
    const theme = themes[themeName];
    if (!theme) return;

    document.documentElement.style.setProperty('--md-sys-color-primary', theme.primary);
    document.documentElement.style.setProperty('--md-sys-color-surface', theme.surface);
    document.documentElement.style.setProperty('--md-sys-color-surface-container', theme.surfaceContainer);
    document.documentElement.style.setProperty('--md-sys-color-on-surface', theme.onSurface);

    // Update active state of theme buttons
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-theme') === themeName);
    });

    // Save theme preference
    localStorage.setItem('theme', themeName);
}

// Initialize theme from localStorage or default to light
document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    applyTheme(currentTheme);

    // Add click handlers to theme buttons
    document.querySelectorAll('.theme-btn').forEach(button => {
        button.addEventListener('click', () => {
            const theme = button.getAttribute('data-theme');
            applyTheme(theme);
        });
    });
});