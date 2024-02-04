let button = document.querySelector("#button");
// Sélectionne l'élément du DOM avec l'ID "button" et le stocke dans la variable 'button'
//affiche ce boutton dans la console et détecte le clic
console.log(button);
button.addEventListener("click", function () {
  console.log("click");

 // Bascule la classe "open" sur l'élément 'menuDeroulant', ce qui permet de montrer ou cacher le menu déroulant
  let menuDeroulant = document.querySelector("#menu-deroulant");
  menuDeroulant.classList.toggle("open");

});  

function myFunction(x) {
    x.classList.toggle("change");    //3 barres se transforment en croix 
  }


// fonction pour le formulaire d'insciption 
function submitForm(event) {
  //empêche que le formulaire se remette par défaut (rechargement de la page)
    event.preventDefault();

//réinitialiser les messages d'erreurs 
    document.getElementById('errorText').innerText = "";
    document.getElementById('errorMessage').classList.add('hidden');

   //valider le formulaire
    if (!validateForm()) {
        return;
    }

//faire en sorte que le formulaire disparaisse et afficher un message de confirmation 
    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('confirmationMessage').classList.remove('hidden');
}

function validateForm() {
   // Récupération des valeurs des champs
   var firstName = document.getElementById('firstName').value;
   var lastName = document.getElementById('lastName').value;
   var address = document.getElementById('address').value;
   var city = document.getElementById('city').value;
   var email = document.getElementById('email').value;
   var postalCode = document.getElementById('postalCode').value;
   var country = document.getElementById('country').value;
   var password = document.getElementById('password').value;
   var confirmPassword = document.getElementById('confirmPassword').value;
   var acceptTerms = document.getElementById('acceptTerms').checked;

   // Réinitialiser le message d'erreur
   document.getElementById('errorText').innerText = "";



   // Vérifie que chaque conditions soient boien respectées si ce n'est pas le cas alors il affiche un message d'erreur et le formulaire n'est pas valide

if (firstName.length < 2 || lastName.length < 2 || address.length < 2 || city.length < 2) {
       document.getElementById('errorText').innerText = "Les champs Nom, Prénom, Adresse et Ville doivent avoir au moins 2 caractères.";
       document.getElementById('errorMessage').classList.remove('hidden');
       return false; //si pas respceté alors invalide
   }

   if (!email.includes('@')) {
       document.getElementById('errorText').innerText = "L'adresse email doit contenir un '@'.";
       document.getElementById('errorMessage').classList.remove('hidden');
       return false;
   }

   if (postalCode.length !== 5) { // le code postal doit avoir 5 chiffres 


       document.getElementById('errorText').innerText = "Le Code Postal doit faire exactement 5 caractères.";
       document.getElementById('errorMessage').classList.remove('hidden');
       return false;
   }

   if (country === "") {
       document.getElementById('errorText').innerText = "Le champ Pays est obligatoire.";
       document.getElementById('errorMessage').classList.remove('hidden');
       return false;
   }

  if (password.length < 6 || !password.match(/[a-zA-Z]/) || !password.match(/\d/)) {
       document.getElementById('errorText').innerText = "Le mot de passe doit faire au moins 6.";
       document.getElementById('errorMessage').classList.remove('hidden');
       return false;
   }

   if (password !== confirmPassword) {
       document.getElementById('errorText').innerText = "Le mot de passe et la confirmation du mot de passe doivent être identiques.";
       document.getElementById('errorMessage').classList.remove('hidden');
       return false;
   }

   if (!acceptTerms) {
       document.getElementById('errorText').innerText = "Veuillez accepter les conditions d'utilisation.";
       document.getElementById('errorMessage').classList.remove('hidden');
       return false;
   }

   // Si toutes les conditions sont remplies le formulaire est considéré comme valide
   return true;
}


