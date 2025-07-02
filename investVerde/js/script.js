
document.addEventListener('DOMContentLoaded', () => {
  const btnComecar = document.getElementById('btnComecar');
  const linkEntrar = document.getElementById('linkEntrar');

  if (btnComecar) {
    btnComecar.addEventListener('click', () => {
      window.location.href = 'cadastro_usuario.html';
    });
  }

  if (linkEntrar) {
    linkEntrar.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'login.html';
    });
  }
});
