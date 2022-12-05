var site1El = document.querySelector(".site1");
var site2El = document.querySelector(".site2");
var site3El = document.querySelector(".site3");

site1El.children[0].textContent = "Site 1";
site1El.children[1].setAttribute("href", "https://google.com");
site1El.children[1].children[0].setAttribute("src", "assets/images/image_1.jpg");
site1El.children[1].children[0].setAttribute("alt", "man working");
site1El.children[1].children[0].setAttribute("style", "padding:10px;");

site2El.children[0].textContent = "Site 2";
site2El.children[1].setAttribute("href", "https://twitter.com");
site2El.children[1].children[0].setAttribute("src", "assets/images/image_2.jpg");
site2El.children[1].children[0].setAttribute("alt", "group brainstorm");
site2El.children[1].children[0].setAttribute("style", "padding:10px;");

site3El.children[0].textContent = "Site 3";
site3El.children[1].setAttribute("href", "https://instagram.com");
site3El.children[1].children[0].setAttribute("src", "assets/images/image_3.jpg");
site3El.children[1].children[0].setAttribute("alt", "women working");
site3El.children[1].children[0].setAttribute("style", "padding:10px;");

// Write Your Code Below

var h4s = document.querySelectorAll('h4');

for (let h4 of h4s) {
    h4.style.color = 'blue';
    h4.style.fontSize = '30px';
    h4.style.fontWeight = 'bold';
    h4.style.paddingLeft = '10px';
    h4.style.margin = '0';
    // items.setAttribute('style', 'color:blue', 'fontSize:30px', 'fontWeight:bold;');
}

var h1 = document.querySelector('h1:nth-child(2)');
// this will overwrite any styling that you have written directly into the HTML document
h1.setAttribute('style', 'color: red; padding-left: 10px; margin: 0px;');
console.log(h1);
