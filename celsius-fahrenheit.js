function fahrenheitToCelsius(fahrenheit) {
    var celsius = (5/9) * (fahrenheit - 32)
    console.log(celsius)
}

function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius*9)/5 + 32
    console.log(fahrenheit)
}

celsiusToFahrenheit(30)