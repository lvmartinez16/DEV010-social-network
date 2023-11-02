/* eslint-disable new-cap */
/* eslint-disable no-undef */
// file login finished
import { createPost } from './firestore';

function wall() {
  const section = document.createElement('section');
  const divContenedor = document.createElement('div');
  divContenedor.setAttribute('class', 'contenedorWall');

  const txtCrearpost = document.createElement('textarea');
  txtCrearpost.placeholder = 'escribe aqui tu post';
  const btnpost = document.createElement('button');
  // Configura el texto del botón
  btnpost.innerText = 'Haz clic en mí';
  const postCreado = document.createElement('textarea');
  /* postCreado.textContent = ''; */

  divContenedor.append(txtCrearpost, btnpost, postCreado);
  section.appendChild(divContenedor);

  btnpost.addEventListener('click', () => {
    const newPost = {
      date: new Date(),
      text: postCreado.value,
    };

    createPost(newPost)
      .then((resultado) => {
        console.log(resultado, 'post creado');
      })
      .catch((err) => {
        console.log(err, 'error al crear post');
      });
  });

  /* btnpost.addEventListener('click', () => {
    const newPost = {
      date: new Date(),
      text: postCreado.value,
    };
});

    createPost(newPost)
      .then(() => {
        console.log('fue bien');
      })
      .catch((err) => {
        console.log(err);
      });
  }); */
  // crear un objeto donde una propieda guarde ese texto
  // ejecutar createpost con ese objeto cmo argumento
  // then y catch

  return section;
}

export default wall;
