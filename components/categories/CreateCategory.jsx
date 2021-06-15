import React, { Component } from 'react';

import {   
    CInput,
    CButton,
    CForm, 
    CFormGroup,
    CCard,
    CCardBody, 
    CCardHeader,
    CLabel,
    CFormText
} from '@coreui/react'

export default class CreateCategory extends Component {    

    constructor() {
        super();    
        this.state = {   
            CategoryImage: null,
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            CategoryImage: URL.createObjectURL(event.target.files[0])
        })
    } 

    render() {
        return (
            <CCard>   

                <CCardHeader>Create Category</CCardHeader>

                <CCardBody>

                    <CForm>

                        <CFormGroup>   
                            <CLabel>Name</CLabel>                           
                            <CInput 
                                name="Name" 
                                placeholder="Name" 
                            />                            
                        </CFormGroup>

                        <CFormGroup>                               
                            <CLabel>Description</CLabel>              
                                        
                            <textarea name="Description" placeholder="Description" className="form-control" />        

                        </CFormGroup>

                        <CFormGroup>                               
                            <CLabel>Parent Category</CLabel>              
                                        
                            <select name="ParentCategory" className="form-control">        
                                <option value="">Select a parent category</option>
                                <option value="6529a118-fd3e-4750-9391-1da658e34951">EEDsd</option>
                                <option value="fb0bb47b-b630-414f-aee7-3b732cd6e883">Kids &amp; Toy</option>
                                <option value="a84bb1cc-32dd-4557-891c-e0c293d171a4">Perspiciatis</option>
                                <option value="a171e664-662c-47c9-b3f2-a0bf95fcfe2b">Vero</option>
                                <option value="91a15fef-5f4b-4345-a35a-670c01f386a5">Nihil</option>
                                <option value="557a4232-b35d-48bb-866e-0053ffd1a386">Kids &amp; toy</option>
                                <option value="142ed01b-6508-4c06-bddd-a19b67cc6bef">Alias</option>
                            </select>                                                
                        </CFormGroup>

                        <div className="multi-preview CategoryImage">
                            {this.state.CategoryImage ? (
                                <img src={this.state.CategoryImage} alt="Category thum"/>
                            ) : ( '' )}                                    
                        </div>

                        <CFormGroup className="mb-4 position-relative">
                            <CLabel>Category Image</CLabel>
                            <span className="btn btn-secondary UploadCustom btn-sm"><i className="fa fa-upload"></i> Upload Image</span>
                            <CInput type="file" name="CategoryImage" onChange={this.handleChange} />
                            <CFormText color="muted">Set category image.</CFormText> 
                        </CFormGroup>

                        <CFormGroup className="mt-4">      

                            <CButton color={'info'} size="lg">Create</CButton>

                        </CFormGroup> 
                    </CForm>
                </CCardBody>
            </CCard>
        );
    }
}
