const container = document.querySelector(".container");
let departures;

const loadData = async () => {
  try {
    const loading = document.createElement("p");
    loading.innerText = "Loading...";
    loading.classList.add("loader");
    container.appendChild(loading);
    const res = await fetch(
      "https://classes.codingbootcamp.cz/assets/classes/api/departures-slow.php"
    );
    departures = await res.json();
    console.log(departures);
  } finally {
    const loader = document.querySelector(".loader");
    loader.style.display = "none";
    departures.forEach((train) => {
      container.innerHTML += `<div class="depContainer"> 
      <p class = "train"> 
      Name:  ${train.train}</p> 
      <p class = "no"> 
      No. ${train.no}</p>
      <p class = "town"> 
      Departure Time: ${train.time.hrs + " :" + train.time.mins}</p>
      </div>`;
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.createElement("button");
  btn.textContent = "Load Departures";
  btn.addEventListener("click", loadData);

  container.appendChild(btn);
});
