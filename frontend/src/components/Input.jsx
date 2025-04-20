const Input = ({type, id, text, value, setValue}) => {
  return (
    <div className="flex justify-between">
        <label htmlFor={id}>{text}</label>
        <input type={type} id={id} className="border w-[20vw]" value={value} onChange={e => setValue(e.target.value)} />
    </div>
  )
}

export default Input