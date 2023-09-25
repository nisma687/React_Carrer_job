import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../utility/localStorage";


const JobDetails = () => {

    const jobs=useLoaderData();
    const {id}=useParams();
    const job=jobs.find(job=>job.id == id);
    // console.log(job);
    const handleclick=()=>{
        saveJobApplication(id);
         toast("Wow so easy !");
    }
    
  

    return (
        <div>
            <h2>Job details</h2>
        <div className="grid md:grid-cols-4">
        <div className="border col-span-3">
            <h2>Details here</h2>
            {job}

        </div>
            <div className="border">
                <h2>Side things</h2>
                <button
                onClick={handleclick}
                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  w-full rounded">Apply</button>
                    <ToastContainer />

            </div>

        </div>
        
            

            
        </div>
    );
};

export default JobDetails;