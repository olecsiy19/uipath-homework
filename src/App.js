import React, { useEffect, useState } from "react";
import imageToBase64 from 'image-to-base64/browser';
import axios from 'axios';
import CanvasContainer from './CanvasContainer';
import './App.css';

function App() {
    const [bgImage, setBgImage] = useState(undefined)
    const [polygons, setPolygons] = useState(undefined)
    const image = new window.Image();
    image.src = '/document.jpeg';

    useEffect(() => {
        console.log(true)
        image.onload = () => {
            setBgImage(image)
            imageToBase64("/document.jpeg") // Path to the image
                .then(
                    (response) => {

                        let objJsonB64 = Buffer.from(JSON.stringify({"Mp": Math.floor((image.width * image.height) / 1000000)})).toString("base64");
                        console.log(objJsonB64)
                        let config = {
                            headers: {
                                "Content-Type": "application/json",
                                "X-UIPATH-License": "7H5G5RrLGrX3KfaFEtmRwkpCinwNCG9OSnerz31WhgGZo7luWlXUxCMVjUUJOOf1zgxsVohSKLof48iUFwBd2A==",
                                "X-UIPATH-Version": "1",
                                "X-UIPATH-Metadata": objJsonB64
                            }
                        }
                        axios.post(`https://du.uipath.com/ocr`, { requests: [{ image: { content: response } }] }, config)
                            .then(res => {
                                console.log(res);
                                console.log(res.data);
                                setPolygons(res?.data?.responses?.[0]?.textAnnotations)
                            })
                    }
                )
                .catch(
                    (error) => {
                        console.log(error); // Logs an error if there was one
                    }
                )
        }
    }, [image.onload])

    return (
        <div>
            <CanvasContainer image={bgImage} polygons={polygons}/>
        </div>
    );
};

export default App;