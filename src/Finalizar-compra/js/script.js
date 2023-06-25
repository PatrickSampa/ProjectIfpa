const btnCalcularFrete = document.getElementById('calcular-frete');
const enviar = document.getElementById('enviar')
const VerificarEnviar = 0;




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
tdValorTotal.textContent = valorTotalAPagar;




btnCalcularFrete.addEventListener('click', async function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado
  
    const endereco = document.getElementById('endereco').value;
    const cep = document.getElementById('cep').value;
    const pais = document.getElementById('pais').value;
    const tdValor = document.getElementById('Frete');
    const valorTotal = document.getElementById('valorTotal')




   
   const frete = await Frete(cep);
    //console.log(frete.data[0].Valor)
   // console.log(frete.data[0].MsgErro)

   if(!frete.data[0].MsgErro){
    tdValor.textContent = frete.data[0].Valor;
    valorTotal.textContent = parseFloat(valorTotalAPagar) + parseFloat(frete.data[0].Valor)
   }else if(true){
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
    event.preventDefault(); // Evita que o formulário seja enviado
    if(VerificarEnviar !=0){
        //compra realizada
    }
});
