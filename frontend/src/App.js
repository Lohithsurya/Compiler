import axios from 'axios';
import './App.css';
import React, {useState} from 'react';


function App() {

  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('cpp');
  const [output, setOutput] = useState('');
  const handleSubmit = async ()=>{
    const payload = {
      language,
      code
    };
    try{
    const { data }= await axios.post("http://localhost:8081/run",payload)
    setOutput(data.output);}catch(err){
      console.log(err.response);
    }
  }

  return (
    <div className="App">
      <h1>Online code compiler</h1>
      <div>
        <label>Language:  </label>
        <select value = {language} onChange={(e)=>{
        setLanguage(e.target.value);
        console.log(e.target.value);
        }}>
          <option value="cpp">C++</option>
          <option value="py">Python</option>
        </select>
      </div>
      <br/>
      <textarea rows="20" cols = "75" value = {code} onChange={(e)=>{setCode(e.target.value);}}></textarea>
      <br/>
      <button onClick={handleSubmit}>Submit</button>
      <p>{output}</p>
    </div>
  );
}

export default App;
