import { ChangeEvent, FormEvent, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";


const ProductManagement = () => {

  const [name,setName]=useState<string>("Puma Shoes")
  const [price,setPrice]=useState<number>(1000)
  const [stock,setStock]=useState<number>(20)
  const [photo,setPhoto]=useState<string>(img)

  const [nameUpdated,setNameUpdated]=useState<string>(name)
  const [priceUpdated,setPriceUpdated]=useState<number>(price)
  const [stockUpdated,setStockUpdated]=useState<number>(stock)
  const [photoUpdated,setPhotoUpdated]=useState<string>(photo)

  const changeImageHandler=(e:ChangeEvent<HTMLInputElement>)=>{
    const file:File | undefined=e.target.files?.[0]

    const reader:FileReader=new FileReader()

    if(file)
    {
      reader.readAsDataURL(file)
      reader.onloadend=()=>{
        if(typeof reader.result==="string") setPhotoUpdated(reader.result)
      }
    }
  }

  const submitHandler=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    setName(nameUpdated)
    setPrice(priceUpdated)
    setStock(stockUpdated)
    setPhoto(photoUpdated)
  }

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="productManagement">

        <section>
          <strong>ID - sdfsdfksmdnfknsdkfns</strong>
          <img src={photo} alt="Product" />
          <p>{name}</p>
          {
            stock>0 ? (
              <span className="green">{stock} Available</span>
            ):(
              <span className="red">Not Available</span>
            )
          }
          <h3>${price}</h3>
        </section>

    <article>
      <form onSubmit={(e)=>submitHandler(e)}>
        <h2>Manage</h2>
        <div>
          <label>Name</label>
          <input type="text" placeholder="Name" value={nameUpdated} onChange={(e)=>setNameUpdated(e.target.value)} required/>
        </div>
        <div>
          <label>Price</label>
          <input type="number" placeholder="Price" value={priceUpdated} onChange={(e)=>setPriceUpdated(Number(e.target.value))} required/>
        </div>
        <div>
          <label>Stock</label>
          <input type="number" placeholder="Stock" value={stockUpdated} onChange={(e)=>setStockUpdated(Number(e.target.value))} required/>
        </div>
        <div>
          <label>Photo</label>
          <input type="file" onChange={(e)=>changeImageHandler(e)} />
        </div>

        {
          photoUpdated && <img src={photoUpdated} alt="New Image" />
        }

        <button type="submit">Update</button>
      </form>
    </article>

      </main>
    </div>
  );
};


export default ProductManagement
