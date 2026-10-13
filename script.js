// ==========================================================================
// 1. GESTIÓN ACCESIBLE DEL MENÚ MÓVIL
// ==========================================================================
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.contains('is-open');
        navMenu.classList.toggle('is-open');
        menuToggle.setAttribute('aria-expanded', !isOpen);
        menuToggle.querySelector('span').textContent = !isOpen ? '✕' : '☰';
    });
}

// Cierre automático del menú móvil al hacer clic en enlaces
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.querySelector('span').textContent = '☰';
    });
});

// ==========================================================================
// 2. CONTROL DE LOS PLANETAS INTERACTIVOS (ACORDEONES)
// ==========================================================================
const accordionTriggers = document.querySelectorAll('.card-accordion-trigger');

accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const card = trigger.closest('.course-card');
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
        card.classList.toggle('is-expanded');
        trigger.setAttribute('aria-expanded', !isExpanded);
    });
});

// ==========================================================================
// 3. LÓGICA DE LAS ACTIVIDADES INTERNAS DE LOS PLANETAS
// ==========================================================================
document.querySelectorAll('.activity-box').forEach(box => {
    const buttons = box.querySelectorAll('.btn-activity');
    const feedbackBox = box.querySelector('.activity-feedback');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            feedbackBox.className = "activity-feedback";
            if (btn.classList.contains('correct-option')) {
                feedbackBox.classList.add('feedback-success');
                feedbackBox.textContent = "🌟 ¡Súper! Respuesta correcta. ¡Has ganado tus Cristales de Energía!";
            } else {
                feedbackBox.classList.add('feedback-error');
                feedbackBox.textContent = "💥 ¡Casi! Esa cantidad no cuadra en el radar espacial. ¡Inténtalo de nuevo!";
            }
        });
    });
});

// ==========================================================================
// 4. LÓGICA DE VALIDACIÓN DEL DESAFÍO FINAL (QUIZ)
// ==========================================================================
const submitQuizBtn = document.getElementById('submitQuizBtn');
const quizFeedback = document.getElementById('quizFeedback');

if (submitQuizBtn && quizFeedback) {
    submitQuizBtn.addEventListener('click', () => {
        const seleccion = document.querySelector('input[name="space_math"]:checked');
        quizFeedback.className = 'quiz-feedback';

        if (!seleccion) {
            quizFeedback.classList.add('feedback-error');
            quizFeedback.textContent = '⚠️ ¡Espera cadete! Selecciona una opción en el radar antes de escanear.';
            return;
        }

        if (seleccion.value === 'correcto') {
            quizFeedback.classList.add('feedback-success');
            quizFeedback.textContent = '🎉 ¡Felicidades Capitán! 10 galletas divididas entre 2 da exactamente 5 para cada uno. ¡Has salvado la galaxia numérica!';
        } else {
            quizFeedback.classList.add('feedback-error');
            quizFeedback.textContent = '❌ ¡Alerta! Esos cálculos harán que un astronauta se quede con hambre. ¡Vuelve a calcular!';
        }
    });
}
