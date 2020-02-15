import React,{ useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Productos from './components/Productos';
import EditarProducto from './components/EditarProducto';
import AgregarProducto from './components/AgregarProducto';
import Producto from './components/Producto';
import Header from './components/Header';

function App() {

  const [ productos, guardarProductos ] = useState([]);
  const [ recargarProductos, guardarRecargarProductos] = useState(true);

  useEffect(()=>{
    if(recargarProductos){
      const consultarApi = async () =>{
        const resultado = await axios.get('http://localhost:4000/restaurant');
        guardarProductos(resultado.data);
      }

      consultarApi();
      // Cambiar al false la rercarga de productos
      guardarRecargarProductos(false);
    }

  },[recargarProductos])

  return (
    <Router>
      <Header />
      <main className="container mt-5">
        <Switch>
          <Route exact path="/productos"
            render={ () => (
              <Productos
                productos={productos}
                guardarRecargarProductos={guardarRecargarProductos}
              />
            )}/>
          <Route exact path="/productos/nuevo"
            render={ () => (
              <AgregarProducto
                guardarRecargarProductos={guardarRecargarProductos}  
              />
            )}
          />
          <Route exact path="/productos/:id" component={Producto}/>
          <Route exact path="/productos/Editar/:id"
            render={ props => {
              // tomar el id del producto
              const idProducto = parseInt(props.match.params.id);
              
              // el producto que se pasa al state
              const producto = productos.filter(producto => producto.id === idProducto);
              return(
                <EditarProducto
                  producto={producto[0]}
                  guardarRecargarProductos={guardarRecargarProductos}
                />
              );
            }}
          />
        </Switch>
      </main>
      <p className="mt-4 p-2 text-center">Todos los Derechos Reservados</p>
    </Router>
  );
}

export default App;
