import * as React from 'react';
import { Layout } from 'antd';
import { RDCore } from "../RDCore";
import {BodyWidget} from "./BodyWidget";
import {TrayWidget} from "./TrayWidget";
import {TrayItemWidget} from "../components/TrayItemWidget";
import {patches} from "../patches";

const { Content, Footer, Sider } = Layout;

export const LayoutComponent = () => {
    const core = new RDCore();
    return (
        <Layout style={{height: '100vh'}}>
            <Sider
                style={{background: '#eeeeee', padding: 10}}
                width={320}
                breakpoint="lg"
                collapsedWidth="0"
            >
                <TrayWidget>
                    {patches.map(data => (
                        <TrayItemWidget {...data}/>
                    ))}

                </TrayWidget>
            </Sider>
            <Layout>
                <Content style={{ margin: '24px 16px 0', background: '#fff' }}>
                    <BodyWidget app={core} />
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};
