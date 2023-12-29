const PersonLine = ({ name, number, onDelete }) => {
  return (
    <p>
      {name} {number}
      <button onClick={onDelete}>delete</button>
    </p>
  )
}

const Persons = ({ persons, onDeletePerson }) => {
  return (
    <div>
      {
        persons.map(({ name, number, id }) => (
          <PersonLine
            key={name}
            name={name}
            number={number}
            onDelete={() => onDeletePerson(name, id)}
          />
        ))
      }
    </div>
  )
}

export default Persons