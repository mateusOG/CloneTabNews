<div align="center">

# 📰 Clone TabNews

Uma reimplementação do [TabNews](https://www.tabnews.com.br/) — plataforma de conteúdo para a comunidade de tecnologia — desenvolvida do zero como projeto de aprendizado prático no [curso.dev](https://curso.dev) de Filipe Deschamps.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=nextdotjs)](https://nextjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-LTS-339933?style=flat-square&logo=nodedotjs)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat-square&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Docker-compose-2496ED?style=flat-square&logo=docker&logoColor=white)](https://www.docker.com/)
[![Jest](https://img.shields.io/badge/Jest-testes-C21325?style=flat-square&logo=jest&logoColor=white)](https://jestjs.io/)
[![CI](https://img.shields.io/badge/GitHub_Actions-CI%2FCD-2088FF?style=flat-square&logo=githubactions&logoColor=white)](https://github.com/features/actions)

</div>

---

## 📋 Sobre o projeto

O **Clone TabNews** é uma aplicação web full stack que replica as funcionalidades centrais do TabNews: publicação de conteúdo, sistema de comentários e autenticação de usuários. O foco do projeto não é apenas clonar a interface, mas construir uma base de código robusta com práticas modernas de desenvolvimento — testes automatizados, CI/CD e infraestrutura containerizada.

> Projeto desenvolvido durante a formação Full Stack do [curso.dev](https://curso.dev), com ênfase em qualidade de código, TDD e entrega contínua.

---

## ✨ Funcionalidades

- ✅ API REST estruturada com Next.js (App Router)
- ✅ Banco de dados PostgreSQL com migrations versionadas
- ✅ Testes automatizados com Jest (unitários e de integração)
- ✅ Pipeline de CI/CD via GitHub Actions
- ✅ Ambiente de desenvolvimento containerizado com Docker Compose
- ✅ Endpoint de status do sistema (`/api/v1/status`)
- 🔧 Autenticação de usuários *(em desenvolvimento)*
- 🔧 Publicação e comentários *(em desenvolvimento)*

---

## 🛠️ Stack de tecnologias

| Camada | Tecnologia |
|---|---|
| Frontend & Backend | Next.js 15, React, Node.js |
| Banco de dados | PostgreSQL 16 |
| ORM / Migrations | node-postgres (`pg`) com migrations manuais |
| Testes | Jest, TDD |
| Infraestrutura | Docker, Docker Compose |
| CI/CD | GitHub Actions |
| Deploy | Vercel (frontend) |

---

## 🚀 Como rodar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS — verifique o `.nvmrc`)
- [Docker](https://www.docker.com/) e Docker Compose

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/mateusOG/clone-tabnews.git
cd clone-tabnews

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env com suas configurações locais

# 4. Suba o banco de dados com Docker
docker compose up -d

# 5. Execute as migrations
npm run migrations:up

# 6. Rode o servidor de desenvolvimento
npm run dev
```

Acesse em: `http://localhost:3000`

---

## 🧪 Testes

O projeto adota **TDD (Test-Driven Development)** — os testes são escritos antes ou junto com a implementação.

```bash
# Rodar todos os testes
npm test

# Rodar testes em modo watch
npm run test:watch
```

Os testes cobrem:
- Rotas da API (status, migrations)
- Lógica de banco de dados
- Validações de entrada

O pipeline de CI no GitHub Actions executa os testes automaticamente a cada push e pull request.

---

## 📁 Estrutura do projeto

```
clone-tabnews/
├── .github/
│   └── workflows/        # Pipelines de CI/CD
├── infra/
│   ├── compose.yaml      # Docker Compose (banco de dados)
│   └── migrations/       # Migrations do banco de dados
├── pages/
│   └── api/
│       └── v1/           # Endpoints da API REST
├── tests/                # Testes automatizados (Jest)
├── .nvmrc                # Versão do Node.js
├── jest.config.js
└── package.json
```

---

## 🔄 CI/CD

A cada push na branch `main`:

1. GitHub Actions instala as dependências
2. Sobe o banco de dados PostgreSQL via Docker
3. Executa as migrations
4. Roda toda a suíte de testes
5. Faz deploy automático na Vercel (em configuração)

---

## 📚 Aprendizados técnicos

Este projeto foi construído com foco em boas práticas que vão além do código em si:

- **Git como ferramenta de comunicação** — commits semânticos e histórico legível
- **Infraestrutura como código** — Docker Compose versionado junto ao projeto
- **Qualidade garantida por pipeline** — nenhum código quebrado chega à `main`
- **Migrations imutáveis** — alterações no banco são rastreáveis e reversíveis

---

## 👤 Autor

**Mateus Oliveira Gil**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-mateus--oliveira--gil-0A66C2?style=flat-square&logo=linkedin)](https://linkedin.com/in/mateus-oliveira-gil)
[![GitHub](https://img.shields.io/badge/GitHub-mateusOG-181717?style=flat-square&logo=github)](https://github.com/mateusOG)

---

## 📄 Licença

Este projeto é baseado no repositório original do [curso.dev](https://curso.dev) de Filipe Deschamps. Desenvolvido para fins educacionais.
