document.onreadystatechange = () => {
    let body = document.querySelector('body');
    body.style.backgroundColor = '#38040E';
    let shapesNumber = 30
    //detect if user is on mobile with user agent
    if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)) {
        shapesNumber = 10
    }
    if (window.innerWidth < 768) {
        shapesNumber = 10
    }
    let shapes = generateRandomeShapes(shapesNumber);
    body.appendChild(shapes);


    
    anime({
        targets: 'body',
        easing: 'linear',
        keyframes: [
            { backgroundColor: "#250902" },
            { backgroundColor: "#38040E" }
        ],
        duration: 10000,
        loop: true

    });
    anime({
        targets: '.svg-arrow path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1000,
        delay: function (el, i) { return i * 250 },
        loop: false
    })
    anime({
        targets: '.svg-text path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 5000,
        delay: function (el, i) { return i * 250 },
        direction: 'alternate',
        loop: true
    });

    let num = Math.floor(Math.random() * 99) + 1;
    let ope = Math.round(Math.random()) ? 1 : -1
    shapes.childNodes.forEach((child) => {
        anime({
            targets: "." + child.classList[0],
            easing: 'linear',
            rotate: [
                {
                    value: anime.random(0,200),
                    duration: 200 + Math.floor(Math.random() * 1000),
                    easing: 'easeInOutSine'
                }
            ],
            keyframes: [
                {
                    translateX: ope * anime.random(0,200),
                    translateY: ope * anime.random(0,200),
                    easing: 'easeInOutElastic(1, .6)'


                },
                {
                    translateX: ope * anime.random(0,200),
                    translateY: ope * anime.random(0,200),
                    easing: 'spring(1, 80, 10, 0)'
                },
                {
                    translateX: ope * anime.random(0,200),
                    translateY: ope * anime.random(0,200),
                    easing: 'spring(1, 80, 10, 0)'
                },
                {
                    translateX: ope * anime.random(0,200),
                    translateY: ope * anime.random(0,200),
                    easing: 'easeInOutElastic(1, .6)'
                },
            ],
            direction: 'alternate',
            duration: 1500 + Math.floor(Math.random() * 1000),
            loop: true,
            
        })
    });

}

function generateRandomeShapes(shapesNumber) {
    let shapesContainer = document.createElement('div');
    shapesContainer.classList.add('full-width-container');
    shapesContainer.classList.add('background-container')

    for (let i = 0; i < shapesNumber; i++) {
        //random number between 1 and 3
        let shapeType = Math.floor(Math.random() * 2) + 1;

        if (shapeType === 1) {
            let circle = document.createElement('div');
            circle.classList.add('circle-' + i);
            circle.classList.add('absolute-container');
            circle.style.backgroundColor = getRandomColor();
            circle.style.top = Math.floor(Math.random() * 100) + 'vh';
            circle.style.left = Math.floor(Math.random() * 100) + 'vw';
            circle.style.width = Math.floor(Math.random() * 100) + 'px';
            circle.style.height = circle.style.width;
            circle.style.borderRadius = '50%';
            shapesContainer.appendChild(circle);
        } else if (shapeType === 2) {
            let square = document.createElement('div');
            square.classList.add('square-' + i);
            square.classList.add('absolute-container');
            square.style.backgroundColor = getRandomColor();
            square.style.top = Math.floor(Math.random() * 100) + 'vh';
            square.style.left = Math.floor(Math.random() * 100) + 'vw';
            square.style.width = Math.floor(Math.random() * 100) + 'px';
            square.style.height = square.style.width;
            shapesContainer.appendChild(square);
        }
    }
    return shapesContainer


}
function getRandomColor() {
    //random number between 1 and 3
    let shapeType = Math.floor(Math.random() * 3) + 1;
    if (shapeType === 1) {
        return "#3772FF";
    }
    if (shapeType === 2) {
        return "#DF2935";
    }
    if (shapeType === 3) {
        return "#080708";
    }
}