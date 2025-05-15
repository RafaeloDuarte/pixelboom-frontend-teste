# Teste Técnico — Frontend Developer | Pixelboom

Este projeto é um teste técnico para a vaga de **Frontend Developer** na empresa **Pixelboom**. O principal objetivo é replicar com fidelidade o layout fornecido via Figma, respeitando os detalhes visuais, componentes e a usabilidade esperada.

## 🔗 Link do Figma

O design deste projeto está baseado no seguinte arquivo do Figma:

[🎨 Design no Figma](https://www.figma.com/design/TOALrzlKsyYKDhWIIvysNI/Teste-Frontend-Developer?node-id=1-1360&t=zoYTynQ9P2ZK3o2n-0)

---

## 🛠️ Tecnologias utilizadas

* [React](https://react.dev/)
* [Vite](https://vitejs.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Lucide Icons](https://lucide.dev/)
* [Sonner (toast)](https://sonner.emilkowal.ski/)
* Componentes customizados com base em [ShadCN/UI](https://ui.shadcn.dev)
* [Husky](https://typicode.github.io/husky/) – Git hooks para automações
* [Vitest](https://vitest.dev/) – Testes unitários rápidos e modernos
* [Playwright](https://playwright.dev/) – Testes end-to-end com foco em performance

---

## 📦 Instalação e execução local

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# Acesse a pasta do projeto
cd seu-repositorio

# Instale as dependências
npm install

# Rode o projeto
npm run dev
````

A aplicação estará disponível em:
📍 `http://localhost:5173`

---

## 🚀 Deploy

Este projeto pode ser facilmente publicado na [Netlify](https://netlify.com), utilizando as configurações:

* **Build Command:** `npm run build`
* **Publish Directory:** `dist`

---

## 📚 Funcionalidades

* ✅ Menu lateral
* ✅ Adicionar novo usuário via drawer lateral
* ✅ Validação e persistência temporária em memória
* ✅ Feedback visual com toast ao adicionar um usuário
* ✅ Contagem dinâmica de usuários ativos/inativos
* ✅ Scroll controlado com `ScrollArea`
* ✅ Paginação visual e filtros (placeholders)
* ✅ Total aderência ao layout proposto no Figma

---

## 🧪 Observações

* O foco foi na fidelidade ao design, não na persistência real de dados.
* Não há conexão com backend.
* Formulários podem ser adaptados para integração com APIs REST ou GraphQL futuramente.
* Responsividade parcial implementada — otimizado para desktop (resolução do layout original).

---

## 🤝 Agradecimentos

Obrigado à equipe da **Pixelboom** pela oportunidade de participar do processo seletivo e mostrar minhas habilidades práticas com base em um design real.

---

## 📄 Licença

Este projeto é de uso exclusivo para avaliação técnica e não possui licença de uso comercial.
