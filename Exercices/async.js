const simuliereVerzoegerung = async (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

const addiereNachVerzoegerung = async (a, b, ms) => {
    // Nach Verzögerung a und b addieren und das Ergebnis ausgeben
    await simuliereVerzoegerung(ms);
    console.log(a + b);
}

addiereNachVerzoegerung(1, 2, 1000);
