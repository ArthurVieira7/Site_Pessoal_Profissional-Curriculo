// Preloader
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
    }, 1000);
});

// Cursor personalizado
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

// Interações do cursor
const hoverElements = document.querySelectorAll('a, button, .service-card, .social-icon, .resume-box, .whatsapp-call');

hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.width = '40px';
        cursor.style.height = '40px';
        cursor.style.backgroundColor = 'rgba(212, 175, 55, 0.2)';
        cursor.style.borderColor = 'var(--gold)';
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        cursor.style.backgroundColor = 'transparent';
        cursor.style.borderColor = 'var(--gold)';
    });
});

// Navegação responsiva
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Efeito de scroll na navegação
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Botão voltar ao topo
    const backToTopButton = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Botão voltar ao topo
document.querySelector('.back-to-top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animações de contadores
const counters = document.querySelectorAll('.stat-number');
const speed = 200;

const animateCounters = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => animateCounters(), 10);
        } else {
            counter.innerText = target;
        }
    });
};

// Animações de barras de habilidade
const skillBars = document.querySelectorAll('.skill-progress');

const animateSkillBars = () => {
    skillBars.forEach(skillBar => {
        const width = skillBar.getAttribute('data-width');
        skillBar.style.width = width + '%';
    });
};

// Animações ao rolar a página
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('stats-container')) {
                animateCounters();
            }
            
            if (entry.target.classList.contains('skills-container')) {
                setTimeout(animateSkillBars, 300);
            }
            
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observar elementos para animação
const elementsToAnimate = document.querySelectorAll('.stats-container, .skills-container, .service-card, .about-text, .resume-box, .whatsapp-call');
elementsToAnimate.forEach(element => {
    observer.observe(element);
});

// Atualizar ano atual no footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Formulário de contato
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-check"></i> Mensagem Enviada!';
    submitBtn.style.backgroundColor = '#4CAF50';
    
    // Resetar formulário
    contactForm.reset();
    
    // Restaurar botão após 3 segundos
    setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.style.backgroundColor = '';
    }, 3000);
});

// Animar elementos flutuantes na seção home
const floatingElements = document.querySelectorAll('.floating-element');
floatingElements.forEach(el => {
    // Adicionar atrasos aleatórios para animação
    const randomDelay = Math.random() * 5;
    el.style.animationDelay = `${randomDelay}s`;
});

// Efeito de digitação para o subtítulo da home
const homeSubtitle = document.querySelector('.home-subtitle');
const originalText = homeSubtitle.textContent;
homeSubtitle.textContent = '';

let i = 0;
function typeWriter() {
    if (i < originalText.length) {
        homeSubtitle.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

// Iniciar efeito de digitação quando a página carregar
setTimeout(typeWriter, 1500);

// Adicionar efeito de parallax aos elementos de fundo
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const backgroundElements = document.querySelectorAll('.bg-el');
    
    backgroundElements.forEach((el, index) => {
        const speed = 0.1 + (index * 0.05);
        const yPos = -(scrolled * speed);
        el.style.transform = `translateY(${yPos}px) scale(${1 + (scrolled * 0.0001)})`;
    });
});

// Inicializar animações quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    // Adicionar classe para transições após o carregamento
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 1000);

});
