const Button = ({type="submit", text, func=()=>{}}) => {
  return (
    <button type={type} onClick={func} className="bg-green-200 w-full p-2 rounded cursor-pointer">{text}</button>
  )
}

export default Button