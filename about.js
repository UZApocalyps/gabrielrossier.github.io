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
    let box = document.querySelector('.box');
    let transformX = box.style.rotateX;
    let transformY = box.style.rotateY;


    var boxAnime = anime({
        targets: '.box',
        keyframes: [
            {
                rotateX:-45,
                rotateY:-24

            },

        ],
        direction: 'alternate',
        loop: true,
        duration: 500,
        easing: 'linear',
    })
    //mouse over listener
    document.querySelector('.box div').addEventListener('mouseenter', (event) => {
        boxAnime.restart();
        boxAnime.pause();
        anime({
            targets: '.box',
            rotateX:-45,
            rotateY:-24,
            translateY: 20,

        })
        let part2 = document.querySelector('.box__face--top--right');
        let part1 = document.querySelector('.box__face--top--left');
        part1.classList.add('ouvre-l');
        part2.classList.add('ouvre-r');
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
            complete: () => {
                boxAnime.restart();
            },
        })
        let part2 = document.querySelector('.box__face--top--right');
        let part1 = document.querySelector('.box__face--top--left');
        part1.classList.remove('ouvre-l');

        part2.classList.remove('ouvre-r');
    });

};

