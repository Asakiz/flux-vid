function checkTextField(field) {

  document.getElementById("error").innerText =
    (field.value === "rodrigo") ? window.location.href ="index2.html" : "esse vídeo não existe!";
}