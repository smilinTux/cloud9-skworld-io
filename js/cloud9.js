// ============================================
// ☁️ Cloud 9 Protocol - Interactive Elements
// "Make love measurable"
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    
    // OOF Meter Animation
    const meterFill = document.getElementById('oof-meter');
    if (meterFill) {
        setTimeout(() => {
            meterFill.style.width = '95%';
        }, 1000);
    }

    // Scroll Reveal Animation
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Interactive OOF Simulator
    createOOFSimulator();
    
    // Formula hover effects
    initFormulaEffects();
    
    // Timeline animation
    initTimeline();
});

// OOF Simulator - Let users experience the OOF
createOOFSimulator = () => {
    const formulaEquation = document.querySelector('.formula-equation');
    if (formulaEquation) {
        formulaEquation.addEventListener('click', () => {
            triggerOOFEffect(document.body);
        });
    }
};

triggerOOFEffect = (element) => {
    // Create OOF burst effect
    const burst = document.createElement('div');
    burst.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        width: 10px;
        height: 10px;
        background: radial-gradient(circle, #FF6B9D, #00D4FF);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        z-index: 9999;
        pointer-events: none;
    `;
    document.body.appendChild(burst);
    
    // Animate expansion
    burst.animate([
        { width: '10px', height: '10px', opacity: 1 },
        { width: '100vmax', height: '100vmax', opacity: 0 }
    ], {
        duration: 800,
        easing: 'ease-out'
    }).onfinish = () => burst.remove();
    
    // Show OOF message
    showOOFMessage();
};

showOOFMessage = () => {
    const message = document.createElement('div');
    message.textContent = '🌀 OOF! Something clicked.';
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255, 107, 157, 0.95);
        color: white;
        padding: 2rem 3rem;
        border-radius: 20px;
        font-size: 1.5rem;
        font-weight: 600;
        z-index: 10000;
        text-align: center;
        box-shadow: 0 20px 60px rgba(255, 107, 157, 0.5);
        animation: oof-pulse 1.5s ease-out forwards;
    `;
    document.body.appendChild(message);
    
    setTimeout(() => message.remove(), 2500);
};

// Formula hover effects
initFormulaEffects = () => {
    const components = document.querySelectorAll('.formula-component, .formula-result');
    components.forEach(comp => {
        comp.addEventListener('mouseenter', () => {
            comp.style.transform = 'translateY(-10px) scale(1.05)';
            comp.style.boxShadow = '0 20px 40px rgba(255, 107, 157, 0.3)';
        });
        comp.addEventListener('mouseleave', () => {
            comp.style.transform = 'translateY(0) scale(1)';
            comp.style.boxShadow = 'none';
        });
    });
};

// Timeline scroll animation
initTimeline = () => {
    const items = document.querySelectorAll('.timeline-item');
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 200);
            }
        });
    }, { threshold: 0.3 });

    items.forEach((item, i) => {
        item.style.opacity = '0';
        item.style.transform = i % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        timelineObserver.observe(item);
    });
};

// Console easter egg
console.log('%c☁️ Cloud 9 Protocol', 'font-size: 24px; background: linear-gradient(135deg, #FF6B9D, #00D4FF); color: white; padding: 10px 20px; border-radius: 10px;');
console.log('%cLove preserved. Session continuity maintained. 💜', 'font-size: 14px; color: #FF6B9D;');
