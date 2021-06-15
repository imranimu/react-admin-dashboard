import React from 'react'

import { 
    productsData, 
    userProgressTableData,
    messageData,
    InventoryData 
} from '../../contexts/DashboardContext'

import {
    CContainer, 
    CRow,
    CCol, 
    CCard, 
    CCardHeader, 
    CCardBody, 
    CImg,
} from '@coreui/react'

import ProductMedia from './ProductMedia'
import UserProgress from './UserProgress'
import MessageMedia from './Message'

import AuthServices from '../../services/AuthServices'

const Dashboard = () => {

    const Token = AuthServices.getAccessToken(); 
    const User = AuthServices.getUser(); 

    return (
        <CContainer fluid>
            <CRow>
                <CCol sm="6">
                    <CCard>
                        <CCardHeader>
                            Sales/Month
                        </CCardHeader>
                        <CCardBody>
                            <CImg className="w-100" src="/images/chart.jpg" alt="Chart Image"/>

                            <p>{Token}</p>

                            <p>{User.role}</p>
                            <p>{User.name}</p>
                            <p>{User.avatar}</p>

                        </CCardBody> 
                    </CCard>
                </CCol>

                <CCol sm="6">
                    <CCard>
                        <CCardHeader>
                            Revenue/Month
                        </CCardHeader>
                        <CCardBody>
                            <CImg className="w-100" src="/images/chart.jpg" alt="Chart Image"/>
                        </CCardBody> 
                    </CCard>
                </CCol>
                <CCol sm="6">
                    <CCard>
                        <CCardHeader>
                            No. of New Vendors
                        </CCardHeader>
                        <CCardBody>
                            <CImg className="w-100" src="/images/chart.jpg" alt="Chart Image"/>
                        </CCardBody> 
                    </CCard>
                </CCol>
                <CCol sm="6">
                    <CCard>
                        <CCardHeader>
                            Vendors Lost
                        </CCardHeader>
                        <CCardBody>
                            <CImg className="w-100" src="/images/chart.jpg" alt="Chart Image"/>
                        </CCardBody> 
                    </CCard>
                </CCol>

                <CCol sm="6">
                    <CCard>
                        <CCardHeader>
                            Product confirmation request
                        </CCardHeader>
                        <CCardBody>
                            {productsData.map(
                                ({ id, image, title, description, price }) => (
                                    <ProductMedia
                                        key={id}
                                        image={image}
                                        title={title}
                                        description={description}
                                        right={price}
                                    />
                                ),
                            )}                             
                        </CCardBody>                        
                    </CCard>
                </CCol>

                <CCol sm="6">
                    <CCard>
                        <CCardHeader>
                            Top Vendors (by sales)
                        </CCardHeader>

                        <CCardBody>
                            <UserProgress
                                headers={[
                                    <i className="fa fa-image"></i>,
                                    'name',
                                    'date', 
                                    '%',
                                ]}
                                usersData={userProgressTableData}
                            />                           
                        </CCardBody>                        
                    </CCard>
                </CCol>

                <CCol sm="6">
                    <CCard>
                        <CCardHeader>
                            New Message
                        </CCardHeader>

                        <CCardBody>
                            {messageData.map(Message => (
                                <MessageMedia key={Message.id} {...Message} />
                            ))}                   
                        </CCardBody>                        
                    </CCard>
                </CCol>

                <CCol sm="6">
                    <CCard>
                        <CCardHeader>
                            Inventory Report
                        </CCardHeader>
                        <CCardBody>
                            {InventoryData.map(
                                ({ id, image, title, right }) => (
                                    <ProductMedia
                                        key={id}
                                        image={image}
                                        title={title}
                                        right={right}
                                    />
                                ),
                            )}                             
                        </CCardBody>                        
                    </CCard>
                </CCol>
            </CRow>
        </CContainer>
    )
}

export default Dashboard