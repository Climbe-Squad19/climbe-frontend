# 🧗‍♂️ Climbe Investimentos - Frontend

> Plataforma de gestão corporativa e gerenciamento de contratos para a Climbe Investimentos. Projeto-base para o desenvolvimento da equipe.

Este repositório contém a aplicação Frontend da Climbe, um sistema B2B focado em gerenciar o ciclo de vida de clientes, desde propostas comerciais até a validação de documentos, contratos e integrações financeiras.

---

## 🛠 Tecnologias Utilizadas

Este projeto foi estruturado com as tecnologias mais modernas do ecossistema front-end, garantindo performance, escalabilidade e uma excelente experiência de desenvolvimento (DX).

**Core & Build:**
* **[React 19](https://react.dev/)** + **[TypeScript](https://www.typescriptlang.org/)**
* **[Vite](https://vitejs.dev/)** (Bundler ultrarrápido)

**Roteamento & Estado:**
* **[React Router DOM v7](https://reactrouter.com/)** (Navegação SPA)
* **[TanStack React Query v5](https://tanstack.com/query/latest)** (Gerenciamento de estado assíncrono e cache de requisições)
* **[Axios](https://axios-http.com/)** (Cliente HTTP)

**Estilização & UI:**
* **[Tailwind CSS v4](https://tailwindcss.com/)** (Utility-first CSS)
* **[shadcn/ui](https://ui.shadcn.com/)** + **[Radix UI](https://www.radix-ui.com/)** (Componentes acessíveis e não estilizados como base)
* **[Lucide React](https://lucide.dev/)** (Ícones)

---

## 📁 Estrutura do Projeto

A arquitetura foi desenhada para separar responsabilidades de forma clara:

```text
src/
├── assets/         # Arquivos estáticos (imagens, ícones, fontes)
├── components/     # Componentes React reutilizáveis
│   └── ui/         # Componentes base de interface (gerados via shadcn/ui)
├── hooks/          # Custom hooks do React (incluindo hooks do React Query)
├── http/           # Camada de comunicação com a API (instância do Axios, client.ts)
├── layouts/        # Wrappers de layout (ex: app.tsx para área logada, auth.tsx)
├── lib/            # Configurações e utilitários de bibliotecas (ex: utils do shadcn)
├── pages/          # Páginas da aplicação agrupadas por domínio
│   ├── app/        # Páginas da área autenticada (Dashboard, Contratos, etc)
│   └── auth/       # Páginas públicas (Login, Recuperação de senha)
├── utils/          # Funções utilitárias auxiliares
├── main.tsx        # Ponto de entrada (Entrypoint) da aplicação
└── routes.tsx      # Definição e configuração das rotas da aplicação
```

## 🚀 Como rodar o projeto localmente
Siga o passo a passo abaixo para configurar o ambiente de desenvolvimento na sua máquina.

### Pré-requisitos
* Node.js (versão 18+ recomendada)
* Gerenciador de pacotes (npm, yarn, pnpm ou bun)

#### Clonando o Repositório
```bash
git clone <URL_DO_REPOSITORIO>
cd climbe-frontend
```

#### Instalando as dependências
```bash
npm install
```

#### Configurações as Variáveis de Ambiente
O projeto utiliza variáveis de ambiente para conectar com o backend. Crie um arquivo .env.local na raiz do projeto baseando-se no arquivo de exemplo (se existir) ou adicione:
```bash
VITE_API_URL="http://localhost:3000"
```
(Certifique-se de que a variável esteja apontando para o backend local da sua máquina ou ambiente de produção).

#### Iniciando o servidor de desenvolvimento

```bash
npm run dev
```
A aplicação estará disponível no seu navegador em http://localhost:5173.

## Padrões de Desenvolvimento (Para a Equipe)
Para mantermos a base de código limpa e escalável, siga estas diretrizes:
* **Tipagem Estrita**: Utilize TypeScript em todos os arquivos. O uso de any é desencorajado. Tipos de respostas de API devem ser definidos na camada http/.

* **Requisições de Dados**: Toda chamada à API deve utilizar o Axios através da instância configurada e ser consumida pelos componentes utilizando o React Query (useQuery, useMutation). Não utilize useEffect para data fetching básico.

* **Roteamento**: Novas rotas devem ser declaradas no arquivo central routes.tsx e utilizar a estrutura de layouts apropriada para herdar regras de autenticação e design (ex: Sidebar, Header).