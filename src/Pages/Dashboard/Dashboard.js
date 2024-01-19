import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
    return (
      <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h2 className='text-2xl font-bold text-center text-purple-500'>Welcome to Your Dashboard</h2>
        <Outlet></Outlet>
        <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label>
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-34 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li><Link to = "/dashboard">My Appointments</Link></li>
          <li><Link to = "/dashboard/review">My Reviews</Link></li>
          <li><Link to = "/dashboard/history">My History</Link></li>
          { admin && <>
            <li><Link to = "/dashboard/users">All Users</Link></li>
            <li><Link to = "/dashboard/addDoctor">Add a Doctor</Link></li>
            <li><Link to = "/dashboard/manageDoctor">Manage Doctor</Link></li>
          </>}
        </ul>
      </div>
    </div>
    );
};

export default Dashboard;