import * as React from 'react';
import { DiagramEngine, PortWidget } from '@projectstorm/react-diagrams-core';
import { DefaultPortModel } from '@projectstorm/react-diagrams';
import styled from '@emotion/styled';

export interface DefaultPortLabelProps {
    port: DefaultPortModel;
    engine: DiagramEngine;
}

export const PortLabel = styled.div`
		display: flex;
		margin-top: 1px;
		align-items: center;
	`;

export const Label = styled.div`
		padding: 0 5px;
		flex-grow: 1;
	`;

export const Port = styled.div`
		width: 15px;
		height: 15px;
		background: rgba(white, 0.1);

		&:hover {
			background: rgb(192, 255, 0);
		}
	`;

export const RDPortLabel = (props: DefaultPortLabelProps) => {
    const port = (
        <PortWidget engine={props.engine} port={props.port}>
            <Port/>
        </PortWidget>
    );


    const label = <Label>{props.port.getOptions().label}</Label>;

    return (
        <PortLabel>
            {props.port.getOptions().in ? port : label}
            {props.port.getOptions().in ? label : port}
        </PortLabel>
    );
}