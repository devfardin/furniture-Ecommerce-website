import { Tab } from '@headlessui/react'
import Description from './Description'
const ProductDetailTab = ({data}) => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <Tab.Group>
            <Tab.List className="flex gap-4 max-w-xl mx-auto">
                <Tab className={({ selected }) =>
                    classNames('py-3 text-lg rounded-sm  font-normal px-10 border border-neutral-200',
                        'outline-none focus:outline-none ',
                        selected ? 'border-b border-b-primary text-heading transition-all duration-200' : 'text-[#666666]')}>Description</Tab>
                <Tab className={({ selected }) =>
                    classNames('py-3 text-lg rounded-sm  font-normal px-10 border border-neutral-200',
                        'outline-none focus:outline-none ',
                        selected ? 'border-b border-b-primary text-heading transition-all duration-200' : 'text-[#666666]')}>Reviews</Tab>
                <Tab className={({ selected }) =>
                    classNames('py-3 text-lg rounded-sm  font-normal px-8 border border-neutral-200',
                        'outline-none focus:outline-none ',
                        selected ? 'border-b border-b-primary text-heading transition-all duration-200' : 'text-[#666666]')}> Ship & Return</Tab>
            </Tab.List>
            <div className='border-b border-neutral-200 w-full my-5'></div>
            <Tab.Panels>
                <Tab.Panel>
                    <Description text={data?.description}/>
                </Tab.Panel>
                <Tab.Panel>
                    Reviews
                </Tab.Panel>
                <Tab.Panel>
                    <Description text="You can exchange any product in your order up to 30 days after delivery. Shipping on your first exchange for any item is free of charge. If you decide to exchange that item again (i.e. more than once) you will be responsible for any forward and return shipping fees.
                    Please note: All exchanges must be made with the original Article packaging. If you don't have the original packaging on hand, there is an additional $50 repackaging fee per item."/>
                </Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    )
}

export default ProductDetailTab