import {
  getFirestore, collection, addDoc, onSnapshot,
} from 'firebase/firestore';
import { app } from './firebase';

const db = getFirestore(app); // Obtenga una referencia a la base de datoss de Firestore:
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
