import { Button, Modal, Table } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import {DeleteOutlined, PlusCircleOutlined,MinusCircleOutlined} from '@ant-design/icons'
import { useState } from 'react'
import '../resources/cartPage.css'

const CartPage = () => {

    const { cartItems } = useSelector(state => state.rootReducer)
    const dispatch = useDispatch()
    const [subTotal, setSubTotal] = useState(0)
    const [billChargeModal, setBillChargeModal] = useState(false)

    const increaseQuantity = (record) => {
        
        dispatch({
            type: 'updateCart',
            payload: { ...record, quantity: record.quantity + 1 }
        })
    }

    const decreaseQuantity = (record) => {
        if (record.quantity !== 1) {
            dispatch({
            type: 'updateCart',
            payload: { ...record, quantity: record.quantity - 1 }
        })
        }
    }

    const deleteFromCart = (record) => {
        dispatch({type: 'deleteFromCart', payload: record})
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name'
        },
        {
            title: 'Image',
            dataIndex: 'Image',
            render: (Image, record)=> <img src={Image} width={60} height={60} />
        },
        {
            title: 'Price',
            dataIndex: 'price'
        },
        {
            title: 'Quantity',
            dataIndex: '_id',
            render: (id, record) => (
                <div>
                    <PlusCircleOutlined className='mx-3' onClick={()=>increaseQuantity(record)}/>
                    <b>{record?.quantity}</b>
                    <MinusCircleOutlined className='mx-3' onClick={()=>decreaseQuantity(record)}/>
                </div>
            )
        },
        {
            title: 'Action',
            dataIndex: '_id',
            render: (id, record)=> <DeleteOutlined onClick={()=>deleteFromCart(record)} />
        }
    ]

    useEffect(() => {
        let tempTotal = 0

        cartItems.forEach(item => {
            tempTotal = tempTotal + (item.price * item.quantity)
        });
        setSubTotal(tempTotal)
        
    },[cartItems])


  return (
      <DefaultLayout>
          <div>CartPage</div>
          <Table columns={columns} dataSource={cartItems} />
          <hr />
          <div className='d-flex justify-content-end flex-column align-items-end'>
              <div className='sub-total'>
                  <h3>SUB TOTAL : $ { subTotal} </h3>
              </div>
              <Button onClick={()=>{setBillChargeModal(true)}}>Charge Bill</Button>
          </div>
          <Modal title='Charge Bill' visible={billChargeModal}></Modal>
    </DefaultLayout>
  )
}

export default CartPage