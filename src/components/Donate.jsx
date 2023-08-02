import { useState } from "react"
import { initMercadoPago,Wallet } from "@mercadopago/sdk-react"
import axios from "axios"
import Swal from "sweetalert2"

const Donate = () => {
    const [amount, setAmount] = useState(1)
    const [totalAmount, setTotalAmaunt] = useState(1000)

    const [preferenceId, setPreferenceId] = useState(null)
    initMercadoPago("TEST-bc45c023-8684-45ab-92dc-c8bac5c0f3c6");

    const handleButtonclick =(amount)=>{
        setAmount(amount);
        setTotalAmaunt(amount * 1000)
    }
    const handleInputChange = (e)=>{
        setAmount(e.target.value)
        setTotalAmaunt(e.target.value * 1000)
    }
    //mercado pago functions
    const createPreference= async()=>{
        
        try {
            const response = await axios.post("http://localhost:8080/create_preference",{
                description :"gracias por las donaciones",
                price: totalAmount,
                quantity: 1
            });
            const {id}= response.data;
            return id
        } catch (error) {
            console.log(error);
            
        }
    };
    const handleBuy = async()=>{
        const id = await createPreference();
        if (id){
            setPreferenceId(id)
            console.log("este es el id",id);
        }
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Abriendo Enlace de MercadoPago!',
            showConfirmButton: false,
            timer: 1500,
          });
    };
    
  return (
    <div className="w-full bg-cyan-400 h-[100vh] flex justify-center flex-col items-center gap-2">


        <div className="w-full bg-cyan-400 h-[100vh] flex justify-center flex-col items-center gap-2" >
            <div className="flex gap-4 text-[30px] font-bold">
                <button type="button" className=" donate-button" onClick={()=>handleButtonclick(1)}>💵$1000 COP</button>
                <button type="button" className="donate-button" onClick={()=>handleButtonclick(5)}>💵$5000 COP</button>
                <button type="button" className="donate-button" onClick={()=>handleButtonclick(10)}>💵$10000 COP</button>
            </div>
            <div className="input-container gap-2 flex flex-col text-[30px]">
                <input type="number" className="text-black donate-input text-[30px]" onChange={handleInputChange} min={1} value={amount} />
                <p className="donate-parrafo">Dona {amount} {amount == 1?"vez":"veces"} y ayuda a un programador ${totalAmount} COP</p>
            </div>
            <div className="flex flex-col justify-center items-center text-[30px]">
                <button className="font-bold donate-link w-60 rounded-full bg-cyan-600" onClick={handleBuy}>DONATE 💝</button>
                {preferenceId && <Wallet initialization={{ preferenceId}}/>}
            </div>
        
        </div>
        <div>

        </div>
    </div>
  )
}

export default Donate