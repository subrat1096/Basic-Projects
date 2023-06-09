// items
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

// selct section-container and btns
const sectionCenter = document.querySelector(".section-center");
const btnConatiner = document.querySelector(".btn-container"); // Adding button dynamically
// const filterBtns = document.querySelectorAll('.filter-btn')
// console.log(filterBtns);

// window object loads
window.addEventListener("DOMContentLoaded", function () {
  displayMenuBtns()
  displayMenuItems(menu);
});

// iterate through menuItems array
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map((item) => {
    // console.log(item);

    return `<div class="menu-item" id=${item.id}>
      <img src=${item.img} alt=${item.title} class="photo">
      <div class="item-info">
          <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">${item.desc}</p>
      </div>
  </div>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);
  sectionCenter.innerHTML = displayMenu;
}


function displayMenuBtns(){
  //adding button dynamically
  const categories = menu.reduce(
    (values, items) => {
      // console.log(values);
      if (!values.includes(items.category)) {
        values.push(items.category);
      }
      return values;
    },
    ["all"]
  );
  // console.log(categories);
  const categoryBtns = categories
    .map((category) => {
      return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
    })
    .join("");
  btnConatiner.innerHTML = categoryBtns;
  const filterBtns = btnConatiner.querySelectorAll(".filter-btn");
  // filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset.id);
      const catagory = e.currentTarget.dataset.id;
      const menuCatagory = menu.filter((menuItem) => {
        if (menuItem.category === catagory) {
          return menuItem;
        }
      });
      // console.log(menuCatagory);
      if (catagory === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCatagory);
      }
    });
  });
}