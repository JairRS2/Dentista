// Vanilla JavaScript para el proyecto

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Proyecto iniciado correctamente!');
    
    // Inicializar todas las funcionalidades
    initializeNavigation();
    initializeCounter();
    initializeAnimations();
    initializeCTAButton();
    
    console.log('✅ Todas las funcionalidades inicializadas');
});

/**
 * Inicializar la navegación móvil
 */
function initializeNavigation() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Animar el icono del menú
            const icon = menuToggle.querySelector('svg');
            if (icon) {
                icon.classList.toggle('menu-icon');
                icon.classList.toggle('active');
            }
            
            console.log('🍔 Menú móvil toggled');
        });
        
        // Cerrar menú al hacer clic en un enlace
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                console.log('📱 Menú móvil cerrado');
            });
        });
    }
}

/**
 * Inicializar el contador interactivo
 */
function initializeCounter() {
    const counterDisplay = document.getElementById('counter');
    const incrementBtn = document.getElementById('increment');
    const decrementBtn = document.getElementById('decrement');
    const resetBtn = document.getElementById('reset');
    
    let counter = 0;
    
    if (counterDisplay && incrementBtn && decrementBtn && resetBtn) {
        // Función para actualizar el display
        function updateCounter() {
            counterDisplay.textContent = counter;
            counterDisplay.classList.add('pulse-animation');
            
            // Remover la animación después de que termine
            setTimeout(() => {
                counterDisplay.classList.remove('pulse-animation');
            }, 600);
            
            // Cambiar color según el valor
            counterDisplay.className = counterDisplay.className.replace(/text-\w+-\d+/, '');
            if (counter > 0) {
                counterDisplay.classList.add('text-green-500');
            } else if (counter < 0) {
                counterDisplay.classList.add('text-red-500');
            } else {
                counterDisplay.classList.add('text-primary');
            }
        }
        
        // Event listeners para los botones
        incrementBtn.addEventListener('click', function() {
            counter++;
            updateCounter();
            console.log(`➕ Contador incrementado: ${counter}`);
        });
        
        decrementBtn.addEventListener('click', function() {
            counter--;
            updateCounter();
            console.log(`➖ Contador decrementado: ${counter}`);
        });
        
        resetBtn.addEventListener('click', function() {
            counter = 0;
            updateCounter();
            console.log('🔄 Contador reiniciado');
        });
        
        // Inicializar el display
        updateCounter();
    }
}

/**
 * Inicializar animaciones y efectos visuales
 */
function initializeAnimations() {
    // Observador de intersección para animaciones de entrada
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar elementos que deben animarse
    const animatedElements = document.querySelectorAll('.bg-white, .text-center h3, .grid > div');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Efecto parallax simple en el hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.bg-gradient-to-r');
        
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
    
    console.log('🎨 Animaciones inicializadas');
}

/**
 * Inicializar el botón CTA principal
 */
function initializeCTAButton() {
    const ctaButton = document.getElementById('cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // Crear efecto de ripple
            createRippleEffect(this, event);
            
            // Scroll suave hacia la sección de características
            const featuresSection = document.querySelector('section:nth-of-type(2)');
            if (featuresSection) {
                featuresSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            console.log('🎯 CTA button clicked - navegando a características');
        });
    }
}

/**
 * Crear efecto ripple en botones
 */
function createRippleEffect(button, event) {
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    const rect = button.getBoundingClientRect();
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    circle.classList.add('ripple');
    
    // Estilos para el ripple
    circle.style.position = 'absolute';
    circle.style.borderRadius = '50%';
    circle.style.background = 'rgba(255, 255, 255, 0.6)';
    circle.style.transform = 'scale(0)';
    circle.style.animation = 'ripple 0.6s linear';
    circle.style.pointerEvents = 'none';
    
    // Agregar CSS para la animación si no existe
    if (!document.querySelector('#ripple-style')) {
        const style = document.createElement('style');
        style.id = 'ripple-style';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
            .ripple {
                animation: ripple 0.6s linear;
            }
        `;
        document.head.appendChild(style);
    }
    
    const existingRipple = button.querySelector('.ripple');
    if (existingRipple) {
        existingRipple.remove();
    }
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(circle);
    
    // Remover el ripple después de la animación
    setTimeout(() => {
        circle.remove();
    }, 600);
}

/**
 * Utilidades adicionales
 */

// Función para mostrar notificaciones toast
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300`;
    
    // Colores según el tipo
    const colors = {
        info: 'bg-blue-500 text-white',
        success: 'bg-green-500 text-white',
        warning: 'bg-yellow-500 text-black',
        error: 'bg-red-500 text-white'
    };
    
    toast.className += ` ${colors[type] || colors.info}`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    // Mostrar el toast
    setTimeout(() => {
        toast.classList.remove('translate-x-full');
    }, 100);
    
    // Ocultar y remover después de 3 segundos
    setTimeout(() => {
        toast.classList.add('translate-x-full');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Función para detectar dispositivo móvil
function isMobile() {
    return window.innerWidth <= 768;
}

// Función para formatear números
function formatNumber(num) {
    return new Intl.NumberFormat('es-ES').format(num);
}

// Función para validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Función para debounce (útil para eventos de scroll/resize)
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Manejar resize de ventana con debounce
const handleResize = debounce(function() {
    console.log('🔄 Ventana redimensionada:', window.innerWidth, 'x', window.innerHeight);
}, 250);

window.addEventListener('resize', handleResize);

// Manejar errores globales
window.addEventListener('error', function(event) {
    console.error('❌ Error detectado:', event.error);
    showToast('Ha ocurrido un error. Por favor, recarga la página.', 'error');
});

// Mensaje de despedida al cerrar la página
window.addEventListener('beforeunload', function() {
    console.log('👋 ¡Hasta pronto!');
});

// Exportar funciones para uso global si es necesario
window.ProjectUtils = {
    showToast,
    isMobile,
    formatNumber,
    isValidEmail,
    debounce,
    createRippleEffect
};

console.log('📜 Script principal cargado completamente');