# 🚀 Getting Started - Perplexity Jurídico

## 📋 Pré-requisitos Verificados

- ✅ Node.js v20.12.2
- ✅ Python 3.9.0
- ✅ Git 2.30.1

## 🎯 Status do Projeto

### ✅ SEMANA 1 - COMPLETA
- Frontend Next.js funcionando com mock data
- Todos os componentes principais criados
- Navegação completa
- Design system implementado

### 🔜 Próximas Semanas
- **Semana 2**: Backend + APIs STJ/STF
- **Semana 3**: Integração LLM (Gemini/Claude)
- **Semana 4**: Auth + Sistema de Planos (Clerk)
- **Semana 5**: Payments (Stripe)
- **Semana 6**: Deploy + Testes + Lançamento

## 🏃 Como Executar

### Frontend (Next.js)
```bash
cd frontend
npm run dev
```
Acesse: http://localhost:3000

### Backend (FastAPI) - Semana 2
```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Windows
pip install -r requirements.txt
python main.py
```
Acesse: http://localhost:8000

## 🧪 Testando a Aplicação

### 1. Homepage
- Acesse http://localhost:3000
- Veja o hero section
- Clique em "Começar Agora"

### 2. Página de Busca
- Digite: "dano moral por negativação indevida"
- Aguarde 2 segundos (simulação de API)
- Veja resultados com 3 decisões do STJ
- Teste outras queries:
  - "prescrição de honorários advocatícios"
  - "penhora de salário"

### 3. Navegação
- Clique em "Histórico" (placeholder)
- Clique em "Configurações" (placeholder)
- Clique em "Login" (placeholder)

## 📁 Estrutura do Projeto

```
perplexity-juridico/
├── frontend/              # Next.js 14 + TypeScript
│   ├── app/              # App Router pages
│   ├── components/       # React components
│   ├── lib/              # Utilities
│   └── types/            # TypeScript types
├── backend/              # FastAPI + Python
│   ├── app/              # Application code
│   └── main.py           # Entry point
├── docs/                 # Documentation
├── README.md
└── WEEK1_COMPLETE.md
```

## 🎨 Componentes Disponíveis

### Search Components
- **SearchBox**: Input com validação e exemplos
- **ResultCard**: Display de resultados com síntese
- **LoadingState**: Animação de carregamento

### Layout Components
- **Header**: Navegação principal

### Pages
- **/** - Homepage com hero
- **/search** - Busca jurisprudencial (funcional)
- **/history** - Histórico (placeholder)
- **/settings** - Configurações (placeholder)
- **/login** - Login (placeholder)
- **/signup** - Cadastro (placeholder)

## 🔑 Variáveis de Ambiente

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
```

### Backend (.env)
```env
ANTHROPIC_API_KEY=
GOOGLE_API_KEY=
REDIS_HOST=localhost
REDIS_PORT=6379
CLERK_SECRET_KEY=
STRIPE_SECRET_KEY=
```

## 📚 Documentação

- **WEEK1_COMPLETE.md** - Detalhes da Semana 1
- **README.md** - Visão geral do projeto
- **env.example** - Template de variáveis

## 🐛 Troubleshooting

### Erro: "Cannot find module"
```bash
cd frontend
npm install
```

### Erro: Port 3000 já em uso
```bash
# Matar processo na porta 3000
npx kill-port 3000
```

### Erro: TypeScript
```bash
# Verificar tipos
npm run build
```

## 📞 Suporte

Para dúvidas sobre o projeto, consulte:
1. WEEK1_COMPLETE.md - Status atual
2. README.md - Visão geral
3. Código comentado nos componentes

## 🎯 Próximos Passos

1. ✅ Testar todas as páginas
2. ✅ Verificar responsividade
3. ✅ Confirmar mock data funcionando
4. 🔜 Iniciar Semana 2 (Backend + APIs)

---

**Desenvolvido com ❤️ para advogados brasileiros**
