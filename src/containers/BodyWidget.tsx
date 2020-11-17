import * as React from 'react';
import * as _ from 'lodash';
import {TrayWidget} from './TrayWidget';
import {RDCore} from '../RDCore';
import {CanvasWidget} from '@projectstorm/react-canvas-core';
import styled from '@emotion/styled';
import './BodyWidget.css'
import {useForceUpdate} from "../utils/useForceUpdate";
import {patches} from "../patches";
import {Button} from "antd";
import {CaretRightOutlined} from '@ant-design/icons'
import axios from 'axios'

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
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        position: "absolute",
                        width: '100%',
                        height: '48px',
                        top: 0,
                        background: '#112233',
                        padding: 8,
                    }}>
                        <Button onClick={()=>axios.post('http://localhost:3030/build', {patchTree: props.app.serialize()}).then((e)=>console.log(e.data))} type="default">
                            <CaretRightOutlined style={{color: '#04c12b'}} />
                        </Button>
                    </div>
                </Layer>
            </Content>
        </Body>
    );
}