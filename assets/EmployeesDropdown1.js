// src/components/EmployeesDropdown.js
import { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

export default class extends Component {
  state = {
    open: false,
    selected: null
  }

  employeesQuery = () => gql`
    {
      employees {
        emp_no
        full_name
      }
    }
  `

  onChange = empNo => this.setState({ selected: empNo })

  renderDropdown (employees) {
    const { open, selected } = this.state
    const selectedEmployee = selected
      ? employees.find(({ emp_no }) => emp_no === selected)
      : null
    return (
      <Dropdown
        isOpen={open}
        toggle={() => this.setState(state => ({ open: !state.open }))}
      >
        <DropdownToggle caret>
          {selectedEmployee
            ? selectedEmployee.full_name
            : '-- Select an employee --'}
        </DropdownToggle>
        <DropdownMenu>
          {employees.map(employee => (
            <DropdownItem
              active={selected === employee.emp_no}
              onClick={() => this.onChange(employee.emp_no)}
            >
              {employee.full_name}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    )
  }

  render () {
    return (
      <Query query={this.employeesQuery()}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error :(</p>
          return this.renderDropdown(data.employees)
        }}
      </Query>
    )
  }
}
