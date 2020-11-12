import * as React from 'react';
import * as _ from 'lodash';
import {TrayWidget} from './TrayWidget';
import {RDCore} from '../RDCore';
import {TrayItemWidget} from '../components/TrayItemWidget';
import {DefaultNodeModel} from '@projectstorm/react-diagrams';
import {CanvasWidget} from '@projectstorm/react-canvas-core';
import styled from '@emotion/styled';
import './BodyWidget.css'
import {useForceUpdate} from "../utils/useForceUpdate";
import {patches} from "../patches";

export interface BodyWidgetProps {
    app: RDCore;
}

const Body = styled.div`
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		min-height: 100%;
	`;


const Content = styled.div`
		display: flex;
		flex-grow: 1;
	`;

const Layer = styled.div`
		position: relative;
		flex-grow: 1;
	`;

export const BodyWidget = (props: BodyWidgetProps) => {
    const forceUpdate = useForceUpdate();
    return (
        <Body>
            <Content>
                <Layer
                    onDrop={(event) => {
                        const data = event.dataTransfer.getData('storm-diagram-node');
                        const targetPatchModel = patches.find(({name})=>name===data);
                        if(!targetPatchModel) return;

                        const patch = targetPatchModel.patch();
                        const point = props.app.getDiagramEngine().getRelativeMousePoint(event);
                        patch.setPosition(point);
                        props.app.getDiagramEngine().getModel().addNode(patch);
                        forceUpdate();
                    }}
                    onDragOver={(event) => {
                        event.preventDefault();
                    }}>
                    <CanvasWidget className="canvas-widget" engine={props.app.getDiagramEngine()}/>
                </Layer>
            </Content>
        </Body>
    );
}