// Déclaration et initialisation d'une variable i correspondant au compteur
let i = 0;

// Fonction qui ajoute 1 à la variable puis affiche la mise à jour du compteur au clic 
function displayCounter(){
    i++;
    alert(`Compteur à ${i}`);
    document.getElementById("p").innerHTML=i;
}