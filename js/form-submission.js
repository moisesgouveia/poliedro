document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-from');
  
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/xwvjwevb', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Show success message
        showSuccessMessage();
        
        // Reset form
        form.reset();
      } else {
        alert('Erro ao enviar. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao enviar. Tente novamente.');
    }
  });
});

function showSuccessMessage() {
  const form = document.querySelector('.contact-from');
  const messageDiv = document.createElement('div');
  messageDiv.className = 'success-message';
  messageDiv.innerHTML = `
    <div class="success-content">
      <h3>✓ Cotação Solicitada</h3>
      <p>Sua solicitação foi enviada com sucesso!</p>
      <p>Entraremos em contato em breve.</p>
    </div>
  `;
  
  form.parentElement.insertBefore(messageDiv, form);
  
  // Hide form
  form.style.display = 'none';
  
  // Auto-hide message after 5 seconds and reset
  setTimeout(() => {
    messageDiv.remove();
    form.style.display = 'block';
  }, 5000);
}
