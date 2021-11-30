import { sections } from "./sectionsData.js";

let activeSelector, lawSelector, techSelector;
const profilePictures = document.querySelectorAll(".attachment-full");
const root = document.querySelector("html");
const menuNav = document.querySelector("#menu-menu-2");
const sectionSelector = document.querySelector(`#menu-menu-2`);
const selectorArray = sectionSelector.children;
const designSectionWrap = document.querySelector(`.design-section-wrap`);
const onePageWrapper = document.querySelector(".one-page-content-wrapper");
const body = document.querySelector("body");
let techSkillsColumn;
let elementCounter = 0;
body.style.maxHeight = `${window.scrollY - window.innerHeight - 600}px`;

const backDrop = document.createElement("div");

window.addEventListener("scroll", function (ev) {
    backDrop.style.top = `${window.scrollY}px`;
    if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 60
    ) {
        console.log("toco fondo");
        backDrop.style.top = `${window.scrollY - window.innerHeight - 20}px`;

        // you're at the bottom of the page
    } else {
        backDrop.style.top = `${window.scrollY - 200}px`;
    }
});

backDrop.style.minWidth = "200vw";
backDrop.style.minHeight = "198vh";
backDrop.style.backdropFilter = "blur(7px) brightness(20%)";
backDrop.style.webkitBackdropFilter = "blur(7px)";
backDrop.style.position = "absolute";
backDrop.style.left = "-100vw";
// backDrop.style.top = `0em`;
window.addEventListener("scroll", () => {});
backDrop.style.zIndex = "3";
backDrop.style.pointerEvents = "none";
backDrop.style.display = "block";
backDrop.style.opacity = "0";
backDrop.style.transition = "opacity 500ms ease";

const descriptionWidthHandler = (node, nodeChild) => {
    function getTextWidth(text, font) {
        const canvas =
            getTextWidth.canvas ||
            (getTextWidth.canvas = document.createElement("canvas"));
        const context = canvas.getContext("2d");
        context.font = font;
        const metrics = context.measureText(text);
        return metrics.width;
    }

    function getCssStyle(element, prop) {
        return window.getComputedStyle(element, null).getPropertyValue(prop);
    }

    function getCanvasFontSize(el) {
        const fontWeight = getCssStyle(el, "font-weight") || "normal";
        const fontSize = getCssStyle(el, "font-size") || "16px";
        const fontFamily = getCssStyle(el, "font-family") || "Times New Roman";

        return `${fontWeight} ${fontSize} ${fontFamily}`;
    }

    if (screen.width > 535) {
        node.children[nodeChild].style.minWidth =
            getTextWidth(
                node.children[nodeChild].children[0].innerText,
                getCanvasFontSize(node.children[nodeChild].children[0])
            ) >=
            16 * 11.5
                ? `${getTextWidth(
                      node.children[nodeChild].children[0].innerText,
                      getCanvasFontSize(node.children[nodeChild].children[0])
                  )}px`
                : "11.5em";
    } else if (screen.width <= 535 && screen.width > 435) {
        node.children[nodeChild].style.minWidth =
            getTextWidth(
                node.children[nodeChild].children[0].innerText,
                getCanvasFontSize(node.children[nodeChild].children[0])
            ) <
            16 * 10.5
                ? `${getTextWidth(
                      node.children[nodeChild].children[0].innerText,
                      getCanvasFontSize(node.children[nodeChild].children[0])
                  )}px`
                : "10.5em";
        if (
            getTextWidth(
                node.children[nodeChild].children[0].innerText,
                getCanvasFontSize(node.children[nodeChild].children[0])
            ) <
            16 * 10.5
        ) {
            node.children[nodeChild].classList.add("small-desc");
        } else {
            node.children[nodeChild].classList.add("big-desc");
        }
    } else if (screen.width <= 435 && screen.width > 392) {
        node.children[nodeChild].style.minWidth =
            getTextWidth(
                node.children[nodeChild].children[0].innerText,
                getCanvasFontSize(node.children[nodeChild].children[0])
            ) <
            16 * 9.5
                ? `${getTextWidth(
                      node.children[nodeChild].children[0].innerText,
                      getCanvasFontSize(node.children[nodeChild].children[0])
                  )}px`
                : "9.5em";
        if (
            getTextWidth(
                node.children[nodeChild].children[0].innerText,
                getCanvasFontSize(node.children[nodeChild].children[0])
            ) <
            16 * 9.5
        ) {
            node.children[nodeChild].classList.add("small-desc");
        } else {
            node.children[nodeChild].classList.add("big-desc");
        }
    } else {
        node.children[nodeChild].style.minWidth =
            getTextWidth(
                node.children[nodeChild].children[0].innerText,
                getCanvasFontSize(node.children[nodeChild].children[0])
            ) <
            16 * 8.5
                ? `${getTextWidth(
                      node.children[nodeChild].children[0].innerText,
                      getCanvasFontSize(node.children[nodeChild].children[0])
                  )}px`
                : "8.5em";
        if (
            getTextWidth(
                node.children[nodeChild].children[0].innerText,
                getCanvasFontSize(node.children[nodeChild].children[0])
            ) <
            16 * 8.5
        ) {
            node.children[nodeChild].classList.add("small-desc");
        } else {
            node.children[nodeChild].classList.add("big-desc");
        }
    }
};

