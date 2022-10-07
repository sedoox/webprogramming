function sliceString(str) {
    if (str.length % 2 == 0) {
        console.log(str.slice(0, str.length/2))
    }
}

sliceString("12345678")