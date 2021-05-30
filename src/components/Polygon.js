import { Rect } from 'react-konva';
import { useState } from "react";
import { getPolygonColors } from "../_shared/helpers";

export default function Polygon ({ vertices }) {

	const [opacity, setOpacity] = useState(0.0);
	const [active, setActive] = useState(false);
	const [colors] = useState(getPolygonColors);

	const [ first, second, third] = vertices;

	return (
		<Rect
			x={first.x} y={first.y} width={second.x - first.x} height={third.y - first.y}
			fill={colors.bgColor}
			strokeWidth={2}
			stroke={colors.borderColor}
			opacity={active ? 0.3 : opacity}
			onClick={ () => setActive(!active)}
			onMouseEnter={() => setOpacity(0.3)}
			onMouseOut={() => setOpacity(0.0)}
		/>
	);
}