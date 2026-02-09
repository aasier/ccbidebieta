let currentLang = localStorage.getItem('lang') || 'es';

function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    
    document.querySelectorAll('#lang-es, #lang-eu').forEach(btn => btn.classList.remove('active'));
    document.getElementById('lang-' + lang).classList.add('active');
    
    document.querySelectorAll('[data-es][data-eu]').forEach(el => {
        el.textContent = el.getAttribute('data-' + lang);
    });
    
    document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => setLang(currentLang));
