import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import {DebounceInput} from 'react-debounce-input';
import Select from 'react-select';
import './App.css';


const options = [
  { value: 'name', label: 'Name' },
  { value: 'email', label: 'Email' },
  { value: 'github', label: 'Github' }
]

class Customers extends Component {

  constructor() {
    super()
    this.state = {
      value: '',
      searchBy: 'name',
    }
  }

  componentDidMount() {
    // setInterval(this.increase, 100)
  }

  increase = () => {
    this.setState({timer: this.state.timer+1})
  }

  onChange = (e) => {
    this.setState({value: e.target.value})
  }
  onSelect = (item) => {
    this.setState({searchBy: item.value})
  }

  render(){
    const {customers} = this.props;
    const {value, searchBy} = this.state;
    const filteredCust = customers.filter(item => {
      return item[searchBy].toLowerCase().includes(value.toLowerCase());
    })
    return (
      <div>
        
        <div className='row'>
          <div className='col'>
            <DebounceInput 
              minLength={2}
              onChange = {this.onChange} 
              debounceTimeout={300}/>
          </div>
          <div className='col'>
            <Select onChange = {this.onSelect} options = {options}/>
          </div>
        </div>
        Searching by: {searchBy}
        <Table striped className="customers">
          <thead>
            <tr>
              <th>#</th>
              <th>Avatar</th>
              <th>Full Name</th>
              <th>State</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Payment</th>
              <th>Courses</th>
              <th>Role</th>
              <th>Github</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              filteredCust.map(customer=>{
                const { id, name, lastName, avatar, email, state, phone,
                role, github, courses, payment, status } = customer;
                const url = `/customer/${id}`;
                return (
                <tr>
                  <th scope="row">{id}</th>
                  <td><img src={avatar} /></td>
                  <td> <Link to={url}>{name} {lastName}</Link> </td>
                  <td>{state}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                  <td>{payment}</td>
                  <td>{courses}</td>
                  <td>{role}</td>
                  <td>{github}</td>
                  <td>Actions</td>
                </tr>
                )
              })
            }
            
          </tbody>
        </Table>
      </div>
    )
  }
}




export default Customers;











































/*
const data = [
  {countryName: "USA", currency:"dollar", products:[
    {name: "apple", active:true, subProducts:[
      {name: "iPhone", price: 40, sold:4},
      {name: "iPad", price: 530, sold:4},
      {name: "watch", price: 530},
    ]}
  ]},
  {countryName: "Russia", currency:"rubl", products:[
    {name: "apple", active:true, subProducts:[
      {name: "iPhone", price: 40, sold:4},
      {name: "iPad", price: 530, sold:4},
      {name: "watch", price: 530},
    ]}
  ]}
]
*/