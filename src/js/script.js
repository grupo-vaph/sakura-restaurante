const botaoMenu = document.getElementById('botaoMenuMobile');
  const navegacao = document.getElementById('navegacao');

  if (botaoMenu) {
    botaoMenu.addEventListener('click', function() {
      navegacao.classList.toggle('aberto');
      botaoMenu.classList.toggle('aberto');
    });
  }

  const formContato = document.getElementById('formContato');

  if (formContato) {
    formContato.addEventListener('submit', function(event) {
      event.preventDefault();
      alert('Mensagem enviada! Vamos te responder em breve.');
      formContato.reset();
    });
  }

  const botoesAdicionar = document.querySelectorAll('.botao-adicionar');

  botoesAdicionar.forEach(function(botao) {
    botao.addEventListener('click', function() {
      const textoOriginal = botao.textContent;
      botao.textContent = 'Adicionado ✓';
      setTimeout(function() {
        botao.textContent = textoOriginal;
      }, 1500);
    });
  });