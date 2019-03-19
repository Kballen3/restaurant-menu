import React from 'react'
import {Card, CardContent, CardHeader, CardGroup } from 'semantic-ui-react'


const Menu = ({ name, }) => (
    <CardGroup>
        <Card>
            <CardContent>
                <CardHeader>{name}</CardHeader>
                

            </CardContent>
        </Card>
        
    </CardGroup>
)

export default Menu