/* eslint-disable max-len */
import {
  onSnapshot, query, orderBy,
}
  from 'firebase/firestore';
// eslint-disable-next-line import/named
import { refPost } from './firebase';

export const obtenerPosts = () => {
  const sectionPost = document.createElement('section');
  sectionPost.setAttribute('id', 'container-post');

  const postQuery = query(refPost(), orderBy('date', 'desc'));

  onSnapshot(postQuery, (snapshot) => {
    snapshot.forEach((doc) => {
      const post = doc.data();

      post.id = doc.id;
      sectionPost.innerHTML += `<div class="card-db">
      <div class="div-post"><a class="text-data">${post.text}</a> </div>   </div>`;
    });
  });

  return sectionPost;
};
