const Filter = ({ filterName, onChangeFilter }) => {
  return (
    <div>
      filter shown with <input value={filterName} onChange={onChangeFilter} />
    </div>
  )
}

export default Filter