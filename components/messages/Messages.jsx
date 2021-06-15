import React from 'react'

import { 
    CCol, 
    CCard, 
    CCardHeader, 
    CCardBody,  
} from '@coreui/react'

import { messageData } from '../../contexts/DashboardContext'

import MessageMedia from '../dashboard/Message'

const Messages = () => {
    return (
        
        <CCol sm="6">
            <CCard>
                <CCardHeader>
                    All Message
                </CCardHeader>

                <CCardBody>
                    {messageData.map(Message => (
                        <MessageMedia key={Message.id} {...Message} />
                    ))}                   
                </CCardBody>                        
            </CCard>
        </CCol>

    )
}

export default Messages