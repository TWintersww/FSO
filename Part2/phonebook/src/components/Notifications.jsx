const Notifications = (props) => {

    const notifStyle = {
        color: 'green',
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

export default Notifications
