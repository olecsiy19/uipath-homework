import {Stage, Layer, Image} from 'react-konva';
import PolygonsGroup from './PoligonsGroup';
import './App.css';

export default function CanvasContainer({ image, polygons}) {

	return (
			<Stage width={image?.width} height={image?.height}>
				<Layer>
					<Image image={image} />
					{polygons && <PolygonsGroup polygons={polygons.slice(1)} />}
				</Layer>
			</Stage>
	);
};