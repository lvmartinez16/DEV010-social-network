/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import { obtenerPosts } from './firestore';
import { createPost } from './firebase';

function wall() {
  const sectionW = document.createElement('section');
  sectionW.className = 'sectionW';
  const divContenedor = document.createElement('div');
  divContenedor.setAttribute('class', 'contenedorWall');

  const btnCerrar = document.createElement('button');
  btnCerrar.id = 'btnSalir';
  btnCerrar.textContent = 'salir';

  const crearPost = document.createElement('input');
  crearPost.id = 'crearPost';
  crearPost.placeholder = 'Escribe aquí tu post';

  const btnPost = document.createElement('button');
  btnPost.innerText = 'Enviar';
  btnPost.id = 'btnPost';
  const postCreado = document.createElement('div');
  postCreado.id = 'sesionPost';

  divContenedor.append(crearPost, btnPost, postCreado);
  sectionW.appendChild(divContenedor);
  btnPost.addEventListener('click', () => {
    const newPost = {
      date: new Date(),
      text: crearPost.value,
    };

    createPost(newPost)
      .then(() => {
      //  sectionW.innerHTML = ' ';
        crearPost.value = '';
        obtenerPosts();
      })
      .catch((err) => {
        console.error(err, 'Error al crear post');
      });
  });

  sectionW.append(obtenerPosts());

  return sectionW;
}

export default wall;
