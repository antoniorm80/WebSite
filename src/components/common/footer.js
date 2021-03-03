import React from 'react';
import {DingtalkOutlined, TwitterOutlined, FacebookOutlined, LinkedinOutlined, InstagramOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { BackTop } from 'antd';

function AppFooter() {
    return (
        <div className="container-fluid">
            <div className="footer">
                <div className="logo">
                    <i className="fas fa-bolt"><DingtalkOutlined /></i>
                    <a href="http://www.google.com" target="black">SITIO</a>
                </div>
            </div>
            <ul className="socials">
                <li><a href="http://www.facebook.com" target="blank"><FacebookOutlined /> </a></li>
                <li><a href="http://www.twitter.com" target="blank"><TwitterOutlined /> </a></li>
                <li><a href="http://www.linkedin.com" target="blank"><LinkedinOutlined /> </a></li>
                <li><a href="http://www.Instagram.com" target="blank"><InstagramOutlined /> </a></li>
            </ul>
            <div className="copyright">Copyright @ 2021 SITIO</div>
            <BackTop>
                <div className="goTop"><ArrowUpOutlined /></div>
            </BackTop>
        </div>
    )
}

export default AppFooter;
