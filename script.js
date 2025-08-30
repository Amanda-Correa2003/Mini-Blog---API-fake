const postsContainer = document.getElementById("posts-container");

// Nosso conteúdo em português
const postsFake = [
  {
    id: 1,
    title: "Aprendendo JavaScript",
    body: "JavaScript é a linguagem que dá vida às páginas da web. Com ela, é possível criar interatividade e consumir APIs de forma simples."
  },
  {
    id: 2,
    title: "O que é uma API?",
    body: "API significa Interface de Programação de Aplicações. Em resumo, é um conjunto de regras que permite a comunicação entre diferentes sistemas."
  },
  {
    id: 3,
    title: "Estudando Front-end",
    body: "O front-end é a parte do site que o usuário enxerga e interage. Envolve HTML, CSS e JavaScript."
  },
  {
    id: 4,
    title: "Simulando um Back-end",
    body: "Mesmo sem servidor real, podemos simular um backend usando ferramentas como JSON Server ou APIs falsas, como o JSONPlaceholder."
  },
  {
    id: 5,
    title: "Por que usar projetos simples?",
    body: "Projetos pequenos ajudam a treinar lógica, boas práticas e organização do código, além de servirem para portfólio no GitHub."
  },
  {
    id: 6,
    title: "Próximos passos no aprendizado",
    body: "Depois de dominar HTML, CSS e JS, o próximo passo é aprender frameworks modernos como React, Angular ou Vue."
  }
];

// Renderizar posts na tela
function renderPosts() {
  postsFake.forEach(post => {
    const postEl = document.createElement("div");
    postEl.classList.add("post");

    postEl.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
      <button onclick="loadComments(${post.id}, this)">Ver comentários</button>
      <div class="comments"></div>
    `;

    postsContainer.appendChild(postEl);
  });
}

// Buscar comentários simulados (só pra exemplo)
function loadComments(postId, buttonEl) {
  const commentsContainer = buttonEl.nextElementSibling;

  // Evitar repetir comentários
  if (commentsContainer.innerHTML.trim() !== "") {
    commentsContainer.innerHTML = "";
    buttonEl.textContent = "Ver comentários";
    return;
  }

  // Simulação de comentários em português
  const fakeComments = [
    { email: "joao@email.com", body: "Muito bom esse conteúdo, parabéns!" },
    { email: "maria@email.com", body: "Agora entendi como funciona uma API, obrigado!" },
    { email: "ana@email.com", body: "Gostei da explicação, simples e clara." }
  ];

  commentsContainer.innerHTML = fakeComments
    .map(c => `<p><strong>${c.email}:</strong> ${c.body}</p>`)
    .join("");

  buttonEl.textContent = "Ocultar comentários";
}

renderPosts();
