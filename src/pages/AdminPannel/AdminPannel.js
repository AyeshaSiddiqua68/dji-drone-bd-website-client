import React, { useState } from 'react';
import { useHistory } from 'react-router';
import AddDrone from '../../components/Admin/AddDrone';
import Orders from '../../components/Admin/Orders';
import Overview from '../../components/Admin/Overview';
import MakeAdmin from '../../components/MakeAdmin';
import useAuth from '../../hooks/useAuth';

const AdminPannel = () => {
    const[active, setActive]=useState("Overview");
    const history = useHistory();
    const { AllContexts } = useAuth();
    const { user } = AllContexts;
    const { uid } = user;

    return (
        <div>
            {
                uid !== "aWHOgptsAGSCDQlcfuwyI6NZKMj2" ? (history.push("/home")) : (
                    <div >
                        <div className="container-fluid">
                         <div className="row my-4">
                         <div className="col-3">
                           <ul className="list-unstyled">
                               <li className="w-100 mb-2"><input onClick={()=>setActive("Overview")} className={active==="Overview"? " bg-primary text-white w-100 d-block": "bg-white w-100 d-block"} type="button" value="Overview"></input></li>

                               <li className="w-100 mb-2"><input onClick={()=>setActive("Orders")} className={active==="Orders"? " bg-primary text-white w-100 d-block": "bg-white w-100 d-block"} type="button" value="Orders"></input></li>

                               <li className="w-100 mb-2"><input onClick={()=>setActive("Add New Product")} className={active==="Add New Product"? " bg-primary text-white w-100 d-block": "bg-white w-100 d-block"} type="button" value="Add New Product"></input></li>

                               <li className="w-100 mb-2"><input onClick={()=>setActive("Make An Admin")} className={active==="Make An Admin"? " bg-primary text-white w-100 d-block": "bg-white w-100 d-block"} type="button" value="Make An Admin"></input></li>
                           </ul>
                         </div>


                         <div className="col-9">
                            {
                                (active ==="Overview" && <Overview/>) ||
                                (active ==="Orders" && <Orders/>) ||
                                (active ==="Add New Product" && <AddDrone/>)
                                ||
                                (active ==="Make An Admin" && <MakeAdmin/>)
                            }
                         </div>


                         </div>

                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default AdminPannel;