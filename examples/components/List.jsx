import React from 'react'

const Item = (item) => <li>{item.title}</li>

const List = ({ items }) => (
  <ul>
    { items.map(Item) }
  </ul>
)

export default List