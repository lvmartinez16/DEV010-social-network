/* eslint-disable no-unused-vars */
// file login finished
function wall(navigateTo) {
  const section = document.createElement('section');
  const divContenedor = document.createElement('div');
  divContenedor.setAttribute('class', 'contenedor');

  const txtEnConstruccion = document.createElement('p');
  txtEnConstruccion.textContent = 'PAGINA WEB EN CONSTRUCCIÓN';
  divContenedor.appendChild(txtEnConstruccion);
  section.appendChild(divContenedor);

  return section;
}

export default wall;
