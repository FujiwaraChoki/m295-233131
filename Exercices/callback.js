const verdoppeln = (zahl, callback) => {
    const ergebnis = zahl * 2;
    callback(ergebnis);
}

verdoppeln(5, (ergebnis) => {
    console.log("Das Ergebnis ist: " + ergebnis);
});
