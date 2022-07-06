import React from 'react'

export class ErrorBoundary extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            error:false
        }
    }

    componentDidCatch(error, info){
        this.setState({
            error:true
        });
        
    }

    render () {
        if (this.state.error) {
            return  
            <h1>The loading fails</h1>
        }

        return this.props.children;
    }
}