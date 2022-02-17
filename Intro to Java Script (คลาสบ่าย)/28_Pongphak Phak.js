function askMyName() {
    const name = prompt('What Is Your Name');

    if (name != null) {
       document.getElementById("PongphakPhak").innerHTML = "My name is " + name;
    }
 }
 
 function helloWorld() {
 const h1message = document.getElementById("PongphakPhak").innerHTML
    alert(h1message + 'IG: pongphak97')
 }