
const getStoredJobApplications=()=>
{
    const storedJobApplications=
    localStorage.getItem
    ('jobApplications');
    if(storedJobApplications)
    {
        return JSON.parse(storedJobApplications);
    }
    else
    {
        return [];
    }

}

const saveJobApplication=id=>
{
    const storedJobApplications=
    getStoredJobApplications();
    const exist=
    storedJobApplications.find(jobId=>jobId===id);
    if(!exist)
    {
        storedJobApplications.push(id);
        localStorage.setItem
        ('jobApplications',
        JSON.stringify
        (storedJobApplications));
    }
    
}

export{getStoredJobApplications,saveJobApplication}