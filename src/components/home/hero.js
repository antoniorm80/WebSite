import React from 'react';
import { Carousel, Button } from 'antd';
import {VideoCameraTwoTone } from "@ant-design/icons";

const items = [
    {
        key: '1',
        title: 'Web and mobile payment built for developers', 
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
        key: '2',
        title: 'Work better together. Schedule meetings', 
        content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.',
    },
    {
        key: '3',
        title: 'The best app to increase your productivity', 
        content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.',
    }
]

function AppHero() {
    return (
        <div id="hero" className="heroBlock">
           <Carousel autoplay>
                {items.map(item => {
                    return (
                        <div className="container-fluid" key={item.key}>
                            <div className="content">
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                                <div className="btnHolder">
                                    <Button type="primary" size="large">Learn More</Button>
                                    <Button size="large" icon={<VideoCameraTwoTone />}>Watch a Demo</Button>
                                </div>
                            </div>                            
                        </div>
                    );
                })}               
            </Carousel>
        </div>
    )
}

export default AppHero;