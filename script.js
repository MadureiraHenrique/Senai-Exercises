const API_URL = "https://valorant-api.com/v1/agents?language=pt-BR";

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const cardsContainer = document.getElementById("cardsContainer");
const statusMsg = document.getElementById("statusMsg");

let agentsData = [];

async function fetchAgents() {
  statusMsg.textContent = "Carregando agentes...";

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Erro na resposta da API: " + response.status);
    }

    const result = await response.json();

    agentsData = result.data;

    statusMsg.textContent = `${agentsData.length} agentes carregados.`;
    renderAgents(agentsData);

  } catch (error) {
    statusMsg.textContent = "Não foi possível carregar os dados da API.";
    console.error("Erro ao buscar agentes:", error);
  }
}

function renderAgents(list) {
  cardsContainer.innerHTML = "";

  if (list.length === 0) {
    cardsContainer.innerHTML = `<p class="empty-state">Nenhum agente encontrado.</p>`;
    return;
  }

  list.forEach((agent) => {
    const card = document.createElement("article");
    card.className = "card";

    const roleName = agent.role ? agent.role.displayName : "Sem função";

    card.innerHTML = `
      <img class="card-img" src="${agent.fullPortrait || agent.displayIcon}" alt="${agent.displayName}">
      <div class="card-body">
        <h2 class="card-title">${agent.displayName}</h2>
        <span class="card-role">${roleName}</span>
        <p class="card-desc">${agent.description}</p>
      </div>
    `;

    cardsContainer.appendChild(card);
  });
}

function filterAgents() {
  const term = searchInput.value.toLowerCase().trim();

  const filtered = agentsData.filter((agent) => {
    const name = agent.displayName.toLowerCase();
    const role = agent.role ? agent.role.displayName.toLowerCase() : "";
    const description = agent.description.toLowerCase();

    return (
      name.includes(term) ||
      role.includes(term) ||
      description.includes(term)
    );
  });

  statusMsg.textContent = `${filtered.length} agente(s) encontrado(s) para "${term}".`;
  renderAgents(filtered);
}

searchBtn.addEventListener("click", filterAgents);

searchInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    filterAgents();
  }
  if (searchInput.value.trim() === "") {
    statusMsg.textContent = `${agentsData.length} agentes carregados.`;
    renderAgents(agentsData);
  }
});

fetchAgents();
