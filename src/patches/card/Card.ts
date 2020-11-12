import * as RD from "@projectstorm/react-diagrams";

export function AntCardPatch() {
    const node = new RD.DefaultNodeModel(AntCardDefaultData.name, AntCardDefaultData.color);
    node.addInPort('react-nodes');
    node.addInPort('title');
    node.addOutPort('Ant Card');

    return node
}

const info = 'Ant Design card react component'

export const AntCardDefaultData = {name: 'AntCard', color: 'rgb(121,3,151)', patch: AntCardPatch, info}