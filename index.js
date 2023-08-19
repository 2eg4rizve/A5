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
    sum=sum.toFixed(2);
    console.log(sum);

    const SumPrice = document.getElementById('sum-p');
    SumPrice.innerHTML = sum;

    total = sum;

    const lastPrice = document.getElementById('last-p');
    lastPrice.innerHTML = total;

    const btnPurchase = document.getElementById('btn-Purchase');

    if (sum > 0) {
        btnPurchase.removeAttribute('disabled');
    } else {
        btnPurchase.setAttribute('disabled', 'true');
    }

    const btnApply = document.getElementById('btn-apply');

    if (sum >= 200) {
        btnApply.removeAttribute('disabled');
    } else {
        btnApply.setAttribute('disabled', 'true');
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
    sum=sum.toFixed(2);
    console.log(sum);

    const SumPrice = document.getElementById('sum-p');
    SumPrice.innerHTML = sum;

    total = sum;

    const lastPrice = document.getElementById('last-p');
    lastPrice.innerHTML = total;



    const btnPurchase = document.getElementById('btn-Purchase');

    if (sum > 0) {
        btnPurchase.removeAttribute('disabled');
    } else {
        btnPurchase.setAttribute('disabled', 'true');
    }

    const btnApply = document.getElementById('btn-apply');

    if (sum >= 200) {
        btnApply.removeAttribute('disabled');
    } else {
        btnApply.setAttribute('disabled', 'true');
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
    sum=sum.toFixed(2);
    console.log(sum);

    const SumPrice = document.getElementById('sum-p');
    SumPrice.innerHTML = sum;


    total = sum;

    const lastPrice = document.getElementById('last-p');
    lastPrice.innerHTML = total;



    const btnPurchase = document.getElementById('btn-Purchase');

    if (sum > 0) {
        btnPurchase.removeAttribute('disabled');
    } else {
        btnPurchase.setAttribute('disabled', 'true');
    }




    const btnApply = document.getElementById('btn-apply');

    if (sum >= 200) {
        btnApply.removeAttribute('disabled');
    } else {
        btnApply.setAttribute('disabled', 'true');
    }



})









// card 4
document.getElementById('card-4').addEventListener('click', function () {
    console.log("card 4 click");

    count++;

    const c4Price = document.getElementById('card-4-price').innerText;
    console.log(c4Price);

    const output = document.getElementById('output');
    const p = document.createElement('p');

    const name = document.getElementsByClassName('card4-name');

    console.log(name);


    p.innerHTML = `${count} . Sports Back Cap`;
    output.appendChild(p);

    sum = parseFloat(sum) + parseFloat(c4Price);
    sum=sum.toFixed(2);
    console.log(sum);

    const SumPrice = document.getElementById('sum-p');
    SumPrice.innerHTML = sum;


    total = sum;

    const lastPrice = document.getElementById('last-p');
    lastPrice.innerHTML = total;



    const btnPurchase = document.getElementById('btn-Purchase');

    if (sum > 0) {
        btnPurchase.removeAttribute('disabled');
    } else {
        btnPurchase.setAttribute('disabled', 'true');
    }




    const btnApply = document.getElementById('btn-apply');

    if (sum >= 200) {
        btnApply.removeAttribute('disabled');
    } else {
        btnApply.setAttribute('disabled', 'true');
    }



})






// card 5
document.getElementById('card-5').addEventListener('click', function () {
    console.log("card 5 click");

    count++;

    const c5Price = document.getElementById('card-5-price').innerText;
    console.log(c5Price);

    const output = document.getElementById('output');
    const p = document.createElement('p');

    const name = document.getElementsByClassName('card5-name');

    console.log(name);


    p.innerHTML = `${count} . Full Jersey Set`;
    output.appendChild(p);

    sum = parseFloat(sum) + parseFloat(c5Price);
    sum=sum.toFixed(2);
    console.log(sum);

    const SumPrice = document.getElementById('sum-p');
    SumPrice.innerHTML = sum;


    total = sum;

    const lastPrice = document.getElementById('last-p');
    lastPrice.innerHTML = total;



    const btnPurchase = document.getElementById('btn-Purchase');

    if (sum > 0) {
        btnPurchase.removeAttribute('disabled');
    } else {
        btnPurchase.setAttribute('disabled', 'true');
    }




    const btnApply = document.getElementById('btn-apply');

    if (sum >= 200) {
        btnApply.removeAttribute('disabled');
    } else {
        btnApply.setAttribute('disabled', 'true');
    }



})




