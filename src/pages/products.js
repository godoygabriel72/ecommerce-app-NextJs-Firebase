export async function getServerSideProps(){
    const productosRequest = await fetch('http://localhost:3000/api/products')
  
    const productos = await productosRequest.json()
  
    return{
        props:{
            productos
        }
    }
}

const Products = ({productos}) => {

    console.log(productos)

    return (
        <>
            <h1>Hola Mundo</h1>
        </>
    )
}

export default Products