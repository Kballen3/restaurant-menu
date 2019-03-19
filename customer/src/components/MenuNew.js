import React from 'react'
import {Form, } from 'semantic-ui-react'

class MenuNew extends React.Component {
    state = {name: '', };

    handleChange = (e) => {
        this.setState({name: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addType(this.state.name)
        this.setState({ name: ''})
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Input 
                    lable='Menu'
                    placeholder='Menu'
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                />

            </Form>
        )
    }
}

export default MenuNew