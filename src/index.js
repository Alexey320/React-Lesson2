import React from 'react';
import ReactDOM from 'react-dom';

function MyComponent() {

    return <h1 align = "center" > This is The Second React2 Project From Alexey Vorontsov</h1>
}

class MyOwnComponent extends React.Component {

    constructor(props) {

        super(props);

        this.state = {name:'Alexey!!!'}
    }
    render() {

         return <div><h1 align = "center" > Здравствуйте мистер {this.state.name}</h1>
         <h1 align = "center" >This is The Second React2 Project From Alexey Vorontsov</h1></div>
    }
}

ReactDOM.render( < MyOwnComponent / > , document.getElementById('root'));
ReactDOM.render( < MyOwnComponent / > , document.getElementById('root'));
ReactDOM.render( < MyOwnComponent / > , document.getElementById('root'));