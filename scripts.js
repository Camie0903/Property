let listing = JSON.parse(localStorage.getItem("listing"))
  ? JSON.parse(localStorage.getItem("listing"))
  : [
    {
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
{
    img:"./assets/p1.jpg",
    title:"Bachelor Pad",
    type:"double",
    carhead: "Southern Road, Dubai",
    card_icon: 5,
    card_icon1: 4,
    card_icon2: 3,
    card_icon3: "1900 Sq M",
    bot_head: "Apartment",
},
{
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
{
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
{
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
  
  function readData(listing) {
    document.querySelector("#listing").innerHTML = "";
    listing.forEach((listing, i) => {
      document.querySelector("#listing").innerHTML += `
      <div class="card" style="width: 18rem">
      <img src=${listing.img} class="card-img-top" />
      <div class="card-body">
      <p class="card-text">
      <h4 class="card-title">${listing.title}</h4>
          <h6>${listing.carhead}</h6>
          <i class="fa-solid fa-bed card_icon"></i>${listing.card_icon}
          <i class="fa-solid fa-shower card_icon"></i>${listing.card_icon1}
          <i class="fa-solid fa-car card_icon"></i>${listing.card_icon2}
          <i class="fa-solid fa-ruler card_icon"></i>${listing.card_icon3}
            <h6 class="                                                                 ">${listing.bot_head}</h6>
        </p>
       </div>
      </div>

          `;
    
    });


    

  }
  readData(listing);
  