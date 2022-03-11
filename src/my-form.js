import React, {Fragment} from 'react';
import Label from './elements/Label';
import MyButton from './elements/MyButton';

export default class MyForm extends React.Component {

   constructor() {
    super();
    this.state = {
        inputValue: '',
        increment: 0,
        showLabel: true,
        disableButton: false,
        items: [
            {
                name: 'Yogesh Sanger',
                dept: 'SSE'
            },
            {
             name: 'Sanger',
             dept: 'Test'
             },
             {
                 name: 'Test',
                 dept: 'Test'
             }  
        ]
    };
    this.items = this.state.items;
   }

   handleInput(e) {
    this.setState({ inputValue: e.target.value });
   }

   componentDidMount() {
       console.log('componentDidMount Myform');
   }

   componentDidUpdate(prevProps, prevState) {
       if (this.state.showLabel !== prevState.showLabel && this.state.showLabel && this.state.increment === 0) {
        this.setState({increment : 100});
       }
    //    this.setState({increment : 100});
    //    console.log(prevState.increment, 'prevState');
    //    console.log(this.state.increment, 'state');
    //    console.log('componentDidUpdate Myform');
    //    console.log(this.state.showLabel);
   }

   handleSearch() {
    this.setState({ items: this.items }, () => {
        const filteredData = this.state.items.filter(val => {
            return val.name.includes(this.state.inputValue);
        });
        this.setState({ items: filteredData });
    });

   }


   render() {
    return (
       <Fragment>
            { this.state.showLabel && <Label style={{}} myValue={'Test'}/>}

            
            <br/>


            <button onClick={() => {
                this.setState({ showLabel: !this.state.showLabel });
            }}>Show</button>
       </Fragment>
    );
    }
}
