# 🏛️ Perplexity Jurídico - Sistema de Pesquisa Jurisprudencial

Sistema de busca inteligente de jurisprudências dos tribunais superiores brasileiros (STJ e STF) com síntese por IA.

## 📋 Cronograma de Desenvolvimento (6 Semanas)

### **SEMANA 1**: Setup + Frontend Básico
- ✅ Configuração inicial do projeto
- Interface funcionando com dados mock
- Componentes principais da UI

### **SEMANA 2**: Backend + APIs STJ/STF
- Integração com APIs dos tribunais
- Sistema de cache com Redis
- Endpoints REST funcionais

### **SEMANA 3**: Integração LLM
- Integração Gemini/Claude
- Sistema de síntese de jurisprudências
- Processamento de linguagem natural

### **SEMANA 4**: Auth + Sistema de Planos
- Autenticação com Clerk
- Sistema de limites por plano
- Gestão de usuários

### **SEMANA 5**: Payments
- Integração Stripe
- Webhooks de pagamento
- Dashboard de assinaturas

### **SEMANA 6**: Deploy + Testes + Lançamento
- Deploy frontend (Vercel)
- Deploy backend (Railway)
- Testes finais e lançamento

## 🛠️ Stack Tecnológica

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS + shadcn/ui
- **Icons**: Lucide React
- **Auth**: Clerk
- **Payments**: Stripe

### Backend
- **Framework**: FastAPI (Python)
- **Cache**: Redis
- **LLM**: Gemini/Claude API
- **APIs**: STJ e STF

## 🚀 Estrutura do Projeto

```
perplexity-juridico/
├── frontend/          # Next.js application
├── backend/           # FastAPI application
├── docs/              # Documentation
└── README.md
```

## 📦 Pré-requisitos

- Node.js 18+
- Python 3.11+
- Redis
- Git

## 🔑 Contas Necessárias

- [ ] Anthropic (Claude API): https://console.anthropic.com
- [ ] Google AI Studio (Gemini): https://aistudio.google.com
- [ ] Clerk (Auth): https://clerk.com
- [ ] Stripe (Payments): https://stripe.com
- [ ] Vercel (Deploy frontend): https://vercel.com
- [ ] Railway (Deploy backend): https://railway.app

## 🏁 Como Começar

### 1. Instalar Dependências do Frontend
```bash
cd frontend
npm install
npm run dev
```

### 2. Instalar Dependências do Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

### 3. Configurar Variáveis de Ambiente
Copie os arquivos `.env.example` e preencha com suas credenciais.

## 📝 Licença

MIT

## 👥 Contribuindo

Este é um projeto em desenvolvimento ativo. Contribuições são bem-vindas!
