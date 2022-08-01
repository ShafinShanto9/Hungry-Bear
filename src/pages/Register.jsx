import { Form, Input, message } from 'antd'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../resources/authentication.css'
import axios from 'axios'
import {useDispatch} from 'react-redux'

const Register = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
const onFinish = (values) => {
     dispatch({type:'showLoading'})
     axios.post('/api/user/register', values)
         .then(() => {
        dispatch({type:'hideLoading'})
        message.success('Registration Successfull')     
         }).catch(() => {
        dispatch({type:'hideLoading'})
         message.error("somethings went wrong")
     })
    }
    
     useEffect(() => {
        if (localStorage.getItem('pos-user')) {
            navigate('/home')
        }
    }, [])

return ( 
        <section className="text-center w-100 register">
          <div className="p-3 bg-image" >
              <img className='img-fluid' src="https://i.ibb.co/vLFdWVn/istockphoto-1210303721-612x612.jpg" alt="" height="auto"  />
        </div>
        <div className='d-flex align-items-center justify-content-center'>
        <div className="card mx-4 mx-md-5 w-75 card-content  " style={{
                marginTop: '-120px',
                background: 'hsla(0, 0%, 100%, 0.8)',
                backdropFilter: 'blur(30px)'
                }}>
        <div className="card-body p-md-1 p-sm-4 py-md-2">

            <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
                <h2 className="fw-bold mb-5">Hungry bear register</h2>
                        
            <Form layout='vertical' onFinish={onFinish}>
                <Form.Item  name='name' label='Name'>
                    <Input />
                </Form.Item>
                <Form.Item  name='userId' label='User Id'>
                    <Input />
                </Form.Item>                             
                <Form.Item name='password' label='Password'>
                    <Input type='password'/>
                </Form.Item>                  
            <div className='d-flex flex-col justify-content-end align-items-center  w-100 mt-4'>
                <Link className='mx-2' to='/login'>Already Register? Click here to login</Link>                        
             <button
              className='px-4 py-2 mx-2'
              type='submit'
              style={{ backgroundColor: '#9E6051', color: 'white', border: 'none', textAlign: 'center', borderRadius: '5px' }}>
              Register</button>
          </div>
             </Form>
             
            </div>
            </div>
            </div>
        </div>
        </div>
        </section>

  )
}

export default Register