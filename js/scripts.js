function convert(milliliter) {
    var x;
    if (milliliter == "Ml") {
        x = document.getElementById("ml").value*0.004227;
        document.getElementById("cp").value = Math.round(x);
    } else {
        x = (document.getElementById("cp").value)*1/0.004227;
        document.getElementById("ml").value = Math.round(x);
    }
}
