window.onload = inicializar;
var formAutenticacion;

function inicializar(){
  formAutenticacion = document.getElementById("form-autenticacion");
  formAutenticacion.addEventListener("submit", autentificar, false);
}

function autentificar(event){
  event.preventDefault();
  var usuario = event.target.email.value;
  var contrasena = event.target.password.value;

  firebase.auth().signInWithEmailAndPassword(usuario, contrasena)
    .then(function(result){
      alert("Autentificacion correcta");
      window.location.href = "profile.html";
    })
    .catch(function(error) {
      //window.location.href = "#errorModal";
      $("#errorModal").modal();
    });
}
