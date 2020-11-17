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

export const Port = styled.div<{hasConnection: boolean}>`
		width: 15px;
		height: 15px;
		background: ${(p) => p.hasConnection?'#2acaf6':'#d7d7d7'};

		&:hover {
			background: ${'#6e6d6f'};
		}
	`;

export const RDPortLabel = (props: DefaultPortLabelProps) => {
    const portHasConnection = !!Object.keys(props.port.links).length;
    const port = (
        <PortWidget engine={props.engine} port={props.port}>
            <Port hasConnection={portHasConnection}/>
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
