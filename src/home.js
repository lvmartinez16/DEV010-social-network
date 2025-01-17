import { iniciarSesionGoogle } from './firebase';
// file main.js finished
function home(navigateTo) {
  const sectionH = document.createElement('section');
  sectionH.className = 'sectionH';
  sectionH.setAttribute('id', 'inicio');
  const divContenedor = document.createElement('div');
  divContenedor.setAttribute('class', 'contenedor');
  const buttonGoogle = document.createElement('button');
  buttonGoogle.setAttribute('class', 'buttonGoogle');
  const spanBtn = document.createElement('span');
  const imgBtn = document.createElement('img');
  imgBtn.setAttribute('class', 'imgbuttoniniciar');
  imgBtn.setAttribute('src', 'https://cdn-icons-png.flaticon.com/256/2875/2875404.png');
  imgBtn.setAttribute('alt', 'iniciar sesion con google');
  const h1 = document.createElement('h1');
  h1.textContent = 'Social Network Travel';
  const p = document.createElement('p');
  p.textContent = '“Nunca serás demasiado viejo para hacer del resto de tu vida lo mejor de tu vida”';
  buttonGoogle.addEventListener('click', () => {
    console.log('ok ok');
    // navigateTo('/wall');
    iniciarSesionGoogle()
      .then((resp) => {
        console.log(resp);
        // if (resp === undefined) {
        //   alert('Falló inicio de sesión, vuelve a intentarlo');
        // } else {
        navigateTo('/wall');
        // }
      })
      .catch((error) => console.log(error.message));
  });
  buttonGoogle.append(spanBtn, 'Iniciar sesión con Google');
  spanBtn.appendChild(imgBtn);
  divContenedor.append(h1, p, buttonGoogle);
  sectionH.appendChild(divContenedor);
  return sectionH;
}
export default home;
