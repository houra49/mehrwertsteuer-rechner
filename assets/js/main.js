let netto = document.getElementById("netto")
let brutto = document.getElementById("brutto")
let neunzehn = document.getElementById("neunzehn")
let sieben = document.getElementById("sieben")
let zahl = document.getElementById("zahl")
let berechnen = document.getElementById("berechnen")
let nettoErgebnis = document.getElementById("nettoErgebnis")
let bruttoErgebnis = document.getElementById("bruttoErgebnis")
let perTo = 7
let perToo = 19
function rechner() {
    let per1 = (perToo / 100) * zahl.value
    let per2 = (perTo / 100) * zahl.value
    if (netto.checked) {
        nettoBetrag.innerHTML = "Nettobetrag (Preis ohne MwSt) in Euro"
        bruttoBetrag.innerHTML = "Bruttobetrag (Endpreis)"
        if (neunzehn.checked) {
            nettoErgebnis.innerHTML = per1
            bruttoErgebnis.innerHTML = per1 * 1 + zahl.value * 1
        } else {
            nettoErgebnis.innerHTML = per2.toFixed(2)
            bruttoErgebnis.innerHTML = per2 * 1 + zahl.value * 1
        }
    } else {
        nettoBetrag.innerHTML = "Bruttobetrag (Preis inkl. MwSt) in Euro"
        bruttoBetrag.innerHTML = "Nettobetrag"
        if (neunzehn.checked) {
            nettoErgebnis.innerHTML = per1.toFixed(2);
            bruttoErgebnis.innerHTML = (zahl.value / 1.19).toFixed(2)
            nettoErgebnis.innerHTML = (zahl.value - (zahl.value / 1.19)).toFixed(2)
        } else {
            nettoErgebnis.innerHTML = per2.toFixed(2);
            bruttoErgebnis.innerHTML = (zahl.value / 1.07).toFixed(2)
            nettoErgebnis.innerHTML = (zahl.value - (zahl.value / 1.07)).toFixed(2)
        }
    }
}