import DB from './firestore'
import { getDocs, collection, query, where, doc, getDoc } from 'firebase/firestore'

export function getAllProducts() {
  return new Promise((resolve) => {
    const productCollection = collection(DB, "productos")

    getDocs(productCollection).then(snapshot => {
      const docData = snapshot.docs.map(doc => {
        return {...doc.data(), id: doc.id}
      })
      resolve(docData)
    })
  })
}


export function getProductsByCategory(category) {
  return new Promise((resolve) => {
    const productCollection = collection(DB, "productos")
    const q = query(productCollection, where("category","==",category))

    getDocs(q).then(snapshot => {
      const docData = snapshot.docs.map(doc => {
        return {...doc.data(), id: doc.id}
      })
      resolve(docData)
    })
  })
}

export function getProductById(id) {
  return new Promise((resolve) => {
    const productCollection = collection(DB, "productos")
    const docRef = doc(productCollection, id);

    getDoc(docRef).then(snapshot => {
      resolve({...snapshot.data(), id: snapshot.id})
    })
  })
}

