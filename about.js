document.onreadystatechange = () => {
    anime({
        targets: '.svg-text path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 5000,
        delay: function (el, i) { return i * 25 },
        
        direction: 'alternate',
        loop: true
    });
    
};