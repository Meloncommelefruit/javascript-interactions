document.addEventListener("DOMContentLoaded", function() {

    let button2 = document.querySelector("#button-2");
        // Sélectionne l'élément du DOM avec l'ID "button" et le stocke dans la variable 'button'
//affiche ce boutton dans la console et détecte le clic
    console.log(button2);

    button2.addEventListener("click", function () {
        console.log("click");
          // Bascule la classe "open" sur l'élément 'menuDeroulant', ce qui permet de montrer ou cacher le menu déroulant
        let menuDeroulant2 = document.querySelector("#menu-deroulant-2");
        menuDeroulant2.classList.toggle("open");
    });

    function myFunction(x) {
        x.classList.toggle("change"); //3 barres se transforment en croix 
    }
});

