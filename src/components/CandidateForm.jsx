import React from 'react'
import '../components/form.css'
import { useFormik } from 'formik'
import InputFunction from './InputFunction'
const CandidateForm = () => {
  const formik = useFormik({
    initialValues: {
        fname:"",
        lname:"",
        email:"",
        dob:"",
        
    },
    // validationSchema: serverScema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values)
    }
  })
  return (
<InputFunction
formik={formik}
/>
  )
}

export default CandidateForm