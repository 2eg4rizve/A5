console.log("index.js");
let count = 0;
let sum = 0;// without discount price
let total = 0;//last price


// card 1
document.getElementById('card-1').addEventListener('click', function () {
    console.log("card 1 click");

    count++;

    const c1Price = document.getElementById('card-1-price').innerText;
    console.log(c1Price);

    const output = document.getElementById('output');
    const p = document.createElement('p');

    const name = document.getElementsByClassName('card1-name');

    console.log(name);


    p.innerHTML = `${count} . K. Accessories`;
    output.appendChild(p);

    sum = parseFloat(sum) + parseFloat(c1Price);
    console.log(sum);

    const SumPrice = document.getElementById('sum-p');
    SumPrice.innerHTML = sum;

    total = sum;

    const lastPrice = document.getElementById('last-p');
    lastPrice.innerHTML = total;

    const btnPurchase = document.getElementById('btn-Purchase');

    if (total > 0) {
        btnPurchase.removeAttribute('disabled');
    } else {
        btnPurchase.setAttribute('disabled', 'true');
    }








})



// card 2
document.getElementById('card-2').addEventListener('click', function () {
    console.log("card 2 click");

    count++;

    const c2Price = document.getElementById('card-2-price').innerText;
    console.log(c2Price);

    const output = document.getElementById('output');
    const p = document.createElement('p');

    const name = document.getElementsByClassName('card2-name');

    console.log(name);


    p.innerHTML = `${count} . K. Accessories`;
    output.appendChild(p);

    sum = parseFloat(sum) + parseFloat(c2Price);
    console.log(sum);

    const SumPrice = document.getElementById('sum-p');
    SumPrice.innerHTML = sum;

    total = sum;

    const lastPrice = document.getElementById('last-p');
    lastPrice.innerHTML = total;



    const btnPurchase = document.getElementById('btn-Purchase');

    if (total > 0) {
        btnPurchase.removeAttribute('disabled');
    } else {
        btnPurchase.setAttribute('disabled', 'true');
    }





})



// card 3

document.getElementById('card-3').addEventListener('click', function () {
    console.log("card 3 click");

    count++;

    const c3Price = document.getElementById('card-3-price').innerText;
    console.log(c3Price);

    const output = document.getElementById('output');
    const p = document.createElement('p');

    const name = document.getElementsByClassName('card3-name');

    console.log(name);


    p.innerHTML = `${count} . Home Cooker`;
    output.appendChild(p);

    sum = parseFloat(sum) + parseFloat(c3Price);
    console.log(sum);

    const SumPrice = document.getElementById('sum-p');
    SumPrice.innerHTML = sum;


    total = sum;

    const lastPrice = document.getElementById('last-p');
    lastPrice.innerHTML = total;



    const btnPurchase = document.getElementById('btn-Purchase');

    if (total > 0) {
        btnPurchase.removeAttribute('disabled');
    } else {
        btnPurchase.setAttribute('disabled', 'true');
    }





})