let images = [
    {
        id:1,
        image:"https://i.postimg.cc/VvmzsZXw/about-us.jpg",
        Desc: "Book opening of the  fellow black Author Nomthembu Qhali, with our Publishers Zinzi Xhanti and Amanda Jola.",
        Library: "Khayelitsha Library",
    },

    {
        id:2,
        image:"https://i.postimg.cc/m2tTL5nY/bookclub.jpg ",
        Desc: "Forming a BookClub at one of the Rehabilitaion Centre to encourage reading and haivng workshops to transform lives.",
        Library: "Rehabilitaion Centre",
    },

    {
        id:3,
        image:"https://i.postimg.cc/DyxQ38Xj/One-Book-One-Bronx-book-club-meeting-1-scaled.jpg",
        Desc: "Bookclub meeting at the Arts Gallery which is one of our working partners that give the space to explore art and reading.",
        Library: "Arts Gallery in Cape Town",
    },

];
let showimages = document.querySelector(".images");
  images.forEach((data) => {
    showimages.innerHTML += `
      <div class= "card col-12 col-md-4 col-sm-3" style="width: 400px">
      <img class= "card-img-top mt-5" src="${data.image}" style="400px">
      <div class="card-body mb-5">
      <p class= "text-dark fw-bold">${data.Desc}</p>
      <p class="text-dark fw-bold">${data.Library}</p>
      </div>
      </div>`;
  });
