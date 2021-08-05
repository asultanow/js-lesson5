renderProducts();

function renderProducts() {
    let productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '';

    let productsJson = localStorage.getItem('products');
    let products = JSON.parse(productsJson);
    products = products || [];

    if (products.length !== 0) {

        let total = calcTotal(products);

        document.getElementById('total_amount').innerText = total.amount;
        document.getElementById('total_sum').innerText = '$ ' + total.sum;

        productsDiv.innerHTML = createProdsTemplate(products);

        addHandlers(products);

    } else {
        document.getElementById('total').style.display = 'none';
        document.getElementById('no-products').style.display = 'block';
    }
}

function addHandlers(products) {
    let delOneBtns = document.getElementsByClassName('delete-one-btn');

    for (const delOneBtn of delOneBtns) {
        delOneBtn.onclick = function (ev) {
            let btnId = ev.target.id;
            let prodIndex = +btnId.match(/\d+/)[0];

            products.splice(prodIndex, 1);
            localStorage.setItem('products', JSON.stringify(products));

            renderProducts();

        }
    }

    let delAllBtn = document.getElementById('delete-all-btn');

    delAllBtn.onclick = function () {
        localStorage.removeItem('products');

        renderProducts();

    }
}

function calcTotal(products) {
    let totalSum = 0;
    let totalAmount = 0;

    for (const product of products) {
        let sum = product.price * product.amount;
        product.sum = sum;

        totalSum += sum;
        totalAmount += product.amount;
    }

    let total = { sum: totalSum, amount: totalAmount };

    localStorage.setItem('products', JSON.stringify(products));

    return total;
}

function createProdsTemplate(products) {
    let prodsTemplate = '';

    for (let i = 0; i < products.length; i++) {
        let template =
            `<div id="product-${i}" class="product d-flex">
                    <div class="image">
                        <img src="${products[i].imgUrl}" alt="product ${products[i].name}">
                    </div>
                    <div class="name">${products[i].name}</div>
                    <div class="price">$ ${products[i].price}</div>
                    <div class="amount">${products[i].amount}</div>
                    <div class="sum">$ ${products[i].sum}</div>
                    <div class="delete-btn-box">
                        <button id="delete-btn-${i}" class="btn bg-red delete-one-btn">Delete</button>
                    </div>
                </div>`;

        prodsTemplate += template;
    }

    return prodsTemplate;
}
