let listings = JSON.parse(localStorage.getItem("listings"))
  ? JSON.parse(localStorage.getItem("listings"))
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

    console.log(listings);
// let asc = true;
const listingsContainer = document.querySelector("#listings");
function showlistings(listings) {
  listingsContainer.innerHTML = "";
  listings.forEach((listings) => {
    listingsContainer.innerHTML += `
    <tr>
    <td>${listings.img}<td>
    <td>${listings.title}<td>
    <td>${listings.type}<td>
    <td>${listings.location}<td>
    <td>${listings.size}<td>
    <td><i class="fa-solid fa-pen-to-square p-3"></i>
    <i onclick="deleteItem(${listings.id})" class="fa-solid fa-trash-can p-3"></i></td>
    <tr>
       `;
  });
}
showlistings(listings);

function addProperty(){
  const newPropety = {
    img: document.querySelector("#image").value,
    title: document.querySelector("#title").value,
    type:document.querySelector("#type").value,
    location:document.querySelector("#location").value,
    size:document.querySelector("#size").value,
    id:listings.length + 1,
  };
  listings.push(newPropety);
  localStorage.setItem("listings", JSON.stringify(listings));
  showlistings(listings);  
}
document.querySelector("#addNewItem").addEventListener("click", addProperty);


function deleteItem(id){
  listings = listings.filter((listings) => listings.id !== id);
  localStorage.setItem("listings", JSON.stringify(listings));
  showlistings(listings)
}