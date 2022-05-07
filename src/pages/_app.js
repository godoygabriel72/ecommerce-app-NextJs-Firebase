import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux'
import Script from 'next/script'
import '../styles/globals.css'

import CartStore from '../redux/store'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={CartStore}>
          <Layout>
              <Script src='https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js' 
                      integrity='sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p'
                      crossorigin='anonymous' />
              <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js'
                      integrity='sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF' 
                      crossorigin='anonymous' />
              <Component {...pageProps} />
          </Layout>
        </Provider>
    )
}

export default MyApp