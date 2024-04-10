import React, { useEffect, useState } from 'react'
import Container from '../../../components/shared/Container'
import SectionTitle from '../../../components/SectionTitle'
import Loader from '../../../components/shared/Loader'
const OurStore = () => {
  const [categorys, setCategorys] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch('./category.json')
      .then((res) => res.json())
      .then(data => {
        setCategorys(data)
        setLoading(false)
      })
  }, [])
  const handleFilter=(item)=>{
    console.log(item);
  }
  return (
    <div className='mt-16'>
        <Container>
            <SectionTitle title='Our Store' 
            des='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae vivamus morbi et ornare est Orci et sed commodo.'/>
            <div>
              {
                loading ? <Loader/> : <div className='flex justify-center items-center gap-6'>
                  {
                    categorys.map((category, index)=> <div  onClick={()=>handleFilter(category.category)}>
                      <h1 className='text-base font-medium cursor-pointer text-heading hover:text-primary transition-all duration-300 border-b border-transparent hover:border-primary'>{category.category}</h1>
                    </div>)
                  }
                </div>
              }
                  
            </div>
        </Container>
    </div>
  )
}

export default OurStore