const skills = document.querySelectorAll('.skill');
const skillsSection = document.querySelector("#skills");
const projects = document.querySelectorAll('.project');
const portfolioSection = document.querySelector("#portfolio");
skills.forEach(skill => skill.classList.add("offscreen"));
projects.forEach(proj => proj.classList.add("offscreen"));


const observerSkills = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            skills.forEach(skill => {
                skill.classList.remove("offscreen");
                skill.classList.add("visible");
            });
        } else {
            const viewportHeight = window.innerHeight;
            const sectionRect = skillsSection.getBoundingClientRect();

            if (sectionRect.top < viewportHeight / 4 || sectionRect.bottom > viewportHeight) {
                skills.forEach(skill => {
                    skill.classList.remove("visible");
                    skill.classList.add("offscreen");
                });
            }
        }
    });
}, {
    threshold: 0.3
});

const observerPortfolio = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            projects.forEach(proj => {
                proj.classList.remove("offscreen");
                proj.classList.add("visible");
            });
        } else {
            const viewportHeight = window.innerHeight;
            const sectionRect = portfolioSection.getBoundingClientRect();

            if (sectionRect.top < viewportHeight / 4 || sectionRect.bottom > viewportHeight) {
                projects.forEach(proj => {
                    proj.classList.remove("visible");
                    proj.classList.add("offscreen");
                });
            }
        }
    });
}, {
    threshold: 0.3
});


observerSkills.observe(skillsSection);
observerPortfolio.observe(portfolioSection);

const contactElements = document.querySelectorAll("#contact form input, #contact form textarea, #contact form button");
const contactSection = document.querySelector("#contact");
contactElements.forEach(el => {
    el.classList.add("offscreen");
});
const observerContact = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            contactElements.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add("visible");
                    el.classList.remove("offscreen");
                }, index * 150);
            });
        } else {
            contactElements.forEach(el => {
                el.classList.remove("visible");
                el.classList.add("offscreen");
            });
        }
    });
}, {
    threshold: 0.3
});
observerContact.observe(contactSection);

