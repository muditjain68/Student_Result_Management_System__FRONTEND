import * as api from '../api/index.js';

const admin = ["surendradas9813@gmail.com","deepak01das12@gmail.com"];
const student = ["ayushnigam@gmail.com","saurav@gmail.com"];
const teacher = ["mudit@gmail.com"];

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: 'AUTH', data });

    console.log("signIn");
  
    
    if(admin.includes(formData.email))
          router.push('/adminForm');

    else if(teacher.includes(formData.email))
          router.push('/teacherForm')
    
    else
          router.push(`/student/${formData.email.substr(0,10)}`);

  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: 'AUTH', data });


    console.log('Sign Up');
    
    router.push(`/student/${formData.email.substr(0,10)}`);
  } catch (error) {
    console.log(error);
  }
};