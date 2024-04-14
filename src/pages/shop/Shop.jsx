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
    e.preventDefault()
    setSearchResult(e.target.search.value.toLowerCase())
  }

  return (
    <div>
      <PageHeader page='Shop' />
      <Container>
        <div className='mt-14 grid grid-cols-11 justify-between gap-10'>
          <div className=' lg:col-span-3'>
            <Filter handelCategory={handelCategory} handleSearch={handleSearch} />
          </div>
          <div className='col-span-9 lg:col-span-8'>
            <Products category={category}  searchResult={searchResult}/>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Shop