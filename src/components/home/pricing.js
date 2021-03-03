import React from 'react';
import { ThunderboltOutlined  } from "@ant-design/icons";

import { List, Card, Button } from 'antd';

const data = [
    {
      title: 'Básico',
      content: [
        {
          price: '$ 89.99',
          space: '1 GB de Espacio',
          user: '1 Usuario',
          support: 'Soporte 24/7',
          backup: 'Respaldos de sus datos',
          access: 'Accesible de cualquier dispositivo'
        }
      ]
    },
    {
      title: 'Profesional',
      content: [
        {
          price: '$ 389.99',
          space: '5 GB de espacio',
          user: '5 users',
          support: 'Soporte 24/7',
          backup: 'Respaldos de sus datos',
          access: 'Accesible de cualquier dispositivo'
        }
      ]
    },
    {
      title: 'Empresarial',
      content: [
        {
          price: '$ 599.99',
          space: 'Espacio Ilimitado',
          user: '15 Usuarios',
          support: 'Soporte 24/7',
          backup: 'Respaldos de sus datos',
          access: 'Accesible de cualquier dispositivo'
        }
      ]
    }
  ];

function AppPricing() {
    return (
        <div id="pricing" className="block pricingBlock bgGray">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Elige un plan que se ajuste a tus necesidades</h2>
                    <p>Tam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus</p>
                </div>
               <List
                grid={{
                gutter: 16,
                xs: 1,
                sm: 1,
                md: 3,
                lg: 3,
                xl: 3,
                xxl: 3,
                }}
                dataSource={data}
                renderItem={item => (
                <List.Item>
                    <Card title={item.title}>
                        <p className="large">{item.content[0].price}</p>
                        <p>{item.content[0].space}</p>
                        <p>{item.content[0].user}</p>
                        <p>{item.content[0].support}</p>
                        <p>{item.content[0].backup}</p>
                        <p>{item.content[0].access}</p>
                        <Button type="primary" size="large" icon={<ThunderboltOutlined />}> Solicitar </Button>
                    </Card>
                </List.Item>
                )}
              /> 
            </div>
        </div>
    )
}

export default AppPricing
