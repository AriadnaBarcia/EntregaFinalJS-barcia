let Formulario = {
  validarFormulario: function (formElement) {
    let inputs = formElement.getElementsByTagName("input");
    for (let input of inputs) {
      if (input.value === "") {
        return false;
      }
    }
    return true;
  },

  limpiarFormulario: function (formElement) {
    formElement.reset();
  },

  enviarFormulario: function (formElement, successCallback) {
    if (this.validarFormulario(formElement)) {
      successCallback();
    } else {
      alert("Por favor, complete todos los campos del formulario.");
    }
  }
};

document.getElementById("user-form").addEventListener("submit", function (event) {
  event.preventDefault();

  let nombre = document.getElementById("name").value;
  let mail = document.getElementById("email").value;
  let celular = document.getElementById("phone").value;
  let password = document.getElementById("password").value;

  let usuario = {
    nombre: nombre,
    mail: mail,
    celular: celular
  }

  localStorage.setItem('usuario', JSON.stringify(usuario))
  Formulario.enviarFormulario(this, function () {
    window.open("html/inicio.html", "_self");
    Formulario.limpiarFormulario(this);
  });
});

document.getElementById("ingresar").addEventListener("submit", function (event) {
  event.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  Formulario.enviarFormulario(this, function () {
    window.open("html/inicio.html", "_self");
    Formulario.limpiarFormulario(this);
  });
});

document.getElementById("contact").addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("fname").value;
  let subject = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;


  Formulario.enviarFormulario(this, function () {
    alert("¡Formulario enviado con éxito!");
    Formulario.limpiarFormulario(this);
  });
});
