let tracks = JSON.parse(localStorage.getItem("tracks"))
  ? JSON.parse(localStorage.getItem("tracks"))
  : [
      {
        id: "1",
        img:"./assets/hr1.jpg",
        title:"Villa Suite",
        type:"double",
        carhead: "Flowered Estate, Brooklyn, USA",
        card_icon: 3,
        card_icon1: 2,
        card_icon2: 2,
        card_icon3: "1200 Sq M",
        bot_head: "Apartment",
      },
      {
        id:"2",
        img:"./assets/hr2.jpg",
        title:"Nice View Studio",
        type:"double",
        carhead: "Beach Rd, Las Vegas",
        card_icon: 4,
        card_icon1: 3,
        card_icon2: 2,
        card_icon3: "2200 Sq M",
        bot_head: "Studio",
      },
      {
        id: "3",
        img:"./assets/hr3.jpg",
        title:"Mykonos-like ",
        type:"double",
        carhead: "Elegant Estate, California",
        card_icon: 6,
        card_icon1: 4,
        card_icon2: 3,
        card_icon3: "5000 Sq M",
        bot_head: "Presidental Suite",
      },
      {
        id: "4",
        img:"./assets/hr4.jpg",
        title:"Luxurious Palace",
        type:"double",
        carhead: "Main Street, United Kingdom",
        card_icon: 25,
        card_icon1: 30,
        card_icon2: 50,
        card_icon3: "10000 Sq M",
        bot_head: "Palace",
      },
      {
        id: "5",
        img:"./assets/hr5.jpg",
        title:"Ballroom",
        type:"double",
        carhead: "Fancy Diner, Italy",
        card_icon: 94,
        card_icon1: 100,
        card_icon2: 150,
        card_icon3: "50000 Sq M",
        bot_head: "Hotel",
      },
      {
        id: "6",
        img:"./assets/hr6.jpg",
        title:"Bachelor",
        type:"double",
        carhead: "Modern Road, Texas",
        card_icon: 4,
        card_icon1: 3,
        card_icon2: 2,
        card_icon3: "1500 Sq M",
        bot_head: "Apartment",
      },
     
    ];
let asc = true;
const tracksContainer = document.querySelector("#listing");
function showTrack(tracks) {
  tracksContainer.innerHTML = "";
  console.log(tracks);
  tracks.forEach((track) => {
    tracksContainer.innerHTML += `
    <tr>
    <td>${track.title}<td>
    <td>${track.type}<td>
    <td>${track.carhead}<td>
    <td>${track.bot_head}<td>
    <td>${track.price}<td>
    <tr>
       `;
  });
}
showTrack(tracks);