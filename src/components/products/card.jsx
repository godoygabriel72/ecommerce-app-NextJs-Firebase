import Image from 'next/image'

const Card = ({ item }) => {    

    return (
        <>
            <div className='card position-relative' style={{width: '20rem', height: '30rem'}}>
                <p className='name-label'>{item.name}</p>
                <Image  src={`/${item?.image}`} alt='...' layout='fill' priority={true} />
                <div className='card-body text-end'>
                    <h4 className='card-text'>{item.price} $</h4>
                </div>
            </div>
            <style jsx>{`
                .name-label {
                    position: absolute;
                    top: 0;
                    left: 0;
                    background: #000000;
                    color: #FFFFFF;
                    z-index: 10;
                }
            `}</style>
        </>
    )
}

export default Card