// card 6
document.getElementById('card-6').addEventListener('click', function () {
    console.log("card 6 click");

    count++;

    const c6Price = document.getElementById('card-6-price').innerText;
    console.log(c6Price);

    const output = document.getElementById('output');
    const p = document.createElement('p');

    const name = document.getElementsByClassName('card6-name');

    console.log(name);


    p.innerHTML = `${count} . Sports cates`;
    output.appendChild(p);

    sum = parseFloat(sum) + parseFloat(c6Price);
    sum=sum.toFixed(2);
    console.log(sum);

    const SumPrice = document.getElementById('sum-p');
    SumPrice.innerHTML = sum;


    total = sum;

    const lastPrice = document.getElementById('last-p');
    lastPrice.innerHTML = total;



    const btnPurchase = document.getElementById('btn-Purchase');

    if (sum > 0) {
        btnPurchase.removeAttribute('disabled');
    } else {
        btnPurchase.setAttribute('disabled', 'true');
    }




    const btnApply = document.getElementById('btn-apply');

    if (sum >= 200) {
        btnApply.removeAttribute('disabled');
    } else {
        btnApply.setAttribute('disabled', 'true');
    }



})



// card 7
document.getElementById('card-7').addEventListener('click', function () {
    console.log("card 7 click");

    count++;

    const c7Price = document.getElementById('card-7-price').innerText;
    console.log(c7Price);

    const output = document.getElementById('output');
    const p = document.createElement('p');

    const name = document.getElementsByClassName('card7-name');

    console.log(name);


    p.innerHTML = `${count} . Single Relax Chair`;
    output.appendChild(p);

    sum = parseFloat(sum) + parseFloat(c7Price);
    console.log(sum);

    const SumPrice = document.getElementById('sum-p');
    SumPrice.innerHTML = sum;


    total = sum;

    const lastPrice = document.getElementById('last-p');
    lastPrice.innerHTML = total;



    const btnPurchase = document.getElementById('btn-Purchase');

    if (sum > 0) {
        btnPurchase.removeAttribute('disabled');
    } else {
        btnPurchase.setAttribute('disabled', 'true');
    }




    const btnApply = document.getElementById('btn-apply');

    if (sum >= 200) {
        btnApply.removeAttribute('disabled');
    } else {
        btnApply.setAttribute('disabled', 'true');
    }



})



// card 8
document.getElementById('card-8').addEventListener('click', function () {
    console.log("card 8 click");

    count++;

    const c8Price = document.getElementById('card-8-price').innerText;
    console.log(c8Price);

    const output = document.getElementById('output');
    const p = document.createElement('p');

    const name = document.getElementsByClassName('card8-name');

    console.log(name);


    p.innerHTML = `${count} . Full Jersey Set`;
    output.appendChild(p);

    sum = parseFloat(sum) + parseFloat(c8Price);
    sum=sum.toFixed(2);
    console.log(sum);

    const SumPrice = document.getElementById('sum-p');
    SumPrice.innerHTML = sum;


    total = sum;

    const lastPrice = document.getElementById('last-p');
    lastPrice.innerHTML = total;



    const btnPurchase = document.getElementById('btn-Purchase');

    if (sum > 0) {
        btnPurchase.removeAttribute('disabled');
    } else {
        btnPurchase.setAttribute('disabled', 'true');
    }




    const btnApply = document.getElementById('btn-apply');

    if (sum >= 200) {
        btnApply.removeAttribute('disabled');
    } else {
        btnApply.setAttribute('disabled', 'true');
    }



})


// card 9
document.getElementById('card-9').addEventListener('click', function () {
    console.log("card 9 click");

    count++;

    const c9Price = document.getElementById('card-9-price').innerText;
    console.log(c9Price);

    const output = document.getElementById('output');
    const p = document.createElement('p');

    const name = document.getElementsByClassName('card9-name');

    console.log(name);


    p.innerHTML = `${count} . Flexible Sofa`;
    output.appendChild(p);

    sum = parseFloat(sum) + parseFloat(c9Price);
    sum=sum.toFixed(2);
    console.log(sum);

    const SumPrice = document.getElementById('sum-p');
    SumPrice.innerHTML = sum;


    total = sum;

    const lastPrice = document.getElementById('last-p');
    lastPrice.innerHTML = total;



    const btnPurchase = document.getElementById('btn-Purchase');

    if (sum > 0) {
        btnPurchase.removeAttribute('disabled');
    } else {
        btnPurchase.setAttribute('disabled', 'true');
    }




    const btnApply = document.getElementById('btn-apply');

    if (sum >= 200) {
        btnApply.removeAttribute('disabled');
    } else {
        btnApply.setAttribute('disabled', 'true');
    }



})








// btn-apply

document.getElementById('btn-apply').addEventListener('click', function () {

    const text = document.getElementById('apply-text').value;

    console.log("Apply-Btn Click");
    console.log(text);

    if (text === "SELL200") {

        const discount = document.getElementById('discount');

        let x = (20/100)*sum;
        x=x.toFixed(2)
        console.log(x);

        discount.innerHTML = x;





        const lastPrice = document.getElementById('last-p');
        lastPrice.innerHTML = (sum-x).toFixed(2);

    }
})


// btn-go-home

document.getElementById('btn-go-home').addEventListener('click',function(){
    location.reload();
})