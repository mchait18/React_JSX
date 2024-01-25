function Person(props) {
    let vote;
    if (props.age > 18) {
        vote = "please go vote!"
    } else {
        vote = "you must be 18"
    }
    let name = props.name
    if (name.length > 8)
        name = name.slice(0, 6)
    return (
        <div>
            <p>Learn some information about this person</p>
            <ul>
                <li>Name: {name}</li>
                <li>Age: {props.age}</li>

                <ul>{props.hobbies.map(t =>
                (
                    <li>
                        <b>{t}</b>
                    </li>
                )
                )}</ul>
            </ul>
            <h3>{vote}</h3>
        </div>
    )
}