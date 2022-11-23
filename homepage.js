document.onreadystatechange = () => {
    let body = document.querySelector('body');
    body.style.backgroundColor = '#38040E';
    let shapes = generateRandomeShapes(30);
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
                    value: Math.floor(Math.random() * 360),
                    duration: 200 + Math.floor(Math.random() * 1000),
                    easing: 'easeInOutSine'
                }
            ],
            keyframes: [
                {
                    translateX: ope * Math.floor(Math.random() * 200) + 'px',
                    translateY: ope * Math.floor(Math.random() * 200) + 'px',



                },
                {
                    translateX: ope * Math.floor(Math.random() * 200) + 'px',
                    translateY: ope * Math.floor(Math.random() * 200) + 'px',

                },
                {
                    translateX: ope * Math.floor(Math.random() * 200) + 'px',
                    translateY: ope * Math.floor(Math.random() * 200) + 'px'

                },
                {
                    translateX: ope * Math.floor(Math.random() * 200) + 'px',
                    translateY: ope * Math.floor(Math.random() * 200) + 'px'

                },
            ],
            direction: 'alternate',
            duration: 1000 + Math.floor(Math.random() * 1000),
            loop: true,
            easing: 'spring(1, 80, 10, 0)'
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