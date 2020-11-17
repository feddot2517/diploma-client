import * as RD from "@projectstorm/react-diagrams";
import {RDNodeModel} from "../../components/RDNodeModel";

export function PlusPatch() {
    const node = new RDNodeModel(PlusDefaultData.name ,PlusDefaultData.color);
    node.addInPort('number1');
    node.addInPort('number2');
    node.addOutPort('sum');

    return node
}

const info = 'Sum of two number'

export const PlusDefaultData = {
    name: 'Plus',
    color: 'rgb(229,121,180)',
    patch: PlusPatch,
    info
}