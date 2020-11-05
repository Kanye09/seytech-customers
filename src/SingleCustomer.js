import React, {Component} from 'react';
import { withRouter } from 'react-router';
import { Button } from 'reactstrap';
import _ from "lodash";
import './App.css';

class SingleCustomer extends Component {
    constructor(props) {
        const {customers} = props;
        console.log("props",props)
        const customer = customers.find(item=>{
            return item.id === Number(props.match.params.id)
        })
        const temp = _.cloneDeep(customer);
        console.log("aaa", customer)

        super()
        this.state = {
            editMode: false,
            customer,
            temp
        }
    }
    onEdit = () => {
        this.setState({editMode: true})
    }

    onHandleChange = (e) => {
        const { customer } = this.state;
        customer.name = e.target.value;
        this.setState({customer})
        console.log('customers',customer)
        
    }

    onSave = () => {
        const temp = _.cloneDeep(this.state.customer);
        this.setState({editMode: false, temp})
    }

    onCancel = () => {
        const updated = _.cloneDeep(this.state.temp);
        this.setState({editMode: false, customer: updated});

    }
    render(){
        console.log('this', this);
        const {editMode, customer} = this.state
        const { id } = this.props.match.params;
        // const customer = this.props.customers.find(item=>item.id === Number(id));
        const saveButton = editMode && <Button onClick={this.onSave}>Save</Button>
        const cancelButton = editMode && <Button onClick={this.onCancel}>Cancel</Button>
        const nameInput = editMode? <input onChange={this.onHandleChange}value={customer.name}></input>: <div className='desc'>{ customer.name }</div>
        console.log(nameInput)

        return(
            <div>
                <div className='row'>
                    <div className='title'>Id:</div>
                    <div className='desc'>{ customer.id }</div>
                </div>
                <div className='row'>
                    <div className='title'>Name:</div>
                    { nameInput }
                </div>
                <div className='row'>
                    <div className='title'>LastName:</div>
                    <div className='desc'>{ customer.lastName }</div>
                </div>
                <div className='row'>
                    <div className='title'>Avatar:</div>
                    <div className='desc'><img className='img' src={customer.avatar}/></div>
                </div>
                <div className='row'>
                    <div className='title'>Email:</div>
                    <div className='desc'>{ customer.email }</div>
                </div>
                <div className='row'>
                    <div className='title'>State:</div>
                    <div className='desc'>{ customer.state }</div>
                </div>
                <div className='row'>
                    <div className='title'>Phone:</div>
                    <div className='desc'>{ customer.phone }</div>
                </div>
                <div className='row'>
                    <div className='title'>Role:</div>
                    <div className='desc'>{ customer.role }</div>
                </div>
                <div className='row'>
                    <div className='title'>Github:</div>
                    <div className='desc'>{ customer.github }</div>
                </div>
                <div className='row'>
                    <div className='title'>Courses:</div>
                    <div className='desc'>{ customer.courses }</div>
                </div>
                <div className='row'>
                    <div className='title'>Payment:</div>
                    <div className='desc'>{ customer.payment }</div>
                </div>

                <Button className='primary' onClick={this.onEdit}>Edit {customer.name}</Button>
                {saveButton}
                {cancelButton}
            </div>
            
        )
    }
}

export default withRouter(SingleCustomer);