let shoulddo = 0;
const scriptURL = 'https://script.google.com/macros/s/AKfycby0cSqBaPHKdkMm4KCFrFFj9i6_8vCTfcqcUFC6xviB9sc9skDm9Aj2EJ4MaLlRHWBe/exec';
        function pushData(namedata, messagedata) {
        const form = document.createElement("form");
        form.id = "form";
        form.style.display = "none";
        // Create input fields
          
        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.name = "Name";
        nameInput.placeholder = "Enter your name";
nameInput.value = namedata;
        const messageInput = document.createElement("input");
        messageInput.type = "text";
        messageInput.name = "Message";
        messageInput.placeholder = "Enter your message";
messageInput.value = messagedata;
        // Create a submit button
        const submitButton = document.createElement("input");
        submitButton.type = "submit";
        submitButton.value = "Submit";
        submitButton.id = "submit";

        // Append input fields and submit button to the form
        form.appendChild(nameInput);
        form.appendChild(document.createElement("br"));
        form.appendChild(messageInput);
        form.appendChild(document.createElement("br"));
        form.appendChild(submitButton);

        // Append the form to a container (e.g., a div with id "form-container")
        const formContainer = document.getElementById("form-container");
        formContainer.appendChild(form);
        submitButton.disabled = true
             let requestBody = new FormData(form);
             fetch(scriptURL, { method: 'POST', body: requestBody})
               .then(response => {
                  //alert('Success!', response)
                  submitButton.disabled = false
                 shoulddo = 1;
                 })
               .catch(error => {

                 submitButton.disabled = false

               }
               )
        }
function checkOrientation() {
  const prompt = document.getElementById('landscape-prompt');
  if (window.innerWidth < window.innerHeight) {
    prompt.style.visibility = 'visible';
  } else {
    prompt.style.visibility = 'hidden';
  }
}

window.addEventListener('resize', checkOrientation);
window.addEventListener('orientationchange', checkOrientation);
window.addEventListener('load', checkOrientation);
