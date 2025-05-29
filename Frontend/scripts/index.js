import config from "./config.js";

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function createUserCard(user) {
  return `
          <div class="user-card">
            <img src="${
              user.picture.large
            }" alt="Foto de usuario" class="user-image" />
            <h2 class="user-name">${user.name.title} ${user.name.first} ${
    user.name.last
  }</h2>
            <div class="user-info">
              <div class="info-group">
                <span class="info-label">Género:</span>
                <span class="info-value">${
                  user.gender === "male" ? "Masculino" : "Femenino"
                }</span>
              </div>
              <div class="info-group">
                <span class="info-label">Ubicación:</span>
                <span class="info-value">${user.location.city}, ${
    user.location.state
  }</span>
              </div>
              <div class="info-group">
                <span class="info-label">Correo:</span>
                <span class="info-value">${user.email}</span>
              </div>
              <div class="info-group">
                <span class="info-label">Fecha de nacimiento:</span>
                <span class="info-value">${formatDate(user.dob.date)}</span>
              </div>
            </div>
          </div>
        `;
}

function loadUsers(count) {
  const usersGrid = document.getElementById("usersGrid");
  usersGrid.innerHTML = "<div>Cargando usuarios...</div>";

  fetch(`${config.API_URL}/users?cant=${count}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      usersGrid.innerHTML = data.data
        .map((user) => createUserCard(user))
        .join("");
    })
    .catch((error) => {
      console.error("Error:", error);
      usersGrid.innerHTML = "<div>Error al cargar los usuarios</div>";
    });
}

loadUsers(config.DEFAULT_USERS_COUNT);
