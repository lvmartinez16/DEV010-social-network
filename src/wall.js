/* eslint-disable no-unused-vars */
// file login finished
import { createPost } from './firestore';

function wall(navigateTo) {
  const section = document.createElement('section');
  const divContenedor = document.createElement('div');
  divContenedor.setAttribute('class', 'contenedor');

  const txtEnConstruccion = document.createElement('p');
  txtEnConstruccion.textContent = 'Hola';

  const btnpost = document.createElement('button');

  divContenedor.append(txtEnConstruccion, btnpost);
  section.appendChild(divContenedor);

  btnpost.addEventListener('click', () => {
    // obtener el texto/value de un texta area
    // crear un objeto donde una propieda guarde ese texto
    // ejecutar createpost con ese objeto cmo argumento
    // then y catch
  });
  return section;
}

/* function wall(navigateTo) {
  const section = document.createElement('section');
  const divContenedor = document.createElement('div');
  divContenedor.setAttribute('class', 'contenedor');

  const txtEnConstruccion = document.createElement('p');
  txtEnConstruccion.textContent = 'PAGINA WEB EN CONSTRUCCIÓN';
  divContenedor.appendChild(txtEnConstruccion);
  section.appendChild(divContenedor);

  return section;
}

export default wall; */
