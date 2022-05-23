const goods = [
    { title: 'Shirt', price: 150, image: 'scale_1200.webp' },
    { title: 'Socks', price: 50, image: '5f59db9974a05.jpg' },
    { title: 'Jacket', price: 350, image: 'scale_1200.webp' },
    { title: 'Shoes', price: 250, image: '5f59db9974a05.jpg' },
];

const renderGoodsItem = (title, price, image) => {
    return `<div class="goods-item"><h3>${title}</h3><img class="product-img" src="${image}" alt="product"><p>${price}</p> <button class="buy-btn"> Купить </button> </div>`;
};
const renderGoodsList = list => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price, item.image));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
}

renderGoodsList(goods);


//стили
let allProducts = document.querySelectorAll('.goods-item');
allProducts.forEach(function (product) {
    product.style.backgroundColor = '#dcdcdc';
    product.style.width = 150 + 'px';
    product.style.padding = 15 + 'px';
    product.style.textAlign = 'center';
});
let image = document.querySelectorAll('img');
image.forEach(function (img) {
    img.style.width = 100 + '%';
    img.style.height = 50 + '%';
})
let btn = document.querySelector('.cart-button');
btn.style.fontSize = 18 + 'px';
btn.style.margin = 20 + 'px';
btn.style.marginLeft = 0 + 'px';
btn.style.backgroundColor = '#ccffcc';

let buyProduct = document.querySelectorAll('.buy-btn');
buyProduct.forEach(function (btn) {
    btn.style.marginBottom = 15 + 'px';
    btn.style.backgroundColor = '#ccffcc';
    btn.style.border = 'none';
    btn.style.padding = 7 + 'px';
})

let goodsList = document.querySelector('.goods-list');
goodsList.style.display = 'flex';
goodsList.style.justifyContent = 'space-between';