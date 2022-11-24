document.onreadystatechange = () => {
    anime({
        targets: '.text-about-me path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 5000,
        delay: function (el, i) { return i * 25 },
        loop: false
    });
    anime({
        targets: '.text-description',
        delay: 1000,
        keyframes: [
            {
                opacity: 0,
                translateY: 10
            },
            {
                opacity: 1,
                translateY: 0
            },
        ],
        easing: 'easeInOutSine',
        duration: 1000,
    })
    var boxAnime = anime({
        targets: '.box',
        delay: 1000,
        keyframes: [
            {
                scale:1.2,
            },

        ],
        direction: 'alternate',
        duration:500,
        loop: true,
        easing: 'linear',
    })
    //mouse over listener
    document.querySelector('.box div').addEventListener('mouseenter', (event) => {
        boxAnime.restart();
        boxAnime.pause();
        anime({
            targets: '.box',
            rotate: [
                {
                    value: -2,
                    easing: 'easeInOutSine'
                }
            ],
            translateY: 20,
            scale: 0.9,

        })
    });
    document.querySelector('.box div').addEventListener('mouseleave', (event) => {
        anime({
            targets: '.box',
            rotate: [
                {
                    value: 0,
                    easing: 'easeInOutSine'
                }
            ],
            translateY: 0,
            complete:()=>{
                boxAnime.restart();
            },
            scale: 1,
        })
    });

};

