
function addBread() {
    var product = document.getElementById("product1")
    var quantity = document.getElementById("quantity1")
    var price = document.getElementById("price1")

    product.innerHTML = ("Bread");
    quantity.innerText = (1);
    price.innerText = (55 + " ksh")
}
function addMilk() {
    var product = document.getElementById("product2")
    var quantity = document.getElementById("quantity2")
    var price = document.getElementById("price2")

    product.innerText = ("Milk");
    quantity.innerText = (1);
    price.innerText = (54 + " ksh")
}
function addMakeUpBrush() {
    var product = document.getElementById("product3")
    var quantity = document.getElementById("quantity3")
    var price = document.getElementById("price3")

    product.innerText = ("MakeUp Brush");
    quantity.innerText = (1);
    price.innerText = (55 + " ksh")
}
function addHairFood() {
    var product = document.getElementById("product4")
    var quantity = document.getElementById("quantity4")
    var price = document.getElementById("price4")

    product.innerText = ("HairFood");
    quantity.innerText = (1);
    price.innerText = (344 + " ksh")
}
function addPlasticChair() {
    var product = document.getElementById("product5")
    var quantity = document.getElementById("quantity5")
    var price = document.getElementById("price5")

    product.innerText = ("Plastic Chairs");
    quantity.innerText = (1);
    price.innerText = ( 1,042+ " ksh")
}
function addSofaSet() {
    var product = document.getElementById("product6")
    var quantity = document.getElementById("quantity6")
    var price = document.getElementById("price6")

    product.innerText = ("Sofa Set");
    quantity.innerText = (1);
    price.innerText = (178,627 + " ksh")
}
function addMenSuits() {
    var product = document.getElementById("product7")
    var quantity = document.getElementById("quantity7")
    var price = document.getElementById("price7")

    product.innerText = ("Men's Suits");
    quantity.innerText = (1);
    price.innerText = (6,362 + " ksh")
}
function addWomenSuits() {
    var product = document.getElementById("product8")
    var quantity = document.getElementById("quantity8")
    var price = document.getElementById("price8")

    product.innerText = ("Bread");
    quantity.innerText = (1);
    price.innerText = (1,678 + " ksh")
}
function addMicrowave() {
    var product = document.getElementById("product9")
    var quantity = document.getElementById("quantity9")
    var price = document.getElementById("price9")

    product.innerText = ("Microwave");
    quantity.innerText = (1);
    price.innerText = (28,812 + " ksh")
}
function addFridge() {
    var product = document.getElementById("product10")
    var quantity = document.getElementById("quantity10")
    var price = document.getElementById("price10")

    product.innerText = ("Refrigirator");
    quantity.innerText = (1);
    price.innerText = (87,694 + " ksh")
}
function landing() {
    window.location.assign("/assets/pages/page/landing-page/index.html");
   }

function completeOrder(){
    alert("Thank you for choosing Supashopper");
    landing();
}

