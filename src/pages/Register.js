import React from 'react'
import "./Register.css"

const inputs = [
    {
        type: "text",
        label: "imie",
        name: "name"
    },
    {
        type: "text",
        label: "nazwisko",
        name: "surname"
    },
    {
        type: "text",
        label: "kraj",
        name: "country"
    },

    {
        type: "email",
        label: "email",
        name: "email"
    },
    {
        type: "password",
        label: "haslo",
        name: "password"
    }

]



class Register extends React.Component {

    state = {
        formValues: {
            name: "",
            surname: "",
            country: "",
            email: "",
            password: ""
        },
        error: {
            text: "",
            name: ""
        }
    }

    change = (e) => {
        this.setState({
            formValues: {
                ...this.state.formValues,
                [e.target.name]: e.target.value
            }
        })
    }

    submit = (e) => {
        e.preventDefault()

        let isError = false,
            { formValues } = this.state,
            error = {
                text: "",
                name: ""
            }

        for (let key in formValues) {
            console.log(key)
            if (key === "name" && formValues[key].length < 3) {
                isError = true
                error.text = "Minimalna ilość znaków to 3"
                error.name = key
                break
            } else if (key === "surname" && formValues[key].length < 5) {
                isError = true
                error.text = "Minimalna ilość znaków to 5"
                error.name = key
                break
            } else if (key === "email" && formValues[key].includes("@") === false) {
                isError = true
                error.text = "To nie jest email"
                error.name = key
                break
            }
        }

        if (isError) {
            this.setState({
                error
            })
        } else {
            this.setState({
                error: {
                    text: "",
                    name: ""
                }
            })
            //zapytania http
        }

    }

    render() {
        return (
            <div className="register-form">
                <form onSubmit={this.submit} noValidate>
                    {
                        inputs.map((value, index) => {
                            return (
                                <div key={index} className="form-group">
                                    <label>{value.label}</label>
                                    <input type={value.type} name={value.name} onChange={this.change} />
                                    <p className="form-error">
                                        {
                                            this.state.error.name === value.name ?
                                                this.state.error.text :
                                                ""
                                        }
                                    </p>
                                </div>
                            )
                        })
                    }
                    <button type="submit">przeslij</button>
                </form>
            </div>
        )
    }
}
export default Register