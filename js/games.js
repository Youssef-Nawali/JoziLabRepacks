document.addEventListener("DOMContentLoaded", () => {
  const gameGrid = document.getElementById("gameGrid");

  const games = [
    {
      name: "Resident Evil 4: Remake – Deluxe Edition (Build 11025382 + Missing DLCs + CrackFix + Windows 11 Fix + All DLCs + Bonus Content + Trainer + MULTi13) (From 41 GB)",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMiHDzXrYn4fvoRk12BCOu2c3QGu8zt3tNw&s",
      link: "magnet:?xt=urn:btih:c5393217d213fabb2828d5954746c6bf3cb0d682"
    },
    {
      name: "Call of Duty: Modern Warfare II",
      img: "https://cdn-uploads.gameblog.fr/img/review/408969_635facf70d9bb.jpg",
      link: "#"
    },
    {
      name: "Assassin’s Creed Mirage",
      img: "https://image.api.playstation.com/vulcan/ap/rnd/202304/2714/5818a7273f4bb193fba2767a0a2fb9aacc6585233f0ba410.jpg",
      link: "#"
    },
    {
      name: "SILENT HILL f: Digital Deluxe Edition +  7 DLCs/Bonuses",
      img: "https://image.api.playstation.com/vulcan/ap/rnd/202505/0902/455936c1516f971eda0b921139c0beb68f7c86203922f2df.jpg",
      link:"#"
    },

    {
      name: "Red Dead Redemption 2: Ultimate Edition – Build 1491.50 + UE Unlocker",
      img: "https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png?w=440",
      link:"#"
    }
    
  ];

  

  // Render games dynamically
  games.forEach(g => {
    const card = document.createElement("div");
    card.classList.add("game-card");
    card.innerHTML = `
      <img src="${g.img}" alt="${g.name}">
      <h3>${g.name}</h3>
      <a href="${g.link}" class="download-btn">Download</a>
    `;
    gameGrid.appendChild(card);
  });
});
