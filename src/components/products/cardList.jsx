import Card from './card'

const CardList = ({ items }) => {

    return (
        <>
            <div className='cards'>
                {items?.map((product, index) => 
                    <div key={index}>
                        <Card item = {product}/>
                    </div>
                )}
            </div>
            <style jsx>{`
                .cards {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1rem;
                    justify-content: center;
                    padding: 1rem;
                }
                @media only screen and (max-width: 767px) {
                    
                }
            `}</style>
        </>
    )

}

export default CardList