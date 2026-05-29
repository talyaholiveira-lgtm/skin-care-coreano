# 🧴 K-Beauty - Skin Care Coreano

Um website moderno e responsivo dedicado aos produtos e rotinas de skincare coreano (K-Beauty). Este projeto apresenta os melhores produtos e a famosa rotina de 10 passos da beleza coreana.

## ✨ Características

- **Design Responsivo**: Compatível com desktop, tablet e mobile
- **Interface Moderna**: Gradientes elegantes e animações suaves
- **Rotina de 10 Passos**: Guia completo da rotina K-Beauty
- **Catálogo de Produtos**: Showcase de principais produtos coreanos
- **Newsletter**: Sistema de inscrição para atualizações
- **Interatividade**: Menu mobile, animações e carrinho de compras
- **Otimizado**: CSS moderno, JavaScript vanilla, sem dependências

## 📁 Estrutura do Projeto

```
skin-care-coreano/
├── index.html       # Página principal HTML
├── styles.css       # Estilos CSS responsivos
├── script.js        # Funcionalidades JavaScript
└── README.md        # Este arquivo
```

## 🚀 Como Usar

### 1. Clone o Repositório
```bash
git clone https://github.com/talyaholiveira-lgtm/skin-care-coreano.git
cd skin-care-coreano
```

### 2. Abra no Navegador
Simplesmente abra o arquivo `index.html` em seu navegador ou use um servidor local:

```bash
# Com Python 3
python -m http.server 8000

# Com Python 2
python -m SimpleHTTPServer 8000

# Com Node.js (http-server)
npx http-server
```

Então acesse: `http://localhost:8000`

## 📱 Seções do Website

### 1. **Header/Navegação**
- Logo K-Beauty
- Links de navegação suave
- Menu hamburger para mobile

### 2. **Hero Section**
- Título principal
- Subtítulo atraente
- Botão call-to-action
- Imagem destacada

### 3. **Catálogo de Produtos**
- Grid responsivo (6 produtos)
- Cards com imagem, nome, descrição e preço
- Botão "Adicionar ao Carrinho"
- Hover effects

### 4. **Rotina de 10 Passos**
- Guia completo da rotina K-Beauty
- 10 etapas numeradas
- Descrição de cada passo
- Design visual atraente

### 5. **Benefícios**
- 6 cards destacando os benefícios
- Ícones emoji
- Descrições detalhadas

### 6. **Newsletter**
- Formulário de inscrição
- Integração com links sociais
- Validação básica

### 7. **Footer**
- Informações de contato
- Links úteis
- Redes sociais

## 🎨 Paleta de Cores

```css
--primary-color: #ff6b9d       (Rosa claro)
--secondary-color: #c06c84     (Rosa escuro)
--accent-color: #f6d5e8        (Rosa muito claro)
--dark-color: #2d1b2e          (Roxo escuro)
--light-color: #f9f7f7         (Branco rosado)
```

## 💻 Tecnologias

- **HTML5**: Estrutura semântica
- **CSS3**: Flexbox, Grid, Gradientes, Animações
- **JavaScript**: Vanilla JS (sem frameworks)
- **Responsividade**: Mobile-first approach

## ⚙️ Funcionalidades JavaScript

### Implementadas:
- ✅ Menu hambúrguer responsivo
- ✅ Scroll suave para âncoras
- ✅ Animações com Intersection Observer
- ✅ Validação de formulário Newsletter
- ✅ Feedback visual de "Adicionar ao Carrinho"
- ✅ Notificações toast
- ✅ Logs de console

## 📊 Breakpoints Responsivos

- **Desktop**: 1200px+
- **Tablet**: 769px - 1199px
- **Mobile**: até 768px
- **Small Mobile**: até 480px

## 🔧 Como Customizar

### Adicionar Novos Produtos:
```html
<div class="produto-card">
    <img src="seu-produto.jpg" alt="Descrição">
    <h3>Nome do Produto</h3>
    <p>Descrição</p>
    <span class="preco">R$ XX,XX</span>
    <button class="btn btn-secondary">Adicionar ao Carrinho</button>
</div>
```

### Mudar Cores:
Edite as variáveis CSS em `styles.css`:
```css
:root {
    --primary-color: #sua-cor;
    --secondary-color: #sua-cor;
    /* etc */
}
```

### Adicionar Seções:
1. Crie a seção em `index.html`
2. Adicione estilos em `styles.css`
3. Implemente interatividade em `script.js` (se necessário)

## 📱 Funcionalidades do Menu Mobile

- Menu hambúrguer animado
- Fechar ao clicar em um link
- Transições suaves
- Links de navegação funcionais

## 🎯 Melhorias Futuras

- [ ] Backend com banco de dados
- [ ] Sistema de checkout
- [ ] Pagamentos integrados
- [ ] Avaliações de produtos
- [ ] Blog de dicas
- [ ] Filtros avançados
- [ ] Wishlist
- [ ] Chat ao vivo

## 📞 Contato

- Email: contato@kbeauty.com.br
- WhatsApp: (11) 98765-4321
- Instagram: @kbeauty_coreano

## 📄 Licença

Este projeto é de código aberto e está disponível sob a Licença MIT.

## 🙏 Agradecimentos

- Design inspirado em e-commerce asiáticos
- Icones via Emoji Unicode
- Imagens placeholder via Placeholder.com

---

**Desenvolvido com ❤️ por Talya Oliveira**

Junte-se à revolução da beleza coreana e descubra os segredos da pele perfeita! ✨
