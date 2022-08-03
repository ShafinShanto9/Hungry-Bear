import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import {DeleteOutlined,EditOutlined,EyeOutlined} from '@ant-design/icons'
import { Button, Form, Input, message, Modal, Select, Table } from 'antd'
import '../resources/item.css'

const Bills = () => {

  const dispatch = useDispatch()
  const [billData, setBillData] = useState([])
  const [addEditModalVisibility, setAddEditModalVisibility] = useState(false)
  const [editingItem, setEditingItem] = useState(null)

  const getAllBillsData = async () => {
    dispatch({type: 'showLoading'})
    await axios.get('/api/bills/get-all-bills').then((res) => {

      dispatch({type: 'hideLoading'})
      setBillData(res.data);

    }).catch((error) => {
      
      dispatch({type: 'hideLoading'})
      console.log(error);
    })
  }


  useEffect(() => {
    getAllBillsData()
  }, [])

  const columns = [
        {
            title: 'ID',
            dataIndex: '_id'
        },
        {
            title: 'Customer',
            dataIndex: 'customerName',
        },
        {
          title: 'Sub Amount',
          dataIndex:'subTotal'
        },
        
        {
            title: 'TAX',
            dataIndex: 'Tax'
        },
          {
            title: 'Total Amount',
            dataIndex: 'TotalAmount'
        },
        {
            title: 'Action',
            dataIndex: '_id',
            render: (id, record) => (
            <div className='d-flex'>
              <EyeOutlined className='mx-2' onClick={()=>{}}/>  
            </div>
            )
        }
    ]


  return (
    <DefaultLayout>
      <div className="d-flex justify-content-between">
        <h3>Bill Details</h3>
        <button
          className='px-4'
          onClick={()=>setAddEditModalVisibility(true)}
          style={{ backgroundColor: '#9E6051', color: 'white', border: 'none', textAlign: 'center', borderRadius: '5px' }}>Add Item</button>
      </div>
      <Table columns={columns} dataSource={billData} />

      {
        addEditModalVisibility && (
          <Modal
            onCancel={() => {
            setEditingItem(null)
            setAddEditModalVisibility(false)
            }}
            visible={addEditModalVisibility}
            title={`${editingItem !== null ? 'Edit Items' : 'Add New Items'}`}
            footer={false}>
                      
            </Modal>
        )
      }
    </DefaultLayout>
  )
}

export default Bills