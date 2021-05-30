import { Rect } from 'react-konva';
import { useState } from "react";
import { getPolygonColors } from "../_shared/helpers";

export default function Polygon ({ vertices, active, opacity }) {
	const [colors] = useState(getPolygonColors);
	const [first, second, third] = vertices;

	return (
		<Rect
			x={first.x} y={first.y} width={second.x - first.x} height={third.y - first.y}
			fill={colors.bgColor}
			strokeWidth={2}
			stroke={colors.borderColor}
			opacity={active ? 0.3 : opacity}
		/>
	);
}