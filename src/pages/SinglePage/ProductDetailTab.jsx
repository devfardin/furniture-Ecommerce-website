import { Tab } from '@headlessui/react'
import Description from './Description'
const ProductDetailTab = () => {
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
                    <Description text='Rich, warm and inviting are a few words that describe this square shaker-style dining table. With slightly tapered legs, the classic design combines a look that will go well with many decors and is an ideal size for a kitchen eating area or small dining room
                    Overall table size is a squared 29.5" x 29"H. Floor clearance of 26.3".
                    Complete your table with ladder back chairs for full dining experience.
                    Made with solid wood in light oak finish. Assembly required. Perfect in the kitchen that allows you to create a breakfast area'/>
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