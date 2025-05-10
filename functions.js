const myFunction = (utente) => {
// ! DEBUG
// const myFunction = (utente, processo) => {

    // ! DEBUG
    // console.log("processo", processo);
    // console.log("processo.title", processo.title);
    // console.log("processo.argv", processo.argv);

    // * ESEGUIRE npm run test per eseguire test
    utente = JSON.parse(utente.replaceAll('\'', '\"'));
    console.log("__________________________________________________________________________________________________________________________________");
    console.log(" ");
    console.log("###     utente             =  ", utente);
    console.log("###     typeof(utente)     :  ", typeof(utente));
    console.log(" ");
    console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -");
    console.log(" ");
    
    const { email, idUtente } = utente;
    console.log("email =", email);
    console.log("typeof(email) :", typeof(email));
    console.log(" ");
    console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - -");
    console.log(" ");
    console.log("idUtente =", idUtente);
    console.log("typeof(idUtente) :", typeof(idUtente));
    console.log(" ");
    console.log("__________________________________________________________________________________________________________________________________");











    // ! TUTTO CIO CHE VIENE SOTTO (DENTRO QUESTA FUNZIONE) E DI DEBUG E MI E SERVITO AD ARRIVARE A npm run test
    // * ESEGUIRE npm run startWithNumberParam PER VEDERE ESEMPIO PARAMETRO
    // * ESEGUIRE npm run startWithStringParam PER VEDERE ESEMPIO PARAMETRO STRINGA
    // * ESEGUIRE npm run startWithObjectParam PER VEDERE ESEMPIO PARAMETRO OGGETTO (NON SEMBRA FUNZIONARE IN NESSUN MODO, MA LE ULTIME DUE FUNZIONANO SE LANCIATE DIRETTAMENTE DA CONSOLE E NON DA PACKAGE.JSON)
    // node index.js {email:federicobacci1999@gmail.com,idUtente:0}
    // node index.js '{email:federicobacci1999@gmail.com,idUtente:0}'
    // node index.js '{"email":"federicobacci1999@gmail.com","idUtente":0}'
    // node index.js \"{\"email\":\"federicobacci1999@gmail.com\",\"idUtente\":0}\"
    
    // node index.js {"email":"federicobacci1999@gmail.com","idUtente":0}
    // node index.js "{\"email\":\"federicobacci1999@gmail.com\",\"idUtente\":0}"
    // node index.js {\"email\":\"federicobacci1999@gmail.com\",\"idUtente\":0}
        // # RISOLTO CON LA RIGA (IN PACKAGE):
        // # "startWithObjectParam": "node index.js {'email':'federicobacci1999@gmail.com','idUtente':0}",
        // # TRAMITE SOSTITUZIONE DI: ' IN: " (QUI IN FUNCTIONS)

    

    // - SEMPRE
    // console.log("utente", utente);
    // console.log("typeof(utente)", typeof(utente));

    

    // - SE startWithNumberParam
    // console.log("parseInt(utente)", parseInt(utente));
    // console.log("typeof(parseInt(utente))", typeof(parseInt(utente)));


    // - SE npm run startWithObjectParam
    // console.log("utente.replaceAll('\'', '\"')", utente.replaceAll('\'', '\"'));
    // const test = JSON.parse(utente.replaceAll('\'', '\"'));
    // console.log("test", test);
    // console.log("typeof(test)", typeof(test));
};

module.exports = { myFunction };