import React from 'react'
import Container from '../../../components/shared/Container'
import SectionTitle from '../../../components/SectionTitle'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const OurStore = () => {
  return (
    <div className='mt-16'>
        <Container>
            <SectionTitle title='Our Store' 
            des='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae vivamus morbi et ornare est Orci et sed commodo.'/>
            <div>
            <Tabs onSelect={(index) => setTabIndex(index)}>
                    <TabList className="text-center">
                        <Tab className="text-xl text-heading hover:text-primary transition-all duration-200 border-b font-medium inline-block ml-6 text-center cursor-pointer text-black1">All</Tab>
                        <Tab className="text-xl text-heading hover:text-primary transition-all duration-200 border-b font-medium inline-block ml-6 text-center cursor-pointer text-black1">Wooden furnitue</Tab>
                        <Tab className="text-xl text-heading hover:text-primary transition-all duration-200 border-b font-medium inline-block ml-6 text-center cursor-pointer text-black1">Bamboo Furniture</Tab>
                        <Tab className="text-xl text-heading hover:text-primary transition-all duration-200 border-b font-medium inline-block ml-6 text-center cursor-pointer text-black1">Wikker or ratten furniture</Tab>
                        <Tab className="text-xl text-heading hover:text-primary transition-all duration-200 border-b font-medium inline-block ml-6 text-center cursor-pointer text-black1">Metal Furnitutre</Tab>
                        <Tab className="text-xl text-heading hover:text-primary transition-all duration-200 border-b font-medium inline-block ml-6 text-center cursor-pointer text-black1">Plastic Furniture</Tab>
                    </TabList>
                    <TabPanel>
                       
                    </TabPanel>
                    <TabPanel>
                        
                    </TabPanel>
                    <TabPanel>
                       
                    </TabPanel>
                    <TabPanel>
                        
                    </TabPanel>
                    <TabPanel>
                       
                    </TabPanel>
                </Tabs>                
            </div>
        </Container>
    </div>
  )
}

export default OurStore