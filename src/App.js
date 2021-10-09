import logo from './logo.svg';
import './App.css';
 

import Login from './Login';
import Reg from './Reg'
import Employee from './Employee';
function App() {
  let data={
    uname:"kalyan",
    age:26,
    mobileno:35435435,
    email:"kalyan@gmail.com"
  }
  return (
    <div>
      {/* <Reg name="balaji" info={data}/> */}

       {/* <Login name="surya"/> */}

       <Employee />
    </div>
  );
}

export default App;
