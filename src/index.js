
import ReactDOM from 'react-dom';
import {useState , useEffect } from 'react'


const rootElement = document.getElementById("root")

const App = (props) => {
    const [contadorValue ,  updateContador] = useState(11);  // useState te devuelve un array de 2 posiciones, la primera con el estado, la segunda con el cambio de estado
    const [click,setclick] = useState([])

    const [color, setColor] = useState('black'); // Inicialmente, el color es negro

    const [backgroundColor, setBackgroundColor] = useState('white');


    ///EXTRA///
    useEffect(() => {
      const changeBackgroundColor = () => {
        const randomColor = getRandomColor();
        setBackgroundColor(randomColor);
      }
  
        document.body.addEventListener('click', changeBackgroundColor);
  
      return () => {
        document.body.removeEventListener('click', changeBackgroundColor);
      };
    }, []);
  
    const getRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    
     ///EXTRA///


    const clicking = (parametro) => {
        const parametrodebug = parametro? parametro : 0;
        console.log(parametrodebug)
        updateContador(contadorValue + parametrodebug);
        const signo = (parametro>0) ? '+':'-'
        setclick ((prevClicks => [...prevClicks, signo]))
    }

    const changeColor = () => {
        if (color === 'black') {
            setColor('red');
        } else {
            setColor('black');
        }
        
        
        //Otra Opcion
        //const nombrecolor = (color === 'black') ?  'red' : 'black' 
        //setColor(nombrecolor)
        }

    return( 
    <div style={{ backgroundColor: backgroundColor }}>
        <h1 style = {{color : color}}>{contadorValue} </h1>  
        <button  //Tener ccuidado que el clicking es sin (), por que si no se ejecuta infinitas veces SI HAGO ESTO onClick= {clicking}
          onClick={() => clicking(1)}>    
            Incrementar
        </button>
        
        <button onClick={() => clicking(-1)}>
            Decrementar
        </button>

        <p>{click.join(', ')}</p>
        <p>{(click.filter(click => click === '-')).length} </p>


        <button onClick={changeColor}>
        Cambiar a Rojo
       </button>

    </div>
     ) 
}



ReactDOM.render(
    <App />, rootElement
);
