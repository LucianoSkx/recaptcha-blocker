# reCAPTCHA Blocker / Bloqueador de reCAPTCHA

[![Greasy Fork](https://img.shields.io/badge/Greasy%20Fork-reCAPTCHA%20Blocker-670000)](https://greasyfork.org/users/Luciano.Oliveirals)

Remove/blocks the Google reCAPTCHA widget on all websites. The checkbox, iframes, and scripts from Google reCAPTCHA are prevented from loading.

Remove/bloqueia o widget do Google reCAPTCHA em todos os sites. O checkbox, iframes e scripts do Google reCAPTCHA são impedidos de carregar.

## Install / Instalação

1. Install [Violentmonkey](https://violentmonkey.github.io/) or [Tampermonkey](https://www.tampermonkey.net/)
2. [Click here to install](https://greasyfork.org/users/Luciano.Oliveirals) (Greasy Fork)

Or copy the contents of `recaptcha-blocker.user.js` into a new script in your userscript manager.

## How it works / Como funciona

- Runs at `document-start` to catch reCAPTCHA elements early
- Removes reCAPTCHA `<script>`, `<iframe>`, and `<div>` elements (`.g-recaptcha`, `.grecaptcha-badge`, etc.)
- Uses `MutationObserver` to eliminate dynamically added reCAPTCHA elements
- Works on all domains (`*://*/*`)

## License / Licença

MIT
