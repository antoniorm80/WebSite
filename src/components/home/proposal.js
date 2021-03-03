import React, {useState } from 'react';
import { Collapse } from 'antd';
import { Checkbox,  Row, Col, Divider, Button } from 'antd';
// import { PoweroffOutlined } from '@ant-design/icons';



const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Calendario', 'Gráficas', 'Código de barras'];
const defaultCheckedList = ['Apple', 'Orange'];

const { Panel } = Collapse;


function AppProposal() {

    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);
    const [total, setTotal] = useState(0);

    const onChange = list => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
        setTotal(total + 50);
        //{list.length === plainOptions.length ? setTotal(total + 50) :  setTotal(total - 50)}
        
    };

    const onCheckAllChange = e => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };
    return (
        <div id="proposal" className="block featureBlock bgGray">
            <div className="container-fluid">   
                <div className="titleHolder">
                    <h2>Cotizador</h2>
                    <p>Realice un simulacro eligiedo los productos y/o servicios que necesite para su negocio.</p>
                </div>
                {/* <div className="contentHolder">
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.</p>
                </div>          */}
                {/* <Divider orientation="left">Cotización</Divider> */}
                    <Row>
                        <Col flex="auto">
                            <Collapse accordion>
                                <Panel header="Desarrollos" key="1">  
                                {/* /tyle={{fontWeight: 'bold', fontFamily: 'Reggae One'}}                   */}
                                    <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                                        Seleccionar Todos
                                    </Checkbox>
                                    <Divider />
                                    <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
                                </Panel>
                                <Panel header="Infraestructura" key="2">
                                    <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                                        <Row>
                                        <Col span={8}>
                                            <Checkbox value="A">Equipo de Cómputo</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="B">Cámaras</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="C">Cámaras de Circuito Cerrado</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="D">Caja Registradora </Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="E">Código de Barras</Checkbox>
                                        </Col>
                                        </Row>
                                    </Checkbox.Group>
                                </Panel>
                                <Panel header="Servicios" key="3">
                                    <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                                        <Row>
                                        <Col span={8}>
                                            <Checkbox value="A">Mantenimiento de Equipos</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="B">Antivirus</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="C">Respaldos Base de Datos</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="D">Rendimiento Base de Datos </Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="E">Licencia de Office</Checkbox>
                                        </Col>
                                        {/* <Col span={8}>
                                            <Checkbox value="E">Defragmentación</Checkbox>
                                        </Col> */}
                                        </Row>
                                    </Checkbox.Group> 
                                   
                                </Panel>
                            </Collapse>


                        </Col>
                        <Col flex="300px" style={{textAlign: 'right'}}>
                            {/* <Divider orientation="left">Total</Divider> */}
                            <p><strong>Sub Total:</strong> {total}</p>
                            <p><strong>Iva:</strong> {total * .16}</p>
                            <p><strong>TOTAL:</strong> {total + (total * .16)}</p>
                            <Button type="primary" size="large"> Crear Cotización </Button>
                        </Col>
                    </Row>
               
            </div>
        </div>
    )
}

export default AppProposal
