import * as React from 'react';
import * as _ from 'lodash';
import { DiagramEngine } from '@projectstorm/react-diagrams-core';
import { RDNodeModel } from './RDNodeModel';
import { DefaultPortLabel } from '@projectstorm/react-diagrams';
import styled from '@emotion/styled';
import {RDPortLabel} from "./RDPortWidget";
import {Input} from "antd";

export const Node = styled.div<{ background: string; selected: boolean }>`
		background-color: ${(p) => p.background};
		border-radius: 5px;
		font-family: sans-serif;
		padding: 2px;
		color: white;
		border: solid 2px black;
		overflow: visible;
		font-size: 11px;
		border: solid 2px ${(p) => (p.selected ? 'rgb(255,255,255)' : 'transparent')};
	`;

export const Title = styled.div`
		background: rgba(0, 0, 0, 0.3);
		display: flex;
		white-space: nowrap;
		justify-items: center;
	`;

export const TitleName = styled.div`
		flex-grow: 1;
		padding: 5px 5px;
	`;

export const Ports = styled.div`
		display: flex;
		background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2));
	`;

export const PortsContainer = styled.div`
		flex-grow: 1;
		display: flex;
		padding: 2px;
		flex-direction: column;

		&:first-of-type {
			margin-right: 10px;
		}

		&:only-child {
			margin-right: 0px;
		}
	`;

export interface DefaultNodeProps {
    node: RDNodeModel;
    engine: DiagramEngine;
}

/**
 * Default node that models the DefaultNodeModel. It creates two columns
 * for both all the input ports on the left, and the output ports on the right.
 */
export const RDNodeWidget = (props: DefaultNodeProps) => {
    const generatePort = (port) => {
        return <RDPortLabel engine={props.engine} port={port} key={port.getID()}/>;
    };

    const { extraProps } = props.node;

    return (
        <Node
            data-default-node-name={props.node.getOptions().name}
            selected={props.node.isSelected()}
            background={props.node.getOptions().color}>
            <Title>
                <TitleName>{props.node.getOptions().name}</TitleName>
            </Title>
            <Ports>
                <PortsContainer>{_.map(props.node.getInPorts(), generatePort)}</PortsContainer>
                <PortsContainer>{_.map(props.node.getOutPorts(), generatePort)}</PortsContainer>
            </Ports>
            {extraProps &&
                <div style={{padding: 4, background: 'white'}}>
                    {Object.keys(extraProps).map((key, index) => {
                        return (
                            <Input
                                key={index}
                                onChange={(e)=>props.node.extraProps[key]=e.target.value}
                                placeholder="value"
                                aria-label="qwe"
                                style={{width: 64}}
                                size="small"
                                title="qwe"
                            />
                        )
                    })}
                </div>
            }
        </Node>
    );
}
