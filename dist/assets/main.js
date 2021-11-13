//menu toggling on small screens

document.getElementById('nav-toggle').addEventListener('click', () => {
    document.getElementById('menu-list').classList.toggle('hidden');
});

document.getElementById('menu-items').addEventListener('click', (e) => {
    e.stopPropagation();
    if (!document.getElementById('menu-list').classList.contains('hidden')) {
        document.getElementById('menu-list').classList.add('hidden');
    }
}, true);