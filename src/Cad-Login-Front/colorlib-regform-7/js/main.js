// Obtém o formulário pelo ID
const form = document.getElementById('login-form');






// Adiciona um evento de escuta ao evento de submit do formulário
form.addEventListener('submit', async function(event) {
  event.preventDefault(); // Evita que o formulário seja enviado

  // Obtém os valores dos campos de entrada
  const email = document.getElementById('your_name').value;
  const password = document.getElementById('your_pass').value;


  console.log('Email:', email);
  console.log('Senha:', password);
  console.log('Senhaadasdasda:');
  // Limpa os campos de entrada
  /* document.getElementById('your_name').value = '';
  document.getElementById('your_pass').value = ''; */
  console.log('Senhaadasdasda:');
 const result  = await LoginUser({email,password})
 console.log('t ' + result =="Request failed with status code 401" )
 console.log(result.status)
if(!result.status){
  console.log("errou")
  //mensagem erro
}else{
  window.location.href = '../../HomePage-Front/front-home.html';
}

});

async function LoginUser({email,password}){
    return axios.post('http://localhost:3000/auth/login', {
      email: email,
      password: password
    })
    .then(function(response) {
      return response
    })
    .catch(function(error) {
      /* console.error("erro: " + error); */
      return error
    });
}

