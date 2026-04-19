# 📊 ESTRUTURA VISUAL DO SITE - Guia Completo

## 🎨 COMO O SITE É CONSTRUÍDO

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│           HEADER (Barra Superior)                   │
│  🌿 Ter Saúde | YT | Insta | Twitter               │
│                                                     │
├─────────────────────────────────────────────────────┤
│  🏥 Saúde  │ 💄 Beleza │ 💪 Fitness                │
│          (Menu de Categorias)                      │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Buscar...  [  ] Filtrar               [Buscar]     │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  🏷️ HOT  ┌──────────┐  ┌──────────┐  ┌──────────┐ │
│         │          │  │          │  │          │ │
│  CARDS  │ PRODUTO1 │  │ PRODUTO2 │  │ PRODUTO3 │ │
│         │ ★★★★★    │  │ ★★★★★    │  │ ★★★★★    │ │
│         │ R$ 49,90 │  │ R$ 89,90 │  │ R$ 29,90 │ │
│         │[Comprar] │  │[Comprar] │  │[Comprar] │ │
│         └──────────┘  └──────────┘  └──────────┘ │
│                                                     │
│         Muitos mais cards aqui...                   │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  📚 Cursos e Livros                                │
│  Amazon │ Hotmart │ Kiwify                         │
│                                                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐         │
│  │ CURSO 1  │  │ CURSO 2  │  │ CURSO 3  │         │
│  │ R$199    │  │ R$299    │  │ R$149    │         │
│  └──────────┘  └──────────┘  └──────────┘         │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│           RODAPÉ (Footer)                          │
│  Sobre Nós | Contato | Políticas                   │
│  © 2026 Ter Saúde e Sabedoria                     │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## 🗂️ ONDE CADA COISA ESTÁ

### HEADER (Barra Superior)

```
Localização no HTML: Procure <header class="header">
O que você pode mudar:
  • Logo (emoji 🌿)
  • Título "Ter Saúde e Sabedoria"
  • Links das redes sociais (YouTube, Instagram, etc)
  • Cor da barra
  • Tamanho das letras

Arquivo para mudar:
  • Texto/links: index.html
  • Cores: styles.css
```

---

### MENU DE CATEGORIAS

```
Localização no HTML: Procure <div class="menu-categorias-header">
O que você pode mudar:
  • Adicionar nova categoria (ex: Yoga)
  • Mudar nome das categorias
  • Mudar emoji de cada categoria
  • Cores dos botões

Arquivo para mudar:
  • Texto/botões: index.html
  • Cores: styles.css
```

---

### BARRA DE BUSCA

```
Localização no HTML: Procure <div class="busca-barra">
O que você pode mudar:
  • Placeholder (texto cinza)
  • Cor do botão busca
  • Tamanho dos inputs

Arquivo para mudar:
  • Textos: index.html
  • Cores/Tamanhos: styles.css
```

---

### CARDS DE PRODUTOS

```
Localização no HTML: Procure <div class="produtos-grid">
O que você pode mudar:
  • Tamanho dos cards
  • Tamanho das imagens
  • Cor de fundo
  • Tamanho das letras
  • Espaçamento entre cards

Arquivo para mudar:
  • Estrutura: index.html
  • Tamanhos/Cores/Espaçamento: styles.css
```

**ESTRUTURA DE UM CARD**:

```
┌─────────────────┐
│ 🏷️ 30% OFF      │  ← Tag de desconto (CSS)
│                 │
│  ┌───────────┐  │  ← Imagem do produto
│  │  IMAGEM   │  │
│  │ DO PRODUTO│  │
│  └───────────┘  │
│                 │
│ Marca          │  ← Marca (pode mudar)
│ Nome do...    │  ← Nome (vem da planilha)
│ ★★★★★ (99)    │  ← Avaliação (vem da planilha)
│ ~R$ 89,90      │  ← Preço (vem da planilha)
│ 3x R$ 29,90    │  ← Parcelamento
│ 📦 Frete Grátis│  ← Frete
│ [COMPRAR]      │  ← Botão (HTML)
│ Amazon         │  ← Plataforma (HTML)
└─────────────────┘
```

---

### SEÇÃO DE CURSOS E LIVROS

```
Localização no HTML: Procure <section class="secao-digitais">
O que você pode mudar:
  • Título da seção
  • Plataformas (Amazon, Hotmart, etc)
  • Cards de cursos
  • Cores de fundo

Arquivo para mudar:
  • Textos: index.html
  • Cores/Tamanhos: styles.css
```

---

### RODAPÉ (Footer)

```
Localização no HTML: Procure <footer class="footer">
O que você pode mudar:
  • Textos de cada coluna
  • Links de redes sociais
  • Copyright
  • Cores

Arquivo para mudar:
  • Textos/Links: index.html
  • Cores: styles.css
```

---

## 🎯 LOCALIZAÇÃO RÁPIDA COM CTRL+F

| O que você quer mudar | Procure por        | Arquivo  |
| --------------------- | ------------------ | -------- |
| Logo                  | `logo-emoji`       | HTML/CSS |
| Título da página      | `<title>`          | HTML     |
| Menu de categorias    | `menu-categorias`  | HTML/CSS |
| Barra de busca        | `busca-barra`      | HTML/CSS |
| Cards de produtos     | `produtos-grid`    | HTML/CSS |
| Cursos e livros       | `secao-digitais`   | HTML/CSS |
| Rodapé                | `footer`           | HTML/CSS |
| Cor verde             | `--verde-floresta` | CSS      |
| Cor dourada           | `--dourado`        | CSS      |
| Tamanho de letra      | `font-size`        | CSS      |

