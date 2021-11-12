import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './components/Body/Body.jsx' 
import Body from './components/Body/Body.jsx';
import Header from './components/Header/Header.jsx' 

function App() {
  const [listImg, setListImg] = useState();


  // useEffect(() => {
  //   axios.get('http://127.0.0.1:8080/api/view/')
  //         .then(item => setListImg(item.data))
  //         .catch(error => console.log("ahihi", error))
  // }, [])
  // let srcImg ="http://127.0.0.1:8080" + listImg.predict;
  // console.log(listImg);
  // console.log(srcImg);



  return (
    <div className="App">
      <Header></Header>
      <Body listImg={listImg} setListImg={setListImg}></Body>
    </div>
  );
}

export default App;
