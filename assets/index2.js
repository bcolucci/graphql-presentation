// pages/index.js
import { Component } from 'react'
import { Container } from 'reactstrap'
import EmployeesDropdown from '../components/EmployeesDropdown'

export default class extends Component {
  render () {
    return (
      <Container>
        <EmployeesDropdown />
      </Container>
    )
  }
}
