import React, { Component } from 'react';
import { Button, Modal } from 'antd';
import Video from '../../images/video2.mp4';
import { CaretRightOutlined }from "@ant-design/icons";
class AppWorks extends Component {

    state = { visible: false};

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

 /*    handleOk = e => {
        console.log(e)
        this.setState({
            visible: true,
        });
    }; */

    handleCancel = e=> {
        console.log(e)
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div id="works" className="block worksBlock">
                <div className="container-fluid">
                    <div className="titleHolder">
                        <h2>¿Cómo Funciona?</h2>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                    </div>
                    <div className="contentHolder">
                        <Button type="primary" onClick={this.showModal} size="large">
                            <CaretRightOutlined />
                        </Button>
                    </div>
                    
                    <Modal title="Demostración" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel} footer={null}>
                        <iframe title="Desarrollos Web Based and Mobile" width="100%" height="350" src={Video}></iframe>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default AppWorks;
