const input = document.getElementById("input")

function reverseString(str){
    return str.split("").reverse().join("")
}


function check() {
    const value = input.value
    const reverse =reverseString(Value)
    alert(reverse)
    if (value === reverse){
        alert("PALINDROME")
    }else
       alert("Not Today!")
}