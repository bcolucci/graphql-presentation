import { useState } from 'react'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const MIN_LIMIT = 5
const MAX_LINIT = 20

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

const incrementViewsQuery = () => gql`
  mutation incrementViews($emp_no: Int!) {
    incViews(emp_no: $emp_no)
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
              onClick={() => setLimit(Math.max(MIN_LIMIT, limit - 5))}
              disabled={limit === MIN_LIMIT}
            >
              Show less
            </button>
            <button
              onClick={() => setLimit(Math.min(MAX_LINIT, limit + 5))}
              disabled={limit === MAX_LINIT}
            >
              Show more
            </button>
            <Mutation query={incrementViewsQuery()}>
              {incrementViews => (
                <button
                  onClick={() =>
                    incrementViews({ variables: { emp_no: selected } })
                  }
                  disabled={!selected}
                >
                  Increment views
                </button>
              )}
            </Mutation>
          </Fragment>
        )
      }}
    </Query>
  )
}
