//file login finished

function wall(navigateTo) {
  const section = document.createElement('section');
  const divContenedor = document.createElement('div');
  divContenedor.setAttribute('class', 'contenedor');

  /* const txtEnConstruccion = document.createElement('p');
  txtEnConstruccion.textContent = 'Hola'; */
  const txtEnConstruccion = document.createElement('textarea');

  const btnpost = document.createElement('button');
  const textarea = document.createElement('textarea');
  textarea.textContent = '';
  divContenedor.append(txtEnConstruccion, btnpost, textarea);
  section.appendChild(divContenedor);

  btnpost.addEventListener('click', () => {
    conts newPost = {
      date: new date(),
      text: form.text.value
    }
    createPost(newPost)
      .then(() => {
        console.log("fue bien")
      })
      .catch((err) => {
        console.log(err)
      }
    //crear un objeto donde una propieda guarde ese texto
    //ejecutar createpost con ese objeto cmo argumento
    //then y catch
  });
  return section;
}

export default wall;