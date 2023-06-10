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
        let newAnimationDuration = planetAnimationTimes[planetName] / speedMultiplier;
        if (speedMultiplier === 0) {
            newAnimationDuration = 0
        }
        value.style.animationDuration = `${newAnimationDuration}s`;
    });
}

// the sun is part of planets as well
const planets = document.querySelectorAll(".balls");
let isMouseOver = false;

planets.forEach((planet) => {
    planet.addEventListener("mouseover", () => displayText(planet));
    planet.addEventListener("mouseout", () => {isMouseOver = false});
});

function displayText(planetElement) {
    const planetName = planetElement.classList[0];
    const planetDescription = document.querySelector(`.${planetName}-description`);
    planetDescription.style.opacity = 1;
    isMouseOver = true;

    document.addEventListener("mousemove", hideText);

    function hideText() {
        if (!isMouseOver) {
            const planetDescription = document.querySelector(`.${planetName}-description`);
            planetDescription.style.opacity = 0;

            document.removeEventListener("mousemove", hideText);
        }
    }
}

const sun = document.querySelector(".sun");
const containers = document.querySelectorAll(".container");
const ballPlanets = document.querySelectorAll(".container .balls");
let in2D = true;

function changeTo2D() {
    if (in2D) {
        return;
    }

    sun.style.zIndex = 9999;
    containers.forEach((container) => {
        container.style.transform = "translate(-50%, -50%)";
        container.style.padding = "12px";
    });
    ballPlanets.forEach((ballPlanet) => {
        ballPlanet.style.transform = "";
    });

    changeSpeed(1);

    in2D = true;
}

function changeTo3D() {
    if (!in2D) {
        return;
    }

    sun.style.zIndex = -1;
    containers.forEach((container) => {
        container.style.transform = "translate(-50%, -50%) rotateX(77deg)";
        container.style.padding = "50px";
    });
    ballPlanets.forEach((ballPlanet) => {
        ballPlanet.style.transform = "rotateY(-77deg) rotateZ(30deg) scale(4)";
    });

    changeSpeed(0);

    in2D = false;
}

