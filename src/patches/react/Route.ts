import * as RD from "@projectstorm/react-diagrams";
import {RDNodeModel} from "../../components/RDNodeModel";

export function RoutePatch() {
    const node = new RDNodeModel(RouteDefaultData.name, RouteDefaultData.color);
    node.addInPort('component');
    node.addInPort('path');
    node.addOutPort('route');

    return node
}

const info = 'Render a react route'

export const RouteDefaultData = {name: 'Route', color: 'rgb(121,3,151)', patch: RoutePatch, info}