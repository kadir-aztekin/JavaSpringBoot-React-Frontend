import React from 'react'
import { Button } from 'semantic-ui-react'
import ProductList from '../pages/ProductList'
import Categories from './Categories'
import Navi from './Navi'
export default function Dashboard() {
  return (
    <div>
      <Navi/>
      <Categories></Categories>
      <ProductList></ProductList>
    </div>
  )
}
