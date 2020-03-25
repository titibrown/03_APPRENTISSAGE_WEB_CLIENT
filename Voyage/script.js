var label = document.getElementsByTagName("label");

add_red_star(label[0]);
add_red_star(label[1]);


function add_red_star(initial_text) {
   var red_star = document.createElement("sup");
   var red_star_content = document.createTextNode(" *");
   red_star.appendChild(red_star_content);
   red_star.style.color = "red";
   initial_text.appendChild(red_star);
}

input[2].disabled = true;
input[2].style.backgroundColor = "#c5c9ca";
input[2].style.color = "#f9ebeb;";