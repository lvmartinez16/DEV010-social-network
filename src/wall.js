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

  divContenedor.append(crearPost, btnPost, postCreado);
  sectionW.appendChild(divContenedor);

  // Function mostrar post
  // Function mostrar post
  // Function mostrar post
  function mostrarPost(posts) {
    postCreado.innerHTML = '';
    posts.forEach((post) => {
      const postElement = document.createElement('div');
      postElement.className = 'post';
      postElement.textContent = `${post.text}`;
      postCreado.insertBefore(postElement, postCreado.firstChild);
    });
  }

  btnPost.addEventListener('click', () => {
    const newPost = {
      date: new Date(),
      text: crearPost.value,
    };

    createPost(newPost)
      .then(() => {
        crearPost.value = '';
        obtenerPosts((posts) => {
          mostrarPost(posts); // lista de post actualizada
        });
      })
      .catch((err) => {
        console.error(err, 'Error al crear post');
      });
  });

  //
  obtenerPosts((posts) => {
    mostrarPost(posts);
  });

  return sectionW;
}

export default wall;
