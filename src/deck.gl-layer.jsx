import { ColumnLayer } from "deck.gl";
import { scaleLinear } from "d3-scale";
export const RenderLayers = (props) => {
 let maxActive, minActive;
 const radiusColumns = 15000;
 const { data, onHover } = props;
 
 const value = data.map((a) => a.active);
 maxActive = Math.max(...value);
 minActive = Math.min(...value);
const elevation = scaleLinear([minActive, maxActive], [0, 20000]);
 return [
     
 new ColumnLayer({
 id: 'cases',
 data,
 pickable: true,
 extruded: true,
 
 getPosition: d => d.coordinates,
 diskResolution: 10,
 radius: radiusColumns,
 elevationScale: 50,
 getFillColor: [255, 165, 0],
 getElevation: d => elevation(d.active),
onHover
 }),
 ];
 
}
