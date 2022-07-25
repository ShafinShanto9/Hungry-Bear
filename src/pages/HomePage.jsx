import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { Col, Row } from 'antd'
import ItemsCard from '../components/ItemsCard'
import { useDispatch } from 'react-redux'

const HomePage = () => {
  const dispatch = useDispatch()
  const [itemsData, setItemsData] = useState([])

  const getAllItems = async () => {

    dispatch({type: 'showLoading'})
    await axios.get('/api/items/get-all-items').then((res) => {

      dispatch({type: 'hideLoading'})
      setItemsData(res.data);

    }).catch((error) => {
      
      dispatch({type: 'hideLoading'})
      console.log(error);
    })
  }
  useEffect(() => {
    getAllItems()
  }, [])
  
  return (
      <DefaultLayout>
          <Row justify="space-between" align="middle" gutter={20}>
        {
          itemsData.map((item) => (
            <Col xs={24} lg={6} md={12} sm={6}>
              <ItemsCard item={ item} />
            </Col>
          ))
              }
          </Row>
    </DefaultLayout>
  )
}

export default HomePage