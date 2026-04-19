# 🔧 GUIA COMPLETO: Como Editar o JavaScript (Funcionalidades)

## 🎯 O que é JavaScript?

JavaScript é como o "motor" ou "inteligência" do seu site. É onde acontecem as ações:

- ✅ Botões que fazem coisas
- ✅ Filtros que funcionam
- ✅ Busca por produtos
- ✅ Carregar dados do Google Sheets
- ✅ Interações com cliques

**Analogia**: Se HTML é as paredes e CSS é a pintura, JavaScript é a eletricidade que faz as luzes acenderem e as portas abrirem.

---

## 📋 Onde Encontrar o Arquivo

**Arquivo**: `script.js`

Abra com:

- Bloco de Notas
- Visual Studio Code
- Notepad++
- Qualquer editor de texto

---

## 🎯 PARTE MAIS IMPORTANTE: ID DA PLANILHA

No início do arquivo, você vai encontrar:

```javascript
const SHEET_ID = "1_q-q_pin_Uj2RSEa2FIKCvsuKoF80WLcMHtoyKn4qVA";
```

**Este é o ID da sua planilha Google Sheets.** Se você criou uma planilha própria, MUDE AQUI!

### Como obter o ID da sua planilha:

1. Abra sua planilha no Google Sheets
2. Olhe a URL: `https://docs.google.com/spreadsheets/d/1ABC123XYZ.../edit`
3. O ID é tudo entre `/d/` e `/edit`
4. Copie e substitua no script

### Exemplo:

```javascript
/* ANTES */
const SHEET_ID = "1_q-q_pin_Uj2RSEa2FIKCvsuKoF80WLcMHtoyKn4qVA";

/* DEPOIS - sua planilha */
const SHEET_ID = "1meuIDdaplanilha123456789ABCDEFG";
```

---

## ⚠️ IMPORTANTE - AVISO SOBRE JAVASCRIPT

**⚠️ Alterar JavaScript é MAIS ARRISCADO do que HTML e CSS:**

- Um simples erro pode quebrar todo o site
- Os filtros podem parar de funcionar
- Os produtos podem não carregar

**Se não tiver certeza, NÃO MEXA. Apenas mude:**

1. O ID da planilha
2. Mensagens de texto simples
3. Links de afiliados

---

## 🔴 EXEMPLO 1: Mudar a Planilha Google Sheets

### Localize (está no INÍCIO do arquivo):

```javascript
const SHEET_ID = "1_q-q_pin_Uj2RSEa2FIKCvsuKoF80WLcMHtoyKn4qVA";
```

### Mude para sua planilha:

```javascript
const SHEET_ID = "1meuIDdaplanilha123456789ABCDEFG";
```

**Isso vai mudar a fonte de dados do site.**

---

## 🔗 EXEMPLO 2: Adicionar um Novo Link de Afiliado

Se quer adicionar um novo link de afiliado (como Amazon, Shopee, etc):

### Procure a seção de plataformas. Por exemplo:

```javascript
const PLATFORMS = {
  Amazon: { id: "Amazon", url: "https://amazon.com/s?k=" },
  Shopee: { id: "Shopee", url: "https://shopee.com.br/search?keyword=" },
  "Mercado Livre": {
    id: "MercadoLivre",
    url: "https://lista.mercadolivre.com.br/...",
  },
};
```

### Adicione um novo:

```javascript
const PLATFORMS = {
  Amazon: { id: "Amazon", url: "https://amazon.com/s?k=" },
  Shopee: { id: "Shopee", url: "https://shopee.com.br/search?keyword=" },
  "Mercado Livre": {
    id: "MercadoLivre",
    url: "https://lista.mercadolivre.com.br/...",
  },
  AliExpress: {
    id: "AliExpress",
    url: "https://www.aliexpress.com/wholesale?keyword=",
  },
};
```

**Aviso**: Deixe o formato EXATAMENTE igual!

---

## 🏷️ EXEMPLO 3: Mudar Mensagens de Erro ou Sucesso

### Procure textos simples entre aspas:

```javascript
console.log("Carregando produtos...");
```

### Mude a mensagem:

```javascript
console.log("Aguarde, estamos buscando os produtos...");
```

**⚠️ Atenção**: Nunca delete as aspas!

---

## 🔍 EXEMPLO 4: Entender Uma Função (Sem Precisar Mudar)

Quando você vê algo assim:

```javascript
function applyFilters() {
  // Código aqui
}
```

Significa: "Quando alguém clica em um filtro, execute este código"

**Você NÃO precisa entender o que está dentro das chaves `{}`**. Apenas saiba que é uma instrução automática.

---

## 🎯 EXEMPLO 5: Adicionar um Novo Filtro de Categoria

Se quer adicionar uma nova categoria (como "Yoga" ou "Nutrição"):

### Procure a seção de categorias:

```javascript
const CATEGORIES = ["Saúde", "Beleza", "Fitness"];
```

### Adicione a sua:

```javascript
const CATEGORIES = ["Saúde", "Beleza", "Fitness", "Yoga"];
```

**Depois**: no HTML, adicione um botão com essa categoria (veja o guia de HTML).

---

## 🔴 PARTE PERIGOSA - O QUE NÃO MEXER

Esses trechos são CRÍTICOS. Se mexer, o site quebra:

