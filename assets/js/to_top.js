var mybutton = document.getElementById("to_top");

// When the user scrolls down 20px from the top of the document, show the button
var x = document.getElementsByTagName("body")[0];
x.addEventListener('scroll', scrollFunction);

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    
} else {
    mybutton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}

mybutton.addEventListener('click', topFunction);