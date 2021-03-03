import React from 'react';
import { Row, Col } from 'antd';
import { Card } from 'antd';
import image1 from "../../images/modern-design.jpg";
import image2 from "../../images/clean-design.jpg";
import image3 from "../../images/great-support.jpg";
import image4 from "../../images/easy-customise.jpg";
import image5 from "../../images/unlimited-features.jpg";
import image6 from "../../images/advanced-option.jpg";

const { Meta } = Card;

function AppFeature() {
    return (
        <div id="features" className="block featureBlock bgGray">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Key Features and Benefits</h2>
                    <p>The standard chunk of Lorem Ipsum used since siguiente paso el cotizador</p>
                </div>
                <Row gutter={[16, 16]}>
                   {/*  <Col span={8}> 
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col> */}
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}> 
                        <Card
                            hoverable
                            cover={<img alt="Diseños Modernos" src={image1}/>}
                        >
                            <Meta title="Diseños Modernos"/>
                        </Card>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}> 
                        <Card
                            hoverable
                            cover={<img alt="Código Limpios" src={image2}/>}
                        >
                            <Meta title="Código Limpio"/>
                        </Card>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}> 
                        <Card
                            hoverable
                            cover={<img alt="Buen Soporte" src={image3}/>}
                        >
                            <Meta title="Buen Soporte"/>
                        </Card>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}> 
                        <Card
                            hoverable
                            cover={<img alt="Fácil Personalización" src={image4}/>}
                        >
                            <Meta title="Fácil Personalización"/>
                        </Card>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}> 
                        <Card
                            hoverable
                            cover={<img alt="Características Ilimitadas" src={image5}/>}
                        >
                            <Meta title="Características Ilimitadas"/>
                        </Card>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}> 
                        <Card
                            hoverable
                            cover={<img alt="Opciones Avanzadas" src={image6}/>}
                        >
                            <Meta title="Opciones Avanzadas"/>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default AppFeature
