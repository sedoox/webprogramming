function validateInput(input) {
    let value = input.valueAsNumber
    if (input.id == "a" && value == 0) {
        input.style.borderColor = "red";
        return;
    }
    if (value < -99 || value > 99 || !Number.isInteger(value)) {
        input.style.borderColor = "red";
        return;
    }

    input.style.borderColor = "black";
}

function calculateRoots(form) {
    let a = form.elements["a"].valueAsNumber;
    let b = form.elements["b"].valueAsNumber;
    let c = form.elements["c"].valueAsNumber;
    let result = document.getElementById("result")

    if (validateInputSubmit(form) == true) {
        return;
    }

    if(b*b < 4*a*c) {
        result.innerHTML = "Solution: x’s roots are imaginary!"
    } else if (b*b == 4*a*c) {
        result.innerHTML = "Solution: x = " + -b/(2*a)
    } else {
        let root = Math.sqrt(b*b - (4*a*c))
        let x1 = -b + root
        let x2 = -b - root
        result.innerHTML = "Solution: x = " + x1/(2*a) + ", x = " + x2/(2*a)
    }
}

function validateInputSubmit(form) {
    let error = ""
    let a = form.elements["a"].valueAsNumber;
    let b = form.elements["b"].valueAsNumber;
    let c = form.elements["c"].valueAsNumber;
    if (a == 0 || a < -99 || a > 99 || !Number.isInteger(a)) {
        error += "Invalid entry for a. Must be a non-zero integer between -99 and +99.\r\n"
    }
    if (b < -99 || b > 99 || !Number.isInteger(b)) {
        error += "Invalid entry for b. Must be a integer between -99 and +99.\r\n"
    }
    if (c < -99 || c > 99 || !Number.isInteger(c)) {
        error += "Invalid entry for c. Must be a integer between -99 and +99."
    }

    if (error != "") {
        alert(error)
        document.getElementById("result").innerHTML = ""
        return true;
    }
    return false;
}