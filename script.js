// ==================== INTERATIVIDADE ==================== 

// Menu hambúrguer mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        hamburger.classList.toggle('active');
    });
}

// Fechar menu ao clicar em um link
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks) {
            navLinks.style.display = 'none';
            hamburger.classList.remove('active');
        }
    });
});

// ==================== FORMULÁRIO DE NEWSLETTER ==================== 

const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        if (email.trim() === '') {
            alert('Por favor, insira um email válido!');
            return;
        }
        
        alert(`✅ Obrigado! Você está inscrito com: ${email}`);
        newsletterForm.reset();
    });
}

// ==================== BOTÕES "ADICIONAR AO CARRINHO" ==================== 

const botoesCarrinho = document.querySelectorAll('.btn-secondary');
botoesCarrinho.forEach(botao => {
    botao.addEventListener('click', (e) => {
        if (botao.textContent.includes('Adicionar ao Carrinho')) {
            e.preventDefault();
            
            const produtoCard = botao.closest('.produto-card');
            const produtoNome = produtoCard.querySelector('h3').textContent;
            const produtoPreco = produtoCard.querySelector('.preco').textContent;
            
            botao.textContent = '✓ Adicionado!';
            botao.style.background = '#4caf50';
            botao.style.color = 'white';
            
            setTimeout(() => {
                botao.textContent = 'Adicionar ao Carrinho';
                botao.style.background = '';
                botao.style.color = '';
            }, 2000);
            
            console.log(`Produto adicionado: ${produtoNome} - ${produtoPreco}`);
        }
    });
});

// ==================== SCROLL SUAVE ==================== 

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ==================== EFEITO DE SCROLL COM INTERSECTION OBSERVER ==================== 

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Adicionar animação CSS
if (!document.querySelector('style[data-fade-animation]')) {
    const style = document.createElement('style');
    style.setAttribute('data-fade-animation', 'true');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Observar elementos
document.querySelectorAll('.produto-card, .rotina-passo, .beneficio-card').forEach(el => {
    observer.observe(el);
});

// ==================== VALIDAÇÃO E FEEDBACK ==================== 

function mostrarMensagem(texto, tipo = 'sucesso') {
    const div = document.createElement('div');
    div.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${tipo === 'sucesso' ? '#4caf50' : '#f44336'};
        color: white;
        border-radius: 4px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 1000;
        animation: slideIn 0.3s ease forwards;
    `;
    div.textContent = texto;
    
    document.body.appendChild(div);
    
    setTimeout(() => {
        div.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => div.remove(), 300);
    }, 3000);
}

// Animações para notificações
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(400px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(400px);
        }
    }
`;
document.head.appendChild(notificationStyle);

// ==================== LOG DE DESENVOLVIMENTO ==================== 

console.log('%c✨ K-Beauty Frontend Carregado com Sucesso!', 'color: #ff6b9d; font-size: 16px; font-weight: bold;');
console.log('%cVersão 1.0 - Desenvolvido com ❤️', 'color: #c06c84; font-size: 12px;');
console.log('%cFuncionalidades ativas:', 'color: #333; font-weight: bold;');
console.log('✓ Menu responsivo');
console.log('✓ Newsletter');
console.log('✓ Carrinho de compras');
console.log('✓ Animações suaves');
console.log('✓ Intersección Observer para otimização');