---

## 🎨 CORES E ONDE MUDAM

### Se quer mudar a cor verde do site TODO:

```css
/* Arquivo: styles.css */
/* Localização: No início do arquivo, dentro de :root */

:root {
  --verde-floresta: #1b4d3e;  ← MUDE AQUI (verde escuro)
  --verde-medio: #2d5f4c;     ← MUDE AQUI (verde médio)
  --verde-claro: #4a7c5c;     ← MUDE AQUI (verde claro)
  --verde-suave: #e8f3ed;     ← MUDE AQUI (verde bem claro)
}
```

**Resultado**: Toda vez que o CSS usa `var(--verde-floresta)`, ele vai usar a cor nova!

---

### Se quer mudar apenas um botão específico:

Procure a classe do botão:

- `.menu-item` = Botões de filtro
- `.btn-comprar-card` = Botão comprar
- `.btn-busca` = Botão de busca

E mude:

```css
.btn-comprar-card {
  background: #FF0000;  ← Mude aqui
  color: white;
}
```

---

## 📱 COMO FICA EM CELULAR

```
COMPUTADOR (>768px)          CELULAR (<768px)
┌──────────────────┐         ┌──────────┐
│   4 CARDS       │         │ 2 CARDS │
│ por linha       │         │ por linha│
│                 │         │          │
│ Muitos cards... │         │ 1 card   │
│                 │         │ por linha│
└──────────────────┘         │ (pequeno)│
                             └──────────┘

COMPUTADOR:                  CELULAR:
┌───┐ ┌───┐ ┌───┐           ┌───────┐
│ 1 │ │ 2 │ │ 3 │           │ 1   2 │
├───┤ ├───┤ ├───┤           ├───────┤
│ 4 │ │ 5 │ │ 6 │           │ 3   4 │
└───┘ └───┘ └───┘           ├───────┤
                             │ 5   6 │
                             └───────┘
```

**Arquivo que controla**: `styles.css`, seção `@media`

---

## 🔧 COMO EDITAR CADA SEÇÃO

### EXEMPLO: Adicionar novo item ao header

**Passo 1**: Procure em HTML

```html
<div class="header-redes">
  <a class="header-rede-link" href="...">📺</a>
  <a class="header-rede-link" href="...">📷</a>
  <!-- ADICIONE AQUI -->
</div>
```

**Passo 2**: Copie e cole

```html
<a
  class="header-rede-link"
  href="https://twitter.com/seu-usuario"
  target="_blank"
>
  𝕏
</a>
```

**Pronto!** ✅

---

### EXEMPLO: Aumentar tamanho de um card

**Passo 1**: Procure em CSS

```css
.produtos-grid {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
}
```

**Passo 2**: Aumente o número

```css
.produtos-grid {
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));  ← Aumentou de 200 para 250
  gap: 15px;
}
```

**Resultado**: Cards ficam maiores! ✅

---

## 🎓 ANATOMIA DE UMA PÁGINA

```
index.html (Estrutura)
├── <head> (Cabeça - não aparece)
│   ├── Meta tags
│   ├── Título
│   ├── Link para CSS
│   └── Icone da aba
│
├── <body> (Corpo - aparece)
│   ├── <header> (Topo)
│   ├── <nav> (Menu)
│   ├── <main> (Conteúdo principal)
│   │   ├── Cards
│   │   ├── Filtros
│   │   └── Mais cards
│   ├── <section> (Seção de cursos)
│   └── <footer> (Rodapé)
│
└── <script src="script.js"> (Funcionalidades)

styles.css (Design)
├── Cores principais
├── Header
├── Menu
├── Cards
├── Rodapé
└── Versão móvel

script.js (Funcionalidades)
├── Carregamento de produtos
├── Filtros
├── Busca
└── Interações
```

---

## 🚀 CHECKLIST VISUAL

Antes de publicar, verifique:

- [ ] Header aparece correto?
- [ ] Logo (emoji) está visível?
- [ ] Links de redes sociais funcionam?
- [ ] Menu de categorias aparece?
- [ ] Barra de busca funciona?
- [ ] Cards estão com as imagens?
- [ ] Preços aparecem certos?
- [ ] Botão "Comprar" funciona?
- [ ] Seção de cursos aparece?
- [ ] Rodapé tem todas as informações?
- [ ] Em celular aparece bem?
- [ ] Sem erros no console (F12)?

---

## 🎯 FLUXO DE UMA EDIÇÃO

```
1. Identifique o que quer mudar
   ↓
2. Procure pela seção visual (header, cards, etc)
   ↓
3. Procure pelo arquivo (HTML = estrutura, CSS = design)
   ↓
4. Use Ctrl+F para localizar
   ↓
5. Faça a mudança
   ↓
6. Salve (Ctrl+S)
   ↓
7. Recarregue (Ctrl+F5)
   ↓
8. Verifique o resultado
   ↓
9. Pronto! ✅
```

---

## 📞 REFERÊNCIA RÁPIDA

**Mudar TEXTO**: `index.html`
**Mudar COR**: `styles.css`
**Mudar TAMANHO**: `styles.css`
**Mudar ESPAÇO**: `styles.css`
**Mudar BOTÃO**: `index.html` (texto) + `styles.css` (cor)
**Mudar FUNCIONALIDADE**: `script.js`

---

**Guia Visual Criado**: Abril 2026
**Próximo Passo**: Use este guia junto com COMECO_RAPIDO.md!
