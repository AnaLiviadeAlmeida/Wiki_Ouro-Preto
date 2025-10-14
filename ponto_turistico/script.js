let Nome = alert("Olá, Seja Bem vindo (a) ao site Wiki Ouro Preto, site para quem quer conhecer mais sobre a cidade de Ouro Preto"); // pop up que aparece quando vc entra na página inicio

//função executada quando a página termina de carregar
window.onload = function(){
  //quando o elemento html é selecionado ele aumenta a fonte
    var ElementBody = document.querySelector('html');
    var ElementBtnIncreaseFont= document.getElementById('increase-font');
    var ElementBtnDecreaseFont= document.getElementById('decrease-font');
        // Padrão de tamanho, equivale a 100% do valor definido no Body
   var fontSize = 100;
   var increaseDecrease = 10;

   //botões que aumentam e diminuem a fonte
ElementBtnIncreaseFont.addEventListener('click', function() {
  fontSize = fontSize + increaseDecrease;
  ElementBody.style.fontSize = fontSize + '%';
  //com um click o botão A+ vai aumentar a fonte
});

ElementBtnDecreaseFont.addEventListener('click', function(){
  fontSize = fontSize - increaseDecrease;
  ElementBody.style.fontSize = fontSize + '%';
  //com um click o botão A- vai diminuir a fonte
});

// botões usados para acessibilidade da página
}
