import React from 'react'
import { withRouter, Link } from 'react-router-dom'

const routes = [
    {
        path: "/register",
        label: "Register"
    },
    {
        path: "/register/plan",
        label: "Plan"
    }
]

const Navigation = (props) => {
    console.log(props.location)
    return (
        <ul>
            {
                routes.map((value, index) => (
                    props.location.pathname === value.path ?
                        "" :
                        <li>
                            <Link to={value.path}>{value.label}</Link>
                        </li>
                ))
            }
        </ul>
    )
}

export default withRouter(Navigation)