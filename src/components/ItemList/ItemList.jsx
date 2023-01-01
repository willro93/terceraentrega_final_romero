import Item from "../Item/Item";

function ItemList({ productoList, categoria }) {


	return (
		<>
			<div className='container col-sm-12 col-lg-12 d-flex flex-row justify-content-around flex-wrap'>
				{productoList?.map((producto) => {
					return (
						<Item
							precio={producto.precio}
							nombre={producto.nombre}
							producto={producto.producto}
							imagen={producto.url}
							id={producto.id}
                            categoria={categoria}
							stock={producto.stock}
							initial={1}
							max={producto.stock}
							descripcion={producto.descripcion}
							key={producto.id}
						/>
					);
				})}
			</div>
		</>
	);
}

export default ItemList;