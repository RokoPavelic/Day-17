// const loadData = async () => {
//   const response = await fetch(
//     "https://classes.codingbootcamp.cz/assets/classes/602/guardian.php"
//   );
//   const data = await response.json();
//   console.log(data);
// };
// loadData();

const container = document.querySelector(".container");
fetch(
  "https://classes.codingbootcamp.cz/assets/classes/602/guardian.php?cat=science"
)
  .then((r) => r.json())
  .then((data) => {
    const guardian = data;
    guardian.data.channel.item.forEach((e) => {
      container.innerHTML += ` <div class="title"> <p>${e.title}</p> </div> 
      <div class="date"> <p>${e.pubDate}</p> </div> `;
    });
  });
