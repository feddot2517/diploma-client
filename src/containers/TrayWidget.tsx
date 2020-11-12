import * as React from 'react';
import styled from '@emotion/styled';
import { ReactNode } from "react";
import Search from "antd/es/input/Search";

export const Tray = styled.div`
		min-width: 200px;
		flex-grow: 0;
		flex-shrink: 0;
	`;

export const TrayWidget = (props: { children: ReactNode }) => {
    return (
        <Tray>
            <Search
                placeholder="Patch name"
                allowClear
                enterButton="Search"
                size="middle"
                style={{marginBottom: 10}}
            />
            {props.children}
        </Tray>
    )
}