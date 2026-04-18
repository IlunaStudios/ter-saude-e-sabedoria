# 🌿 Ter Saúde e Sabedoria - Site de Afiliados

## 📁 Estrutura dos Arquivos

Esta pasta contém todos os arquivos necessários para o site funcionar:

- `index.html` - Estrutura principal do site
- `styles.css` - Todas as estilizações CSS
- `script.js` - Funcionalidades JavaScript
- `MANUAL_COMPLETO_EDITAR_HTML.md` - Guia completo para edições
- `GUIA_VISUAL_EDICOES_HTML.csv` - Guia visual organizado por abas
- `GUIA_COMPLETO_EDITAR_HTML.xlsx` - Versão Excel do guia

## 🚀 Como Fazer Deploy no GitHub Pages

### Passo 1: Criar Repositório no GitHub
1. Acesse [github.com](https://github.com) e faça login
2. Clique em "New repository"
3. Nomeie o repositório (ex: `ter-saude-e-sabedoria`)
4. Deixe público (public)
5. **NÃO** marque "Add a README file"
6. Clique em "Create repository"

### Passo 2: Fazer Upload dos Arquivos
1. Na página do repositório, clique em "uploading an existing file"
2. Arraste todos os arquivos desta pasta OFFICIAL para a área de upload
3. Clique em "Commit changes"

### Passo 3: Ativar GitHub Pages
1. No repositório, vá em **Settings** (engrenagem)
2. Role a página até **Pages** (no menu esquerdo)
3. Em "Source", selecione **"Deploy from a branch"**
4. Em "Branch", selecione **main** e **"/(root)"**
5. Clique em **Save**

### Passo 4: Aguardar Deploy
- O GitHub Pages vai gerar automaticamente a URL do seu site
- A URL será: `https://SEU_USERNAME.github.io/NOME_DO_REPOSITORIO/`
- Pode levar alguns minutos para o site ficar online

## 🔧 Configurações Importantes

### ID da Planilha Google Sheets
O arquivo `script.js` contém o ID da planilha Google Sheets. Se você criou uma planilha própria:

1. Abra o arquivo `script.js`
2. Procure a linha: `const SHEET_ID = "1_q-q_pin_Uj2RSEa2FIKCvsuKoF80WLcMHtoyKn4qVA";`
3. Substitua pelo ID da sua planilha

### Como Obter o ID da Planilha
1. Abra sua planilha no Google Sheets
2. A URL será algo como: `https://docs.google.com/spreadsheets/d/1ABC123.../edit`
3. O ID é a parte entre `/d/` e `/edit` (ex: `1ABC123...`)

## 📝 Como Editar o Site

Para editar textos, produtos, cores ou funcionalidades:

1. **Edições Simples**: Use o `GUIA_VISUAL_EDICOES_HTML.csv` ou `GUIA_COMPLETO_EDITAR_HTML.xlsx`
2. **Edições Avançadas**: Consulte o `MANUAL_COMPLETO_EDITAR_HTML.md`

**IMPORTANTE**: Sempre faça backup dos arquivos antes de editar!

## 🐛 Problemas Comuns

### Site Não Carrega Produtos
- Verifique se a planilha Google Sheets está pública
- Confirme se o `SHEET_ID` no `script.js` está correto

### Erro 404 no GitHub Pages
- Certifique-se de que o arquivo principal se chama `index.html`
- Verifique se o repositório está público
- Aguarde alguns minutos após ativar o Pages

### Filtros Não Funcionam
- Verifique se o arquivo `script.js` foi carregado corretamente
- Abra o console do navegador (F12) para ver erros

## 📞 Suporte

Se tiver problemas:
1. Verifique os arquivos nesta pasta OFFICIAL
2. Consulte a documentação nos arquivos de guia
3. Teste o site localmente abrindo o `index.html` no navegador

---

**Última atualização:** Abril 2026