let books =[{
    id: 1,
    image:"https://i.postimg.cc/Pqnmc2QH/9781787552883-zoom.jpg",
    Name:"African Myths & Tales",
    Description: "Africa south of the Sahara possesses a rich body of folk tales and legends passed down over hundreds of years, often sharing similar elements. This collectible hardback offers a hefty selection of stories - of the gods, origins, trickster exploits, animal fables and more - from the Yoruba people of west Africa to the San people of southern Africa.",
    Language:"English",
    Price: "R425",
},
{
    id: 2,
    image:"https://i.postimg.cc/MHfHz8zF/nri.jpg",
    Name:"Daughters OF Nri",
    Description: "Daughters Of Nri is a young adult fantasy fiction set in ancient Nigeria. The book follows twin sisters who, unbeknownst to them, descend from the lost gods The book explores the discovery of their burgeoning powers and their fight against the corrupt king who seeks to destroy them.",
    Language:"English",
    Price: "R320",
},
{
    id: 3,
    image:"https://i.postimg.cc/Wpx6gNqt/bone.jpg",
    Name:"Children Of Blood and Bone",
    Description: "Danger lurks in Or sha, where snow leoponaires prowl and vengeful spirits wait in the waters. Yet the greatest danger may be Z lie herself as she struggles to control her powers and her growing feelings for an enemy.",
    Language:"English",
    Price: "R450",
},
{
    id: 4,
    image:"https://i.postimg.cc/Y01xNBzL/east.jpg",
    Name:"Tales of East Africa",
    Description: "A collection of folktales from Kenya, Uganda, and Tanzania. Tales of East Africa is a collection of 22 traditional tales from Kenya, Uganda, and Tanzania.",
    Language:"English",
    Price: "R470",
},
{
    id: 5,
    image:"https://i.postimg.cc/mkxwFgCG/east-coast.jpg",
    Name:"A History Of East Coast",
    Description: "The history of the Swahili coast is laced with political intrigue, scandal, international commerce, war, invasion and terrorism",
    Language:"English",
    Price: "R540",
},
{
    id: 6,
    image:"https://i.postimg.cc/qRRgZ3S0/ancient.jpg",
    Name:"African History",
    Description: "Africa is a vast continent whose waters, fertile lands, minerals, and diverse wildlife nurtured humankind since ancient times until European colonization and exploitation caused immeasurable suffering and loss.",
    Language:"English",
    Price: "R460",
},

];




  
  let showBooks = document.querySelector(".books");
  books.forEach((data) => {
    showBooks.innerHTML += `
      <div class= "card col-12 col-md-4 col-sm-6 mb-5" style="width: 400px">
      <img class= "card-img-top" src="${data.image}" style="400px">
      <h4 class="card-title mt-5">${data.Name}</h4>
      <div class="card-body mb-5">
      <p class="text-white fw-bold">${data.Description}</p>
      <p class="text-white fw-bold">${data.Language}</p>
      <p class="text-white fw-bold">${data.Price}</p>
      <a href="#" class="btn btn-primary">Add to Cart</a>
      </div>
      </div>`;
  });