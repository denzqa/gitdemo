document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if (name && email && subject && message) {
        
        alert("Formulär skickat!");
        
    } else {
        alert("Vänligen fyll i alla fält.");
    }
});
