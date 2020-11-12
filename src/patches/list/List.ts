import * as RD from "@projectstorm/react-diagrams";

export function ListPatch() {
    const node = new RD.DefaultNodeModel(ListDefaultData.name, ListDefaultData.color);
    node.addInPort('array');
    node.addInPort('react-node');
    node.addOutPort('react-node');

    return node
}

const info = 'Take in an array of strings and react component, take out an array of react node'

export const ListDefaultData = {name: 'List', color: 'rgb(121,3,151)', patch: ListPatch, info}