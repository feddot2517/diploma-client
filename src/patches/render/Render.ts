import * as RD from "@projectstorm/react-diagrams";

export function RenderPatch() {
    const node = new RD.DefaultNodeModel(RenderDefaultData.name, RenderDefaultData.color);
    let port = node.addInPort('react-node');

    return node
}

const info = 'Render a react node'

export const RenderDefaultData = {name: 'Render', color: 'rgb(121,3,151)', patch: RenderPatch, info}