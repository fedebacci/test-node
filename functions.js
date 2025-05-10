const myFunction = (utente) => {
// ! DEBUG
// const myFunction = (utente, processo) => {

    // ! DEBUG
    // console.log("processo", processo);
    // console.log("processo.title", processo.title);
    // console.log("processo.argv", processo.argv);

    // * ESEGUIRE npm run test PER ESEGUIRE TEST CON PARAMETRO
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
};

module.exports = { myFunction };