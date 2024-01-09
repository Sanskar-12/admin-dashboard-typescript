import {useNavigate} from "react-router-dom"

const Click = () => {

    const navigate=useNavigate()

    const handleClick=()=>{
        navigate("/admin/dashboard")
    }

  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Click
