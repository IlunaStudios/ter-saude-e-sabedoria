# 🎨 GUIA COMPLETO: Como Editar o CSS (Cores, Tamanhos e Design)

## 🎯 O que é CSS?

CSS é como o "design" e a "pintura" do seu site. É onde você controla:

- ✅ Cores
- ✅ Tamanhos (letras, botões, caixas)
- ✅ Espaçamentos e posições
- ✅ Sombras e efeitos
- ✅ Aparência em celular vs computador

**Analogia**: Se HTML é as paredes de uma casa, CSS é a pintura, o piso, os móveis e a decoração.

---

## 📋 Onde Encontrar o Arquivo

**Arquivo**: `styles.css`

Abra com:

- Bloco de Notas
- Visual Studio Code
- Notepad++
- Qualquer editor de texto

---

## 🌈 CORES DO SITE - COMECE AQUI!

No início do arquivo `styles.css`, você vai encontrar as cores principais:

```css
:root {
  --verde-floresta: #1b4d3e;
  --verde-medio: #2d5f4c;
  --verde-claro: #4a7c5c;
  --verde-suave: #e8f3ed;

  --dourado: #c9a227;
  --dourado-claro: #e0b745;
  --dourado-escuro: #a68520;

  --vermelho-oferta: #dc2626;
  --laranja-oferta: #ff9f00;
  --preto: #1a1a1a;
  --cinza-texto: #666666;
  --branco: #ffffff;
  --fundo: #f7f4ef;
}
```

**Para mudar a cor do site todo, mude AQUI**. Simples assim!

---

## 🔴 EXEMPLO 1: Mudar a Cor Principalogreen)

### Localize:

```css
--verde-floresta: #1b4d3e;
```

### Para mudar para azul:

```css
--verde-floresta: #0066cc;
```

### Cores em hexadecimal (formato `#XXXXXX`):

- `#FF0000` = Vermelho puro
- `#00FF00` = Verde puro
- `#0000FF` = Azul puro
- `#FFFF00` = Amarelo
- `#FF00FF` = Roxo
- `#000000` = Preto
- `#FFFFFF` = Branco

**Dica**: Procure por "HTML color picker" no Google para escolher cores visualmente.

---

## 🎨 EXEMPLO 2: Mudar Cor do Header (Barra do Topo)

Se quer mudar a cor da barra superior do site:

### Localize:

```css
.header {
  background: linear-gradient(
    125deg,
    #d4e9dd 0%,
    var(--verde-suave) 32%,
    #eef6f1 55%,
    var(--verde-suave) 100%
  );
}
```

### Mude para uma cor sólida (mais simples):

```css
.header {
  background: #1b4d3e;
}
```

**Ou mantenha o gradiente mas mude as cores**:

```css
.header {
  background: linear-gradient(
    125deg,
    #ff6b6b 0%,
    #ff8e8e 32%,
    #ffb5b5 55%,
    #ff8e8e 100%
  );
}
```

---

## 📏 EXEMPLO 3: Aumentar o Tamanho das Letras

### Localize o elemento que quer mudar. Por exemplo, títulos:

```css
.header-marca {
  ...
}

.logo-texto h1 {
  font-size: clamp(16px, 3.2vw, 22px);
  font-weight: 800;
  color: var(--verde-floresta);
}
```

### Para aumentar:

```css
.logo-texto h1 {
  font-size: clamp(20px, 5vw, 30px); /* Aumentou de 22px para 30px */
  font-weight: 800;
  color: var(--verde-floresta);
}
```

**Tamanhos de letra (em pixels)**:

- `12px` = muito pequeno
- `16px` = padrão (corpo de texto)
- `20px` = grande
- `32px` = muito grande (títulos)

---

## 🎁 EXEMPLO 4: Mudar Cor de um Botão

### Localize o botão:

```css
.btn-comprar-card {
  display: block;
  background: linear-gradient(
    135deg,
    var(--verde-floresta),
    var(--verde-medio)
  );
  color: white;
}
```

### Mude a cor de fundo:

```css
.btn-comprar-card {
  display: block;
  background: #ff6b6b; /* Novo fundo vermelho */
  color: white;
}
```

### Ou mude a cor do texto:

```css
.btn-comprar-card {
  display: block;
  background: linear-gradient(
    135deg,
    var(--verde-floresta),
    var(--verde-medio)
  );
  color: #ffd700; /* Texto dourado em vez de branco */
}
```

---

## 📦 EXEMPLO 5: Aumentar o Tamanho de um Card (Caixa de Produto)

### Localize:

```css
.card-produto {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid #eee;
  position: relative;
  cursor: pointer;
}
```

Cards não têm tamanho fixo, eles se adaptam. Mas você pode mudar a grade:

### Procure:

```css
.produtos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
}
```

### Para fazer cards maiores:

```css
.produtos-grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(250px, 1fr)
  ); /* 200px para 250px */
  gap: 15px;
}
```

**Aumentar o número = cards maiores**

---

## 🎨 EXEMPLO 6: Mudar Cor da Imagem de Fundo

### Localize:

```css
.card-img-area {
  height: 200px;
  overflow: hidden;
  background: #f5f5f5; /* Cor de fundo */
  position: relative;
}
```

### Mude para outra cor:

```css
.card-img-area {
  height: 200px;
  overflow: hidden;
  background: #e8f5e9; /* Verde claro */
  position: relative;
}
```

---

## 🔘 EXEMPLO 7: Mudar a Cor dos Botões de Filtro

### Localize:

```css
.menu-item {
  background: var(--fundo);
  border: none;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  border-radius: 6px;
  transition: all 0.2s;
  color: var(--cinza-texto);
}
```

### Mude a cor de fundo:

```css
.menu-item {
  background: #FFE5E5;  /* Rosa claro */
  border: none;
  padding: 8px 14px;
  ...
}
```

### Mude a cor quando o botão está ativo (selecionado):

```css
.menu-item.ativo {
  background: var(--verde-floresta); /* Mude aqui */
  color: white;
}
```

---

## 📏 EXEMPLO 8: Aumentar Espaçamento (Padding)

Padding = espaço DENTRO de uma caixa

### Localize:

```css
.card-info {
  padding: 12px;
}
```

### Aumentar o espaço interno:

```css
.card-info {
  padding: 20px; /* Aumentou de 12px para 20px */
}
```

**Aumentar o número = mais espaço vazio dentro**

---

## 📏 EXEMPLO 9: Aumentar Espaçamento Entre Elementos (Margin)

Margin = espaço FORA de uma caixa (ao redor dela)

### Localize:

```css
.header {
  padding: 14px 20px;
  display: flex;
  ...
}
```

### Adicione margin se não tiver:

```css
.header {
  padding: 14px 20px;
  margin: 10px 0;  /* 10px em cima e embaixo, 0 nos lados */
  display: flex;
  ...
}
```

---

## 🔷 EXEMPLO 10: Mudar Borda (Border)

### Localize:

```css
.card-produto {
  border: 1px solid #eee;
}
```

### Para mudar a cor da borda:

```css
.card-produto {
  border: 2px solid #ff6b6b; /* Vermelho mais grosso */
}
```

**Números**:

- `1px` = fino
- `2px` = médio
- `3px` = grosso
- `5px` = muito grosso

---

## 🌟 EXEMPLO 11: Adicionar Sombra (Shadow)

### Localize:

```css
.card-produto:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
}
```

### Mude a sombra:

```css
.card-produto:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25); /* Sombra maior e mais escura */
}
```

---

## 🎯 EXEMPLO 12: Mudar Cor do Preço (Destaque)

### Localize:

```css
.preco-atual {
  font-size: 20px;
  font-weight: 900;
  color: var(--vermelho-oferta); /* Vermelho atual */
}
```

### Mude a cor:

```css
.preco-atual {
  font-size: 20px;
  font-weight: 900;
  color: #00aa00; /* Verde em vez de vermelho */
}
```

---