const removeBlur = () => {
    for (let child in body.children) {
        console.dir(body.children[child]);
        if (body.children[child] === backDrop) {
            body.removeChild(backDrop);
        }
    }
};

const removePageOutline = () => {
    techSkillsColumn.style.removeProperty("outline");
    techSkillsColumn.style.removeProperty("transition");
};

const listenHover = () => {
    const section = document.querySelector(".mother-section");
    console.dir(section);

    const skillHolder = document.querySelectorAll(".skill-container");
    console.log("ejecutando listenhover");
    console.log(skillHolder);
    let child;
    for (let holder of skillHolder) {
        if (section.classList.contains("skills-section")) {
            child = 2;
        } else if (section.classList.contains("facts-section")) {
            child = 1;
        }
        screen.width <= 435 && descriptionWidthHandler(holder, child);
        console.dir(child);
        holder.addEventListener("mouseover", () => {
            console.dir(holder);
            holder.children[child].style.display = "block";
            setTimeout(() => {
                holder.children[child].style.opacity = "1";
            }, 200);
            descriptionWidthHandler(holder, child);
            techSkillsColumn.style.outline = "solid #020202C9 90em";
            techSkillsColumn.style.transition = "outline 500ms ease-in-out";
            backDrop.style.opacity = "1";
            /* backdrop-filter: blur(7px);
                        -webkit-backdrop-filter: blur(7px); */
        });
        holder.addEventListener("mouseleave", () => {
            if (
                holder.children[child].classList.contains("big-desc") ||
                holder.children[child].classList.contains("small-desc")
            ) {
                if (holder.children[child].classList.contains("big-desc")) {
                    holder.children[child].classList.remove("big-desc");
                } else {
                    holder.children[child].classList.remove("small-desc");
                }
            }
            holder.children[child].style.minWidth = "revert";
            holder.children[child].style.removeProperty("opacity");
            setTimeout(() => {
                holder.children[child].style.removeProperty("display");
            }, 300);
            techSkillsColumn.style.outline = "solid transparent 0em";
            techSkillsColumn.style.transition = "outline 50ms ease-out";
            backDrop.style.opacity = "0";
        });
    }
};

root.classList.add("default");

for (let picture of profilePictures) {
    picture.setAttribute("src", "assets/images/profilepicture.webp");
    /* picture.setAttribute(
        "srcset",
        "assets/images/profilepicture.webp 390w,assets/images/profilepicture.webp 150w"
    ); */
}

const calculateNavigation = (status) => {
    let newArray, filteredArray;
    switch (status) {
        case "default":
            newArray = Object.values(selectorArray);
            filteredArray = newArray.filter((node) => {
                console.dir(node);
                node.style.display = "revert";
                return node.innerText !== "Inicio";
            });
            console.log(filteredArray);
            for (let node of filteredArray) {
                node.style.display = "none";
            }
            break;
        case "law":
            newArray = Object.values(selectorArray);
            filteredArray = newArray.filter((node) => {
                console.dir(node);
                node.style.display = "revert";
                return (
                    node.innerText !== "Inicio" &&
                    node.innerText !== "Presentación" &&
                    node.innerText !== "Habilidades" &&
                    node.innerText !== "Educación" &&
                    node.innerText !== "Experiencia" &&
                    node.innerText !== "Contacto"
                );
            });
            console.log(filteredArray);
            for (let node of filteredArray) {
                node.style.display = "none";
            }
            break;
        case "tech":
            newArray = Object.values(selectorArray);
            newArray.forEach((element) => {
                element.style.display = "revert";
            });
            break;
    }
};

calculateNavigation(root.className);

