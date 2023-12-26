const PersonLine = ({ name, number }) => <p>{name} {number}</p>

const Persons = ({ persons }) => {
  return (
    <div>
      {persons.map(({ name, number }) => <PersonLine key={name} name={name} number={number} />)}
    </div>
  )
}

export default Persons