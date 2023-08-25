let myMenu = document.getElementById("menu");
let myMenuIconT = document.getElementById("humburger_menu_t");
let myMenuItems = document.querySelectorAll("#menu li");
let myMenuIconB = document.querySelector("#humburger_menu_b");
let myMenuB = document.getElementById("menu_b");
let myMenuItems_b = document.querySelectorAll("#menu_b li");
let myName_b = document.getElementById("name_b");
let body = document.querySelector("body");
let darkMood = document.querySelector("#moon");
let lightmood = document.getElementById("sun");
let lightMoodImg = document.getElementById("pointing");
let darkMoodImg = document.getElementById("devil");

// to open menu
myMenuIconT.onclick = (_) => {
  myMenu.className =
    "w-full absolute left-0 top-0 p-10 rounded-b-3xl space-y-10 text-center font-bold bg-lime-600 dark:bg-red-700";
};
//to make an array out of an object
let myMenuItemsLast = Object.keys(myMenuItems);

//to close menu
let close = function () {
  for (let i = 0; i < myMenuItemsLast.length; i++) {
    myMenuItems[i].onclick = (_) => {
      myMenu.className = "hidden";
    };
  }
};

myMenuIconT.addEventListener("click", close);

// bottom menu

myMenuIconB.onclick = (_) => {
  myMenuB.className =
    "flex flex-row justify-between bg-orange-200 rounded-3xl w-full md:w-2/3 lg:w-1/3 xl:w-1/3 dark:bg-red-700";
  myMenuIconB.classList.add("hidden");
  myName_b.classList.add("hidden");
};

let myMenuItemsLast_b = Object.keys(myMenuItems_b);

//to close menu
let close_b = function () {
  for (let i = 0; i < myMenuItemsLast_b.length; i++) {
    myMenuItems_b[i].onclick = (_) => {
      myMenuB.className = "hidden";
      myMenuIconB.classList.remove("hidden");
      myName_b.classList.remove("hidden");
    };
  }
};

myMenuIconB.addEventListener("click", close_b);

//dark mode

darkMood.addEventListener("click", function () {
  document.getElementById("moon").classList.add("hidden");
  lightmood.classList.remove("hidden");
  body.classList.toggle("dark");
  lightMoodImg.classList.add("hidden");
  darkMoodImg.classList.remove("hidden");
});

lightmood.addEventListener("click", function () {
  document.getElementById("moon").classList.remove("hidden");
  lightmood.classList.add("hidden");
  body.classList.toggle("dark");
  lightMoodImg.classList.remove("hidden");
  darkMoodImg.classList.add("hidden");
});
