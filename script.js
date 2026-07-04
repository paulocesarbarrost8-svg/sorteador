function sortear() {
    const min = Math.ceil(document.getElementById("sort-min").value);
    const max = Math.floor(document.getElementById("sort-max").value);
    const sorteado = Math.floor(Math.random() * (max - min + 1)) + min;

    if (max <= min) {
        alert("O valor segundo precisa ser maior que o primeiro valor..");
        return;
    }

    alert(`O número sorteado foi: ${sorteado}`);
}