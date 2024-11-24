const modal = document.querySelector('.modal');
const modalImg = document.getElementById('modal-img');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

function openModal(element) {
    modal.style.display = "block";
    modalImg.src = element.querySelector('img').src;
    modalImg.onload = function() {
        this.classList.add('loaded');
    }
}

function closeModal() {
    modal.style.display = "none";
    modalImg.classList.remove('loaded');
}

// Close modal with Escape key
document.addEventListener('keydown',function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});