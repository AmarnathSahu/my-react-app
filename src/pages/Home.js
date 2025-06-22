import { useState } from 'react';
import useFetch from '../custom_hook/useFetch';
const Home = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [result, setResult] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
    const authenticate =  () => {
      console.log("authenticating..............")
     if (userName === "Amarnath" && password === "Amar"){
        setIsAuthenticated(true);
        setResult("Login Successfully");
     }else{
        setIsAuthenticated(false);
      setResult("Invalid Credentials");
     }
  };
  return (
    <>
     <input type='text' placeholder='Enter the userName' value={userName} onChange={(e) => setUserName(e.target.value)} />
      <input type='password' placeholder='Enter the password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="button" value="login" onClick={authenticate} />
     <p>You typed : {result}</p>
     {isAuthenticated && data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
     </>
  );
}

export default Home;