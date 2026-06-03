# 🖤 Guia de Personalização - Site Temático Gótico

Bem-vindo! Este é um presente especial criado para sua namorada. Aqui estão as instruções para personalizar o site com suas fotos, músicas e mensagens.

---

## 📝 Alterações Principais

### 1. **Mensagem Personalizada**

Abra o arquivo `client/src/pages/Home.tsx` e procure pela linha:

```javascript
const userMessage = "Você é a razão pela qual meus dias são mais coloridos, mesmo em tons de preto e cinza. Obrigado por existir e por escolher estar comigo.";
```

Substitua o texto entre as aspas pela mensagem que você quer deixar para sua namorada. Esta mensagem aparecerá no banner no meio da página.

---

### 2. **Data de Início do Relacionamento**

O timer ao vivo conta os dias, horas, minutos e segundos desde o início do seu relacionamento. Para configurar:

1. Abra o arquivo `client/src/components/RelationshipTimer.tsx`
2. Procure pela linha com o comentário "CONFIGURAR A DATA DE INÍCIO DO RELACIONAMENTO AQUI"
3. Altere a data:

```javascript
// Exemplo: const startDate = new Date('2023-01-15T00:00:00');
const startDate = new Date('YYYY-MM-DD HH:mm:ss'); // Coloque sua data aqui
```

**Formato:** `YYYY-MM-DD HH:mm:ss` (Ano-Mês-Dia Hora:Minuto:Segundo)

---

### 3. **Adicionar Suas Fotos**

O site tem 4 cards de fotos. Para personalizar:

1. Abra `client/src/pages/Home.tsx`
2. Procure pela seção `photoGallery`
3. Cada foto tem 4 propriedades:
   - `image`: URL da foto
   - `title`: Título do card
   - `description`: Descrição da foto

**Opções para adicionar fotos:**

#### Opção A: Usar URLs de imagens online
Se você tem as fotos hospedadas em algum lugar (Google Photos, Imgur, etc.), coloque a URL diretamente:

```javascript
{
  image: 'https://exemplo.com/sua-foto.jpg',
  title: 'Título da Foto',
  description: 'Descrição da foto'
}
```

#### Opção B: Fazer upload das fotos (Recomendado)
1. Coloque seus arquivos de foto em: `/client/public/photos/`
2. Atualize a URL para:

```javascript
{
  image: '/photos/sua-foto.jpg',
  title: 'Título da Foto',
  description: 'Descrição da foto'
}
```

---

### 4. **Adicionar Suas Músicas**

O player de música pode tocar até quantas músicas você quiser. Para adicionar:

1. Coloque seus arquivos MP3 em: `/client/public/music/`
2. Abra `client/src/pages/Home.tsx`
3. Procure pela seção `defaultSongs`
4. Atualize cada música:

```javascript
{
  title: 'Nome da Música',
  artist: 'Nome do Artista',
  src: '/music/sua-musica.mp3',
  cover: 'https://url-da-capa.jpg' // URL da imagem de capa
}
```

**Exemplo completo:**

```javascript
const defaultSongs: Song[] = [
  {
    title: 'Música Especial',
    artist: 'Seu Nome',
    src: '/music/musica1.mp3',
    cover: 'https://d2xsxph8kpxj0f.cloudfront.net/.../music-vinyl-aesthetic.webp'
  },
  {
    title: 'Outra Música',
    artist: 'Seu Nome',
    src: '/music/musica2.mp3',
    cover: 'https://d2xsxph8kpxj0f.cloudfront.net/.../gothic-pattern.webp'
  },
];
```

---

### 5. **Personalizar Títulos dos Cards de Fotos**

Cada card de foto tem um título e descrição. Você pode mudar para algo mais significativo:

```javascript
{
  image: 'url-da-foto',
  title: 'Nosso Primeiro Encontro', // Mude isso
  description: 'Aquele dia especial que nunca vou esquecer' // E isso
}
```

---

## 🎨 Personalizações Avançadas

### Alterar Cores

Se quiser mudar as cores do site (atualmente preto, cinza e púrpura):

1. Abra `client/src/index.css`
2. Procure pela seção `:root` ou `.dark`
3. Altere os valores das cores:

```css
--primary: #6b1b47; /* Púrpura escuro */
--accent: #6b1b47;
--background: #0a0a0a; /* Preto profundo */
```

### Alterar Fontes

As fontes atuais são:
- **Títulos:** Playfair Display (elegante e gótico)
- **Corpo:** Lora (legível e sofisticada)
- **Labels:** Montserrat (moderna)

Para mudar, edite `client/src/index.css` e `client/index.html`.

---

## 🚀 Como Testar Localmente

1. Abra o terminal na pasta do projeto
2. Execute: `pnpm dev`
3. Abra seu navegador em: `http://localhost:3000`
4. Faça alterações e veja as mudanças em tempo real

---

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:
- Computadores
- Tablets
- Celulares

---

## 💡 Dicas Importantes

1. **Tamanho das Fotos:** Use fotos em alta resolução (pelo menos 500x500px)
2. **Formato dos Arquivos:** MP3 para músicas, JPG/PNG para fotos
3. **URLs:** Se usar URLs externas, certifique-se de que a imagem está hospedada em um servidor confiável
4. **Mensagem:** Quanto mais pessoal, melhor! Escreva algo que venha do coração

---

## ❓ Perguntas Frequentes

**P: Posso adicionar mais de 4 fotos?**
R: Sim! Basta adicionar mais objetos no array `photoGallery`.

**P: Posso adicionar mais de 2 músicas?**
R: Sim! Adicione quantas quiser no array `defaultSongs`.

**P: Como mudo o tema de cores?**
R: Edite o arquivo `client/src/index.css` e altere as variáveis de cor.

**P: Posso mudar o texto do header?**
R: Sim! Abra `client/src/components/Header.tsx` e altere o título e subtítulo.

---

## 🎁 Resultado Final

Quando terminar de personalizar, você terá um site único e especial para presentear sua namorada com:

✨ Timer ao vivo mostrando quanto tempo vocês estão juntos
✨ Galeria de fotos com design elegante
✨ Sua mensagem de amor em destaque
✨ Player de música com as músicas especiais de vocês
✨ Design gótico sofisticado em tons de preto e cinza

---

**Boa sorte! Este presente vai ser inesquecível! 🖤**
