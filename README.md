# Black Amber Coffee - Frontend Monorepo

Este repositório contém o código fonte do ecossistema do **Black Amber Coffee**. O projeto foi estruturado seguindo os princípios de um **Monorepo**, o que significa que múltiplas aplicações (admin e cliente) coexistem no mesmo repositório e compartilham código entre si de forma organizada.

## 🏗️ Arquitetura do Projeto

A arquitetura foi pensada para ser **Modular, Escalável e Pronta para API (API-Ready)**. O código está dividido em duas grandes áreas na raiz do projeto: `app/` (onde ficam as aplicações reais) e `packages/` (onde ficam os módulos compartilhados).

### `packages/` (Módulos Compartilhados)
Aqui ficam as peças que podem ser usadas por qualquer aplicação dentro do monorepo.

* **`packages/ui-shared/`**:
  * **O que é**: O "Design System" do projeto. Contém apenas os componentes visuais genéricos (botões, badges, barras de navegação e títulos).
  * **Por que está aqui**: Para que tanto o `admin` quanto o `client` tenham a mesma identidade visual sem precisar duplicar o código dos botões ou estilos CSS base.

* **`packages/utils/`**:
  * **O que é**: Tipagens do TypeScript (interfaces de domínio como `MenuItem` e `Order`) e funções auxiliares de lógica, como formatadores de moeda.
  * **Por que está aqui**: O "Menu" e o "Pedido" são os mesmos conceitos tanto para o cliente que compra quanto para o admin que gerencia. Compartilhando os `types`, garantimos que toda a aplicação converse na mesma língua quando a API for conectada.

### `app/` (Aplicações)
Aqui ficam os sistemas que rodam de forma independente.

#### `app/admin/` (Painel Administrativo)
A aplicação para gerentes e baristas do Black Amber. Toda a lógica de negócio administrativa fica fechada aqui.

* **`src/components/`**: Diferente do `ui-shared`, os componentes que ficam aqui possuem **lógica de negócio** atrelada a eles. Ex: `TableMenu` sabe como renderizar uma lista de produtos específicos do admin, `CardOrder` sabe renderizar detalhes de um pedido.
* **`src/services/`**: A camada de comunicação com o Banco de Dados/Back-end. É aqui que moram os "Mocks" atuais e onde as chamadas `fetch` para a API serão colocadas futuramente. Isolamos isso para não misturar lógica de API com UI.
* **`src/hooks/`**: Onde criamos os *Custom Hooks* (ex: `useMenuItems`). Eles "sugam" os dados da camada de serviço (`services/`) e entregam o estado pronto e reativo para as páginas.
* **`src/pages/`**: As telas finais (ex: `Menu.tsx`, `LiveOrders.tsx`). Graças aos hooks e aos services, as páginas são extremamente limpas e declarativas. A página não precisa saber "como" buscar um dado, ela apenas usa o hook e joga os dados para a UI renderizar.
* **`src/layout/`**: Onde os esqueletos da página e as barras laterais que montam o esqueleto da aplicação ficam (ex: `Template.tsx`).
* **`src/utils/`**: Utilitários estritamente restritos ao mundo do Admin (ex: mapa de rotas internas).

#### `app/client/` (Aplicação do Cliente)
* Possui a exata mesma estrutura esqueletal do admin (`components`, `hooks`, `services`, `pages`), mas voltada para a interface mobile/web do consumidor final que irá fazer os pedidos.

---

## 🚀 Como Executar

O projeto utiliza Vite como bundler e npm workspaces para resolver os pacotes internos.

```bash
# Instalar dependências de todos os apps e packages
npm install

# Rodar o Painel de Administração
npm run dev:admin

# Rodar a Aplicação do Cliente
npm run dev:client
```
