# ❓ PERGUNTAS FREQUENTES & SOLUÇÕES

## 🎯 Uso: Leia este arquivo quando tiver problemas!

---

## 📌 SEÇÃO 1: EDIÇÕES COMUNS

### P: Como mudo o título do site?

**R**:

1. Abra `index.html`
2. Procure com Ctrl+F: `<title>Ter Saúde e Sabedoria`
3. Mude apenas o texto dentro das tags
4. Salve (Ctrl+S)
5. Recarregue (Ctrl+F5)

**Exemplo**:

```html
<!-- ANTES -->
<title>Ter Saúde e Sabedoria | Produtos Selecionados</title>

<!-- DEPOIS -->
<title>Minha Loja Incrível | Compre Agora</title>
```

---

### P: Como mudo a cor verde do site para azul?

**R**:

1. Abra `styles.css`
2. Procure com Ctrl+F: `--verde-floresta: #1b4d3e;`
3. Mude `#1b4d3e` para `#0066cc` (azul)
4. Salve (Ctrl+S)
5. Recarregue (Ctrl+F5)

**Dica**: Todas as cores estão no início do arquivo, na seção `:root`

---

### P: Como aumento o tamanho das letras?

**R**:

1. Abra `styles.css`
2. Procure: `font-size:`
3. Mude o número (ex: `16px` para `24px`)
4. Maior número = letra maior
5. Salve e recarregue

**Exemplo**:

```css
/* ANTES */
.nome-produto {
  font-size: 14px;
}

/* DEPOIS */
.nome-produto {
  font-size: 20px; /* Maior */
}
```

---

### P: Como adiciono um novo botão?

**R**:

1. Abra `index.html`
2. Procure uma seção com `<button>` similar
3. Copie todo o `<button>...</button>`
4. Cole embaixo
5. Mude apenas o texto dentro
6. Salve e recarregue

**Formato**:

```html
<button class="menu-item">🏷️ Novo Botão</button>
```

---

### P: Como mudo a cor de um botão?

**R**:

1. Abra `styles.css`
2. Procure a classe do botão: `.menu-item` ou `.btn-comprar-card`
3. Procure por `background:` ou `color:`
4. Mude a cor
5. Salve e recarregue

**Exemplo**:

```css
.btn-comprar-card {
  background: #ff6b6b; /* Novo fundo vermelho */
  color: white; /* Texto branco */
}
```

---

### P: Como adiciono um novo link nas redes sociais?

**R**:

1. Abra `index.html`
2. Procure: `<div class="header-redes">`
3. Procure um `<a class="header-rede-link"` existente
4. Copie e cole ao lado
5. Mude o `href="..."` com seu link
6. Mude o emoji
7. Salve e recarregue

**Exemplo**:

```html
<a
  class="header-rede-link"
  href="https://twitter.com/seuusuario"
  target="_blank"
>
  𝕏
</a>
```

---

### P: Como mudo a planilha Google Sheets?

**R**:

1. Crie uma planilha sua no Google Sheets
2. Abra `script.js`
3. Procure: `const SHEET_ID = `
4. Pegue o ID da URL: `https://docs.google.com/spreadsheets/d/ID_AQUI/edit`
5. Substitua o ID
6. Salve e recarregue

**Exemplo**:

```javascript
/* ANTES */
const SHEET_ID = "1_q-q_pin_Uj2RSEa2FIKCvsuKoF80WLcMHtoyKn4qVA";

/* DEPOIS */
const SHEET_ID = "1meuID1234567890abcdefghij";
```

---

## 🔴 SEÇÃO 2: PROBLEMAS E SOLUÇÕES

### P: O site não carrega produtos!

**Possíveis causas**:

#### Causa 1: Planilha Google Sheets privada

- [ ] Abra sua planilha no Google Sheets
- [ ] Clique em "Compartilhar"
- [ ] Mude para "Qualquer pessoa com o link pode acessar"
- [ ] Salve

#### Causa 2: ID da planilha errado

- [ ] Abra `script.js`
- [ ] Verifique se o `SHEET_ID` está correto
- [ ] Copie novamente da URL

#### Causa 3: Abas da planilha com nome errado

- [ ] Suas abas devem se chamar: `Amazon`, `Shopee`, `MercadoLivre`
- [ ] Se tiverem outros nomes, não carregam

#### Solução rápida:

```
1. Abra F12 (console do navegador)
2. Procure por mensagens de erro em vermelho
3. Leia a mensagem de erro
4. Me manda a mensagem para eu ajudar
```

---

### P: Os filtros não funcionam!

**Possíveis causas**:

#### Causa 1: Arquivo `script.js` não carregou

- [ ] Abra F12
- [ ] Procure por erros em vermelho
- [ ] Se ver erro sobre `script.js`, é aqui

#### Causa 2: Erro na sintaxe do `script.js`

- [ ] Se editou `script.js`, desfaça (Ctrl+Z)
- [ ] Procure por chaves/parênteses/aspas faltando

#### Solução rápida:

1. Recarregue com Ctrl+F5 (limpando cache)
2. Abra F12
3. Veja se tem erros vermelhos
4. Se tiver, desfaça a última edição

---

### P: O site dá erro 404 no GitHub Pages!

**Possíveis causas**:

#### Causa 1: Pages ainda não foi ativado

- [ ] Vá em Settings do repositório
- [ ] Procure por Pages
- [ ] Escolha "Deploy from a branch"
- [ ] Branch: `main`
- [ ] Folder: `/ (root)`
- [ ] Clique em Save

