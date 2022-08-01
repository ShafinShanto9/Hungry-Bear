import { Form, Input } from 'antd'
import React from 'react'
import '../resources/authentication.css'

const Register = () => {

 const onFinish = (values) => {
    console.log(values);
}

return ( 
        <section className="text-center w-100 register">
          <div className="p-3 bg-image" >
              <img className='img-fluid' src="https://i.ibb.co/vLFdWVn/istockphoto-1210303721-612x612.jpg" alt="" height="auto"  />
        </div>
        <div className='d-flex align-items-center justify-content-center'>
        <div className="card mx-4 mx-md-5 shadow-5-strong w-75 " style={{
                marginTop: '-100px',
                background: 'hsla(0, 0%, 100%, 0.8)',
                backdropFilter: 'blur(30px)'
                }}>
            <div className="card-body py-5 px-md-5">

            <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
                <h2 className="fw-bold mb-5">Welcome To Hungry Bear</h2>
                        
            <Form layout='vertical' onFinish={onFinish}>
                <Form.Item name='name' label='Product Name'>
                    <Input   />
                </Form.Item>
                <Form.Item name='price' label='Product Price'>
                    <Input />
                </Form.Item>                  
        <div className='d-flex justify-content-center w-100  mt-4'>
             <button
              className='px-4 py-2'
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