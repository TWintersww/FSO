const ErrorMessage = (props) => {

    const notifStyle = {
        color: 'red',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    }

    if (props.message === null) {
        return null
    }

    return (
        <div className="notification" style={notifStyle}>
            {props.message}
        </div>
    )
}

export default ErrorMessage
