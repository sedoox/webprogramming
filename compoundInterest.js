function generateTable(form) {
    let amount = 1;
    let rate;
    let years;
    let interest;
    let table;
    let year = 1;

    amount = form.elements["deposit"].valueAsNumber;
    rate = form.elements["rate"].valueAsNumber;
    years = form.elements["years"].valueAsNumber;

    console.log(amount)
    console.log(rate)
    console.log(years)

    table = "<table>" + "<tr><th>Year</th><th>Starting Value</th>" + "<th>Interest Earned</th><th>Ending Value</th></tr>";

    while (year <= years) {
        table += "<tr>";
        table += "<td>" + year + "</td>";
        table += "<td> $" + amount.toFixed(2) + "</td>";
        interest = amount * rate/100;
        table += "<td> $" + interest.toFixed(2) + "</td>";
        amount += interest;
        table += "<td> $" + amount.toFixed(2) + "</td>";
        table += "</tr>";
        year++;
    }

    table += "</table>"
    document.getElementById("result").innerHTML = table;

}