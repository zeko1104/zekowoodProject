import React from 'react'
import { categories } from "./categoryData"

const MobileCategory = () => {
  return (
    <ul className='border w-full h-full border-[#D9D9D9] p-0 m-0 list-none'>
      {categories.map((category) => (
        <li key={category.id} className='p-3 border-b border-[#E8E8E8] cursor-pointer hover:text-[#83B735]'>
          <button className='' type="button" onClick={() => console.log(category.id)}>
            {category.name}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default MobileCategory