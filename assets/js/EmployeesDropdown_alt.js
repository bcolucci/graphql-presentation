import { useState } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const employeeLabel = ({ views, full_name }) => `(${views}) ${full_name}`

const employeesQuery = limit => gql`
{
  employees(limit: ${limit}) {
    emp_no
    full_name
    views
  }
}
`

export default props => {
  const [limit, setLimit] = useState(5)
  const [selected, setSelected] = useState(props.selected)
  return (
    <Query query={employeesQuery(limit)}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(</p>
        return (
          <Fragment>
            <select
              disabled={!data.employees.length}
              value={selected}
              onChange={({ target }) => setSelected(+target.value)}
            >
              <option value={0}>-- Select an employee --</option>
              {data.employees.map(employee => (
                <option value={employee.emp_no}>
                  {employeeLabel(employee)}
                </option>
              ))}
            </select>
            <button
              onClick={() => setLimit(Math.max(5, limit - 5))}
              disabled={limit === 5}
            >
              Show less
            </button>
            <button
              onClick={() => setLimit(Math.min(20, limit + 5))}
              disabled={limit === 20}
            >
              Show more
            </button>
            <button onClick={incrementView} disabled={!selected}>
              Increment views
            </button>
          </Fragment>
        )
      }}
    </Query>
  )
}
