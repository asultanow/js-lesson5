let productsJson = localStorage.getItem('products');
let products = JSON.parse(productsJson);

products = products || [];

let sendBtn = document.getElementById('send-form-btn');

sendBtn.onclick = function (ev) {
    let nameInp = document.getElementById('product-name-inp');
    let amountInp = document.getElementById('amount-inp');
    let priceInp = document.getElementById('price-inp');
    let imgUrlInp = document.getElementById('img-url-inp');

    let product = {
        name: nameInp.value,
        amount: +amountInp.value,
        price: +priceInp.value,
        imgUrl: imgUrlInp.value
    };

    products.push(product);

    let productsJson = JSON.stringify(products);
    localStorage.setItem('products', productsJson);

    nameInp.value = '';
    amountInp.value = '';
    priceInp.value = '';
    imgUrlInp.value = '';
}
