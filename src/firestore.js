import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const createPost = (obj) => {
  return addDoc(collection(db, "post"), {
    ...obj
  });
}
// HTML
const form = document.createElement('form');
form.innerHTML = `
<input type="text">
<button type="button" id="btn">crear</button>
`;
const root = document.getElementById("app");
root.appenChild(form);
const btn = form.querySelector('#btn');
btn.addEventListener('click', () =>(
  conts newPost = {
    date: new date(),
    text: form.text.value
  }
  createPost(newPost)
  .then(() =>{
    console.log("fue bien")
  })
  .catch((err) => {
    console.log(err)
  }
  )
));

/* document.gutElementById('app').innerHTML = ``; */