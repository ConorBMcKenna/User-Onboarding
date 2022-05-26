import React from 'react';

const Form = (props) => {
const {change, submit} = props;
const {username, email, password, checked} = props.values

const onChange = (e) => {
    const {name, calue, checked, type} = e.target;
    const newVal = type === 'checkbox' ? checked : value;
    change(name, newVal);
}

const onSubmit = (e) => {
    e.preventDefault();
    submit();
}

    return (
        <div>
            <h1>My great form!</h1>
            <form onSubmit={submit}>
                <label>Name:
                    <input
                        type="text"
                        name="name"
                        value = {username}
                        onChange = {onChange}
                        />
                    
                </label>
                <label>Email:
                    <input
                        type="email"
                        name="email"
                        value = {email}
                        onChange = {onChange}
                        />
                    
                </label>
                <label>Password:
                    <input
                        type="password"
                        name="password"
                        value = {password}
                        onChange = {onChange}
                        />
                    
                </label>
                <label>Term of Service:
                    <input
                        type="checkbox"
                        name="tos"
                        value = {checked}
                        onChange = {onChange}
                        />
                    
                </label>
                <input type="submit" value = "Create a Friend!" />
            </form>
        </div>
    )

}

export default Form;
