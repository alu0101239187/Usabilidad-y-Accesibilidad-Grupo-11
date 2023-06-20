document.getElementById("formSendContact").addEventListener("click", event => {
  event.preventDefault();
  // Borrar errores si existian 
  if (document.getElementById("name-error")) {
      document.getElementById("name-error").remove()
  }
  if (document.getElementById("lastname-error")) {
    document.getElementById("lastname-error").remove()
}
  if (document.getElementById("mail-error")) {
    document.getElementById("mail-error").remove()
  }
  if (document.getElementById("message-error")) {
    document.getElementById("message-error").remove()
  }
  let accepted = true;



  const name = document.getElementById("nameInput");
  const name_error_display = document.getElementById("name");
  const error_name = document.createElement("p");
  console.log( name.value)
  if( name.value === "") {
    error_name.innerText = `* Debes introducir un nombre`;
    error_name.className = "error-message";
    error_name.id = "name-error";
    accepted = false;
  }
  name_error_display.appendChild(error_name)
  name_error_display.setAttribute("aria-live", "assertive")

  const lastName = document.getElementById("lastNameInput");
  const lastName_error_display = document.getElementById("last-name");
  const error_lastName = document.createElement("p");
  if( lastName.value === "") {
    error_lastName.innerText = `* Debes introducir un apellido`;
    error_lastName.className = "error-message";
    error_lastName.id = "lastname-error";
    accepted = false;
  }
  lastName_error_display.appendChild(error_lastName)
  lastName_error_display.setAttribute("aria-live", "assertive")

  const mail = document.getElementById("mailInput");
  const mail_error_display = document.getElementById("mail");
  const error_mail = document.createElement("p");
  if( mail.value === "") {
    error_mail.innerText = `* Debes introducir un correo`;
    error_mail.className = "error-message";
    error_mail.id = "mail-error";
    accepted = false;
  }
  mail_error_display.appendChild(error_mail)
  mail_error_display.setAttribute("aria-live", "assertive")


  const message = document.getElementById("messageInput");
  const message_error_display = document.getElementById("message");
  const error_message = document.createElement("p");
  if( message.value === "") {
    error_message.innerText = `* Debes introducir un mensaje`;
    error_message.className = "error-message";
    error_message.id = "message-error";
    accepted = false;
  }
  message_error_display.appendChild(error_message)
  message_error_display.setAttribute("aria-live", "assertive")

  if(accepted) {
    alert("Se ha enviado el formulario.");
    document.getElementById("formSendContact").reset();
  }

})