const Cadastro = document.getElementById('register-form');


//Botão para Cadastrar Usuário no banco de dados
Cadastro.addEventListener('submit', async function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  const password = document.getElementById('pass').value;
  
  // Faça o que você precisa com os valores obtidos
    const Cadastro = await CadastroUser({name, email, password})
    console.log(Cadastro)
    if(Cadastro.status==201){
        window.location.href = '../../HomePage-Front/front-home.html';
    }else{
        console.log("entrou cadastrado")
        document.getElementById('email').textContent = "Email ja Cadastrado!!"
    }
})


async function CadastroUser({name, email, password}){
    return axios.post('http://localhost:3000/auth/register', {
            name: name,
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

