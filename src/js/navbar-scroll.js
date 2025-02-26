document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        const maxScroll = 200;
        const minOpacity = 0.1;
        const maxOpacity = 1;
        
        let opacity = minOpacity + (scrollPosition / maxScroll) * (maxOpacity - minOpacity);
        
        if (opacity > maxOpacity) opacity = maxOpacity;
        
        header.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
        
        if (scrollPosition > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
