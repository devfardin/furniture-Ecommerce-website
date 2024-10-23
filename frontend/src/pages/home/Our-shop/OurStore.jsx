import React, { useEffect, useState } from 'react'
import Container from '../../../components/shared/Container'
import SectionTitle from '../../../components/SectionTitle'
import Loader from '../../../components/shared/Loader'
import qs from 'query-string'
import { useSearchParams, useNavigate } from 'react-router-dom'
import Products from './Products'
const OurStore = () => {
  const [categorys, setCategorys] = useState([])
  const [loading, setLoading] = useState(false)
  const [params, setParams] = useSearchParams()
  const navigate = useNavigate()
  useEffect(() => {
    setLoading(true)
    fetch('./category.json')
      .then((res) => res.json())
      .then(data => {
        setCategorys(data)
        setLoading(false)
      })
  }, [])

  const handleFilter = (item) => {
    const lable = item.replace(' ', '-')
    let currentQuery = {}
    if (params) {
      currentQuery = qs.parse(params.toString())
    }
    const updatedQuery = { ...currentQuery, category: lable }
    const url = qs.stringifyUrl({
      url: '/',
      query: updatedQuery,
    })
    navigate(url)
  }
  params.get('category')
  const categoryValue = params.get('category')
  const categoryName=categoryValue?.replace('-', ' ')
  

  return (
    <div className='mt-16'>
      <Container>
        <SectionTitle title='Our Store'
          des='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae vivamus morbi et ornare est Orci et sed commodo.' />
        <div>
          {
            loading ? <Loader /> 
            : <div>
              <div className='flex justify-center overflow-x-auto items-center gap-8'>
                {
                  categorys.map((category, index) => <div key={index} onClick={() => handleFilter(category.category)}>
                    <h1 className={`text-base font-medium cursor-pointer text-heading hover:text-primary transition-all duration-300 border-b pb-3 hover:border-primary ${categoryName== category?.category?'text-primary  border-b border-primary':'text-heading border-transparent'}`}>{category?.category}</h1>
                  </div>)
                }
              </div>
            </div>
          }
        </div>
      </Container>
      <div className='mt-10'>
        <Products  />
      </div>
    </div>
  )
}

export default OurStore