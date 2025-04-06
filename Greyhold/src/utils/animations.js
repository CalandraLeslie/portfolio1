const fadeIn = (element) => {
    element.style.opacity = 0;
    element.style.transition = 'opacity 0.5s ease-in';
    element.style.opacity = 1;
};

const slideIn = (element) => {
    element.style.transform = 'translateX(-100%)';
    element.style.transition = 'transform 0.5s ease-in-out';
    element.style.transform = 'translateX(0)';
};

const bounce = (element) => {
    element.style.animation = 'bounce 0.5s';
};

const scrollToSection = (target) => {
    const element = document.querySelector(target);
    if (element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
        });
    }
};

export { fadeIn, slideIn, bounce, scrollToSection };