### ❌ NÃO mude:

```javascript
async function loadProducts() { ... }  /* Carrega produtos */
function applyFilters() { ... }        /* Filtros funcionam */
function updateUI() { ... }            /* Interface atualiza */
```

### ✅ VOCÊ PODE mudar dentro destas funções:

```javascript
console.log("Mensagem aqui"); /* Mensagens de texto */
```

---

## 📝 EXEMPLO 6: Mudar um Valor Numérico

Se encontrar:

```javascript
const MAX_PRODUCTS = 100;
```

Pode mudar para:

```javascript
const MAX_PRODUCTS = 200; /* Mostra 200 produtos em vez de 100 */
```

---

## 🔗 EXEMPLO 7: Mudar URLs de Links

### Procure por URLs dentro de aspas:

```javascript
window.location.href = "https://www.youtube.com/seu-canal";
```

### Mude para seu link:

```javascript
window.location.href = "https://www.youtube.com/@seucanalofficial";
```

---

## 🌐 EXEMPLO 8: Ativar ou Desativar um Recurso

Às vezes há comentários como:

```javascript
// const FEATURE_ATIVA = true;
```

A `//` no início significa que está "comentado" (desligado).

### Para ligar:

```javascript
const FEATURE_ATIVA = true;
```

### Para desligar:

```javascript
// const FEATURE_ATIVA = true;
```

---

## ⚠️ ERROS COMUNS EM JAVASCRIPT

### ❌ Erro 1: Deletar chaves

```javascript
/* ERRADO */
function minha_funcao(
  // código aqui
)

/* CORRETO */
function minha_funcao() {
  // código aqui
}
```

### ❌ Erro 2: Deletar aspas

```javascript
/* ERRADO */
const meu_texto = Olá mundo;

/* CORRETO */
const meu_texto = "Olá mundo";
```

### ❌ Erro 3: Deletar ponto-e-vírgula

```javascript
/* ERRADO */
const SHEET_ID = "1ABC123";
console.log("Teste");

/* CORRETO */
const SHEET_ID = "1ABC123";
console.log("Teste");
```

### ❌ Erro 4: Deletar parênteses

```javascript
/* ERRADO */
function applyFilters {
  // código
}

/* CORRETO */
function applyFilters() {
  // código
}
```

---

## 🔧 COMO SABER SE DEU ERRO?

Quando você abre o site e algo não funciona:

### Passo 1: Abra a aba "Ferramentas" do navegador

- Aperte **F12** no teclado
- Ou clique com botão direito > "Inspecionar"

### Passo 2: Vá na aba "Console"

- Ali aparecerão mensagens de erro em vermelho

### Passo 3: Leia o erro

- Geralmente diz qual é o problema

### Exemplo de erro:

```
Uncaught SyntaxError: Unexpected token '}' at line 45
```

Significa: "Tem um símbolo extra } na linha 45"

---

## 💾 DEPOIS DE EDITAR JAVASCRIPT

1. **Salve o arquivo** (Ctrl+S)
2. **Abra o navegador** e acesse o site
3. **Limpe o cache** (Ctrl+F5)
4. **Veja se funcionou**
5. **Se quebrou, abra F12 para ver o erro**

---

## 🛟 SE O SITE QUEBROU

### Passo 1: Desfaça a mudança

- Ctrl+Z para desfazer
- Ou reabra o arquivo sem salvar

### Passo 2: Salve novamente

- Ctrl+S

### Passo 3: Recarregue o site

- Ctrl+F5

### Passo 4: Verifique o console (F12)

- Veja se tem mensagens de erro

---

## 📋 COISAS QUE VOCÊ PODE MUDAR COM SEGURANÇA

✅ ID da planilha Google Sheets
✅ Mensagens de texto entre aspas
✅ URLs e links
✅ Números simples (MAX_PRODUCTS, etc)
✅ Comentários (linhas que começam com //)

---

## 🚫 COISAS QUE NÃO DEVE MUDAR

❌ Nomes de funções
❌ Chaves `{}`
❌ Parênteses `()`
❌ Estrutura interna das funções
❌ Arrays `[...]` a menos que saiba o que faz
❌ Objetos `{...}` a menos que saiba o que faz

---

## 🎯 AS 3 REGRAS OURO DE JAVASCRIPT

### Regra 1: Respeite a Sintaxe

- Toda abertura tem fechamento
- `{` precisa de `}`
- `(` precisa de `)`
- `"` precisa de `"`

### Regra 2: Não Delete Estrutura

- Não delete chaves, parênteses ou aspas
- Só mude o CONTEÚDO

### Regra 3: Teste Imediatamente

- Após editar, recarregue o site
- Veja se funcionou
- Se quebrou, desfaça

---

## 📞 Dúvidas?

**Regra simples**: Se não tiver CERTEZA 100%, não mude. JavaScript é como o motor de um carro - mexer sem saber pode quebrar tudo!

---

## 📚 RESUMO - O QUE VOCÊ REALMENTE PRECISA SABER

1. **ID da Planilha** = O ÚNICO LUGAR importante para mudar
2. **Mensagens de texto** = Mude entre aspas se precisar
3. **Links** = Mude URLs entre aspas
4. **Tudo mais** = Deixe como está!

Se seguir essas 3 regras, seu site vai funcionar bem!
