// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;


// inizializzazione costanti
const btnHTML = document.getElementById('btnPlay')
const grigliaHTML = document.getElementById('griglia')
const selectHTML = document.getElementById('cmDifficolta')


// applicato evento al bottone
btnHTML.addEventListener('click', function(){

    // resetta la griglia ogni volta che premi il tasto
    grigliaHTML.innerHTML = ''

    // rende visibile la griglia sostituendo le proprietà di stile
    grigliaHTML.style.setProperty('display', 'flex')
    

    //ciclo che crea le celle in base alla disfficoltà nella griglia
    for (let i = 1; i <= selectHTML.value; i++) {

        //creo un singolo div vuoto
        let box = document.createElement("div")

        // adatta tramite il calc le celle in base alla difficoltà
        box.style.setProperty('flex-basis', `calc(100% / ${Math.sqrt(selectHTML.value)})`)

        //associo la classe al div creato
        box.classList.add("box")

        //inseriamo i numeri in modo sequenziale
        box.innerHTML = `<span>${ [i] }</span>`


        // al click seleziona e cambia il colore della cella
        box.addEventListener('click', function () {
            
            // console.log(this)

            let specificoSpanHtml = this.querySelector( "span" ).innerText

            this.classList.toggle('sky')

            console.log(specificoSpanHtml)

        })

        //inserisco il div nella griglia
        grigliaHTML.append(box)

    }

})

// Terminato esercizio