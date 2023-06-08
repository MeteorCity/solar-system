const animationContainers = document.querySelectorAll(".animation-container");

planetAnimationTimes = {
    mercury: 10,
    venus: 25,
    earth: 40,
    mars: 75,
    jupiter: 480,
    saturn: 1160,
    uranus: 3360,
    neptune: 6600
};

function changeSpeed(speedMultiplier) {
    animationContainers.forEach((value) => {
        const planetName = value.children[0].classList[0];
        const newAnimationDuration = planetAnimationTimes[planetName] / speedMultiplier;
        value.style.animationDuration = `${newAnimationDuration}s`;
    });
}