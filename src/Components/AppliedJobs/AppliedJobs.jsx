import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplications } from "../utility/localStorage";


const AppliedJobs = () => {
    const jobs=useLoaderData();
    useEffect(() => {
        const storedJobIds=
        getStoredJobApplications();
        if(jobs.length>0){
            // const appliedJobs=
            // jobs.filter(job=>storedJobIds.includes(job.id));
            // console.log(appliedJobs);
            const jobsApplied=[];
            for(const id of storedJobIds){
                const job=jobs.find(job=>job.id==id);
                if(job){
                    jobsApplied.push(job);
                }
            }
            console.log(jobsApplied);
        }
      
    }, [])
    return (
        <div>
            <h2>Jobs I applied</h2>
            
        </div>
    );
};

export default AppliedJobs;