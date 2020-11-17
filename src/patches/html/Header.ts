import {RDNodeModel} from "../../components/RDNodeModel";

export function HtmlHeaderPatch() {
    const node = new RDNodeModel(HtmlHeaderDefaultData.name, HtmlHeaderDefaultData.color);
    node.addInPort('text');
    node.addInPort('img');
    node.addOutPort('htmlHeader');

    return node
}

const info = 'Take in an array of strings and react component, take out an array of react node'

export const HtmlHeaderDefaultData = {name: 'HtmlHeader', color: 'rgb(107,194,192)', patch: HtmlHeaderPatch, info}