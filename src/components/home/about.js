import React from 'react';
import { Row, Col } from 'antd';
import { PieChartOutlined, DesktopOutlined, DatabaseOutlined} from "@ant-design/icons";

const items = [
    {
        key: '1',
        icon: <PieChartOutlined />,
        title: 'High Performance', 
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.',
    },
    {
        key: '2',
        icon: <DesktopOutlined />,
        title: 'Flat Design', 
        content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
    },
    {
        key: '3',
        icon: <DatabaseOutlined />,
        title: 'Simplified Workflow', 
        content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque.',
    }
]

function AppAbout() {
    return (
        <div id="about" className="block aboutBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Acerca de Nosotros</h2>
                    <p>The standard chunk of Lorem Ipsum used since</p>
                </div>
                <div className="contentHolder">
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.</p>
                </div>
                <Row gutter={[16, 16]}>
                {items.map(item => {
                    return (
                        <Col md={{ span: 8 }} key={item.key}>
                            <div className="content">
                                <div className="icon">
                                    {item.icon}
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                            </div>
                        </Col>
                    );
                })}
                </Row>
            </div>
        </div>
    )
}

export default AppAbout
