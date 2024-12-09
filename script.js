document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded successfully!");
});
document.addEventListener("DOMContentLoaded", () => {
    const interestItems = document.querySelectorAll(".interest-item");

    const scrollObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }
            });
        },
        { threshold: 0.1 }
    );

    interestItems.forEach((item) => scrollObserver.observe(item));
});

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const scrollObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }
            });
        },
        { threshold: 0.1 }
    );

    sections.forEach((section) => {
        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
        section.style.transition = "opacity 1s ease, transform 1s ease";
        scrollObserver.observe(section);
    });
});

