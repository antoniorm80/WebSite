import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, EditOutlined } from '@ant-design/icons';


const { TextArea } = Input;


function AppContact() {
    return (
        <div id="contact" className="block contactBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2> Contáctanos</h2>
                    {/* <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled </p> */}
                </div>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    >
                    <Form.Item
                        name="fullname"
                        rules={[{ required: true, message: 'Escribe tu nombre completo' }]}
                    >
                        <Input  placeholder="Nombre completo" style={{ borderTop: '0px', borderRight: '0px', borderLeft: '0px', color:"#1890ff" }} prefix={<UserOutlined />} size="large"/>
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Escribe tu correo electrónico' }]}
                    >
                        <Input  placeholder="Correo electrónico" style={{ borderTop: '0px', borderRight: '0px', borderLeft: '0px', color:"#1890ff" }} prefix={<MailOutlined />} size="large" />
                    </Form.Item>
                    <Form.Item
                        name="telephone"
                    >
                        <Input  placeholder="Número telefónico" style={{ borderTop: '0px', borderRight: '0px', borderLeft: '0px', color:"#1890ff" }} prefix={<PhoneOutlined />} size="large" />
                    </Form.Item>
                    <Form.Item
                        name="subject"
                    >
                        <Input  placeholder="Asunto" style={{ borderTop: '0px', borderRight: '0px', borderLeft: '0px', color:"#1890ff" }} prefix={<EditOutlined />} size="large" />
                    </Form.Item> 
                    <Form.Item
                        name="Message"
                    >
                        <TextArea  placeholder="Mensaje" style={{ borderTop: '0px', borderRight: '0px', borderLeft: '0px' }} />
                    </Form.Item>
                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                        {
                            validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject(new Error('Debe aceptar los términos')),
                        },
                        ]}
                    >
                        <Checkbox>
                            Estoy de acuerdo con los términos y condiciones.
                        </Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Enviar
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default AppContact;
