import React, { useState } from 'react';
import { useHistory } from 'react-router';
import AddDrone from '../../components/Admin/AddDrone';
import DronesComponent from '../../components/Admin/DronesComponent';
import Orders from '../../components/Admin/Orders';
import Overview from '../../components/Admin/Overview';
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

                               <li className="w-100 mb-2"><input onClick={()=>setActive("Add New Drone")} className={active==="Add New Drone"? " bg-primary text-white w-100 d-block": "bg-white w-100 d-block"} type="button" value="Add New Drone"></input></li>

                               <li className="w-100 mb-2"><input onClick={()=>setActive("Drones")} className={active==="Drones"? " bg-primary text-white w-100 d-block": "bg-white w-100 d-block"} type="button" value="Drones"></input></li>
                           </ul>
                         </div>


                         <div className="col-9">
                            {
                                (active ==="Overview" && <Overview/>) ||
                                (active ==="Orders" && <Orders/>) ||
                                (active ==="Add New Drone" && <AddDrone/>)
                                ||
                                (active ==="Drones" && <DronesComponent/>)
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