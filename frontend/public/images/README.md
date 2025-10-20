# 📁 Estrutura de Imagens - Justiniano I

Esta pasta contém todas as imagens estáticas do projeto, organizadas por categoria.

## 📂 Estrutura de Pastas

```
public/images/
├── logos/              # Logos da aplicação
│   ├── logo.svg       # Logo principal
│   ├── logo-white.svg # Logo branco (para fundos escuros)
│   └── favicon.ico    # Favicon do site
│
├── icons/             # Ícones e pequenas imagens
│   ├── search.svg
│   ├── notification.svg
│   └── ...
│
├── backgrounds/       # Imagens de fundo
│   ├── hero-bg.jpg
│   ├── pattern.svg
│   └── ...
│
└── illustrations/     # Ilustrações e imagens decorativas
    ├── empty-state.svg
    ├── error-404.svg
    └── ...
```

## 🎯 Onde Colocar Cada Tipo de Imagem

### 1. **Logos** (`/logos/`)
- Logo principal da aplicação
- Variações do logo (branco, colorido, etc.)
- Favicon e ícones de app
- **Exemplo**: `logo.svg`, `logo-white.png`, `favicon.ico`

### 2. **Ícones** (`/icons/`)
- Ícones customizados (não do Lucide)
- Ícones de redes sociais
- Ícones de tribunais (STJ, STF, etc.)
- **Exemplo**: `stj-icon.png`, `stf-icon.svg`

### 3. **Backgrounds** (`/backgrounds/`)
- Imagens de fundo para hero sections
- Patterns e texturas
- Gradientes exportados
- **Exemplo**: `hero-bg.jpg`, `pattern-dots.svg`

### 4. **Illustrations** (`/illustrations/`)
- Ilustrações decorativas
- Imagens de empty states
- Imagens de erro (404, 500)
- Gráficos e diagramas
- **Exemplo**: `empty-state.svg`, `404-illustration.png`

## 📝 Como Usar as Imagens no Código

### Next.js Image Component (Recomendado)

```tsx
import Image from 'next/image';

// Imagem estática
<Image
  src="/images/logos/logo.svg"
  alt="Justiniano I Logo"
  width={200}
  height={50}
  priority // Para imagens acima da dobra
/>

// Imagem de fundo
<Image
  src="/images/backgrounds/hero-bg.jpg"
  alt="Background"
  fill
  className="object-cover"
/>
```

### Tag HTML Simples

```tsx
// Para SVGs ou quando não precisa de otimização
<img 
  src="/images/icons/stj-icon.svg" 
  alt="STJ" 
  className="w-8 h-8"
/>
```

### CSS Background

```css
.hero {
  background-image: url('/images/backgrounds/pattern.svg');
}
```

## ✅ Boas Práticas

1. **Nomes de Arquivo**:
   - Use kebab-case: `logo-white.svg` ✅
   - Evite espaços: `logo white.svg` ❌
   - Seja descritivo: `stj-icon.svg` ✅

2. **Formatos Recomendados**:
   - **Logos/Ícones**: SVG (vetorial, escalável)
   - **Fotos**: JPG (menor tamanho)
   - **Transparência**: PNG ou SVG
   - **Animações**: GIF ou WebP

3. **Otimização**:
   - Comprima imagens antes de adicionar
   - Use SVG sempre que possível
   - Considere WebP para fotos modernas

4. **Acessibilidade**:
   - Sempre use `alt` descritivo
   - Para imagens decorativas, use `alt=""`

## 🚀 Exemplo Prático

Se você tem uma imagem do logo do Justiniano I:

1. **Salve em**: `public/images/logos/justiniano-logo.svg`
2. **Use no código**:
   ```tsx
   <Image
     src="/images/logos/justiniano-logo.svg"
     alt="Justiniano I - Pesquisa Jurídica Inteligente"
     width={180}
     height={40}
   />
   ```

## 📌 Nota Importante

- Arquivos em `public/` são servidos diretamente
- O caminho começa com `/images/` (não `/public/images/`)
- Next.js otimiza automaticamente imagens com `<Image />`
