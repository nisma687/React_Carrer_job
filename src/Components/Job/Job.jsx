
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineDollar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
 
 
const Job = ({job}) => {
    const {job_title,
        id,
        logo,
        company_name, 
        job_description,
        job_type,
        location,
        salary,remote_or_onsite,
    }=job;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
        <figure><img src={logo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE]
            mr-4
            ">{remote_or_onsite}</button>
            <button
            className="px-5 py-2 font-extrabold border rounded border-[#7E90FE]"
            >{job_type}</button>
          </div>
          <div className='flex '>
            <CiLocationOn className='text-2xl'>
            </CiLocationOn>
            <span className='ml-2'>{location}</span>
            <AiOutlineDollar
            className='text-2xl ml-4' >
                </AiOutlineDollar>
              <span>
              {salary}
              </span>
               
          </div>
          <div className="card-actions ">
           <Link to={`/job/${id}`}> <button className="btn btn-primary">View Details</button></Link>
           
          </div>
        </div>
      </div>
    );
};

export default Job;