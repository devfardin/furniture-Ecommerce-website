import React, { useState } from 'react'
import PageHeader from '../../components/shared/PageHeader'
import Container from '../../components/shared/Container'
import Filter from './Filter'
import Products from './Products'
const Shop = () => {
  const [category, setCategory] = useState('')
  const [searchResult, setSearchResult] = useState('')
  const handelCategory = (value) => {
    setCategory(value)
    return
  }
  const handleSearch = (e) => {
    setSearchResult(e.target.value.toLowerCase())
  }
;
// const [selected, setSelected] = useState('')

  return (
    <div>
      <PageHeader page='Shop' />
      <Container>
        <div className='mt-14 grid grid-cols-11 justify-between gap-10'>
          <div className=' lg:col-span-3 '>
            <Filter handelCategory={handelCategory} handleSearch={handleSearch}
            // selected={selected} setSelected={setSelected} 
            />
          </div>
          <div className='col-span-9 lg:col-span-8'>
            <Products category={category}  searchResult={searchResult} 
            // selected={selected} 
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Shop