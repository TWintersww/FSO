const Filter = (props) => {
    return (
        <div>
        filter shown with <input value={props.filterString} onChange={props.onChange} />
        </div>
    )
}

export default Filter
