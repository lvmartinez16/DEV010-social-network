/* eslint-disable new-cap */
/* eslint-disable no-undef */
// file login finished
import { createPost } from './firestore';

function wall() {
  const section = document.createElement('section');
  const divContenedor = document.createElement('div');
  divContenedor.setAttribute('class', 'contenedorWall');

  /* const txtEnConstruccion = document.createElement('p');
  txtEnConstruccion.textContent = 'Hola'; */
  const txtCrearpost = document.createElement('textarea');
  txtCrearpost.placeholder = 'escribe aqui tu post';
  const btnpost = document.createElement('button');
  const postCreado = document.createElement('p');
  postCreado.textContent = '';

  divContenedor.append(txtCrearpost, btnpost, postCreado);
  section.appendChild(divContenedor);

  btnpost.addEventListener('click', () => {
    const newPost = {
      date: new Date(),
      text: txtCrearpost.value,
    };

    createPost(newPost)
      .then(() => {
        console.log('Post was created successfully');
      })
      .catch((err) => {
        console.log(err);
      });
  });
  // crear un objeto donde una propieda guarde ese texto
  // ejecutar createpost con ese objeto cmo argumento
  // then y catch

  return section;
}

export default wall;
