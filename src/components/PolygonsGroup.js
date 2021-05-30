import { Group } from 'react-konva';
import Polygon from './Polygon';
import { useState } from "react";

export default function PolygonsGroup({polygons}) {
	const [activePolygons, setActivePolygons] = useState([]);
	const [hoveredIndex, setHoveredIndex] = useState(undefined);

	const handleClick = ({ target }) => {
		let id = target.index;
		setActivePolygons(activePolygons.includes(id) ? activePolygons.filter(item => item !== id) : [...activePolygons, id]);
	}

	return (<Group
		onClick={handleClick}
		onMouseMove={({target}) => setHoveredIndex(target.index)}
		onMouseOut={() => setHoveredIndex(undefined)}
	>
		{polygons.map((polygon, index) => <Polygon
			key={index}
			active={activePolygons.includes(index)}
			opacity={index === hoveredIndex ? 0.3 : 0.0}
			vertices={polygon.boundingPoly.vertices}
		/>)}
	</Group>);
};
