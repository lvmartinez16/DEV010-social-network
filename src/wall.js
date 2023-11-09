// import { createPost, updatePost } from './firestore';

// file login finished
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
  const postCreado = document.createElement('textarea');
  /* postCreado.textContent = ''; */

  divContenedor.append(crearPost, btnpost);
  section.appendChild(divContenedor);

  btnpost.addEventListener('click', () => {
    const newPost = {
      date: new Date(),
      // text: postCreado.value,
    };

    createPost(newPost)
      .then((resultado) => {
        console.log(resultado, 'post creado');
        // Actualiza el contenido de postCreado con el contenido de crearpost
        // postCreado.textContent = crearPost.value;

        // Limpia el campo crearpost
        crearPost.value = '';

        // Llama a obtenerPosts para actualizar la vista con los posts más recientes
        obtenerPosts((posts) => {
          console.log('Posts actualizados:', posts);
        });
      })
      .catch((err) => {
        console.log(err, 'error al crear post');
      });
  });
  // crear un objeto donde una propieda guarde ese texto
  // ejecutar createpost con ese objeto cmo argumento
  // then y catch prueba

  return section;
}

export default wall;
