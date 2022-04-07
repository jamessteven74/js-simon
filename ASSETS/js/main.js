/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, 
il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/


//strumenti
// document.queryselector, opprure get ElementById = un div in html.
// var numbers = array
//math random( copio da w3school la funzione


// visualizzare in pagina 5 numeri casuali
//seleziono elemento della dom dove inserire numeri casuali
//creare variare dove salvare i numeri.
// generare i numeri casuali
// serve setTimeout (funzione 3000)


const numberElement = document.querySelector ("number")
//seleziono elemento della DOM dove inserire i numeri


function generateNumbers(total_numbers, numbers_limit){
    // creare variabile dove salvare i numeri


    const randomNumbers = []
        //generare 5 numeri casuali (che non si ripetono)
    while (randomNumbers.length !== total_numbers) {
        const number = Math.floor(Math.random() * numbers_limit)
        if(!randomNumbers.includes(number)){
            randomNumbers.push(number)
        }
    }
        return randomNumbers;

}


const randomNumbers = generateNumbers(5,100)
console.log(randomNumbers);

// faccio partire un timer di 30 secondi.
// imposto il set time out a 3 secondi

setTimeout(()=> {
    
   // utente deve inserire, uno alla volta, i numeri
   //faccio un ciclo e chiedo all'utente di inserire 5 numeri.

    const userAttemps = []

   for(let i = 0; i< 5 ; i++){
        const userNumber = +prompt("inserisci uno dei numero che ha visto prima")
        //Dopo che sono stati inseriti i 5 numeri, 
        //il software dice quanti e quali dei numeri da indovinare sono stati individuati.
        //array che contiene i numeri inseriti dall'utente (solo se combaciano con i numeri)

        if(randomNumbers.includes(userNumber)&& !userAttemps.includes(userNumber)){
            userAttemps.push(userNumber)
        }
   }

  

}, 3000)



setTimeout(timer, 3000, numberElement, randomNumbers)
const randomnumbers = generateNumbers(5,100)


function timer(dom_element, numbers_list){
    console.log(dom_element, numbers_list);
    

    const userAttemps = []

    for(let i = 0; i< 5; i++) {
        const userNumber = (prompt("inserisci uno dei numeri visualizzati prma"))
        console.log(userNumber);
        
        if(numbers_list.includes(userNumber) && !userAttemps.includes(userNumber)){
            userAttemps.push(userNumber)
        }
    }
}



