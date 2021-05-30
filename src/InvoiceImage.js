import { Image } from 'react-konva';
import useImage from 'use-image';

export default function InvoiceImage() {
	const image = new window.Image();
	image.src = '/document.jpeg'
	console.log(image)
	return <Image image={image} />;
};