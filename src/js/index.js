/* 
O que precisamos fazer? - Quando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para cores dp tema claro ou do tema escuro. 

- Objetivo 1 - Quando clicar no botão de troca de tema, adiconar a classe modo-escuro no body para que os estilos do modo escuro seja aplicados e mudar a imagem para lua
  -passo 1 -  Pegar no JS o elemento HTML correspondente ao botão do troca de tema
  -passo 2 - Dar um jeito de pegar no JS elemento HTML corresponde ao body
  -passo 3 - Dar um jeito de identificar o clique do usuário no botão de troca de tema. 
  -passo 4 - adionar a classe modo-escuro no body
  -passo 5 trocar a imagem do botão de alterar tema pra lua

-Objetivo 2 - Quando clicar no botão de troca de tema, caso o body já tenha classe modo-escuro, remover a class pra mudar pro mudo claro e mudar a imagem por sol
 -passo 6 - verfica r se o body já tem a classe modo-escuro
 -passo 7 -Remover a classe do modo-escuro do body
 -passo 8 - troaca a imagem do botão de alterar pra o sol

 */


//- Objetivo 1 - Quando clicar no botão de troca de tema, adiconar a classe modo-escuro no body para que os estilos do modo escuro seja aplicados e mudar a imagem para lua

//  -passo 1 -  Pegar no JS o elemento HTML correspondente ao botão do troca de tema

const botaoAlterarTema = document.getElementById("botao-alterar-tema");

//  -passo 2 - Dar um jeito de pegar no JS elemento HTML corresponde ao body

const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")
//   -passo 3 - Dar um jeito de identificar o clique do usuário no botão de troca de tema. 
botaoAlterarTema.addEventListener("click", () => {

    // -passo 6 - verfica r se o body já tem a classe modo-escuro

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
 
    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
        // -passo 7 -Remover a classe do modo-escuro do body
        
        //-passo 8 - troaca a imagem do botão de alterar pra o sol
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
    } else {
        //  -passo 4 - adionar a classe modo-escuro no body
        
        // -passo 5 trocar a imagem do botão de alterar tema pra lua
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");

    }

});

