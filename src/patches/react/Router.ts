import * as RD from "@projectstorm/react-diagrams";
import {RDNodeModel} from "../../components/RDNodeModel";

export function RouterPatch() {
    const node = new RDNodeModel(RouterDefaultData.name, RouterDefaultData.color);
    node.addInPort('routes');
    node.addOutPort('router');

    return node
}

const info = 'React router'

export const RouterDefaultData = {name: 'Router', color: 'rgb(121,3,151)', patch: RouterPatch, info}