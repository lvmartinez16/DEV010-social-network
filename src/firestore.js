import {
  getFirestore, collection, addDoc, onSnapshot,
} from 'firebase/firestore';
import { app } from './firebase';
 */
// const db = getFirestore(app); // Obtenga una referencia a la base de datos de Firestore:
// Defina una función para crear una nueva publicación en Firestore:
// export const createPost = (obj) => addDoc(collection(db, 'post'), {
// ...obj,
// });
/* import { onSnapshot, collection } from 'firebase/firestore';
import { db } from 'firebase';

const db = getFirestore(app); // Obtenga una referencia a la base de datos de Firestore:
// crear una nueva publicación en la base de datos Firestore.
export const createPost = (obj) => addDoc(collection(db, 'post'), {
  ...obj,
});

export const obtenerPosts = (callback) => {
  const postCollection = collection(db, 'post');
  onSnapshot(postCollection, (snapshot) => {
    const posts = [];
    snapshot.forEach((doc) => {
      posts.push({ id: doc.id, ...doc.data() });
    });

    callback(posts);
  });
};