#### Causa 2: Arquivos não estão na raiz

- [ ] `index.html` deve estar na raiz do repositório
- [ ] Não dentro de uma pasta

#### Causa 3: GitHub Pages ainda está processando

- [ ] Aguarde 5-10 minutos
- [ ] Recarregue a página com Ctrl+F5

#### Causa 4: Nome errado do arquivo principal

- [ ] O arquivo deve se chamar `index.html`
- [ ] Não pode ser `index.HTML` ou outro nome

---

### P: A cor mudou mas está estranha!

**Possíveis causas**:

#### Causa 1: Código de cor inválido

- [ ] Verifique se usa formato `#XXXXXX`
- [ ] Ex: `#FF0000` (correto)
- [ ] Ex: `#GGGGGG` (incorreto - G não existe)

#### Causa 2: Cache do navegador

- [ ] Aperte Ctrl+Shift+R (limpeza dura)
- [ ] Ou abra em modo privado (Ctrl+Shift+P)

#### Solução:

```css
/* CORRETO */
color: #ff0000;
background: #ffffff;

/* ERRADO */
color: #GG0000;
background: red-claro;
```

---

### P: Ao clicar em um botão, nada acontece!

**Possíveis causas**:

#### Causa 1: Arquivo `script.js` tem erro

- [ ] Abra F12
- [ ] Veja erros em vermelho
- [ ] Desfaça edições recentes

#### Causa 2: Função foi deletada ou danificada

- [ ] Se editou `script.js`, desfaça

#### Causa 3: Classe CSS errada

- [ ] Verifique se o botão tem a classe correta
- [ ] Ex: `class="btn-comprar-card"`

---

### P: A página fica distorcida em celular!

**Possível causa**:

Você mudou algo em CSS que afeta celular

**Solução**:

1. Abra `styles.css`
2. Procure por `@media (max-width: 768px)`
3. Verifique as mudanças ali
4. Ou desfaça para o padrão

---

## 🟢 SEÇÃO 3: COMO DESFAZER MUDANÇAS

### Opção 1: Desfazer rápido

```
Ctrl+Z (enquanto o arquivo ainda está aberto)
```

### Opção 2: Fechar sem salvar

```
1. Abra o arquivo no editor
2. Aperte Ctrl+W (fecha o arquivo)
3. Clique em "Don't Save" (não salvar)
4. O arquivo volta ao original
```

### Opção 3: Restaurar do GitHub

```
1. Abra o arquivo no navegador em GitHub
2. Clique em "Raw"
3. Copie o conteúdo original
4. Cole no seu arquivo local
5. Salve
```

---

## 🔍 SEÇÃO 4: COMO DEBUGAR (Encontrar Problemas)

### Passo 1: Abra o Console do Navegador

```
Clique com botão direito no site
> Inspecionar
Ou aperte F12
Vá na aba "Console"
```

### Passo 2: Procure por erros em vermelho

- Qualquer texto em vermelho = erro
- Leia a mensagem (geralmente diz o que está errado)

### Passo 3: Anote o erro

- Anote a linha e a mensagem
- Me manda para eu ajudar

### Exemplo de mensagem de erro:

```
Uncaught SyntaxError: Unexpected token '}' at line 45
Significa: Tem um símbolo } extra na linha 45
```

---

## 📱 SEÇÃO 5: TESTANDO NO CELULAR

### Passo 1: Abra o arquivo localmente

```
1. Clique com botão direito em index.html
2. Escolha "Abrir com" > Navegador
```

### Passo 2: Abra em outro dispositivo na mesma rede

```
1. No computador, procure o IP: Cmd > ipconfig
2. Procure por "IPv4 Address": ex 192.168.1.100
3. No celular, abra: http://192.168.1.100/index.html
```

### Passo 3: Verifique a aparência

- Títulos aparecem certo?
- Produtos estão visíveis?
- Botões funcionam?

---

## 🎓 SEÇÃO 6: CHECKLIST ANTES DE PUBLICAR

- [ ] Todos os textos estão corretos?
- [ ] As cores estão como você quer?
- [ ] Os botões funcionam quando clica?
- [ ] Os filtros funcionam?
- [ ] Os produtos aparecem?
- [ ] Abriu o site em F12 e não tem erros vermelhos?
- [ ] Testou em celular e vê bem?
- [ ] O GitHub Pages está publicado?
- [ ] A URL está acessível?

---

## 📞 SEÇÃO 7: QUANDO CHAMAR AJUDA

Se você chegou aqui e ainda tem problema:

1. **Tire um print** do erro (F12 > Console)
2. **Anote qual arquivo editou** (HTML/CSS/JS)
3. **Descreva o que tentou fazer**
4. **Me mande tudo** para eu analisar

---

## 🆘 ULTRA RÁPIDO - ERROS MAIS COMUNS

| Problema              | Solução                      |
| --------------------- | ---------------------------- |
| Site não carrega      | Recarregue com Ctrl+F5       |
| Cores estranhas       | Verifique formato #XXXXXX    |
| Botões não funcionam  | Abra F12 procure erros       |
| Produtos não aparecem | Verifique planilha é pública |
| Texto sumiu           | Ctrl+Z para desfazer         |
| GitHub Pages 404      | Ative Pages em Settings      |
| Arquivo corrompido    | Desfaça com Ctrl+Z           |
| Não sabe qual arquivo | Procure GUIA_DE_INDICE.md    |

---

**Lembre-se**: Quase todo problema tem solução! Se ficar perdido, volte aos guias e procure pelo seu problema! 🎉
