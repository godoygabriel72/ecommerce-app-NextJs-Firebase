export function getServerSideProps(context) {
    const { id } = context.params
    return{
        props:{
            id
        }
    }
}

const Product = ({id}) => {

    return (
        <h1>{id}</h1>
    )
    
}

export default Product