import * as RD from '@projectstorm/react-diagrams';
import {LoggerPatch} from "./patches/logger/Logger";
import {RDNodeFactory} from "./components/RDNodeFactory";

export class RDCore {
    protected activeModel?: RD.DiagramModel;
    protected diagramEngine: RD.DiagramEngine;

    constructor() {
        this.diagramEngine = RD.default();
        console.log(this.diagramEngine);
        this.diagramEngine.getNodeFactories().registerFactory(new RDNodeFactory());
        this.newModel();
    }

    serialize() {
        return this.activeModel.serialize();
    }

    public newModel() {
        this.activeModel = new RD.DiagramModel();
        this.diagramEngine.setModel(this.activeModel);

        const defaultPatch = LoggerPatch();
        defaultPatch.setPosition(100, 100)

        this.activeModel.addAll(defaultPatch);
    }

    public getActiveDiagram(): RD.DiagramModel | undefined {
        return this.activeModel;
    }

    public getDiagramEngine(): RD.DiagramEngine {
        return this.diagramEngine;
    }
}
