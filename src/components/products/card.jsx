import Image from 'next/image'

const Card = ({ item }) => {    

    console.log(item)

    return (
        <>
            <div className='card position-relative' style={{width: '20rem'}}>
                <p className='name-label'>{item.name}</p>
                <Image  src={`/${item?.image}`} alt='...' width={800}
                        height={900}
                        layout='responsive'
                        priority={false} />
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