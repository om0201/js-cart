const data = [
  {
    name: "Go Phone",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, animi.",
    price: 20000,
  },
  {
    name: "Game Station",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, animi.",
    price: 50000,
  },
  {
    name: "FREAX laptop",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, animi.",
    price: 90000,
  },
  {
    name: "Sail Headphones",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, animi.",
    price: 1000,
  },
  {
    name: "Crease Smart Band",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, animi.",
    price: 3000,
  },
  {
    name: "sSport Watch",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, animi.",
    price: 30000,
  },
  {
    name: "Pan Disk Pen Drive",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, animi.",
    price: 2000,
  },
  {
    name: "Knockx GPU",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, animi.",
    price: 170000,
  },
];

const displayProducts = document.querySelector(".products-display-container");

window.addEventListener("load", () => {
  data.forEach((el, i) => {
    displayProducts.innerHTML += `
    <div class="card" id="product-${i}">
      <p class="heading">${el.name}</p>
      <p class="desc">${el.desc}</p>
      <div class="price-section">
        <p>₹ ${el.price}</p>
        <button class="btn">BUY</button>
      </div>
    </div>
    `;
  });
});
