import { Outlet, NavLink, Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content min-h-screen">
        {/* Page content here */}
        
        <div className="fixed top-0 left-0 z-40 navbar bg-base-100 lg:hidden shadow-lg">
          <div className="flex-1">
            <Link to='/' className="btn btn-ghost text-3xl font-bold">PokeInfo</Link>
          </div>
          <div className="flex-none">
            <label htmlFor="my-drawer" className="btn drawer-button"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label>
          </div>
        </div>
        <Outlet />
      </div> 
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        {/* Sidebar content here */}
        <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex flex-col gap-y-6">
            <h1>
                <Link to='/' className='text-3xl font-bold'>PokeInfo</Link>
            </h1>
            <ul>
                <li>
                    <NavLink to='/dashboard/pokemon' className='p-4'>Pokemon</NavLink>
                </li>
                <li>
                    <NavLink to='/dashboard/evolution' className='p-4'>Evolution</NavLink>
                </li>
                <li>
                    <NavLink to='/dashboard/moves' className='p-4'>Moves</NavLink>
                </li>
            </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;