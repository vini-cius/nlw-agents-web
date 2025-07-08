# NLW Agents

Projeto desenvolvido durante o evento NLW (Next Level Week) Agents da Rocketseat.

## Descrição

O NLW Agents é uma aplicação React que permite a criação e gerenciamento de salas (rooms), onde usuários podem interagir.

## Tecnologias Utilizadas

*   **React:** Biblioteca JavaScript para construção de interfaces de usuário.
*   **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
*   **Vite:** Ferramenta de build extremamente rápida para aplicações web modernas.
*   **Tailwind CSS:** Framework CSS utility-first para estilização.
*   **React Router:** Biblioteca para navegação entre páginas.
*   **TanStack Query:** Para gerenciamento de cache e requisições de dados assíncronas (fetching).
*   **Biome:** Para formatação e linting de código.

## Configuração do Projeto

1.  **Clone o repositório:**

    ```bash
    git clone <URL_DO_REPOSITÓRIO>
    cd <NOME_DO_REPOSITÓRIO>
    ```
2.  **Instale as dependências:**

    ```bash
    pnpm install
    ```

    Certifique-se de ter o [pnpm](https://pnpm.io/) instalado globalmente. Caso prefira usar `npm` ou `yarn`, substitua o comando `pnpm install` pelo comando equivalente do seu gerenciador de pacotes.
3.  **Inicie o servidor de desenvolvimento:**

    ```bash
    pnpm dev
    ```

    O projeto estará disponível em `http://localhost:5173`.
4.  **Configuração da API:**

    Este projeto espera que uma API esteja rodando em `http://localhost:3333`. Certifique-se de que a API esteja configurada e rodando corretamente.

## Padrões de Projeto

*   **Componentização:** A interface do usuário é construída com base em componentes React reutilizáveis.
*   **Gerenciamento de estado:** Usa TanStack Query para gerenciar o estado de dados assíncronos, como busca de dados da API.
*   **Roteamento:** React Router é utilizado para definir as rotas da aplicação, permitindo a navegação entre diferentes páginas (ex: criação de salas, visualização de salas).

## Biome

O projeto utiliza o Biome para manter um padrão de código consistente. As configurações do Biome estão no arquivo `biome.jsonc`. Para formatar o código, execute:

```bash
pnpm biome format ./src
```

## Estrutura de Pastas

*   `src/`: Contém o código fonte da aplicação.
    *   `components/`: Componentes React reutilizáveis.
    *   `pages/`: Componentes que representam as páginas da aplicação (ex: `create-room.tsx`, `room.tsx`).
    *   `app.tsx`: Componente raiz da aplicação, responsável pela configuração do roteamento.
    *   `main.tsx`: Ponto de entrada da aplicação, onde o React é inicializado.

## Mais Informações

Para mais informações sobre as tecnologias utilizadas, consulte a documentação oficial:

*   **React:** [https://react.dev/](https://react.dev/)
*   **TypeScript:** [https://www.typescriptlang.org/](https://www.typescriptlang.org/)
*   **Vite:** [https://vitejs.dev/](https://vitejs.dev/)
*   **Tailwind CSS:** [https://tailwindcss.com/](https://tailwindcss.com/)
*   **React Router:** [https://reactrouter.com/](https://reactrouter.com/)
*   **TanStack Query:** [https://tanstack.com/query/latest](https://tanstack.com/query/latest)
*   **Biome:** [https://biomejs.dev/](https://biomejs.dev/)
