const marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
    ordini:[
        {idordine:1,
         codiceSconto:null,
         oggettiDellOrdine:[ 
            {
             Id:1,nomeArticolo:"test1",prezzoUnitario:35,quantita:2,
            }, 
            {
                Id:2,nomeArticolo:"test2",prezzoUnitario:110,quantita:1,
               } 
            ]   
        },
        {idordine:2,
            codiceSconto:"sconto10",
            oggettiDellOrdine:[ 
               {
                Id:1,nomeArticolo:"test1",prezzoUnitario:25,quantita:2,
               }, 
               {
                   Id:2,nomeArticolo:"test2",prezzoUnitario:20,quantita:1,
                  } 
               ]   
           }
       
    ]
}

const paul = {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
    ordini:[
        {idordine:3,
         codiceSconto:null,
         oggettiDellOrdine:[ 
            {
             Id:1,nomeArticolo:"test1",prezzoUnitario:25,quantita:2,
            }, 
            {
                Id:2,nomeArticolo:"test2",prezzoUnitario:20,quantita:1,
               } 
            ]   
        },
        {idordine:4,
            codiceSconto:"sconto10",
            oggettiDellOrdine:[ 
               {
                Id:1,nomeArticolo:"test1",prezzoUnitario:25,quantita:2,
               }, 
               {
                   Id:2,nomeArticolo:"test2",prezzoUnitario:20,quantita:1,
                  } 
               ]   
           }
       
    ]
}

const amy = {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
    ordini:[
        {idordine:5,
         codiceSconto:null,
         oggettiDellOrdine:[ 
            {
             Id:1,nomeArticolo:"test1",prezzoUnitario:25,quantita:2,
            }, 
            {
                Id:2,nomeArticolo:"test2",prezzoUnitario:20,quantita:1,
               } 
            ]   
        },
        {idordine:6,
            codiceSconto:"sconto10",
            oggettiDellOrdine:[ 
               {
                Id:1,nomeArticolo:"test1",prezzoUnitario:5,quantita:2,
               }, 
               {
                   Id:2,nomeArticolo:"test2",prezzoUnitario:10,quantita:1,
                  } 
               ]   
           }
       
    ]
}


const shippingCost = 50
let utenteCheEffettuaLAcquisto = marco//cambia il valore qui per provare se il tuo algoritmo funziona!
let totCarrello = 0
let sconto = 0

let persone = []
persone.push(marco, paul, amy)
console.log(persone)
for (let utenti of persone) {
    console.log(utenti)
    totCarrello=0 
    if (utenti.isAmbassador) {
        console.log(utenti.name + utenti.lastName + " è un Ambassador")
    } else { console.log(utenti.name + utenti.lastName + " non è un Ambassador") }
    if(utenti.isAmbassador) {
        totCarrello=0
        console.log("utente Ambassador")
        for(ordini of utenti.ordini ){
            console.log(ordini)
            let risultatocarrello= calcolocarrello( ordini) 
            totCarrello+=risultatocarrello

        }
       /*for (i = 0; i < prices.length; i++) { totCarrello += prices[i] }*/
        console.log(totCarrello + "****")
        if (totCarrello > 100) {  
            console.log("hai superato i 100 nel tuo carrello per te la spedizione e gratis")
            sconto = (totCarrello * 30) / 100
            console.log(`Sei un Utente Ambassador hai ottenuto uno sconto del 30% risparmi ${sconto} `)
            totCarrello -= sconto
            console.log(`Il costo totale e ${totCarrello}`) 
        }else {
            totCarrello+=shippingCost
            console.log(`Il costo totale compreso di spedizione è di ${totCarrello}`)
        }
    } else { 
        totCarrello=0
        console.log("utente non Ambassador")
        //for (i = 0; i < prices.length; i++) { totCarrello += prices[i] }
        for(ordini of utenti.ordini ){
            console.log(ordini)
            let risultatocarrello= calcolocarrello( ordini) 
            totCarrello+=risultatocarrello

        }
          if (totCarrello > 100) {  
            console.log("hai superato i 100 nel tuo carrello per te la spedizione e gratis")
            console.log(`Il costo totale e ${totCarrello}`)
            
            } else { 
                totCarrello+=shippingCost
                 console.log(`Il costo totale compreso di spedizione è di ${totCarrello}`)

            }
        }
}
let utenteA = []
for (let utenti of persone) {
    if (utenti.isAmbassador) {
        utenteA.push(utenti)
        console.log(utenteA)
    }
}
function calcolocarrello(ordini) {
    somma=0
     for (oggettiDellOrdine of ordini.oggettiDellOrdine ){
        somma+= oggettiDellOrdine.prezzoUnitario*oggettiDellOrdine.quantita
        
     } return somma
    }
          


/*console.log("l'utente che sta effettuato l acquisto è  " + utenteCheEffettuaLAcquisto.name + utenteCheEffettuaLAcquisto.lastName)
for (i = 0; i < prices.length; i++) { totCarrello += prices[i] }
console.log(totCarrello)
if (totCarrello > 100) {
    console.log("hai superato i 100 nel tuo carrello per te la spedizione e gratis")
    if (utenteCheEffettuaLAcquisto.isAmbassador) {
        sconto = (totCarrello * 30) / 100
        console.log(`Sei un Utente Ambassador hai ottenuto uno sconto del 30% risparmi ${sconto} `)
        totCarrello -= sconto
        console.log(`Il costo totale e ${totCarrello}`)

    } else {
        console.log(`Il costo totale e ${totCarrello}`)
    }
} else if (utenteCheEffettuaLAcquisto.isAmbassador) {
    sconto = (totCarrello * 30) / 100
    console.log(`Sei un Utente Ambassador hai ottenuto uno sconto del 30% risparmi ${sconto} `)
    totCarrello -= sconto
    totCarrello+=shippingCost
    console.log(`Il costo totale compreso di spedizione è di ${totCarrello}`)

} else {
    totCarrello+=shippingCost
    console.log(`Il costo totale compreso di spedizione è di ${totCarrello}`)
}*/