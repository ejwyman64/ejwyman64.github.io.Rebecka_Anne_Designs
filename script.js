// Current State will be what is seen in the main section of the window.
let currentState = document.getElementById("currentState");

var aboutPage =
    `<div id="aboutPage" class="hide state">
        <h3>Rebecka Anne Pinkham ~ Owner and Chief of Design since 2019</h3>
        <p>Blah blah blah, stuff about Becka.</p>
    </div>`;

var homePage =
    `<div id="homePage" class="hide state">
        <h1 class="greeting">Welcome to my website!</h1>
        <p>Lorem ipsum dolor amet tilde knausgaard helvetica waistcoat poutine neutra try-hard.
        Messenger bag flannel cold-pressed vegan, before they sold out hella palo santo kitsch franzen.
        Blog sartorial cred bicycle rights hella 3 wolf moon. Bushwick narwhal copper mug cred glossier
        mumblecore squid hot chicken brooklyn 3 wolf moon beard distillery everyday carry literally man bun.
        </p>
    </div>
    <div class="blog state">
        <h2>Latest Post</h2>
        <div id="latestPost" class="blogPost">
        <h3>Lorum Ipsum Blah</h3>
        <p>Lorem ipsum dolor amet tilde knausgaard helvetica waistcoat poutine neutra try-hard.
        Messenger bag flannel cold-pressed vegan, before they sold out hella palo santo kitsch franzen.</p>
        </div>
    </div>
    <div class="gallery state">
        <h2>Gallery</h2>
        <div id="homeGallery" class="homeGallery">
        <img class="galImg" src="img/QueenB.jpg" alt="Girl with a crown on her head.">
        <img class="galImg" src="img/Icecream.jpg" alt="Ice cream cone.">
        <img class="galImg" src="img/Psalm1.jpg" alt="Tree with roots.">
        <img class="galImg" src="img/Structures.jpg" alt="Front of building">
        </div>
        <a onclick="renderPage(galleryPage, currentState)" id="seeMoreGallery" class="noHighlight ">See More</a>
    </div>`;

var seeMore = "See More"


var galleryPage =
    `<div id="galleryPage" class="hide state">
        <img class="galImg" src="img/QueenB.jpg" alt="Girl with a crown on her head.">
        <img class="galImg" src="img/Icecream.jpg" alt="Ice cream cone.">
        <img class="galImg" src="img/Psalm1.jpg" alt="Tree with roots.">
        <img class="galImg" src="img/Structures.jpg" alt="Front of building">
        <img class="galImg" src="img/Day5.jpg" alt="Day 5: pt. 1">
        <img class="galImg" src="img/Day5(1).jpg" alt="Day 5: pt. 2">
        <img class="galImg" src="img/Day1.jpg" alt="Day 1">
        <img class="galImg" src="img/Woman.jpg" alt="Woman">
        <img class="galImg" src="img/I_LoveRain.jpg" alt="I Love Rain">
    </div>`;




var contactPage =
    `<div id="contactPage" class="hide state">
        <h2>How to contact Rebecka Anne</h2>
        <p>Contact information here. Blah blah blah. 555-555-5555</p>
    </div>`;



//Navigation buttons.
let buttons = [];
buttons[0] = document.getElementById("homeButton");
buttons[1] = document.getElementById("aboutButton");
buttons[2] = document.getElementById("galleryButton");
buttons[3] = document.getElementById("contactButton");

buttons.forEach(btn => {
    btn.addEventListener("click", displayPage);
});

// Render home page on load.
var renderPage = function (template, node) {
    console.log(template);
    node.innerHTML = template;
}
renderPage(homePage, currentState);

// This function will allow me to dynamically display each page. 
function displayPage() {
    if (event.target == buttons[0]) {
        console.log(currentState);
        renderPage(homePage, currentState);

    } else if (event.target == buttons[1]) {
        console.log(currentState);
        renderPage(aboutPage, currentState);

    } else if (event.target == buttons[2]) {
        console.log(currentState);
        renderPage(galleryPage, currentState);

    } else if (event.target == buttons[3]) {
        console.log(currentState);
        renderPage(contactPage, currentState);

    } else {
        renderPage(homePage, currentState);
    }
}

