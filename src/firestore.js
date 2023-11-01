import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from './firebase';

const db = getFirestore(app); // Obtenga una referencia a la base de datos de Firestore:
// Defina una función para crear una nueva publicación en Firestore:
export const createPost = (obj) => addDoc(collection(db, 'post'), {
  ...obj,
});
