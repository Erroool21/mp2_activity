let main_cards = document.getElementById('main-cards');
let card_categories = [{
    id: 1,
    name: 'Cars',
    image: './images/car.jpg'

},
{
    id: 2,
    name: 'Gym Equipments',
    image: './images/gym1.jpg'

},
{
    id: 3,
    name: 'Electronics And Gadgets',
    image: './images/iphone.png',
    link: 'shopping.html'
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
},
{
    id: 6,
    name: "Furnitures",
    image: './images/furniture.jpg'
},
{
    id: 7,
    name: "Hobbies and Toys",
    image: './images/toys.jpg'
},
{
    id: 8,
    name: "Pet Supplies",
    image: './images/petfoods.jpg'
}
]

function showcategories() {
    let categories = "";
    let cat_body = document.getElementById('list');
    card_categories.forEach(function (category) {
        categories += `<div class="d-inline-flex my-3 justify-content-center">
        <div class="card" style="width: 18rem;">
        <a href="${category.link}"><img src="${category.image}" id="card-img" class="card-img-top" style="height: 150px">
        <div class="card-body bg-light">
          <p class="card-title" style="height:20px""><b>${category.name}</b></p>
        </div>
        </div></a>
        </div>`
    });
    cat_body.innerHTML = categories
}
showcategories();



  
