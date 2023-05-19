import React from 'react';
// поєднано 3 та 4 завдання
export class ChangeNumber extends React.Component{
    constructor(props) {
        super(props);
        this.hendler = this.hendler.bind(this);
        this.state = {
            count: 0,
            message: "block"
        }
    }
    hendler = ()=> {
        this.setState({ message: this.state.message = "block clicked" });
        this.setState({ count: this.state.count + 1 })
    }
   
    componentDidUpdate(prevProps, prevState) {
        console.log(prevState)
    }
    shouldComponentUpdate() {
        return this.state.count <3
    }
    render() {
        return (
            <div>
                <div className='block'> { this.state.message}</div>
                <button className='button' onClick={this.hendler}>click</button>
                

        </div>
    )
}

}