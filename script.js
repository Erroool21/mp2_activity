let main_cards = document.getElementById('main-cards');
let card_categories = [{
    id: 1,
    name: 'Cars',
    image: './images/car.jpg'

},
{
    id: 3,
    name: 'Iphones',
    image: './images/iphone.png'
},
{
    id: 4,
    name: "Mens' Fashion",
    image: './images/men.jpg'
},
{
    id: 5,
    name: "Womens' Fashion",
    image: './images/women.jpg'
}
]

function showcategories() {
    let categories = "";
    let cat_body = document.getElementById('list');
    card_categories.forEach(function (category) {
        categories += `<div class="d-inline-flex mx-1 my-3 justify-content-center">
        <div class="card" style="width: 18rem;">
        <img src="${category.image}" id="card-img" class="card-img-top" style="height: 150px">
        <div class="card-body bg-light">
          <p class="card-title" style="height:20px""><b>${category.name}</b></p>
        </div>
        </div>
        </div>`
    });
    cat_body.innerHTML = categories
}
showcategories();



  