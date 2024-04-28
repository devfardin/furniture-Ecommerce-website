import React, { Fragment, useEffect, useState } from 'react'
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx'
import MobileFilter from './MobileFilter'
import { LiaSearchSolid } from "react-icons/lia"
import { Combobox, Transition } from '@headlessui/react'
import { MdCheckCircleOutline } from 'react-icons/md'
import { CgHeadset } from 'react-icons/cg'

const Filter = ({ handelCategory, handleSearch, 
    // selected, setSelected
 }) => {
    const [menuOpen, setIsMenuOpen] = useState(false)
    const [categorys, setCategorys] = useState([])
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [query, setQuery] = useState('')
    const [selected, setSelected] = useState(products[1])
  

    useEffect(() => {
        setLoading(true)
        fetch('./category.json')
            .then((res) => res.json())
            .then(data => {
                setCategorys(data)
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        setLoading(true)
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
    }, [])


    const filteredPeople =
        query === ''
            ? products
            : products.filter((product) =>
                product.name
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            )

    return (
        <div>
            <div className='md:flex-none md:block lg:hidden z-0'>
                <button className='text-2xl md:text-3xl hover:bg-primary transition-all duration-300 hover:text-white bg-[#BAE6FD] p-2  '
                    onClick={() => setIsMenuOpen(!menuOpen)}>
                    {
                        menuOpen ? <RxCross1 /> : <RxHamburgerMenu />
                    }
                </button>
            </div>

            <div className='border hidden lg:block border-[#dddddd] rounded-sm p-3'>
                <h1 className='text-xl font-medium text-heading pb-1 border-b border-[#dddddd]'>Filter</h1>

                <div className="z-40 w-full">
                    <Combobox onChange={(event) => setQuery(event.target.value)}
                    
                    >
                        <div className="relative z-20 mt-1">
                            <div className="relative z-20 w-full  bg-white   focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                <Combobox.Input
                                    className="py-2 px-4 w-full font-normal text-lg text-pera border border-[#dddddd] focus:border-primary rounded outline-none duration-300 transition-all"
                                    displayValue={(person) => person.name}
                                    onChange={(event) => setQuery(event.target.value)}
                                />
                                <Combobox.Button className="absolute z-20 inset-y-0 right-0 flex items-center pr-2">
                                    <LiaSearchSolid type='reset'
                                        className="h-7 w-7 bg-white  text-gray-400"
                                        aria-hidden="true"
                                    />
                                </Combobox.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                                afterLeave={() => setQuery('')}
                            >
                                <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    {filteredPeople.length === 0 && query !== '' ? (
                                        <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                                            Nothing found.
                                        </div>
                                    ) : (
                                        filteredPeople.map((person) => (
                                            <Combobox.Option
                                                key={person.id}
                                                className={({ active }) =>
                                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-teal-600 text-white' : 'text-gray-900'
                                                    }`
                                                }
                                                value={person}
                                            >
                                                {({ selected, active }) => (
                                                    <>
                                                        <span
                                                            className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                }`}
                                                        >
                                                            {person.name}
                                                        </span>
                                                        
                                                        {selected ? (
                                                            <span
                                                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                                                                    }`}
                                                            >
                                                              
                                                            </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </Combobox.Option>
                                        ))
                                    )}
                                </Combobox.Options>
                            </Transition>
                        </div>
                    </Combobox>
                </div>

                <form
                    // onSubmit={handleSearch}
                    className='mt-4 relative'>

                    <input id='text' list='productsSuggest'
                        onChange={handleSearch} autoComplete
                        type='text' name='search' placeholder='Search Products'
                        className='py-2 px-4 w-full font-normal text-lg text-pera border border-[#dddddd] focus:border-primary rounded outline-none duration-300 transition-all' />
                    <datalist id='productsSuggest' className='absolute !bg-red-300'>
                        {
                            products.map((Proname, index) => <option key={index} value={Proname.name}>
                                <img src={Proname.featureImg} alt="" />{Proname.name}</option>)
                        }
                    </datalist>
                    <button disabled className='p-3.5 rounded-r-md bg-primary absolute top-0 right-0'>
                        <LiaSearchSolid className='text-white text-lg' />
                    </button>
                </form>
                <div>
                    <div className='mt-4'>
                        <h1 className='text-xl font-medium text-heading pb-1 border-b border-[#dddddd]'>Category</h1>
                        <div className='mt-4'>
                            <h2 onClick={() => handelCategory('')} className='text-base font-normal text-[#888888] mb-3 hover:text-primary duration-300 transition-all cursor-pointer hover:font-semibold flex items-center justify-between gap-5'>All Products <span>{products.length}</span></h2>
                            {
                                categorys.map((category, index) => <div key={index} onClick={() => handelCategory(category.category)}>
                                    <div className='flex items-center justify-between gap-5 group'>
                                        <h2 className='text-base font-normal text-[#888888] mb-3 group-hover:text-primary duration-300 transition-all cursor-pointer group-hover:font-semibold'>{category.category}</h2>
                                        <h3 className='text-base font-normal text-pera group-hover:text-primary duration-300 transition-all group-hover:font-semibold cursor-pointer'>
                                            {
                                                products.filter(product => product.category === category.category).length
                                            }
                                        </h3>
                                    </div>
                                </div>)
                            }
                        </div>

                    </div>
                </div>
            </div>

            <MobileFilter menuOpen={menuOpen} />
        </div>
    )
}

export default Filter