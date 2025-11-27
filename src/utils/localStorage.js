//get 
export const loadLocalApps = () => {
  try {
    const data = localStorage.getItem('installedApps')
    return data ? JSON.parse(data) : []
  } catch (err) {
    console.log(err)
    return []
  }
}

//save
export const updateLocalApps = app => {

    const installedApps = loadLocalApps()

    try{
        // const isDuplicate = installedApps.some(a=>a.id === app.id);
        // if(isDuplicate) return alert('Already Installed!');

        const updateApps =[...installedApps, app]
        localStorage.setItem('installedApps', JSON.stringify(updateApps))
    } catch(err){
        console.log(err)
    }
}



//delete
export const removeLocalApps = id =>{
    const installedApps = loadLocalApps()

    try{
        const updateApps = installedApps.filter(app => app.id !== id)
        localStorage.setItem('installedApps', JSON.stringify(updateApps))
    } catch(err){
        console.log(err)
    }
}