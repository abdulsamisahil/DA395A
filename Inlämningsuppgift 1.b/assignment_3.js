/*
    `toggleNextElement` har som uppgift att visa eller dölja ett elements
    kommande syskon. I vårt fall när vi klickar på en rubrik (h2) ska det
    nästkommande syskonet (section) visas eller döljas.
*/

function toggleNextElement(e) {
    // 1. Leta upp det nästkommande element-syskonet

    // 2. Kontrollera om element visas eller döljs

    // 3.a. Om elementet är dolt - visa det
    
    // 3.b. Om elemenetet visas - dölj det
}

/*
    `start` har som uppgift att dölja allt innehåll för våra artiklar och
    ser till att funktionen `toggleNextElement` körs när en användare
    klickar på rubrikerna (h2)
*/
function start() {
    // 1. Hämta alla rubriker (h2) och spara dom i en variabel

    // 2. Loopa igenom alla dessa rubriker och:

    // 2.a. Dölj allt innehåll (section) som ligger som det nästkommande
    //     syskonet till rubriken

    // 2.b. Lägg till en event-lyssnar för att ange att funktionen
    //     `toggleNextElement` ska köras när en användare klickar
    //     på en rubrik.
}

// Kör våran `start` funktion
start();