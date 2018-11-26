// To the top button
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Side menu

function openSlideMenu() {
    document.getElementById('side-menu').style.width = '45vw';
}

function closeSideMenu() {
    document.getElementById('side-menu').style.width = '0';
}

const sides = document.querySelectorAll('a#side');

[].forEach.call(sides, function(side) {
    side.addEventListener('click', closeSideMenu);
})

// Render images 

const photos = ["images/birthdaycake.png", "images/corsetcookie-2.jpg", "images/corsetcookies-1.jpg", "images/corsetcookies.jpg",
"images/ramencake.jpg", "images/starwars.png", "images/toolbox.jpg", "images/wedding-0.jpg", "images/wedding-1.jpg", "images/wedding-4.jpg",
"images/weddingcake-2.jpg", "images/kc.JPG"]

function renderImg() {
    let images = document.getElementById('img-container');
    
    for ( i = 0; i < photos.length; i++ ) {
        let img = document.createElement('img');
        img.className = 'pic';
        img.src = `${photos[i]}`;
        img.alt = 'cake';
        images.appendChild(img);
    }
}
renderImg();