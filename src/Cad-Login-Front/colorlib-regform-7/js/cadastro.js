const Cadastro = document.getElementById('register-form');
const hiddenParagraphh = document.getElementById('hidden-paragraphh');

//Botão para Cadastrar Usuário no banco de dados
Cadastro.addEventListener('submit', async function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  const password = document.getElementById('pass').value;
  
  // Faça o que você precisa com os valores obtidos
  if (password.length < 6) {
    hiddenParagraphh.textContent = "A senha deve ter pelo menos 6 caracteres."
    hiddenParagraphh.style.display = 'block';
  } else {
    const Cadastro = await CadastroUser({name, email, password})
    console.log(Cadastro)
    if(Cadastro.status==201){
        window.location.href = '../../HomePage-Front/front-home.html';
    }else{
        hiddenParagraphh.textContent = "Email ja Cadastrado"
        hiddenParagraphh.style.display = 'block';
    }
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

