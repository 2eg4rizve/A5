console.log("index.js");
let count = 0;
let sum = 0;


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



    const lastPrice = document.getElementById('last-p');
    lastPrice.innerHTML = sum;








})