## 📱 EXEMPLO 13: Mudar Tamanho em Celular (Mobile)

Se quer algo diferente em celular, procure por:

```css
@media (max-width: 768px) {
  .produtos-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
}
```

Isso significa: "Em telas com menos de 768px de largura (celulares), use 2 colunas"

---

## 🔴 ERROS COMUNS NO CSS

### ❌ Erro 1: Esquecer ponto-e-vírgula

```css
/* ERRADO */
color: red
background: blue;

/* CORRETO */
color: red;
background: blue;
```

### ❌ Erro 2: Cor em formato errado

```css
/* ERRADO */
color: #GGGGGG; /* G não é número/letra válida */
color: red-claro; /* Não existe assim */

/* CORRETO */
color: #ff0000;
color: rgb(255, 0, 0);
```

### ❌ Erro 3: Esquecer as chaves

```css
/* ERRADO */
.button
  color: white;
  background: blue;
}

/* CORRETO */
.button {
  color: white;
  background: blue;
}
```

---

## 🎨 PALETA DE CORES RECOMENDADAS

### Verde (natural/saúde):

- `#1b4d3e` = verde escuro
- `#2d5f4c` = verde médio
- `#4a7c5c` = verde claro
- `#e8f3ed` = verde bem claro (fundo)

### Dourado (destaque/luxo):

- `#c9a227` = dourado
- `#e0b745` = dourado claro
- `#a68520` = dourado escuro

### Vermelhos (oferta/promoção):

- `#dc2626` = vermelho oferta
- `#ff9f00` = laranja oferta

### Cinzas (texto/neutro):

- `#1a1a1a` = preto
- `#666666` = cinza texto
- `#999999` = cinza claro
- `#ffffff` = branco

---

## 💾 DEPOIS DE EDITAR CSS

1. **Salve o arquivo** (Ctrl+S)
2. **Abra o navegador** e acesse o site
3. **Limpe o cache** (Ctrl+F5 ou Ctrl+Shift+R)
4. **Veja as mudanças aparecerem**

---

## 🌐 FERRAMENTAS ÚTEIS

- **Color Picker**: Google "HTML color picker"
- **Shadow Generator**: Google "box shadow generator"
- **Font Size**: Google "CSS font size em converter"

---

## 📋 CHECKLIST PARA EDITAR CSS

- [ ] Abri o arquivo `styles.css`
- [ ] Procurei a classe/elemento com Ctrl+F
- [ ] Copiei o CSS original (backup mental)
- [ ] Fiz minha edição
- [ ] Verifiquei que não deletei chaves ou ponto-e-vírgula
- [ ] Verificei a cor em formato correto (#XXXXXX ou rgb)
- [ ] Salvei com Ctrl+S
- [ ] Limpei o cache com Ctrl+F5
- [ ] Vi que a mudança funcionou no navegador

---

## 🎓 Resumo Rápido - CSS

| O que quer fazer       | O que procurar                    | O que mudar             |
| ---------------------- | --------------------------------- | ----------------------- |
| Mudar cor              | `color: ...` ou `background: ...` | O valor da cor          |
| Aumentar texto         | `font-size: ...`                  | De `16px` para `24px`   |
| Aumentar caixa         | `padding: ...`                    | De `12px` para `20px`   |
| Mudar espaço entre     | `gap: ...` ou `margin: ...`       | De `15px` para `20px`   |
| Mudar borda            | `border: ...`                     | `1px` para `3px` ou cor |
| Adicionar sombra       | `box-shadow: ...`                 | Aumentar os valores     |
| Efeito ao passar mouse | `:hover`                          | Adicionar propriedades  |
| Adaptar celular        | `@media`                          | Mudar tamanhos          |

---

## 📞 Dúvidas?

Se não tiver certeza:

1. Use Ctrl+F para procurar a classe
2. Teste a mudança
3. Se ficar estranho, desfaça com Ctrl+Z
4. O navegador sempre mostra o resultado!

**Lembre-se**: CSS é visual, então você vê a mudança IMEDIATAMENTE no navegador!
