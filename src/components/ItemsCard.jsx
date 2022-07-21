import React from 'react'

const ItemsCard = ({item}) => {
  return (
    <div className="card" style={{ width: '18rem', border:"none", margin:"10px",padding:"10px", boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
    <img className="card-img-top" src={item?.Image} alt="Card image cap" height={180} fluid />
    <div className="card-body d-flex justify-content-between align-items-center">
    <div>
        <h5 >{ item?.name.slice(0,10)}..</h5>
        <h5 className="card-text">Price ${ item?.price}</h5>
    </div>
      <div>
        <button className="btn btn-primary">Add To Cart</button>
    </div>         
  </div>
</div>
  )
}

export default ItemsCard