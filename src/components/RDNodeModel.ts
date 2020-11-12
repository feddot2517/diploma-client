import { DefaultNodeModel } from '@projectstorm/react-diagrams';


export class RDNodeModel extends DefaultNodeModel {
    constructor(name: string, color: string) {
        super({
            type: 'rd-node',
            name,
            color,
        });
    }
}
