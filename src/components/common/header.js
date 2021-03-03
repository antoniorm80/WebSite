import React, { useState } from 'react'
// import { Menu } from "antd";
import {DingtalkOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Anchor, Drawer, Button  } from 'antd';


const { Link } = Anchor;

function AppHeader() {

    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    return (
        <>
          <div className='container-fluid'>
                <div className='header'>  
                    <div className="logo">
                        <i className="fas fa-bolt"><DingtalkOutlined /></i>
                        <a href="http://google.com" target="blank">Mi Sitio</a>
                    </div>
                   {/*  <Menu  mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="home">Home</Menu.Item>
                        <Menu.Item key="about">About</Menu.Item>
                        <Menu.Item key="features">Features</Menu.Item>
                        <Menu.Item key="howitworks">How it works</Menu.Item>
                        <Menu.Item key="faq">FAQ</Menu.Item>
                        <Menu.Item key="pricing">Pricing</Menu.Item>
                        <Menu.Item key="cotizador">Cotizador</Menu.Item> 
                        <Menu.Item key="contact">Contact</Menu.Item>
                    </Menu>  */}
                    <div className="mobileHidden">
                       <Anchor targetOffset="65">
                        <Link href="#hero" title="Home" />
                        <Link href="#about" title="About" />
                        <Link href="#features" title="Feature" />
                        <Link href="#works" title="How it works" />
                        <Link href="#faq" title="FAQ" />
                        <Link href="#pricing" title="Pricing" />
                        <Link href="#proposal" title="Cotizador" />
                        <Link href="#contact" title="Contacto" />
                       </Anchor> 
                    </div>
                    <div className="mobileVisible">
                        <Button type="primary" onClick={showDrawer}>
                            <MenuFoldOutlined />
                        </Button>
                        <Drawer
                           // title="Basic Drawer"
                            placement="right"
                            closable={false}
                            onClose={onClose}
                            visible={visible}
                        >
                            <Anchor targetOffset="65">
                                <Link href="#hero" title="Home" />
                                <Link href="#about" title="About" />
                                <Link href="#features" title="Feature" />
                                <Link href="#works" title="How it works" />
                                <Link href="#faq" title="FAQ" />
                                <Link href="#pricing" title="Pricing" />
                                <Link href="#proposal" title="Cotizador" />
                                <Link href="#contact" title="Contacto" />
                            </Anchor> 
                        </Drawer>
                    </div>
                    
                    
                </div>            
          </div>
        </>
    )
}

export default AppHeader