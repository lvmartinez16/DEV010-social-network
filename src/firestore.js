/* eslint-disable max-len */
import {
  getFirestore, collection, addDoc, onSnapshot,
} from 'firebase/firestore';
import { app } from './firebase';

const db = getFirestore(app);
export const createPost = (obj) => addDoc(collection(db, 'post'), {
  ...obj, /* exporta la funcion llamada createpost que recibe como objecto un parametro
  dentro de ella estamos utilizando la funcion addDoc que sirve para agregar un documento a la base de
  datos  */
});
/* export const guardarTarea = () => getDocs(collection(db, 'post'));
/* lo que debe hacer es que utliza el getdocs para poder obtener los documentos de la
coleccion post en la base de datos */

export const obtenerPosts = (callback, containerElement) => {
  const postCollection = collection(db, 'post');
  onSnapshot(postCollection, (snapshot) => {
    const posts = [];
    snapshot.forEach((doc) => {
      const post = {
        text: doc.data().text,
        date: doc.data().date,
        id: doc.id,
      };
      posts.push(post);
      console.log(post);
    });

    callback(posts, containerElement);
  });
};
