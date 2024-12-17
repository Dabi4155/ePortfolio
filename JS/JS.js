    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            // Handle "Home" button separately to scroll to the very top
            if (targetId === "#top") {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const topPosition = targetElement.offsetTop - scrollOffset;
                    window.scrollTo({
                        top: topPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });