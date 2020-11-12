import { LinkModel, PortModel, DefaultLinkModel, PortModelAlignment, DefaultPortModel } from '@projectstorm/react-diagrams';

export class RDPortModel extends DefaultPortModel {
    constructor(alignment: PortModelAlignment) {
        super({
            type: 'rd-node',
            name: alignment,
            alignment: alignment
        });
    }

    createLinkModel(): LinkModel {
        return new DefaultLinkModel();
    }
}