import * as RD from "@projectstorm/react-diagrams";
import {RDNodeModel} from "../../components/RDNodeModel";

export function RenderPatch() {
    const node = new RDNodeModel(RenderDefaultData.name, RenderDefaultData.color);
    let port = node.addInPort('router');

    return node
}

const info = 'Render a react node'

export const RenderDefaultData = {name: 'Render', color: 'rgb(121,3,151)', patch: RenderPatch, info}