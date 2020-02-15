import React from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios'
import Swal from 'sweetalert2';

export default function ProductoLista({producto,guardarRecargarProductos}) {

	const eliminarProducto = id => {
		console.log('eliminando', id);
		// TO DO: eliminar los registros
		Swal.fire({
		  title: '¿Estás seguro?',
		  text: "¡No es posible deshacer esta acción!",
		  icon: 'warning',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Si, Eliminar',
		  cancelButtonText: 'Cancelar'
		}).then(async (result) => {
		  if (result.value) {

		  	try{
					const url = `http://localhost:4000/restaurant/${id}`;

					const resultado = await axios.delete(url);

					if(resultado.status === 200){
				   	guardarRecargarProductos(true);
				    Swal.fire(
				      'Eliminado!',
				      'El producto se ha eliminado.',
				      'success'
				    )
					}
		  	}catch (err){
		  		console.log(err);
					Swal.fire({
					  icon: 'error',
					  title: 'Error',
					  text: 'Hubo un error, vuelve a intentarlo!',
					})
		  	}
		  }
		})
	}

	return(
		<li
			className="list-group-item d-flex justify-content-between align-item-center"
			data-categoria={producto.categoria}
		>
			<p>
				{producto.nombrePlatillo} {'  '}
				<span className="font-weight-bold">${producto.precioPlatillo}</span>
			</p>
			
			<div>

				<Link
					to={`/productos/Editar/${producto.id}`}
					className="btn btn-success mr-2"
				>Editar</Link>
				
				<button
					className="btn btn-danger"
					onClick={()=> eliminarProducto(producto.id)}
				>
					Eliminar &times;
				</button>

			</div>
		</li>
	);
}