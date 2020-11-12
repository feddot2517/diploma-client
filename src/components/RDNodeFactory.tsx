import { RDNodeWidget } from './RDNodeWidget';
import { RDNodeModel } from './RDNodeModel';
import * as React from 'react';
import { DefaultNodeModel } from '@projectstorm/react-diagrams'
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';
import { DiagramEngine } from '@projectstorm/react-diagrams-core';

export class RDNodeFactory extends AbstractReactFactory<RDNodeModel, DiagramEngine> {
    constructor() {
        super('rd-node');
    }

    generateReactWidget(event: any): JSX.Element {
        return <RDNodeWidget engine={this.engine} node={event.model} />;
    }

    generateModel(event:any) {
        return new DefaultNodeModel();
    }
}