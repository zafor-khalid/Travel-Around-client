import React, { useEffect ,useState} from 'react';
import ManageCard from './ManageCard'
const Manageservices = () => {
    const [packages, setPackages] = useState([]);
    useEffect(()=>{
     fetch('https://radiant-ridge-25179.herokuapp.com/allPackages')
     .then(res=> res.json())
     .then(data=>{
         console.log(data);
         setPackages(data);
     })

    },[])
    return (
        <div style={{backgroundColor:'whitesmoke', paddingTop:'5vw', paddingBottom:'5vw'}}>
            <h1 className="text-center" style={{color:'#020f24', fontWeight:'bold'}}>Manage ALL Packages</h1>
            <div className='d-flex justify-content-center flex-wrap my-5'>
                
                {
                    packages.map(pkg=> <ManageCard pkg={pkg}></ManageCard>)
                }
                
            </div>
        </div>
    );
};

export default Manageservices;