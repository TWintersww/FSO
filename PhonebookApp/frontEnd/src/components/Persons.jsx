const Persons = (props) => {
    const persons = props.persons
    const filterString = props.filterString

    //if no filter, we just map every entry
    if (filterString.length === 0) {
        return (
        persons.map(person => 
            <div key={person.name}>
                <p>{person.name} {person.number}</p>
                <button onClick={() => props.deleteNumber(person.id)}>delete</button>
                
            </div>
            ))
    }
    //if filter, we first filter, then map every entry from that
    else {
        const personsFiltered = persons.filter(person => person.name.toLowerCase().includes(filterString.toLowerCase()))

        return (
        personsFiltered.map(person => 
            <p key={person.name}>{person.name} {person.number}</p>
        ))
    }
}

export default Persons
