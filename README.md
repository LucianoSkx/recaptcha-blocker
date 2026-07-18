# reCAPTCHA Blocker / Bloqueador de reCAPTCHA

[![Greasy Fork](https://img.shields.io/badge/Greasy%20Fork-reCAPTCHA%20Blocker-670000)](https://greasyfork.org/pt-BR/scripts/587457-bloqueador-de-recaptcha)

Remove/blocks the Google reCAPTCHA widget on all websites. The checkbox, iframes, and scripts from Google reCAPTCHA are prevented from loading.

Remove/bloqueia o widget do Google reCAPTCHA em todos os sites. O checkbox, iframes e scripts do Google reCAPTCHA são impedidos de carregar.

## Install / Instalação

1. Install [Violentmonkey](https://violentmonkey.github.io/) or [Tampermonkey](https://www.tampermonkey.net/)
2. [Click here to install](https://greasyfork.org/pt-BR/scripts/587457-bloqueador-de-recaptcha) (Greasy Fork)

Or copy the contents of `recaptcha-blocker.user.js` into a new script in your userscript manager.

## How it works / Como funciona

- **Runs at `document-start`** / Executa no `document-start` — to catch reCAPTCHA elements early / para capturar elementos do reCAPTCHA no início
- **Removes reCAPTCHA elements** / Remove elementos do reCAPTCHA — `<script>`, `<iframe>`, and `<div>` elements (`.g-recaptcha`, `.grecaptcha-badge`, etc.) / elementos `<script>`, `<iframe>` e `<div>`
- **Uses `MutationObserver`** / Usa `MutationObserver` — to eliminate dynamically added reCAPTCHA elements / para eliminar elementos do reCAPTCHA adicionados dinamicamente
- **Works on all domains** / Funciona em todos os domínios — (`*://*/*`)

## Notes / Observações

- This script only blocks the **widget/checkbox**. Some sites may also use reCAPTCHA v3 (invisible), which runs in the background. / Este script bloqueia apenas o **widget/checkbox**. Alguns sites podem também usar reCAPTCHA v3 (invisível), que executa em segundo plano.
- If a form requires reCAPTCHA to submit, it may fail after blocking. / Se um formulário exigir reCAPTCHA para enviar, pode falhar após o bloqueio.

## License / Licença

MIT
