import React, {useEffect, useState} from "react";
import imageToBase64 from 'image-to-base64/browser';
import CanvasContainer from './components/CanvasContainer';
import {getMpBase64} from "./_shared/helpers";
import './App.css';

import API from './api';

export default function App({src}) {
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
			<button onClick={sendRequest}>Process document</button>
			<CanvasContainer image={bgImage} polygons={polygons}/>
		</div>
	);
};
