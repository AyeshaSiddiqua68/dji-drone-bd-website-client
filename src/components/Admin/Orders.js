import React, { useEffect, useState } from 'react';

const Orders = () => {
    const[orders, setOrders]=useState([]);
    const[reloadData, setReloadData]=useState(true);
    useEffect(()=>{
        fetch("http://localhost:5000/orders")
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[reloadData]);

    //cancel order by admin
    function cancelOrder(id){
        const orderCancelConfirmation=window.confirm("Are you sure to delete?");
        if(orderCancelConfirmation){
            fetch(`http://localhost:5000/delete/${id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount===1){
                   const remainingOrders=orders.filter(order=>order._id!==id)
                   setOrders(remainingOrders);
                }
                else{
                    alert("Something went wrong!")
                }
            });
        }
        
    }

    //confirm order by admin
    function confirmOrder(id){
        const orderPlaceConfirmation=window.confirm("Are you sure to purchase?");
        if(orderPlaceConfirmation){
            fetch(`http://localhost:5000/confirmation/${id}`,{
             method:"PUT"
            })
            .then(res=>res.json())
            .then(data=>{
               if(data.modifiedCount===1){
                setReloadData(!reloadData);
               }
               else{
                  alert("Already confirmed this ordrder!") 
               }
            });
        }
    }

    return (
        <div>
            <h1 className="text-center bold">Orders</h1>
            <table className="table table-striped table-hover w-100">
            <thead>
    <tr>
      <th scope="col">Product Image</th>
      <th scope="col">Product Title</th>
      <th scope="col">Product Price</th>
      <th scope="col">Buyer's Name</th>
      {/* <th scope="col">Buyer's Photo</th> */}
      <th scope="col">Buyer's Unique Email Address</th>
      <th scope="col">Order Status</th>
      <th scope="col">Cancel Order</th>
      <th scope="col">Confirm Order</th>
    </tr>
  </thead>
  <tbody>
    {
        orders.map(order=>{
           const{ _id,title, img, price, name, email, status, photo}=order;
           return(
            
                <tr key={_id}>
          <td ><img width="60px" src={img} alt=""/></td>
          <td><h6>{title.slice(0,10)}</h6></td>
          <td>${price}</td>
          <td>{name}</td>
          {/* <td><img style={{ width: '42px', borderRadius: "50%" }} src={photo} alt=""/></td> */}
          <td>{email}</td>
          <td>{status}</td>
          <td><button onClick={()=>cancelOrder(_id)} className="btn btn-danger">Cancel</button></td>
          <td><button onClick={()=>confirmOrder(_id)} className="btn btn-success">Confirm</button></td>
        </tr>
            )
           
        })
    }
    </tbody>
</table>
        </div>
    );
};

export default Orders;