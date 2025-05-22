window.addEventListener('resize', () => {
    const layout = document.querySelector('.layout')
    
    if (window.innerWidth >= 768) {
        layout.classList.add('desctop')
    }
})