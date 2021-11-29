const btn = document.querySelector(".download-btn");
const lawBtn = document.querySelector("#download-law");
const techBtn = document.querySelector("#download-tech");

console.log(btn);

const scrollToTop = () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
};

const handleHeight = () => {
    console.log("detectando scroll");
    console.log(window.scrollY);
    btn.style.top = `${window.scrollY + 20}px`;
};

const handleDownload = (downloadType) => {};

const initiateBtn = (evt) => {
    lawBtn.removeEventListener("click", initiateBtn);
    techBtn.removeEventListener("click", initiateBtn);
    evt.stopPropagation();
    console.dir(evt);
    console.log("descargando law pdf");
    clickEventHandler(evt);
};

const clickEventHandler = (evt) => {
    console.log(evt);
    evt.stopPropagation();
    console.dir(Boolean(evt.target.children[0]));
    Boolean(evt.target.children[0]) && evt.target.children[0].click();
    lawBtn.addEventListener("click", initiateBtn);
    techBtn.addEventListener("click", initiateBtn);
};

window.onload = function () {
    btn.style.top = `${window.scrollY + 20}px`;

    window.addEventListener("scroll", handleHeight);

    lawBtn.addEventListener("click", initiateBtn);
    techBtn.addEventListener("click", initiateBtn);

    lawBtn.parentNode.addEventListener("mouseenter", () => {
        let container = lawBtn.parentNode.parentNode;
        console.log(container);
        let accumulator = 90;
        let timeline = lawBtn.parentNode;

        let gettingBigger = (acc) => {
            console.log(`ejecutando getting Bigger - Acumulador ${acc}`);
            container.style.maxHeight = `${acc}%`;
            timeline.style.maxHeight = `${acc - 5}vh`;
            timeline.style.minHeight = `${acc - 62}vh`;
            setTimeout(() => {
                accumulator += 1;
                if (accumulator < 105) {
                    console.log(`Condición valida - Acumulador ${acc}`);
                    gettingBigger(accumulator);
                } else {
                    return;
                }
            }, 1);
        };
        gettingBigger(accumulator);
    });
    lawBtn.parentNode.addEventListener("mouseleave", () => {
        let container = lawBtn.parentNode.parentNode;
        console.log(container);
        container.style.maxHeight = "100%";
        let accumulator = 105;
        let timeline = lawBtn.parentNode;

        console.log(timeline);
        let gettingShorter = (acc) => {
            console.log(`ejecutando getting Shorter - Acumulador ${acc}`);
            container.style.maxHeight = `${acc}%`;
            timeline.style.maxHeight = `${acc - 50}vh`;
            timeline.style.removeProperty("min-height");
            setTimeout(() => {
                accumulator -= 1;
                if (accumulator > 100) {
                    console.log(`Condición valida - Acumulador ${acc}`);
                    gettingShorter(accumulator);
                } else {
                    return;
                }
            }, 10);
        };
        gettingShorter(accumulator);
    });

    console.log("CARGADO");
    scrollToTop();
};
