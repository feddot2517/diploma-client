import * as RD from "@projectstorm/react-diagrams";
import {RDNodeModel} from "../../components/RDNodeModel";

export function ListPatch() {
    const node = new RDNodeModel(ListDefaultData.name, ListDefaultData.color);
    node.addInPort('array');
    node.addInPort('reactNode');
    node.addOutPort('reactNode');

    return node
}

const info = 'Take in an array of strings and react component, take out an array of react node'

export const ListDefaultData = {name: 'List', color: 'rgb(121,3,151)', patch: ListPatch, info}