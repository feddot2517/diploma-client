import * as RD from "@projectstorm/react-diagrams";
import {RDNodeModel} from "../../components/RDNodeModel";

export function ComponentPatch() {
    const node = new RDNodeModel(ComponentDefaultData.name, ComponentDefaultData.color);
    node.addInPort('name');
    node.addOutPort('component');

    return node
}

const info = 'Render a react component'

export const ComponentDefaultData = {name: 'Component', color: 'rgb(121,3,151)', patch: ComponentPatch, info}