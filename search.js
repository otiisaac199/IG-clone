const skits_2 = [
  {
    id: 0,
    likes: 30,
    caption: "devices",
    photo: "Images/adeolu-eletu-unRkg2jH1j0-unsplash.jpg",
  },
  {
    id: 1,
    likes: 10,
    caption: "devices",
    photo: "Images/alexandru-acea-XEB8y0nRRP4-unsplash.jpg",
  },
  {
    id: 2,
    likes: 300,
    caption: "fruits",
    photo: "Images/edgar-castrejon-1CsaVdwfIew-unsplash.jpg",
  },
  {
    id: 3,
    likes: 50,
    caption: "model",
    photo: "Images/felix-uresti-F5uQIJRoyb0-unsplash.jpg",
  },
  {
    id: 4,
    likes: 157,
    caption: "model",
    photo: "Images/jeferson-gomes-GYaEMfwk5pM-unsplash.jpg",
  },
  {
    id: 5,
    likes: 90,
    caption: "mountain",
    photo: "Images/justin-kauffman-a8lTjWJJgLA-unsplash.jpg",
  },
  {
    id: 6,
    likes: 700,
    caption: "devices",
    photo: "Images/lagos-techie-IgUR1iX0mqM-unsplash.jpg",
  },
  {
    id: 7,
    likes: 1078,
    caption: "wolf",
    photo: "Images/marek-szturc-CKKrkekAU4E-unsplash.jpg",
  },
];
console.log(skits_2);

const show = document.querySelector(".show");

let allContent = skits_2.map((p) => {
  return `<div class="search-img-content"> 
  <img src="${p.photo}" class="search-main-image" alt="" />
  </div>`;
});

show.innerHTML = allContent.join(" ");

// search bar
const searchInput = document.querySelector(".search-input");
const search_IC = document.querySelectorAll(".search-img-content");

searchInput.addEventListener("keyup", (e) => {
  let searchedCaption = e.target.value.toLowerCase().trim();
  let sItem = skits_2.filter((skits_el) => {
    //it filters the searches made
    if (skits_el.caption.includes(searchedCaption)) {
      return skits_el;
    }
    console.log(skits_el);
  });
  let searchedItem = sItem.map((p) => {
    return `<div class="search-img-content"> 
    <img src="${p.photo}" class="search-main-image" alt="" />
    </div>`;
  });

  document.querySelector(".show").innerHTML = searchedItem.join(" ");
});

// rendering
const renderExploreSinglePost = (postId) => {
  const post = skits.find((post) => post.id == postId);
  console.log(post.id, post, postId, post.caption);
  let postHTMLString = `<div class=""> 
  
  </div>`;
};

const awww = [1, 2, 3];
awww[10] = "foo";
console.log(awww.length);
