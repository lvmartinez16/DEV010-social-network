/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import { createPost, obtenerPosts } from './firestore';

function wall() {
  const sectionW = document.createElement('section');
  sectionW.className = 'sectionW';
  const divContenedor = document.createElement('div');
  divContenedor.setAttribute('class', 'contenedorWall');

  const crearPost = document.createElement('textarea');
  crearPost.placeholder = 'Escribe aquí tu post';
  const btnPost = document.createElement('button');
  btnPost.innerText = 'Enviar';
  btnPost.className = 'btnPost';
  const postCreado = document.createElement('div');
  postCreado.className = 'sesionPost';

  divContenedor.append(crearPost, btnPost, postCreado);
  sectionW.appendChild(divContenedor);

  function mostrarPosts(posts) {
    postCreado.innerHTML = ''; // Clear existing posts

    // Reverse the order of posts to display the newest ones first
    posts.reverse();

    posts.forEach((post) => {
      const postElement = document.createElement('div');
      postElement.className = 'post';
      postElement.textContent = `${post.text} - ${post.date}`;
      postCreado.appendChild(postElement);
    });
  }
  // Event listener for the "Enviar" button
  btnPost.addEventListener('click', () => {
    const newPost = {
      date: new Date(),
      text: crearPost.value,
    };

    createPost(newPost)
      .then(() => {
        crearPost.value = '';
        obtenerPosts((posts) => {
          mostrarPosts(posts);
        });
      })
      .catch((err) => {
        console.error(err, 'Error al crear post');
      });
  });

  // Initial rendering of posts when the page loads
  obtenerPosts((posts) => {
    mostrarPosts(posts);
  });

  return sectionW;
}

export default wall;
