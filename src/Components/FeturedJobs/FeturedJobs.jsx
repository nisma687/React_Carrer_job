import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeturedJobs = () => {
    const [jobs,setJobs]=useState([]);
    //not best way to load datas
    const [datalength,setDataLength]=useState(4);
    useEffect(()=>{

        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))



    },[]);
    return (
        <div>

            <div className="text-center">
            <h2 className=" text-5xl">
                Fetured Jobs</h2>
            <p>Something very odd about this</p>
            <p>Number of jobs:{jobs.length}</p>

            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0,datalength).map(job=><Job 
                        job={job}
                        key={job.id}></Job>)
                }
            </div>
            <div className={datalength === jobs.length && 'hidden'}>
                <button 
                className="text-center btn btn-primary"
                onClick={()=>setDataLength(jobs.length)}>Load More</button>
            </div>
            
        </div>
    );
};

export default FeturedJobs;