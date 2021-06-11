export default function dolar() {
    const moeda = document.querySelector('#valor')
    const nome = document.querySelector('#nome')

    const a = fetch('https://economia.awesomeapi.com.br/json/all/USD')

    a.then((r) => {
        return r.json()
    }).then((jason) => {
        nome.innerText = jason.USD.code + ' atual:'
        moeda.innerText = jason.USD.ask.slice(0, 4)
    })
}