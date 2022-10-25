// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.


// collego Vue
const {createApp} = Vue;

createApp({
    data() {
        return{
            message : "Questo è il messaggio all'interno dell'h1 usando i data",
            image : "https://picsum.photos/id/237/200/300",
            userNumber :"",
            result : "",
            fontclass :"fontclass"
        }
    },
    methods : {
        isAddOrEven : function(){
            if(this.userNumber % 2 === 0 ){
                this.result = "Il numero che hai scelto è pari";
                this.color = "pari";
            }else{
                this.result = "Il numero che hai scelto è dispari";
                this.color = "dispari";
            }
        }
    }
}).mount("#app");
