const games = [
  {
    title: "Resident Evil 4 Remake",
    desc: "Survive the horror and save Ashley in this action-packed remake.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMiHDzXrYn4fvoRk12BCOu2c3QGu8zt3tNw&s",
    file: "torrents/re4.torrent"
  },
  {
    title: "Call of Duty: Modern Warfare II",
    desc: "Join Task Force 141 in intense missions around the world.",
    image: "https://cdn-uploads.gameblog.fr/img/review/408969_635facf70d9bb.jpg",
    file: "torrents/codmw2.torrent"
  },
  {
    title: "Assassin’s Creed Mirage",
    desc: "Experience Basim’s story in the Golden Age of Baghdad.",
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202304/2714/5818a7273f4bb193fba2767a0a2fb9aacc6585233f0ba410.jpg",
    file: "torrents/acmirage.torrent"
  }
];



// Get container element
const container = document.getElementById("games-container");

// Set current year automatically if there's an element with id="year"
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

function renderGames(list) {
  const container = document.getElementById("games-container");
  container.innerHTML = "";
  list.forEach((g) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${g.image}" alt="${g.title}">
      <div class="card-content">
        <h3>${g.title}</h3>
        <p>${g.desc}</p>
        <a href="${g.file}" class="download-btn" download>Download Torrent</a>
      </div>
    `;
    container.appendChild(card);
  });

  
}


renderGames(games);
