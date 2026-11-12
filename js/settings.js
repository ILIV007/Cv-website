/* ============================================================
   settings.js — v3.0 display settings (accent, density, motion)
   Persisted in localStorage; defaults = current behaviour
   (Cosmic Blue accent, comfortable density, motion on unless the
   OS asks for reduced motion).
   ============================================================ */

const STORAGE_KEY = 'iliv007-settings';
const ACCENTS = ['blue', 'violet', 'cyan', 'emerald'];
const DENSITIES = ['comfortable', 'compact'];

function loadSettings() {
    let saved = {};
    try {
        saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    } catch (e) { /* corrupted storage — fall back to defaults */ }
    return {
        accent: ACCENTS.includes(saved.accent) ? saved.accent : 'blue',
        density: DENSITIES.includes(saved.density) ? saved.density : 'comfortable',
        // motion: null = follow the OS (prefers-reduced-motion)
        motion: saved.motion === 'off' || saved.motion === 'on' ? saved.motion : null,
    };
}

function resolveMotion(motion) {
    if (motion === 'on' || motion === 'off') return motion;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'off' : 'on';
}

function applySettings(s) {
    const doc = document.documentElement;
    doc.dataset.accent = s.accent;
    doc.dataset.density = s.density;
    doc.dataset.motion = resolveMotion(s.motion);
}

function saveSettings(s) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
    } catch (e) { /* storage may be unavailable (private mode) — ignore */ }
}

/** Sync every control's pressed state with the current settings. */
function syncControls(s) {
    const motion = resolveMotion(s.motion);
    document.querySelectorAll('[data-accent-value]').forEach((b) => {
        b.setAttribute('aria-pressed', String(b.dataset.accentValue === s.accent));
    });
    document.querySelectorAll('[data-density-value]').forEach((b) => {
        b.setAttribute('aria-pressed', String(b.dataset.densityValue === s.density));
    });
    document.querySelectorAll('[data-motion-value]').forEach((b) => {
        b.setAttribute('aria-pressed', String(b.dataset.motionValue === motion));
    });
}

/** Wire the settings popover: toggle, Esc/outside-click close, focus return. */
function initPopover() {
    const btn = document.getElementById('settingsBtn');
    const panel = document.getElementById('settingsPanel');
    if (!btn || !panel) return;

    const close = () => {
        panel.hidden = true;
        btn.setAttribute('aria-expanded', 'false');
        btn.focus();
    };
    const toggle = () => {
        const open = panel.hidden;
        panel.hidden = !open;
        btn.setAttribute('aria-expanded', String(open));
    };

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggle();
    });
    panel.addEventListener('click', (e) => e.stopPropagation());
    document.addEventListener('click', () => {
        if (!panel.hidden) {
            panel.hidden = true;
            btn.setAttribute('aria-expanded', 'false');
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !panel.hidden) close();
    });
}

export function initSettings() {
    const settings = loadSettings();
    applySettings(settings);

    // Re-resolve if the OS motion preference changes and no explicit choice exists
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', () => {
        if (settings.motion === null) {
            applySettings(settings);
            syncControls(settings);
        }
    });

    initPopover();
    syncControls(settings);

    document.querySelectorAll('[data-accent-value]').forEach((b) => {
        b.addEventListener('click', () => {
            settings.accent = b.dataset.accentValue;
            applySettings(settings);
            syncControls(settings);
            saveSettings(settings);
        });
    });
    document.querySelectorAll('[data-density-value]').forEach((b) => {
        b.addEventListener('click', () => {
            settings.density = b.dataset.densityValue;
            applySettings(settings);
            syncControls(settings);
            saveSettings(settings);
        });
    });
    document.querySelectorAll('[data-motion-value]').forEach((b) => {
        b.addEventListener('click', () => {
            settings.motion = b.dataset.motionValue;
            applySettings(settings);
            syncControls(settings);
            saveSettings(settings);
        });
    });
}
