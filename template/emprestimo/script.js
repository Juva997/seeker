document.getElementById("loanForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // simula processamento
  document.body.innerHTML = `
    <div style="text-align:center; margin-top:50px;">
      <h2>🔄 Processando sua solicitação...</h2>
      <p>Aguarde alguns segundos</p>
    </div>
  `;

  setTimeout(() => {
    window.location.href = "{{REDIRECT}}";
  }, 3000);
});