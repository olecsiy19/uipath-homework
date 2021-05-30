import { Rect } from 'react-konva';
import { useState, useEffect } from "react";

const getRandomColor = () => {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

const LightenDarkenColor = (col, amt) => {
	let usePound = false;
	if ( col[0] == "#" ) {
		col = col.slice(1);
		usePound = true;
	}

	let num = parseInt(col,16);

	let r = (num >> 16) + amt;

	if ( r > 255 ) r = 255;
	else if  (r < 0) r = 0;

	let b = ((num >> 8) & 0x00FF) + amt;

	if ( b > 255 ) b = 255;
	else if  (b < 0) b = 0;

	let g = (num & 0x0000FF) + amt;

	if ( g > 255 ) g = 255;
	else if  ( g < 0 ) g = 0;

	return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}

export default function Polygon ({ vertices }) {

	const [opacity, setOpacity] = useState(0.0);
	const [active, setActive] = useState(false);
	const [color] = useState(getRandomColor);


	return (
		<Rect
			x={vertices[0].x} y={vertices[0].y} width={vertices[1].x - vertices[0].x} height={vertices[2].y - vertices[0].y}
			fill={color}
			strokeWidth={2}
			stroke="black"
			opacity={active ? 0.3 : opacity}
			onClick={ () => setActive(!active)}
			onMouseEnter={() => setOpacity(0.3)}
			onMouseOut={() => setOpacity(0.0)}
		/>
	);
}