# reCAPTCHA Blocker / Bloqueador de reCAPTCHA

[![Greasy Fork](https://img.shields.io/badge/Greasy%20Fork-reCAPTCHA%20Blocker-670000)](https://greasyfork.org/pt-BR/scripts/587457-bloqueador-de-recaptcha)

---

## English

Remove/blocks the Google reCAPTCHA widget on all websites. The checkbox, iframes, and scripts from Google reCAPTCHA are prevented from loading.

### Install

1. Install [Violentmonkey](https://violentmonkey.github.io/) or [Tampermonkey](https://www.tampermonkey.net/)
2. [Click here to install](https://greasyfork.org/pt-BR/scripts/587457-bloqueador-de-recaptcha) (Greasy Fork)

Or copy the contents of `recaptcha-blocker.user.js` into a new script in your userscript manager.

### How it works

- **Runs at `document-start`** — to catch reCAPTCHA elements early
- **Removes reCAPTCHA elements** — `<script>`, `<iframe>`, and `<div>` elements (`.g-recaptcha`, `.grecaptcha-badge`, etc.)
- **Uses `MutationObserver`** — to eliminate dynamically added reCAPTCHA elements
- **Works on all domains** — (`*://*/*`)

### Notes

- This script only blocks the **widget/checkbox**. Some sites may also use reCAPTCHA v3 (invisible), which runs in the background.
- If a form requires reCAPTCHA to submit, it may fail after blocking.

### License

MIT

---

## Português

Remove/bloqueia o widget do Google reCAPTCHA em todos os sites. O checkbox, iframes e scripts do Google reCAPTCHA são impedidos de carregar.

### Instalação

1. Instale [Violentmonkey](https://violentmonkey.github.io/) ou [Tampermonkey](https://www.tampermonkey.net/)
2. [Clique aqui para instalar](https://greasyfork.org/pt-BR/scripts/587457-bloqueador-de-recaptcha) (Greasy Fork)

Ou copie o conteúdo de `recaptcha-blocker.user.js` em um novo script no seu gerenciador de scripts.

### Como funciona

- **Executa no `document-start`** — para capturar elementos do reCAPTCHA no início
- **Remove elementos do reCAPTCHA** — elementos `<script>`, `<iframe>` e `<div>` (`.g-recaptcha`, `.grecaptcha-badge`, etc.)
- **Usa `MutationObserver`** — para eliminar elementos do reCAPTCHA adicionados dinamicamente
- **Funciona em todos os domínios** — (`*://*/*`)

### Observações

- Este script bloqueia apenas o **widget/checkbox**. Alguns sites podem também usar reCAPTCHA v3 (invisível), que executa em segundo plano.
- Se um formulário exigir reCAPTCHA para enviar, pode falhar após o bloqueio.

### Licença

MIT
