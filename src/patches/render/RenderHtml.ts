import * as RD from "@projectstorm/react-diagrams";
import {RDNodeModel} from "../../components/RDNodeModel";

export function RenderHtmlPatch() {
    const node = new RDNodeModel(RenderHtmlDefaultData.name, RenderHtmlDefaultData.color);
    let port = node.addInPort('html');

    return node
}

const info = 'Render html'

export const RenderHtmlDefaultData = {name: 'RenderHtml', color: 'rgb(224,122,122)', patch: RenderHtmlPatch, info}