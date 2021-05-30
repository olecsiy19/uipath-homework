import { Rect } from 'react-konva';
import { useState } from "react";
import { getRandomColor } from "../_shared/helpers";

export default function Polygon ({ vertices }) {

	const [opacity, setOpacity] = useState(0.0);
	const [active, setActive] = useState(false);
	const [color] = useState(getRandomColor);

	const [ first, second, third] = vertices;

	return (
		<Rect
			x={first.x} y={first.y} width={second.x - first.x} height={third.y - first.y}
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