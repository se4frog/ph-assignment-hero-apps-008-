import { useEffect, useState } from "react";
import axios from "axios";


const useAppsFunc = () => {
    const [apps, setApps] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
     
        axios('/heroAppsData.json').then(data=>setApps(data.data))
        .catch(err=>setError(err))
        .finally(()=>setLoading(false))
    }, [])
    
    return { apps, loading, error}
}

export default useAppsFunc;