const skits = [
  {
    id: 0,
    photo: "Images/IMG-20220313-WA0023.jpg",
  },
  {
    id: 1,
    photo: "Images/IMG-20220407-WA0025.jpg",
  },
  {
    id: 2,
    photo: "Images/IMG_2542.jpeg",
  },
  {
    id: 3,
    photo: "Images/IMG_0579.jpeg",
  },
  {
    id: 4,
    photo: "Images/IMG_0031.JPG",
  },
  {
    id: 5,
    photo: "Images/IMG-20220313-WA0023.jpg",
  },
  {
    id: 6,
    photo: "Images/IMG-20220407-WA0029.jpg",
  },
];

console.log(skits);

let postImgCont = document.querySelector(".post-img-cont");

let postContent = skits.map((i) => {
  return `<div class="post-content-img-wrapper"> 
    <div class="post-main-img"> 
    <img src="${i.photo}" class="post-main-image" alt="" />
    </div>
  </div>`;
});
postImgCont.innerHTML = postContent.join(" ");

let postValue = document.querySelector(".post-value");
postValue.textContent = skits.length;

// post js
document.querySelectorAll(".post-main-img").forEach((img) => {
  img.addEventListener("click", () => {
    console.log(img);
    // let a = document.createElement(a);
    // a.appendChild(img);
  });
});

// following
// let fol = document.querySelector(".followers");
// let foll = document.querySelector(".following");
// let fValue1 = document.querySelector(".f-fvalue1");
// let fValue2 = document.querySelector(".f-fvalue2");

// fValue1.innerHTML = fol;
// fValue2.innerHTML = foll;
const arr = [1, 2, 3];
arr[10] = "foo";

console.log(arr.length);
