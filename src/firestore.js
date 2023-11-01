import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCoE_r-ZbuxKDggIgOg2DQGZDykBKrqiPc',
  authDomain: 'social-network-6f780.firebaseapp.com',
  projectId: 'social-network-6f780',
  storageBucket: 'social-network-6f780.appspot.com',
  messagingSenderId: '770852059023',
  appId: '1:770852059023:web:4d0ecf6bf933d3e153bdfa',
  measurementId: 'G-GDYQNJ98LP',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const createPost = (obj) => {
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
/* jajajaja */