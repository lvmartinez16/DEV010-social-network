/* eslint-disable max-len */
import {
  onSnapshot, query, orderBy,
}
  from 'firebase/firestore';
// eslint-disable-next-line import/named
import { refPost, borrarPost } from './firebase';

export const obtenerPosts = () => {
  const sectionPost = document.createElement('section');
  sectionPost.setAttribute('id', 'container-post');

  const postQuery = query(refPost(), orderBy('date', 'desc'));

  onSnapshot(postQuery, (snapshot) => {
    snapshot.forEach((doc) => {
      const post = doc.data();

      post.id = doc.id;
      sectionPost.innerHTML += `<div class="card-db">
      <div class="div-post"><a class="text-data">${post.text}</a> </div>  
      <button class="btn-post" id="delete-post" "${post.id}">Eliminar</img>
      </button> </div>`;
    });
    const btnDelete = document.querySelectorAll('.btn-post');
    btnDelete.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        console.log('click eliminar', e.target.dataset.id);
        const postId = e.target.dataset.id;
        borrarPost(postId)
          .then(() => {
            console.log('Se elimino el ID:', postId);
          })
          .catch(() => {
          });
      });
    });
  });

  return sectionPost;
};
