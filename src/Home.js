import React from 'react';
import axios from 'axios';

function Home() {
  const [backenddata , setbackenddata] = useState([{}])
useEffect(()=>{
getUser();
  fetch("/api").then(
    response => response.json()
  ).then(
    data =>
    {
      setbackenddata(data)
    }
  )
},[])

const getUser = async()=>
{
const response = await axios.get("http://localhost:5000/users");
if(response.status === 200)
{
  backenddata(response.data)
}
};

console.log("Data", data);
  return (
    <div className="App">
   <>
   <Home></Home>
   </>
    </div>
  );
}

export default Home;
