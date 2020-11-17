import * as RD from "@projectstorm/react-diagrams";
import {RDNodeModel} from "../../components/RDNodeModel";

export function LoggerPatch() {
    const node = new RDNodeModel(ValueDefaultData.name ,ValueDefaultData.color, {value: 'string'});
    node.addOutPort('value');
    return node
}

const info = 'Just a value'

export const ValueDefaultData = {
    name: 'Value',
    color: 'rgb(180,170,131)',
    patch: LoggerPatch,
    info
}