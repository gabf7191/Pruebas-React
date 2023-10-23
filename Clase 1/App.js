
import './App.css';


const mensaje = ' Mundo'
  //Todo los componentes tienen que empezar con mayuscula, para no confundise con Etiquetas HTML que ya existen
const Mensajes = (props) => {  //Componente que despues usas en el return de la App  /Siempre tienen que vivir afuera

  return <h1>{props.mensajito}</h1>
  
}

function App() {


  return (  // Lo de abajo parece HTML, pero en realidad es JSX
    <div className="App">  
      <Mensajes mensajito = 'sali de aca'></Mensajes>
      <Mensajes mensajito = 'ah re malo'></Mensajes>
      <Mensajes mensajito = 'Bueno si '></Mensajes>
      {mensaje}
    </div>
  );
}

export default App;
