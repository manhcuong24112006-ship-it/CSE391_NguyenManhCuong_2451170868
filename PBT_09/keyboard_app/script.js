const images = [
    "https://placehold.co/600x400?text=Image+1",
    "https://placehold.co/600x400?text=Image+2",
    "https://placehold.co/600x400?text=Image+3",
    "https://placehold.co/600x400?text=Image+4",
    "https://placehold.co/600x400?text=Image+5"
];

const commands = [
    "Go Home",
    "Open Settings",
    "View Profile",
    "Toggle Dark Mode",
    "Logout"
];

let currentImage = 0;
let slideshow = null;
let currentCommand = 0;

const galleryImage = document.getElementById("galleryImage");
const imageInfo = document.getElementById("imageInfo");

const paletteOverlay = document.getElementById("paletteOverlay");
const commandInput = document.getElementById("commandInput");
const commandList = document.getElementById("commandList");

function renderImage() {
    galleryImage.src = images[currentImage];
    imageInfo.textContent =
        `Image ${currentImage + 1}/${images.length}`;
}

function nextImage() {
    currentImage =
        (currentImage + 1) % images.length;

    renderImage();
}

function prevImage() {
    currentImage =
        (currentImage - 1 + images.length)
        % images.length;

    renderImage();
}

function toggleSlideshow() {
    if (slideshow) {
        clearInterval(slideshow);
        slideshow = null;
    } else {
        slideshow = setInterval(nextImage, 2000);
    }
}

function openPalette() {
    paletteOverlay.classList.remove("hidden");

    commandInput.value = "";

    renderCommands(commands);

    commandInput.focus();
}

function closePalette() {
    paletteOverlay.classList.add("hidden");
}

function renderCommands(list) {
    commandList.innerHTML = "";

    list.forEach((command, index) => {

        const li = document.createElement("li");

        li.textContent = command;

        li.tabIndex = 0;

        if (index === currentCommand) {
            li.classList.add("active");
        }

        li.addEventListener("click", () => {
            alert(`Executed: ${command}`);
            closePalette();
        });

        commandList.appendChild(li);
    });
}

commandInput.addEventListener("input", () => {

    const keyword =
        commandInput.value.toLowerCase();

    const filtered =
        commands.filter(command =>
            command
                .toLowerCase()
                .includes(keyword)
        );

    currentCommand = 0;

    renderCommands(filtered);
});

document.addEventListener("keydown", e => {

    /* Ctrl + K */

    if (e.ctrlKey && e.key === "k") {

        e.preventDefault();

        openPalette();

        return;
    }

    /* Escape */

    if (e.key === "Escape") {

        closePalette();

        return;
    }

    /* Nếu palette đang mở */

    if (
        !paletteOverlay.classList.contains("hidden")
    ) {

        const items =
            commandList.querySelectorAll("li");

        if (e.key === "ArrowDown") {

            currentCommand =
                Math.min(
                    currentCommand + 1,
                    items.length - 1
                );

            renderCommands(
                [...items].map(item =>
                    item.textContent
                )
            );
        }

        if (e.key === "ArrowUp") {

            currentCommand =
                Math.max(
                    currentCommand - 1,
                    0
                );

            renderCommands(
                [...items].map(item =>
                    item.textContent
                )
            );
        }

        if (
            e.key === "Enter" &&
            items[currentCommand]
        ) {

            items[currentCommand].click();
        }

        return;
    }

    /* Gallery */

    if (e.key === "ArrowRight") {
        nextImage();
    }

    if (e.key === "ArrowLeft") {
        prevImage();
    }

    /* 1 - 9 */

    const number = parseInt(e.key);

    if (
        number >= 1 &&
        number <= images.length
    ) {

        currentImage = number - 1;

        renderImage();
    }

    /* Space */

    if (e.code === "Space") {

        e.preventDefault();

        toggleSlideshow();
    }
});

document
    .getElementById("nextBtn")
    .addEventListener("click", nextImage);

document
    .getElementById("prevBtn")
    .addEventListener("click", prevImage);

renderImage();