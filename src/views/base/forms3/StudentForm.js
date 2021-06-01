import React,{useEffect,useState} from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  CLabel,
  CRow,
  CSelect,
  CDataTable,
} from '@coreui/react';

import {Button} from '@material-ui/core';

import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import Table from './Table.js';

import TheHeader from '../../../containers/TheHeader';
import TheFooter from '../../../containers/TheFooter';

import logo from './logo.jfif';
import college from './College.jfif';

const fields = ['SUBJECTS', 'Marks'];

const StudentForm = ({match}) => {
  const usn = match.params.id;
  console.log(usn);
  const [studentData, setStudentData] = useState({
    id:"",
    usn:"",
    fname:"",
    lname:"",
    fatherName:"",
    motherName:"",
    department:"",
    branch:"",
    sem1:[{subjectName:"",marks:""},{subjectName:"",marks:""},{subjectName:"",marks:""},{subjectName:"",marks:""},{subjectName:"",marks:""}],
    sem2:[{subjectName:"",marks:""},{subjectName:"",marks:""},{subjectName:"",marks:""},{subjectName:"",marks:""},{subjectName:"",marks:""}],
    sem3:[{subjectName:"",marks:""},{subjectName:"",marks:""},{subjectName:"",marks:""},{subjectName:"",marks:""},{subjectName:"",marks:""}],
    sem4:[{subjectName:"",marks:""},{subjectName:"",marks:""},{subjectName:"",marks:""},{subjectName:"",marks:""},{subjectName:"",marks:""}],
    sem5:[{subjectName:"",marks:""},{subjectName:"",marks:""},{subjectName:"",marks:""},{subjectName:"",marks:""},{subjectName:"",marks:""}],
    sem6:[{subjectName:"",marks:""},{subjectName:"",marks:""},{subjectName:"",marks:""},{subjectName:"",marks:""},{subjectName:"",marks:""}],
    sem7:[{subjectName:"",marks:""},{subjectName:"",marks:""},{subjectName:"",marks:""},{subjectName:"",marks:""},{subjectName:"",marks:""}],
    sem8:[{subjectName:"",marks:""},{subjectName:"",marks:""},{subjectName:"",marks:""},{subjectName:"",marks:""},{subjectName:"",marks:""}],
  });
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  
// for table show
  const {sem1,sem2,sem3,sem4,sem5,sem6,sem7,sem8} = studentData;

  console.log(sem1[0].subjectName);
  console.log(sem1[0].marks);

  const [semNo,setSemNo] = useState(1);

  // const semData = [{SUBJECTS:sem1[0].subjectName,Marks:sem1[0].marks},{SUBJECTS:sem1[1].subjectName,Marks:sem1[1].marks},{SUBJECTS:sem1[2].subjectName,Marks:sem1[2].marks},{SUBJECTS:sem1[3].subjectName,Marks:sem1[3].marks},{SUBJECTS:sem1[4].subjectName,Marks:sem1[4].marks}]

const [semData, setSemData] = useState([]);

const handleChange = (event)=>{
  console.log(event.target.value);
  switch(event.target.value){
    case "1":
      console.log("1 got clicked")
        setSemData(sem1);
        break;
    case "2":
      setSemData(sem2);
        break;
    case "3":
      setSemData(sem3);
      break;
    case "4":
      setSemData(sem4);
      break;
    case "5":
      setSemData(sem5);
      break;
    case "6":
      setSemData(sem6);
      break;
    case "7":
      setSemData(sem7);
      break;
    case "8":
      setSemData(sem8);
      break;
  }
}

  const logout = () => {
    dispatch({ type: 'LOGOUT' });

    history.push('/');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);



  useEffect(()=>{

    const getStudentData = async()=>{
        const data = await fetch(`http://localhost:5000/user/result/${usn}`)
        .then((res)=>res.json())
        .then(data=>{
          setStudentData(data);
          setSemData(data.sem1);
        })

    }

    getStudentData();
  },[])

  


  
    return (
      <>
      {user?.result ?(
      <>
      
      <CRow>
      <CCol xs="12" sm="12">
          <CCard>
            <CCardHeader style={{display:"flex", justifyContent:"space-between"}}>
              <div style={{display:"flex"}}>
                <img src={logo} style={{height:"2.5rem",paddingRight:"2rem"}}></img>  
              
                <h2>Student Result</h2>
                
              </div>
             
             <Button variant="contained"  color="secondary" onClick={logout}>Logout</Button>
            </CCardHeader>
          </CCard>
          </CCol>
          <CCol xs="12" sm="12">
          <CCardBody>
          <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="email-input">First Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="4">
                    <CInput type="email" id="email-input" name="email-input" disabled placeholder={studentData.fname} />

                  </CCol>
            </CFormGroup>
            <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="email-input">Last Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="4">
                    <CInput type="email" id="email-input" name="email-input" disabled placeholder={studentData.lname} autoComplete="email"/>

                  </CCol>
            </CFormGroup>
            <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="email-input">USN</CLabel>
                  </CCol>
                  <CCol xs="12" md="4">
                    <CInput type="email" id="email-input"  name="email-input" disabled placeholder={studentData.usn} autoComplete="email"/>

                  </CCol>
            </CFormGroup>
            <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="email-input">Fathers' Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="4">
                    <CInput type="email" id="email-input" name="email-input" disabled placeholder={studentData.fatherName} autoComplete="email"/>

                  </CCol>
            </CFormGroup>
            <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="email-input">Mothers' Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="4">
                    <CInput type="email" id="email-input" name="email-input" disabled placeholder={studentData.motherName} autoComplete="email"/>
                  </CCol>
            </CFormGroup>
            <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="email-input">Department</CLabel>
                  </CCol>
                  <CCol xs="12" md="4">
                    <CInput type="email" id="email-input" name="email-input" disabled placeholder={studentData.department} autoComplete="email"/>
                   </CCol>
            </CFormGroup>
            <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="email-input">Branch</CLabel>
                  </CCol>
                  <CCol xs="12" md="4">
                    <CInput type="email" id="email-input" name="email-input" disabled placeholder={studentData.branch} autoComplete="email"/>

                  </CCol>
            </CFormGroup>
            <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="select">Semester</CLabel>
                  </CCol>
                  <CCol xs="12" md="4">
                    <CSelect custom name="select" onChange={handleChange}>
                    <option value="1" >Sem 1</option>
                      <option value="2">Sem 2</option>
                      <option value="3">Sem 3</option>
                      <option value="4">Sem 4</option>
                      <option value="5">Sem 5</option>
                      <option value="6">Sem 6</option>
                      <option value="7">Sem 7</option>
                      <option value="8">Sem 8</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>

          </CCardBody>
         
          </CCol>
      </CRow>
     
     
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
             <h3>Your Result</h3>
            </CCardHeader>
            {/* <CCardBody> */}
            {/* <CDataTable
              items={semData}
              fields={fields}
              striped
              pagination
              /> */}
              <Table semInfo={semData} />
            {/* </CCardBody> */}
          </CCard>
        </CCol>
        </CRow>
        <TheFooter />
      </>)
      :( <>
          <h1>Oops, Unauthorize Access</h1>
          <p>You must login first.</p>
      </>)
      }
        </>
    )
}
export default StudentForm
