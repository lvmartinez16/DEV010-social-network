/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import { createPost, obtenerPosts } from './firestore';

function wall(onNavigate) {
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
  // postCreado.append(obtenerPosts());
  divContenedor.append(crearPost, btnPost, postCreado);
  sectionW.appendChild(divContenedor);

  // Event listener for the "Enviar" button
  btnPost.addEventListener('click', () => {
    const newPost = {
      date: new Date(),
      text: crearPost.value,
    };

    createPost(newPost)
      .then(() => {
        crearPost.value = '';
        // obtenerPosts((posts) => {
        //   mostrarPosts(posts);
        // });
      })
      .catch((err) => {
        console.error(err, 'Error al crear post');
      });
  });
  // Initial rendering of posts when the page loads
  // obtenerPosts((posts) => {
  //   mostrarPosts(posts);
  // obtenerPosts();
  sectionW.append(obtenerPosts());
  return sectionW;
}

export default wall;
