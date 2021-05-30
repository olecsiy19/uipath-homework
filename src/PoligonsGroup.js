import {Group} from 'react-konva';
import Polygon from './Poligon';

export default function PolygonsGroup ({ polygons }) {
	return (<Group>
		{polygons.map( (polygon, index) => <Polygon key={index} vertices={polygon.boundingPoly.vertices}/>)}
		</Group>);
};