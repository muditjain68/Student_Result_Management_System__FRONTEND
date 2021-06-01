import React from 'react'
import TheHeader from '../../../containers/TheHeader';
import TheFooter from '../../../containers/TheFooter';
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CLabel,
  CSelect,
  CRow,
  CSwitch,
  CDataTable,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
const fields = ['SUBJECTS', 'INTERNAL MARKS', 'UNIVERSITY EXAMINATION MARKS','TOTAL', 'CREDITS',]




const AdminForm = () => {
  return (
    <>  
    <TheHeader />
      <CRow style={{paddingTop:"100px"}}>
         <CCol xs="12" sm="12">
          <CCard>
            <CCardHeader>
             Jain University
          </CCardHeader>
            <CCardBody>
              <CFormGroup>
                <CLabel htmlFor="company">Semester</CLabel>
                <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Sem 1</option>
                      <option value="2">Sem 2</option>
                      <option value="3">Sem 3</option>
                      <option value="3">Sem 4</option>
                      <option value="3">Sem 5</option>
                      <option value="3">Sem 6</option>
                    </CSelect>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="company">Class</CLabel>
                <CSelect custom name="select" id="select">
                <option value="0">Please select</option>
                      <option value="1">CTIS</option>
                      <option value="2">IoT</option>
                      <option value="3">MACT</option>
                      <option value="3">SE</option>
                      <option value="3">AI</option>
                    </CSelect>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="company">Subject</CLabel>
                <CSelect custom name="select" id="select">
                <option value="0">Please select</option>
                      <option value="1">Cloud Technology</option>
                      <option value="2">Cyber Forensic</option>
                      <option value="3">Storage Management and Data Center</option>
                      <option value="2">Software Engineering</option>
                      <option value="2">Data Visualization</option>
                      <option value="2">Web Security</option>
                    </CSelect>
              </CFormGroup>
              <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="email-input">Class ID</CLabel>
                  </CCol>
                  <CCol xs="12" md="4">
                    <CInput type="email" id="email-input" name="email-input" disabled placeholder='18BT6EH8' autoComplete="email"/>

                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol tag="label" sm="2" className="col-form-label">
                    Status
                  </CCol>
                  <CCol sm="9">
                      <CSwitch
                      className="mr-1"
                      color="success"
                      defaultChecked
                      shape="pill"
                    />
                  </CCol>
                </CFormGroup>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Enter Student Marks
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">

                <CFormGroup row>
                <CCol xs="12" md="2">
                    <CLabel htmlFor="text-input">First Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="4">
                    <CInput id="text-input" name="text-input" placeholder="First Name" />
                  </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                  <CCol xs="12" md="2">
                    <CLabel htmlFor="text-input">Last Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="4">
                    <CInput id="text-input" name="text-input" placeholder="Last Name" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol xs="12" md="2">
                    <CLabel htmlFor="text-input">USN</CLabel>
                  </CCol>
                  <CCol xs="12" md="4">
                    <CInput id="text-input" name="text-input" placeholder="USN" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="select">Subject</CLabel>
                  </CCol>
                  <CCol xs="12" md="4">
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Cloud Technology</option>
                      <option value="2">Cyber Forensic</option>
                      <option value="3">Storage Management and Data Center</option>
                      <option value="2">Software Engineering</option>
                      <option value="2">Data Visualization</option>
                      <option value="2">Web Security</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>

              </CForm>
               </CCardBody>
               <CCol xs="12" lg="12">
          <CCard>
            <CCardBody>
            <CDataTable
              fields={fields}
              striped
              itemsPerPage={10}
              pagination
              />
            </CCardBody>
          </CCard>
        </CCol>
            <CCardFooter>
              <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Assign</CButton>
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>

        </CCol>
      </CRow>
    <TheFooter />
     </>
  )
}

export default AdminForm
