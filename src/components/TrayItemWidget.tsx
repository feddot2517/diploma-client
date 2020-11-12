import * as React from 'react';
import styled from '@emotion/styled';
import './css/TrayItemWidget.css'
import {Card, Collapse} from "antd";
import {
    QuestionCircleOutlined
} from '@ant-design/icons';

const { Panel } = Collapse;

export interface TrayItemWidgetProps {
    color: string;
    name: string;
    info: string,
}

const Tray = styled.div<{ color: string }>`
		cursor: pointer;
	`;

export const TrayItemWidget = (props: TrayItemWidgetProps) => {
    return (
        <Tray
            color={props.color}
            draggable={true}
            onDragStart={(event) => {
                event.dataTransfer.setData('storm-diagram-node', props.name);
            }}
            >
            <Collapse expandIcon={({ isActive }) => <QuestionCircleOutlined />}>
                <Panel header={props.name} key={props.name}>
                    {props.info}
                </Panel>
            </Collapse>
        </Tray>
    );
}
