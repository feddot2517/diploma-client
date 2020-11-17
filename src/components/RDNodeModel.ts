import { DefaultNodeModel } from '@projectstorm/react-diagrams';
import * as _ from "lodash";


export class RDNodeModel extends DefaultNodeModel {
    extraProps?: any;
    constructor(name: string, color: string, extraProps?) {
        super({
            type: 'rd-node',
            name,
            color,
        });
        this.extraProps = extraProps;
    }

    serialize(): any {
        return {
            ...super.serialize(),
            extraProps: this.extraProps,
        };
    }
}
