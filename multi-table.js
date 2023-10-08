for (var i = 1; i <= 10; i++) { // الخارجي  يمثل الرقم الثابت  For 
    document.getElementById("result").innerHTML += `<h3> Multiplication Table Of ${i} </h3>`

    for (j = 1; j <= 10; j++) {// يمثل الرقم المتغير 
        // console.log((i + " × " + j + " = " + i * j))
        document.getElementById("result").innerHTML += `<br> ${i}  X  ${j} =  ${i * j}`

    }

    document.getElementById("result").innerHTML += "<hr>"
}