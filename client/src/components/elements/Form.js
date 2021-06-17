import React from 'react';

/* Props
=================================================== */
// onSubmit: Function
// format: String | half, full
// type: String
// name: String


/* Sub Components
=========================================== */
// FormContainer
// Heading
// Input
// SubmitButton



const Form = ({ onSubmit, children }) => {
    return (
        <form onSubmit={onSubmit}>
            {children}
        </form>
    )
}

export const FormContainer = ({ children, format }) => {
    return (
        <div className={`form-container ${format && format}`}>
            { children}
        </div>
    )
}

export const Heading = ({ children }) => {
    return (
        <h1 className="form-heading">
            { children}
        </h1>
    )
}

export const Input = ({ placeholder, value, onChange, type, name }) => {
    return (
        <input id={name} name={name} autoComplete="off" autoCapitalize="none" type="text" placeholder={placeholder} value={value} onChange={onChange} type={type} />
    )
}

export const SubmitButton = ({ title }) => {
    return (
        <button type="submit">{title}</button>
    )
}

Input.defaultProps = {
    type: "text"
}

export default Form;
