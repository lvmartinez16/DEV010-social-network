//file login finished

function wall(navigateTo) {
  const section = document.createElement('section');
  const divContenedor = document.createElement('div');
  divContenedor.setAttribute('class', 'contenedor');

  const txtEnConstruccion = document.createElement('p');
  txtEnConstruccion.textContent = 'Hola';

  const btnpost = document.createElement('button');
  const textarea = document.createElement('textarea');
  textarea.textContent = 'Post';
  divContenedor.append(txtEnConstruccion, btnpost, textarea);
  section.appendChild(divContenedor);

  btnpost.addEventListener('click', () => {
    //obtener el texto/value de un texta area
    //crear un objeto donde una propieda guarde ese texto
    //ejecutar createpost con ese objeto cmo argumento
    //then y catch
  });
  return section;
}

export default wall;