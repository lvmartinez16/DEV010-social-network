/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
// import { createPost, updatePost } from './firestore';

import { async } from 'regenerator-runtime';
import { createPost, obtenerPosts } from './firestore';

function wall() {
  const section = document.createElement('section');
  const divContenedor = document.createElement('div');
  divContenedor.setAttribute('class', 'contenedorWall');

  const crearPost = document.createElement('textarea');
  crearPost.placeholder = 'escribe aqui tu post';
  const btnpost = document.createElement('button');
  // Configura el texto del botón
  btnpost.innerText = 'Enviar';
  const postCreado = document.createElement('div');

  /* postCreado.textContent = ''; */

  divContenedor.append(crearPost, btnpost, postCreado);
  section.appendChild(divContenedor);

  btnpost.addEventListener('click', async () => {
    const newPost = {
      date: new Date(),
      text: crearPost.value, // guarda lo que el usuario escribio

    };

    createPost(newPost)
      .then((resultado) => {
        console.log(resultado, 'post creado');
        // Actualiza el contenido de postCreado con el contenido de crearpost
        postCreado.textContent = crearPost.value;

        // Limpia el campo crearpost
        crearPost.value = '';

        // Llama a obtenerPosts para actualizar la vista con los posts más recientes
        // obtenerPosts(callback, unElement)
        // el elemento tiene que ser un lugar donde se dibujen los posts
        // pueden crear otroElemento que este dentro de divContenedor
        obtenerPosts((posts) => {
          console.log('Posts actualizados:', posts);
          // tiene que hacer lo mismo que hacian en DL dibujar tarjetas
        });
      })
      .catch((err) => {
        console.log(err, 'error al crear post');
      });
  });

  return section;
}

export default wall;
