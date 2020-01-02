import React from 'react'
import Grocery from './Grocery'

const GroceryList = props => {

  const groceryMap = props.groceries.map((groceryObject)=>{
    return (
      <Grocery
      name={groceryObject.name}
      />
    )
  })
  return (
    <ul>{groceryMap}</ul>
  )
}

export default GroceryList
