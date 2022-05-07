import CardList from '../../components/products/cardList'

export async function getServerSideProps(){
    const productsRequest = await fetch('http://localhost:3000/api/products')
    const products = await productsRequest.json()
    return{
        props:{
            products
        }
    }
}

const Products = ({products}) => {

    return (
        <>
            <CardList items={products} />
        </>
    )
    
}

export default Products