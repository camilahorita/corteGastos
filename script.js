function calcularEconomia() {
  const valorGasto = document.getElementById('valorGasto').value;
  const prazo = document.getElementById('prazo').value;
  const resultadoDiv = document.getElementById('resultado');
  const errorDiv = document.getElementById('is-not-possible');
  
  if (!valorGasto || !prazo || valorGasto <= 0 || prazo <= 0) {
      resultadoDiv.style.display = 'none';
      errorDiv.style.display = 'block';
      errorDiv.innerHTML = 'Por favor, insira valores válidos.';
      return;
  }

  const totalEconomizado = valorGasto * prazo;

  resultadoDiv.innerHTML = `
      <h3>Economia Total</h3>
      <p><strong>Valor do Gasto Cortado:</strong> R$ ${parseFloat(valorGasto).toFixed(2)}</p>
      <p><strong>Prazo:</strong> ${prazo} meses</p>
      <p><strong>Total Economizado:</strong> R$ ${totalEconomizado.toFixed(2)}</p>
  `;

  resultadoDiv.style.display = 'block';
  errorDiv.style.display = 'none';
}

