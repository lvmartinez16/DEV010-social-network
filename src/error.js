// file error.js
function error() {
/*   esta funcion error, en ella estamos creando un elemento 'h2' y como testo le estamos
asignando 'Error 404 page no found, please go home' */
  const title = document.createElement('h2');
  title.textContent = 'Error 404 page no found, please go home';
  return title;
}

export default error;
