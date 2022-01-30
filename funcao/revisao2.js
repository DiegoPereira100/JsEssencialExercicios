// Arrow function
const soma = (a, b) => {
    return a + b
}

console.log(soma(5, 5))

// Arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametro default
function log(text = 'Node') {
    console.log(text)
}

log('Sou mais forte que o valor padrão')

// operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(5, 5, 5))