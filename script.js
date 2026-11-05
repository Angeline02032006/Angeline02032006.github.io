/* ==========================================
   ANGELINE P
   AI DATA ANALYST | AI DEVELOPER
   PORTFOLIO INTERACTIVE FUNCTIONALITY
   ========================================== */

document.addEventListener("DOMContentLoaded", function () {

    // 1. Smooth Navigation

    const navigationLinks = document.querySelectorAll(
        '.navbar a[href^="#"]'
    );

    navigationLinks.forEach(link => {

        link.addEventListener("click", function (event) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    // 2. Automatic Footer Year

    const footerText = document.querySelector("footer p");

    if (footerText) {
        footerText.textContent =
            "© " + new Date().getFullYear() +
            " Angeline P | AI Data Analyst | AI Developer";
    }


    // 3. Scroll Reveal Animation

    const revealElements = document.querySelectorAll(
        ".section, .card, .skill"
    );

    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReducedMotion && "IntersectionObserver" in window) {

        const revealStyle = document.createElement("style");

        revealStyle.textContent = `
            .reveal {
                opacity: 0;
                transform: translateY(25px);
                transition: opacity 0.7s ease,
                            transform 0.7s ease;
            }

            .reveal.visible {
                opacity: 1;
                transform: translateY(0);
            }
        `;

        document.head.appendChild(revealStyle);

        const observer = new IntersectionObserver(
            (entries, observerInstance) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observerInstance.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach(element => {

            element.classList.add("reveal");

            observer.observe(element);

        });

    }


    // 4. Back To Top Button

    const topButton = document.createElement("button");

    topButton.textContent = "↑";

    topButton.setAttribute("aria-label", "Back to top");

    topButton.id = "backToTop";

    document.body.appendChild(topButton);

    const buttonStyle = document.createElement("style");

    buttonStyle.textContent = `
        #backToTop {
            position: fixed;
            bottom: 25px;
            right: 25px;
            width: 48px;
            height: 48px;
            border: 1px solid #00E5FF;
            border-radius: 50%;
            background: #111B2E;
            color: #00E5FF;
            font-size: 25px;
            cursor: pointer;
            display: none;
            z-index: 999;
            box-shadow: 0 0 15px rgba(0,229,255,0.2);
        }

        #backToTop:hover {
            background: #8A2BE2;
            color: white;
        }
    `;

    document.head.appendChild(buttonStyle);

    window.addEventListener("scroll", function () {

        topButton.style.display =
            window.scrollY > 400 ? "block" : "none";

    });

    topButton.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    // 5. Console Welcome Message

    console.log(
        "Welcome to Angeline P's Professional Portfolio"
    );

    console.log(
        "AI Data Analyst | AI Developer"
    );

});
