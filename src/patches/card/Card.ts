import * as RD from "@projectstorm/react-diagrams";
import {RDNodeModel} from "../../components/RDNodeModel";

export function AntCardPatch() {
    const node = new RDNodeModel(AntCardDefaultData.name, AntCardDefaultData.color);
    node.addInPort('reactNodes');
    node.addInPort('title');
    node.addOutPort('card');

    return node
}

const info = 'Ant Design card react component'

export const AntCardDefaultData = {name: 'AntCard', color: 'rgb(121,3,151)', patch: AntCardPatch, info}