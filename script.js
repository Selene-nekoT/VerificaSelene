function Benvenuto() {
    let chiave = localStorage.key(0);
    if (chiave != "") {
        alert("Benvenuto!");
    } 
}

//NOTA: non riesco a far funzionare la funzione Change, il pulsante rimane abilitato lo stesso

function Change() {
    let userEmail = document.querySelector("input[type='email']");
    let button = document.getElementById('sub');
    button.disabled = "";
    if (userEmail.value == null) {
        button.disabled = "disabled";
    }
}

function Completato() {
    alert("Azione completata!");
}

function Subscribe() {
    try {
        //recupero la mail
        let emailSottoscrizione = document.getElementById("emailSub").value;

        //inserisco nello Storage
        localStorage.setItem(emailSottoscrizione,'Iscritto');
        Completato();
        let buttonSub = document.getElementById('sub');
        buttonSub.disabled = "disabled";
        let buttonUnsub = document.getElementById('unsub');
        buttonUnsub.disabled = "";
    } catch (e) {
        alert(e);
    }
}

function Unsubscribe() {
    try {
        let selectedEmail = document.getElementById("emailSub").value;
        let value = localStorage.getItem(selectedEmail);

        if (value == null) {
            alert("Nessun valore trovato");
        } else {
            localStorage.clear();
            Completato();

            let buttonSub = document.getElementById('sub');
            buttonSub.disabled = "";
            let buttonUnsub = document.getElementById('unsub');
            buttonUnsub.disabled = "disabled";
        }
    } catch (e) {
        alert(e.Message);
    }

}

