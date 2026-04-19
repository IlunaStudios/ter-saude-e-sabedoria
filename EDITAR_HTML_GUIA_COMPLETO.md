# 📘 GUIA COMPLETO: Como Editar o HTML (Estrutura da Página)

## 🎯 O que é HTML?

HTML é como o "esqueleto" do seu site. É onde você coloca:

- ✅ Títulos e textos
- ✅ Imagens
- ✅ Botões e links
- ✅ Caixas e seções
- ✅ Campos de busca

**Analogia**: Se o site fosse uma casa, o HTML seria as paredes, portas, janelas e móveis. O CSS seria a pintura e o design.

---

## 📋 Onde Encontrar o Arquivo

**Arquivo**: `index.html`

Abra com:

- Bloco de Notas
- Visual Studio Code
- Notepad++
- Qualquer editor de texto

---

## 🔴 IMPORTANTE - REGRAS BÁSICAS

### ❌ NÃO faça isso:

```
Digite aqui
```

### ✅ FAÇA assim:

- Abra o arquivo e procure o texto exato
- Use Ctrl+F para procurar
- Mude APENAS o texto, não as tags

---

## 📝 ESTRUTURA BÁSICA DO HTML

```html
<tag atributo="valor"> Conteúdo aqui </tag>
```

**Partes importantes**:

- `<tag>` = abre a instrução
- `</tag>` = fecha a instrução
- Tudo precisa abrir E fechar!

---

## 🎨 EXEMPLO 1: Mudar um Título

### Localize no arquivo:

```html
<h1>Ter Saúde e Sabedoria | Produtos Selecionados</h1>
```

### Para mudar para outro título:

```html
<h1>Minha Loja de Produtos Incríveis</h1>
```

**Importante**: Mude APENAS o texto (entre `>` e `</h1>`)

---

## 🔗 EXEMPLO 2: Adicionar ou Mudar um Link

### Localize:

```html
<a href="https://www.youtube.com/">Youtube</a>
```

### Para mudar o link:

```html
<a href="https://www.seusite.com/">Seu Site</a>
```

**O que muda**:

- `href="..."` = o link
- O texto depois = o que aparece no site

---

## 🖼️ EXEMPLO 3: Mudar uma Imagem

### Localize:

```html
<img src="imagem.jpg" alt="Descrição" />
```

### Para mudar a imagem:

```html
<img src="nova-imagem.png" alt="Nova descrição" />
```

**Importante**:

- A imagem precisa estar no computador
- Use o caminho correto: `pasta/imagem.jpg`

---

## 📱 EXEMPLO 4: Adicionar um Novo Texto

### Se quiser adicionar texto em uma seção, procure a seção:

```html
<section class="secao-digitais">
  <h2>Cursos e Livros</h2>
  <p>Descrição aqui</p>
</section>
```

### Adicione uma nova linha:

```html
<section class="secao-digitais">
  <h2>Cursos e Livros</h2>
  <p>Descrição aqui</p>
  <p>Novo texto adicionado aqui</p>
</section>
```

**Dica**: Sempre adicione DENTRO das `<section>` corretas.

---

## 🔍 EXEMPLO 5: Mudar Texto de um Botão

### Localize:

```html
<a class="btn-comprar-card" href="#">Comprar Agora</a>
```

### Para mudar para:

```html
<a class="btn-comprar-card" href="#">Ver Oferta</a>
```

---

## 🏷️ EXEMPLO 6: Adicionar uma Categoria Nova

Se quer adicionar uma nova categoria de filtro:

### Localize a linha de categorias:

```html
<button class="menu-item ativo">🏥 Saúde</button>
<button class="menu-item">💄 Beleza</button>
<button class="menu-item">💪 Fitness</button>
```

### Adicione uma nova:

```html
<button class="menu-item ativo">🏥 Saúde</button>
<button class="menu-item">💄 Beleza</button>
<button class="menu-item">💪 Fitness</button>
<button class="menu-item">🧘 Yoga</button>
```

**Importante**: Use o mesmo formato!

---

## 📦 EXEMPLO 7: Adicionar uma Seção Inteira (Caixa Grande)

Se quer adicionar uma nova seção grande (como a de "Cursos e Livros"):

### Procure o final da página (antes de `</body>`):

```html
  </footer>
</body>
</html>
```

### Adicione sua nova seção ANTES de `</body>`:

```html
  <section class="nova-secao">
    <div class="titulo-secao">
      <h2>🎓 Minha Nova Seção</h2>
    </div>
    <div class="conteudo-secao">
      <p>Coloque seu conteúdo aqui</p>
    </div>
  </section>

  </footer>
</body>
</html>
```

---

