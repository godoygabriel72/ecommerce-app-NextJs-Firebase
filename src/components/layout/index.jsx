import NavBar from './navBar'

const Layout = ({children}) => {

    return (
        <div className='position-absolute h-100 w-100'>
            <div className='navBar'>
                <NavBar />
            </div>
            <div className='content y-scroll'>
                {children}
            </div>
            <style jsx>{`
                .navBar {
                    width: 100vw;
                    height: 4.5rem;
                    background: #000000;
                }
                .content {
                    position: relative;
                    width: 100vw;
                    height: calc(100vh - 4.5rem);
                    background: #FFFFFF;
                    display: flex;
                    overflow: scroll;
                }
                .y-scroll::-webkit-scrollbar {
                    display: none;
                    overflow-y: scroll;
                }                  
            `}</style>
        </div>
    )

}

export default Layout