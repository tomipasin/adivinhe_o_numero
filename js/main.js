
//Cria uma variável que armazenará um número aleatório. 
//Isso é feito pelo operador Math com os métodos floor (retorna um 
//nº inteiro) e random (escolha aleatória entre 0 e 1). 
//O resultado é multiplicado por 100 e adicionado 1 para criar
//um resultado que esteja entre 1 e 100 aleatóriamente.  
var numeroAleatorio = Math.floor(Math.random()*100)+1;

//mostra o número aleatório no console para fins de teste.
console.log('O número é ' + numeroAleatorio);

//cria a variável palpites por meio do objeto document e do método
//querySelector que busca o que estiver na classe .palpites do html.
var palpites = document.querySelector('.palpites');  

//mesma coisa do exemplo acima...
var baixoOuAlto = document.querySelector('.baixoOuAlto');
var ultimoResultado = document.querySelector('.ultimoResultado');
var envioPalpite = document.querySelector('.envioPalpite');
var campoPalpite = document.querySelector('.campoPalpite');

//define que este seja o 1º palpite.
var contagemPalpites = 1

//cria uma variável para o futuro botão de reinicio de jogo.
var botaoReinicio;

//coloca o foco sempre no campo input do form, por meio do método
//focus().
campoPalpite.focus();

/////////////INÍCIO DAS FUNÇÕES

function conferirPalpite () {//abre uma função para conferir os palpites.
  
  //cria uma variável local que captura o número digitado no campoPalpite.
  //neste caso usar o método Number garante que o valor de campoPalpite seja um nº e não texto.
  var palpiteUsuario = Number(campoPalpite.value);


  //determina uma condicional caso este seja o 1º palpite.
  //dentro dos parêntestes vai o teste para determinar se if é true ou false.
  //se for true ele executa, se for false passa para a próxima etapa.
  if (contagemPalpites === 1) {

    //Se o if for executado é pq é a 1º tentativa
    //então ele alimenta o campo palpites com o texto 
    //informando que os palpites anteriore são nenhum.
    palpites.textContent = 'Palpites anteriores: ';
  }
    //adiciona o palpite ao final do parágrafo de palpiteUsuario 
    //com espaço para formatar legal.
    //o código abaixo é a forma simplificada de escrever
    //palpiteUsuario = palpiteUsuario + palpites.textcontent + ' ';
    palpites.textContent += palpiteUsuario + ' ';


  //se o palpite for igual ao número aleatório.  
  if (palpiteUsuario === numeroAleatorio) {

    //insere em ultimoResultado o texto de parabéns e muda o 
    //bckground para verde.
    ultimoResultado.textContent = 'Parabéns, fera!!!! hehehehe Tu acertou!';
    ultimoResultado.style.backgroundColor = 'green';

    //limpa a informação de baixoOuAlto.
    baixoOuAlto.textContent = ' ';

    //chama a função configFimDeJogo().
    configFimDeJogo();

  }

// FIM DO IF


//depois das duas condicionais if acima, onde 
// 1 - capturamos o palpite e guardamos em palpiteUsuario;
// 2 - verificamso se é o º palpite e depois mostramos cada palpite em palpites.textcontent;
// 3 - determinamos uma ação caso o palpite seja igual ao num aleat.

// agora vamos para o else que tem uma condicional if para verificar 
// o numero de palpites.
  else if (contagemPalpites === 10) { 
    //se não for a última tentativa, prossegue 
    //informando que acabaram as chances. 
    ultimoResultado.textContent = 'Acabaram tuas chances!';

    //limpa o conteúdo da dica de baixo ou alto
    baixoOuAlto.textContent = ' ';

    //chama a função de final de jogo.
    configFimDeJogo();
  }


  //se a contagem de palpites não for  = 10 (else acima), 
  // ou se a pessoa não acertou o número (condicionais anteriores)
  //processa o palpite:
  else {

    //dá a informação de errado na classe ultimoResultado e muda o 
    //bck para vermelho.
    ultimoResultado.textContent = 'Errado...';
    ultimoResultado.style.backgroundColor = 'red';

//insere uma condicional dentro do else para, caso o palpite não 
//seja = 10 nem seja o palpite certo ele verifica se o palpiteUsuario
//é menor ou maior que o n~ aleatório. 
//Assim ele informa se o palpite é baixo ou alto na class baixoOuAlto.

if (palpiteUsuario < numeroAleatorio) {
      baixoOuAlto.textContent = 'Teu palpite está baixo.';
    }
else if (palpiteUsuario > numeroAleatorio) { 
      baixoOuAlto.textContent = 'Teu palpite está alto.';
    }

  }

//por fim ele determina o incremento de 
//contagem de palpites - soma 1 à variável.
contagemPalpites ++;

//esvazia o campo de palpite (para que possa ser usado novamente)
campoPalpite.value = '';

//determina foco no campo.
campoPalpite.focus();
}


//para tudo funcionar é necessário que adicionemos um event listener
//para executar a função conferirPalpite quando o botão envioPalpite 
//for clicado no formulário. 
envioPalpite.addEventListener('click', conferirPalpite);

//função para determinar os parâmetros de fim de jogo.
function configFimDeJogo() {

  //desabilita o campo e o botão do formulário.
  campoPalpite.disabled = true;
  envioPalpite.disabled = true;

  //cria no html um elemento botão para reiniciar o jogo. 
  botaoReinicio = document.createElement('button');
  botaoReinicio.textContent = 'Inicia mais uma rodada..';

  //adicionao o botão acima no FINAL do html.
  document.body.appendChild(botaoReinicio);

  //define que ao clicar em botãoReinicio a função 
  //reiniciarJogo será executada.
  botaoReinicio.addEventListener('click', reiniciarJogo);

//cria uma função para reiniciar os parâmetros e 
//iniciar nova partida.
function reiniciarJogo() {

  //a contagem de palpites volta a ser 1 pois é 
  //início de um novo jogo.
  contagemPalpites = 1;

  //cria uma variável que seleciona e armazena tudo que esteja 
  //na classe resultadoParas
  var reiniciarParas = document.querySelectorAll('.resultadoParas p');
  
  //este código cria um looping com índice começando em 0
  //e mensurando se o índice é menor que o comprimento do
  //que estiver armazenado na var reiniciarParas, ou seja, 
  //conteúdo de texto da div resultadoParas. 
  //em seguida lê o valor do índice (que é o mesmo das strings
  //de resultadoParas) e determina - em loop - que para ela o 
  //textcontent seja ' ' ou seja, nada. 
  //Assim é feita a limpeza no texto da div. 

  for (var i = 0 ; i < reiniciarParas.length ; i++) {
    reiniciarParas[i].textContent = ' ';
  }


//remove o botão de nova rodada. Ele só será exeibido novamente ao 
//terminar esta. Usamos appendChild para inserir e removeChild para
//remover.
botaoReinicio.parentNode.removeChild(botaoReinicio);

//habilita novamente os campos e botões do formulário.
campoPalpite.disabled = false;
envioPalpite.disabled = false;

//define o valor padrão do campo para '' ou vazio e coloca o foco
//no campo.
campoPalpite.value = '';
campoPalpite.focus();

//o backgroud do resultado deve ter ficado vermelho ou verde no 
//último status do jogo. Esta instrução remove a cor e coloca
//branco novamente.
ultimoResultado.style.backgroundColor = 'white';

//gera novo número aleatório para o novo jogo.
numeroAleatorio = Math.floor(Math.random() * 100) + 1;
console.log('Novo nº ' + numeroAleatorio);

}

}



