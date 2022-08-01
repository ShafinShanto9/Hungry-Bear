import { Form, Input } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import '../resources/authentication.css'

const Login = () => {

 const onFinish = (values) => {
    console.log(values);
}

return ( 
        <section className="text-center w-100 register">
          <div className="p-3 bg-image" >
              <img className='img-fluid' src="https://i.ibb.co/hg0nQrt/istockphoto-1281794190-612x612.jpg" alt="" height="auto"  />
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
                <h2 className="fw-bold mb-5">Hungry bear Login</h2>
                        
            <Form layout='vertical' onFinish={onFinish}>
                <Form.Item  name='userid' label='User Id'>
                    <Input />
                </Form.Item>                             
                <Form.Item name='password' label='Password'>
                    <Input type='password'/>
                </Form.Item>                  
            <div className='d-flex flex-col justify-content-end align-items-center  w-100 mt-4'>
                <Link className='mx-2' to='/register'>Not yet Register? Click here to register</Link>                        
             <button
              className='px-4 py-2 mx-2'
              type='submit'
              style={{ backgroundColor: '#9E6051', color: 'white', border: 'none', textAlign: 'center', borderRadius: '5px' }}>
              Login</button>
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

export default Login