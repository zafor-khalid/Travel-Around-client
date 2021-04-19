import React, { useEffect ,useState} from 'react';
import ManageCard from './ManageCard'
const Manageservices = () => {
    const [packages, setPackages] = useState([]);
    useEffect(()=>{
     fetch('http://localhost:5000/allPackages')
     .then(res=> res.json())
     .then(data=>{
         console.log(data);
         setPackages(data);
     })

    },[])
    return (
        <>
            <h1 className="text-center mt-5">Manage ALL Packages</h1>
            <div className='d-flex justify-content-center flex-wrap my-5'>
                
                {
                    packages.map(pkg=> <ManageCard pkg={pkg}></ManageCard>)
                }
                
            </div>
        </>
    );
};

export default Manageservices;