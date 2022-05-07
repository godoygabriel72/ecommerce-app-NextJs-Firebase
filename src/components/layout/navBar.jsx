import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {

    return (
        <>
            <div className='navBar'>
                <Link href='#'>
                    <a className='navbar-brand text-white'>Navbar</a>
                </Link>
                <div className='userIcon'>
                    <Image  src='/user.png'
                            className='cursorPointer' 
                            alt='userIcon' width={50} height={50} />
                </div>
            </div>
            <style jsx>{`
                .navBar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    height: 100%;
                    padding: 0 0.75rem;
                    vertical-align: baseline;
                }
                .userIcon {
                    width: 2rem;
                    height: 2rem;
                    border-radius: 50%;
                    position: relative;
                    overflow: hidden;
                }
            `}</style>
        </>
    )
}

export default NavBar
