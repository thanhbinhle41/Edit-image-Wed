import axios from 'axios';
import React, {useState, useEffect} from 'react'
import './Body.css'
import Opening from './Opening/Opening'
import Popular_Features from './Popular_Features/Popular_Features';
import Application from './Application/Application';
import Popup from './Popup/Popup';


export default function Body({listImg, setListImg}) {
    const [showPopup, setShowPopup] = useState(false);



    // let srcImg ="http://127.0.0.1:8080" + listImg.predict;
    // console.log(srcImg);
    // console.log(listImg);

    const [api, setApi] = useState({
            img: "",
            background_img: ""
    })

    // useEffect (()=> {
    //     axios.post('http://127.0.0.1:8080/api/predict/',api)
    //         .then(response => console.log('Post API thanh cong', response))
    //         .catch(error => console.log('Post API xit', error))
    // },[])


    const upLoadImage = async (e) => {
        const file = e.target.files[0];
        let base64 = await convertBase64(file);
        base64 = base64.replace(/^data:image\/(png|jpg|jpeg);base64,/, "");
        // console.log(base64);
        api.img = base64;
        setApi(api);
        console.log(api);
    };

    const upLoadBackImg = async (e) => {
        const file = e.target.files[0];
        let base64 = await convertBase64(file);
        base64 = base64.replace(/^data:image\/(png|jpg|jpeg);base64,/, "");
        // console.log(base64);
        api.background_img = base64;
        setApi(api);
        console.log(api);
    };

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            }
            fileReader.onerror = (error) => {
                reject(error);
            }
        })  
    }

    return (
        <div className='body-container'>
            {/* <h1>Alo123</h1>
            <input type='file' onChange={(e) => {upLoadImage(e)}}></input>
            <input type='file' onChange={(e) => {upLoadBackImg(e)}}></input> */}
            {showPopup ?
            <Popup showPopup={showPopup} setShowPopup={setShowPopup}
            api={api} setApi={setApi} listImg={listImg} setListImg={setListImg}>
            </Popup>
             : null}
            
            
            <Opening showPopup={showPopup} setShowPopup={setShowPopup}></Opening>


            <Popular_Features></Popular_Features>

            <Application></Application>


        </div>
    )
}
