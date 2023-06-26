const btnCalcularFrete = document.getElementById('calcular-frete');
const enviar = document.getElementById('enviar')
let VerificarEnviar = 0;
let ArmazenarValorComFreteIncluido =0;



const tdValorTotal = document.getElementById('valorSubtotal');


let totalGodOfWar = localStorage.getItem('valorTotalGodOf')
let totalHomemAranha = localStorage.getItem('valorTotalHomemAranha')
let totalAssassin = localStorage.getItem('valorTotalAssassin')
let totalTheLast = localStorage.getItem('valorTotalTheLast')
let totalFIFA = localStorage.getItem('valorTotalFifa')
let totalRedDead = localStorage.getItem('valorTotalRedDead')
let totalGTA = localStorage.getItem('valorTotalGta')
let totalResident = localStorage.getItem('valorTotalResident')
console.log(totalGodOfWar)
const ArrayValores = [totalGodOfWar,totalHomemAranha,totalAssassin,totalTheLast,totalFIFA,totalRedDead,totalGTA,totalResident]

let valorTotalAPagar = 0;
for(let i=0; i<ArrayValores.length; i++){
    if(ArrayValores[i] != null){
        console.log(ArrayValores[i])
        valorTotalAPagar += parseInt(ArrayValores[i] )   
    }
    
}

console.log(valorTotalAPagar)
tdValorTotal.textContent = `R$ ${valorTotalAPagar},00`




    if(valorTotalAPagar != 0){
        VerificarEnviar = valorTotalAPagar
    }


btnCalcularFrete.addEventListener('click', async function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado
  
    const endereco = document.getElementById('endereco').value;
    const cep = document.getElementById('cep').value;
    const pais = document.getElementById('pais').value;
    const tdValor = document.getElementById('Frete');
    const valorTotal = document.getElementById('valorTotal')
    




   console.log(cep)
   const frete = await Frete(cep);
    //console.log(frete.data[0].Valor)
   // console.log(frete.data[0].MsgErro)
    console.log(frete.data[0].MsgErro)
   if(!frete.data[0].MsgErro){
    tdValor.textContent = `R$${frete.data[0].Valor}`
    ArmazenarValorComFreteIncluido = parseFloat(valorTotalAPagar) + parseFloat(frete.data[0].Valor)
    valorTotal.textContent = ` R$ ${parseFloat(valorTotalAPagar) + parseFloat(frete.data[0].Valor)},00`
   }else{
    tdValor.textContent = "CEP INCORRETO";
   }
   
  });
  
  async function Frete(cep){
    
      return axios.post('http://localhost:3009/frete', {
        
            nCdServico: "04014",
            sCepOrigem: "67133100",
            sCepDestino: cep,
            nVlPeso: "0,2",
            nCdFormato: 1,
            nVlComprimento: 13.5,
            nVlAltura: 19,
            nVlLargura: 8,
            nVlDiametro: 0
          
      })
      .then(function(response) {
        return response
      })
      .catch(function(error) {
        /* console.error("erro: " + error); */
        return error
      });
  }
  





  enviar.addEventListener('click', async function(event) {
    console.log("enviar")
    event.preventDefault(); // Evita que o formulário seja enviado
    const numero = document.getElementById('phone-input').value
    const TextTelefone = document.getElementById('textTelefone')
    if(VerificarEnviar !=0){
        console.log("entrou")
        const resultNumero = await EnviarSms(numero);
        console.log(resultNumero.status);
        if(resultNumero.status != 200){
            TextTelefone.textContent = "Numero Incorreto informado"
        }else{
            TextTelefone.textContent = '*'
            window.location.href = '../HomePage-Front/front-home.html';
            localStorage.clear();
        }
        
    }
    
});


async function EnviarSms(numero){

    return axios.post('http://localhost:3030/send', {
            
                message: `Compra Realizada com sucesso!\n O Pedido logo sairá da nossa transportadora e irá até você\nTotal do Pedido: R$${ArmazenarValorComFreteIncluido},00`, 
                number: numero    
          
      })
      .then(function(response) {
        return response
      })
      .catch(function(error) {
        /* console.error("erro: " + error); */
        return error
      });
}











//testes
