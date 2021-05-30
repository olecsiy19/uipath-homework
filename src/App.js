import React, { useEffect, useState } from "react";
import imageToBase64 from 'image-to-base64/browser';
import CanvasContainer from './components/CanvasContainer';
import Spinner from './_shared/spinner/spinner';
import { getMpBase64 } from "./_shared/helpers";
import API from './api';
import './App.css';

export default function App({ src }) {
	const [bgImage, setBgImage] = useState(undefined);
	const [polygons, setPolygons] = useState(undefined);
	const [loading, setLoading] = useState(false);
	const image = new window.Image();
	image.src = src;

	useEffect(() => {
		image.onload = () => {
			setBgImage(image);
		}
	}, [image.onload]);

	const sendRequest = async () => {
		setLoading(true)
		try {
			const imageBase64 = await imageToBase64(src);
			const res = await API.post("ocr", {
				requests: [{
					image: {
						content: imageBase64
					}
				}]
			}, {
				headers: {
					"X-UIPATH-Metadata": getMpBase64(image)
				}
			});
			setPolygons(res?.data?.responses?.[0]?.textAnnotations);
		} catch (e) {
			console.error(e);
		}
		setLoading(false);
	}

	return (
		<div>
			<button className={`process_button ${loading && "loading"}`} onClick={sendRequest}>
				{loading && <Spinner />}
				Process document
			</button>
			<CanvasContainer image={bgImage} polygons={polygons}/>
		</div>
	);
};
