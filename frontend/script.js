document.addEventListener('DOMContentLoaded', () => {

    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 300,
        //reset: true, // Uncomment if you want animations to repeat on scroll
    });
    
    sr.reveal(`.home__data, .footer`);
    sr.reveal(`.home__dish`, { delay: 500, distance: '100px', origin: 'bottom' })
    sr.reveal(`.home__sub`, { delay: 1200, distance: '100px', duration: 1500 })
    sr.reveal(`.home__ingredient`, { delay: 1600, interval: 100 })
    sr.reveal(`.recipe__img, .delivery__img, .contact__image`, { origin: 'left' })
    sr.reveal(`.recipe__data, .delivery__data, .contact__data`, { origin: 'right' })
    sr.reveal(`.popular__card`, { interval: 100 })
    




    // Select DOM elements
    const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close'),
        navLink = document.querySelectorAll('.nav__link');

    console.log(navMenu, navToggle, navClose, navLink); // Debug: Check if elements are selected correctly

    // Menu show
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            console.log('Toggle clicked'); // Debug
            navMenu.classList.add('show-menu'); // Add class to show menu
        });
    } else {
        console.warn('Nav toggle button not found!'); // Debug: If navToggle is not found
    }

    // Menu hidden
    if (navClose) {
        navClose.addEventListener('click', () => {
            console.log('Close clicked'); // Debug
            navMenu.classList.remove('show-menu'); // Remove class to hide menu
        });
    } else {
        console.warn('Nav close button not found!'); // Debug: If navClose is not found
    }

    // Remove menu on link click
    const linkAction = (event) => {
        console.log('Link clicked:', event.target.textContent); // Debug: Log which link was clicked
        navMenu.classList.remove('show-menu'); // Remove class to hide menu
    };

    if (navLink.length > 0) {
        navLink.forEach((link) => {
            link.addEventListener('click', linkAction);
        });
    } else {
        console.warn('No navigation links found!'); // Debug: If no nav links are found
    }

    // Add shadow to header on scroll
    const shadowHeader = () => {
        const header = document.getElementById('header');
        if (!header) {
            console.warn('Header element not found!'); // Debug: If header is not found
            return;
        }
        window.scrollY >= 50
            ? header.classList.add('shadow-header')
            : header.classList.remove('shadow-header');
    };
    window.addEventListener('scroll', shadowHeader);

    // Show scroll-up button
    const scrollUp = () => {
        const scrollUp = document.getElementById('scroll-up');
        if (!scrollUp) {
            console.warn('Scroll-up element not found!'); // Debug: If scroll-up button is not found
            return;
        }
        window.scrollY >= 350
            ? scrollUp.classList.add('show-scroll')
            : scrollUp.classList.remove('show-scroll');
    };
    window.addEventListener('scroll', scrollUp);

    // Scroll section active link
    const sections = document.querySelectorAll('section[id]');

    const scrollActive = () => {
        const scrollPosition = window.scrollY;

        sections.forEach((current) => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 58;
            const sectionId = current.getAttribute('id');
            const sectionLink = document.querySelector(
                `.nav__menu a[href*="#${sectionId}"]`
            );

            if (scrollPosition > sectionTop && scrollPosition <= sectionTop + sectionHeight) {
                sectionLink?.classList.add('active-link');
            } else {
                sectionLink?.classList.remove('active-link');
            }
        });
    };
    window.addEventListener('scroll', scrollActive);
});