## 🔗 EXEMPLO 8: Adicionar um Novo Link nas Redes Sociais (Header)

### Localize a seção de redes sociais:

```html
<div class="header-redes">
  <a class="header-rede-link" href="https://youtube.com" target="_blank">
    📺
  </a>
  <a class="header-rede-link" href="https://instagram.com" target="_blank">
    📷
  </a>
</div>
```

### Adicione um novo link:

```html
<div class="header-redes">
  <a class="header-rede-link" href="https://youtube.com" target="_blank">
    📺
  </a>
  <a class="header-rede-link" href="https://instagram.com" target="_blank">
    📷
  </a>
  <a class="header-rede-link" href="https://twitter.com" target="_blank"> 𝕏 </a>
</div>
```

---

## 📝 EXEMPLO 9: Mudar o Texto do Rodapé (Footer)

### Localize a seção de footer:

```html
<footer class="footer">
  <div class="footer-conteudo">
    <div class="footer-col">
      <h4>Sobre Nós</h4>
      <p>Seu texto aqui</p>
    </div>
  </div>
</footer>
```

### Mude o texto:

```html
<footer class="footer">
  <div class="footer-conteudo">
    <div class="footer-col">
      <h4>Sobre Nós</h4>
      <p>Somos uma loja de produtos de saúde</p>
    </div>
  </div>
</footer>
```

---

## 🎨 EXEMPLO 10: Adicionar um Emoji ou Ícone

### Simplesmente copie e cole um emoji:

```html
<h2>🌿 Ter Saúde e Sabedoria</h2>
```

**Emojis úteis**:

- 🌿 = natureza/saúde
- 💚 = coração verde
- ✨ = brilho/destaque
- 🎁 = promoção
- ⭐ = estrela

---

## 🔴 ERROS COMUNS A EVITAR

### ❌ Erro 1: Esquecer de fechar tags

```html
<!-- ERRADO -->
<p>Meu texto</p>
<p>Outro texto</p>

<!-- CORRETO -->
<p>Meu texto</p>
<p>Outro texto</p>
```

### ❌ Erro 2: Deletar aspas

```html
<!-- ERRADO -->
<a href=https://google.com>Google</a>

<!-- CORRETO -->
<a href="https://google.com">Google</a>
```

### ❌ Erro 3: Adicionar texto fora de tags

```html
<!-- ERRADO -->
<div>Meu texto solto aqui</div>

<!-- CORRETO -->
<div>
  <p>Meu texto aqui</p>
</div>
```

---

## 💾 DEPOIS DE EDITAR

1. **Salve o arquivo** (Ctrl+S)
2. **Abra o navegador** e acesse o arquivo
3. **Recarregue a página** (Ctrl+F5)
4. **Veja as mudanças**

---

## 🆘 O Site Quebrou Depois de Editar?

### Passo 1: Procure por linhas vermelhas/erros

- Se vir alguma mensagem de erro no navegador, screenshot e me manda

### Passo 2: Desfaça a mudança

- Ctrl+Z para desfazer
- Ou volte o código anterior

### Passo 3: Salve novamente

- Ctrl+S

---

## 📋 CHECKLIST PARA EDITAR HTML

- [ ] Abri o arquivo `index.html`
- [ ] Procurei o texto exato com Ctrl+F
- [ ] Copiei o texto original (para backup)
- [ ] Fiz minha edição
- [ ] Verifiquei que abri e fechei todas as tags
- [ ] Verifiquei que não deletei aspas ou símbolos
- [ ] Salvei com Ctrl+S
- [ ] Recarreguei o navegador com Ctrl+F5
- [ ] Vi que a mudança funcionou

---

## 🎓 Resumo Rápido

| O que quer fazer     | O que procurar           | O que mudar               |
| -------------------- | ------------------------ | ------------------------- |
| Mudar título         | `<h1>Texto</h1>`         | Apenas o texto            |
| Mudar cor (via HTML) | Não se faz no HTML       | Veja EDITAR_CSS           |
| Adicionar link       | `<a href="">Texto</a>`   | O URL e o texto           |
| Adicionar imagem     | `<img src="">`           | O caminho da imagem       |
| Adicionar botão      | `<button>Texto</button>` | O texto do botão          |
| Adicionar seção      | Procure `</body>`        | Adicione antes de fechar  |
| Mudar estrutura      | Use `<div>` com cuidado  | Abra e feche corretamente |

---

## 📞 Dúvidas?

Se não tiver certeza:

1. Faça backup do arquivo original
2. Experimente a mudança
3. Se quebrar, desfaça com Ctrl+Z
4. Não tem problema em tentar!

**Lembre-se**: o HTML é como um receita - se esquecer de um ingrediente ou fechar a panela, a receita pode não funcionar!
