import { database } from '../../../settings/firebase'
import { collection, getDocs } from 'firebase/firestore'

export default async function getProducts(req, res){
    const col = collection(database, 'products')
    const docs = await getDocs(col)

    const data = []

    docs.forEach(doc => {
        data.push({...doc.data()})
    })

    return res.status(200).json(data)
}