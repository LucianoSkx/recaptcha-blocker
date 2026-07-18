// ==UserScript==
// @name         Bloqueador de reCAPTCHA
// @name:en      reCAPTCHA Blocker
// @name:pt-BR   Bloqueador de reCAPTCHA
// @namespace    https://greasyfork.org/en/users/1301195-luciano-inf
// @version      1.0.0
// @description  Remove/bloqueia o widget do reCAPTCHA em todos os sites. O checkbox, iframes e scripts do Google reCAPTCHA são impedidos de carregar.
// @description:en  Removes/blocks the reCAPTCHA widget on all websites. The checkbox, iframes and scripts from Google reCAPTCHA are prevented from loading.
// @description:pt-BR  Remove/bloqueia o widget do reCAPTCHA em todos os sites. O checkbox, iframes e scripts do Google reCAPTCHA são impedidos de carregar.
// @author       Luciano.Oliveirals
// @license      MIT
// @run-at       document-start
// @grant        none
// @match        *://*/*
// @icon         https://icons.iconarchive.com/icons/github/octicons/256/shield-x-16-icon.png
// @supportURL   https://greasyfork.org/scripts/587457-bloqueador-de-recaptcha
// @homepageURL  https://github.com/LucianoSkx/recaptcha-blocker
// ==/UserScript==

(function() {
    'use strict';

    const RECAPTCHA_DOMAINS = [
        'www.google.com/recaptcha',
        'www.gstatic.com/recaptcha',
        'google.com/recaptcha',
        'recaptcha.google.com',
        'www.recaptcha.net/recaptcha',
        'recaptcha.net/recaptcha',
    ];

    function removeReCaptcha() {
        document.querySelectorAll('iframe[src*="recaptcha"], iframe[src*="google.com/recaptcha"], .g-recaptcha, .grecaptcha-badge, div[class*="recaptcha"], iframe[title="recaptcha"], iframe[title="reCAPTCHA"]').forEach(el => {
            el.remove();
        });
    }

    function blockScripts() {
        document.querySelectorAll('script[src*="recaptcha"], script[src*="google.com/recaptcha"]').forEach(el => {
            el.remove();
        });
    }

    removeReCaptcha();
    blockScripts();

    const observer = new MutationObserver(() => {
        removeReCaptcha();
        blockScripts();
        document.querySelectorAll('script').forEach(script => {
            if (script.src && RECAPTCHA_DOMAINS.some(d => script.src.includes(d))) {
                script.remove();
            }
        });
    });

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
    });

    new MutationObserver(() => {
        document.querySelectorAll('iframe').forEach(iframe => {
            if (RECAPTCHA_DOMAINS.some(d => (iframe.src || '').includes(d))) {
                iframe.remove();
            }
        });
    }).observe(document, { childList: true, subtree: true });
})();
