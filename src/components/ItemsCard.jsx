import React from 'react'
import {ShoppingCartOutlined} from '@ant-design/icons'
const ItemsCard = ({item}) => {
  return (
    <div className="card" style={{ width: '18rem', border: "none", marginTop: "20px", padding: "10px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
      <div className='p-3 d-flex justify-content-center align-items-center w-100'>
           <img className="card-img-top img-responsive img-fluid w-75 " src={item?.Image} alt="Card image cap" style={{ height:'130px'}}  />
      </div>
    <div className="card-body d-flex justify-content-between align-items-center">
    <div>
        <h5 >{ item?.name.slice(0,10)}..</h5>
        <h5 className="card-text">Price ${ item?.price}</h5>
    </div>
      <div>
          <button className="btn btn-primary" style={{ backgroundColor: '#9E6051', border: 'none',}}>
           Add To Listing</button>
    </div>         
  </div>
</div>
  )
}

export default ItemsCard