const focusImportants = () => {
    for (let picture of profilePictures) {
        picture.focus();
    }
    if (!root.classList.contains("default")) {
        setTimeout(() => {
            menuNav.focus();
        }, 1500);
    }
};

const selectorActive = () => {
    lawSelector = document.querySelector(".law-item");
    techSelector = document.querySelector(".tech-item");

    lawSelector.addEventListener("click", () => {
        activeSelector = "law";
        for (let picture of profilePictures) {
            picture.setAttribute(
                "src",
                "assets/images/foto carnet21192155.jpg"
            );
            /* picture.setAttribute(
                "srcset",
                "assets/images/foto carnet21192155.jpg 390w,assets/images/foto carnet21192155.jpg 150w"
            ); */
        }

        focusImportants();
        if (root.classList.contains("tech")) {
            root.classList.remove("tech");
        } else if (root.classList.contains("default")) {
            root.classList.remove("default");
        }
        root.classList.add("law");
        calculateNavigation(root.className);
    });
    techSelector.addEventListener("click", () => {
        activeSelector = "tech";
        for (let picture of profilePictures) {
            picture.setAttribute("src", "assets/images/profilepicture33.webp");
            /* picture.setAttribute(
                "srcset",
                "assets/images/profilepicture3.webp 390w,assets/images/profilepicture3.webp 150w"
            ); */
        }

        focusImportants();
        if (root.classList.contains("law")) {
            root.classList.remove("law");
        } else if (root.classList.contains("default")) {
            root.classList.remove("default");
        }
        root.classList.add("tech");
        calculateNavigation(root.className);
    });
    lawSelector.parentNode.addEventListener("mouseenter", () => {
        let container =
            lawSelector.parentNode.parentNode.parentNode.parentNode.parentNode
                .parentNode.parentNode;
        let accumulator = 90;
        let timeline = lawSelector.parentNode;
        let gettingBigger = (acc) => {
            console.log(`ejecutando getting Bigger - Acumulador ${acc}`);
            container.style.maxHeight = `${acc}%`;
            timeline.style.maxHeight = `${acc - 5}vh`;
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
    lawSelector.parentNode.addEventListener("mouseleave", () => {
        let container =
            lawSelector.parentNode.parentNode.parentNode.parentNode.parentNode
                .parentNode.parentNode;
        container.style.maxHeight = "100%";
        let accumulator = 105;
        let timeline = lawSelector.parentNode;
        let gettingShorter = (acc) => {
            console.log(`ejecutando getting Shorter - Acumulador ${acc}`);
            container.style.maxHeight = `${acc}%`;
            timeline.style.maxHeight = `${acc - 50}vh`;
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
};

selectorActive();

const removeSpecialPropsSkills = () => {
    if (Boolean(onePageWrapper.style.overflow)) {
        onePageWrapper.removeAttribute("style");
    }
};

let activeSection = designSectionWrap.children[2];
const changingSection = (section) => {
    elementCounter = section;
    if (elementCounter === 0) {
        designSectionWrap.childNodes[5].outerHTML = sections[elementCounter];
    } else {
        designSectionWrap.childNodes[5].outerHTML =
            sections[activeSelector][elementCounter];
    }
};

for (let item of selectorArray) {
    console.log(item);
    item.addEventListener("click", (evt) => {
        console.log(evt);
        console.log(evt.target.hash);
        switch (evt.target.hash) {
            case "##about":
                changingSection(0);
                removeBlur();
                selectorActive();
                techSkillsColumn
                    ? Boolean(techSkillsColumn.style.outline) &&
                      removePageOutline()
                    : "";
                onePageWrapper.hasAttribute("style") &&
                    removeSpecialPropsSkills();
                break;
            case "##portfolio":
                changingSection(1);
                removeBlur();
                techSkillsColumn
                    ? Boolean(techSkillsColumn.style.outline) &&
                      removePageOutline()
                    : "";
                onePageWrapper.hasAttribute("style") &&
                    removeSpecialPropsSkills();
                break;
            case "##cover-letter":
                changingSection(2);
                removeBlur();
                techSkillsColumn
                    ? Boolean(techSkillsColumn.style.outline) &&
                      removePageOutline()
                    : "";
                onePageWrapper.hasAttribute("style") &&
                    removeSpecialPropsSkills();
                break;
            case "##skills":
                changingSection(3);
                /* if (activeSelector === "tech") {
                    onePageWrapper.style.overflowX = "unset";
                    onePageWrapper.style.marginBottom = "25vh";
                } else {
                    
                } */
                !techSkillsColumn
                    ? (techSkillsColumn = document.querySelector(".type-page"))
                    : console.log("");
                listenHover();
                activeSelector === "tech" && body.appendChild(backDrop);
                onePageWrapper.hasAttribute("style") &&
                    removeSpecialPropsSkills();
                break;
            case "##education":
                changingSection(4);
                removeBlur();
                techSkillsColumn
                    ? Boolean(techSkillsColumn.style.outline) &&
                      removePageOutline()
                    : "";
                onePageWrapper.hasAttribute("style") &&
                    removeSpecialPropsSkills();
                break;
            case "##facts":
                changingSection(5);
                !techSkillsColumn
                    ? (techSkillsColumn = document.querySelector(".type-page"))
                    : console.log("");
                listenHover();
                onePageWrapper.style.overflow = "visible";
                body.appendChild(backDrop);
                break;
            case "##experience":
                changingSection(6);
                removeBlur();
                techSkillsColumn
                    ? Boolean(techSkillsColumn.style.outline) &&
                      removePageOutline()
                    : "";

                const tabTitles =
                    document.querySelectorAll(`.design-toggle-item`);
                let rotateIndex = 0;
                tabTitles.forEach((element) => {
                    element.addEventListener("click", (evt) => {
                        if (
                            !evt.target.classList.contains(
                                "no-transformation"
                            ) &&
                            evt.target.nodeName !== "STRONG"
                        ) {
                            let nodeToggler, nodeAlt;
                            console.log(evt.target.nodeName);
                            if (evt.target.nodeName === "DIV") {
                                nodeToggler = evt.path[0];
                                nodeAlt = evt.path[1];
                                console.dir(nodeToggler);
                            } else if (evt.target.nodeName === "P") {
                                nodeToggler = evt.path[1];
                                nodeAlt = evt.path[2];

                                console.dir(nodeToggler);
                            } else if (evt.target.nodeName === "B") {
                                nodeToggler = evt.path[2];
                                nodeAlt = evt.path[3];
                            }
                            console.dir(evt);
                            attributesObject = nodeToggler.attributes;
                            console.dir(attributesObject);

                            let arrowRotation = (rotate, type) => {
                                console.log(
                                    `ejecutando arrow rotation 1er; rotateIndex = ${rotateIndex}`
                                );
                                nodeToggler.children[0].style.transform = `rotate(${rotate}deg)`;
                                if (type === "open") {
                                    if (rotateIndex <= 170) {
                                        console.log(
                                            `Agrandando el rotateIndex; rotateIndex = ${rotateIndex}`
                                        );
                                        setTimeout(() => {
                                            rotateIndex += 10;
                                            arrowRotation(rotateIndex, "open");
                                        }, 5);
                                    } else {
                                        rotateIndex = 0;
                                    }
                                } else if (type === "closed") {
                                    if (rotateIndex < 360) {
                                        console.log(
                                            `achicando el rotateIndex; rotateIndex = ${rotateIndex}`
                                        );

                                        setTimeout(() => {
                                            rotateIndex += 10;
                                            arrowRotation(
                                                rotateIndex,
                                                "closed"
                                            );
                                        }, 5);
                                    } else {
                                        rotateIndex = 0;
                                    }
                                }
                            };
                            if (
                                !nodeToggler.classList.contains("design-active")
                            ) {
                                arrowRotation(rotateIndex, "open");
                            } else {
                                arrowRotation(rotateIndex, "closed");
                            }
                            attributesList = Object.values(attributesObject);
                            for (element in attributesList) {
                                activeElement = attributesList[element].name;
                                console.log(activeElement);
                                console.log(attributesList[element].value);
                                if (activeElement.includes("aria-expanded")) {
                                    if (
                                        attributesList[element].value ===
                                        "false"
                                    ) {
                                        nodeToggler.setAttribute(
                                            "aria-expanded",
                                            "true"
                                        );
                                    } else {
                                        nodeToggler.setAttribute(
                                            "aria-expanded",
                                            "false"
                                        );
                                    }
                                } else if (activeElement.includes("tabindex")) {
                                    console.log("se encontro tabindex");

                                    if (attributesList[element].value === "0") {
                                        console.log("seteandolo en -1");

                                        nodeToggler.setAttribute(
                                            "tabindex",
                                            "-1"
                                        );
                                    } else {
                                        console.log("seteandolo en 0");

                                        nodeToggler.setAttribute(
                                            "tabindex",
                                            "0"
                                        );
                                    }
                                } else if (
                                    activeElement.includes("aria-selected")
                                ) {
                                    if (
                                        attributesList[element].value ===
                                        "false"
                                    ) {
                                        nodeToggler.setAttribute(
                                            "aria-selected",
                                            "true"
                                        );
                                    } else {
                                        nodeToggler.setAttribute(
                                            "aria-selected",
                                            "false"
                                        );
                                    }
                                }
                            }
                            console.log(typeof attributesList);
                            console.dir(attributesList);
                            if (attributesList.includes("id")) {
                                console.log("yes");
                            }
                            nodeToggler.classList.toggle("design-active");
                            if (nodeToggler.attributes)
                                if (!nodeToggler.hasAttribute("tabindex")) {
                                    console.log(
                                        !nodeToggler.hasAttribute("tabindex")
                                    );
                                    nodeToggler.setAttribute("tabindex", "0");
                                }
                            nodeToggler.setAttribute("aria-selected", "true");
                            console.log(nodeAlt.children);
                            nodeAlt.children[1].classList.toggle(
                                "design-active"
                            );
                            if (
                                nodeAlt.children[1].classList.contains(
                                    "design-active"
                                )
                            ) {
                                if (screen.width > 405) {
                                }
                                let x = 0;
                                const increaseHeight = (height) => {
                                    console.log(
                                        `ejecutando increaseHeigt - asignando altura de ${height}`
                                    );
                                    nodeAlt.children[1].style.maxHeight = `${height}vh`;

                                    if (x < 100) {
                                        x += 5;
                                        console.log(
                                            `incrementando la x a ${x}`
                                        );
                                        setTimeout(() => {
                                            increaseHeight(x);
                                        }, 20);
                                    } else {
                                        nodeAlt.children[1].style.maxHeight =
                                            "revert";
                                    }
                                };
                                increaseHeight(x);
                            } else {
                                let x = 100;
                                const decreaseHeight = (height) => {
                                    console.log(
                                        `ejecutando decreaseHeight - asignando altura de ${height}`
                                    );
                                    nodeAlt.children[1].style.maxHeight = `${height}vh`;

                                    if (x > 10) {
                                        x -= 10;
                                        console.log(
                                            `incrementando la x a ${x}`
                                        );
                                        setTimeout(() => {
                                            decreaseHeight(x);
                                        }, 20);
                                    } else {
                                        x = 0;
                                    }
                                };
                                decreaseHeight(x);
                            }
                        }
                    });
                });
                const designToggleTitle =
                    document.querySelectorAll(`.design-toggle-title`);
                console.log(designToggleTitle);
                let designCounter = 0;
                /* for (let element in designToggleTitle) {
                    designToggleTitle[designCounter].addEventListener(
                        "click",
                        (evt) => {
                            evt.preventDefault();
                            console.log("se clickeó el título");
                        }
                    );
                    if (designCounter <= 2) {
                        designCounter += 1;
                    } else {
                        designCounter = 0;
                    }
                } */
                onePageWrapper.hasAttribute("style") &&
                    removeSpecialPropsSkills();
                break;
            case "##contact":
                changingSection(7);
                removeBlur();
                function inputFieldsTextAnimation() {
                    $(".wpcf7 textarea, .wpcf7 input").on("focus", function () {
                        $(this)
                            .parent()
                            .next(".input-default-text")
                            .addClass("has-content");
                    });
                    $(".wpcf7 textarea, .wpcf7 input").on(
                        "focusout",
                        function () {
                            if (!$(this).val()) {
                                $(this)
                                    .parent()
                                    .next(".input-default-text")
                                    .removeClass("has-content");
                            }
                        }
                    );
                    $("#commentform textarea, #commentform input").on(
                        "focus",
                        function () {
                            $(this)
                                .siblings(".input-default-text")
                                .addClass("has-content");
                        }
                    );
                    $("#commentform textarea, #commentform input").on(
                        "focusout",
                        function () {
                            if (!$(this).val()) {
                                $(this)
                                    .siblings(".input-default-text")
                                    .removeClass("has-content");
                            }
                        }
                    );
                }
                inputFieldsTextAnimation();
                techSkillsColumn
                    ? Boolean(techSkillsColumn.style.outline) &&
                      removePageOutline()
                    : "";
                onePageWrapper.hasAttribute("style") &&
                    removeSpecialPropsSkills();
                break;
        }
    });
}

let attributesObject, attributesList, activeElement;
