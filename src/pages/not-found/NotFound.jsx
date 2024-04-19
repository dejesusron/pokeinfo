import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='grid place-items-center h-screen w-screen'>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Error 404: Page Not Found</h2>
          <p>The page you requested could not be found.</p>
          <div className="card-actions justify-end">
            <Link to='/' className="btn btn-neutral">Go back</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;