import * as RD from "@projectstorm/react-diagrams";
import {RDNodeModel} from "../../components/RDNodeModel";

export function LoggerPatch() {
    const node = new RDNodeModel(LoggerDefaultData.name ,LoggerDefaultData.color);
    node.addInPort('value');
    node.addInPort('q');

    return node
}

const info = 'Log value'

export const LoggerDefaultData = {
    name: 'Logger',
    color: 'rgb(59,201,116)',
    patch: LoggerPatch,
    info
}