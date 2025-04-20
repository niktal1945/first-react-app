const Container = ({children, styles}) => {
  return (
    <div className={`w-1/2 mx-auto p-4 border border-blue-600 rounded flex flex-col gap-[1.5vw] ${styles}`}>{children}</div>
  )
}

export default Container