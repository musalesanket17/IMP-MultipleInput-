import { useRef, useState } from "react"
import "./otp.css"

type input = {
    totalinput:number,
    handleChnage : (otp:string) =>void
}



export const Costominput =({totalinput,handleChnage} : input)=>{
    const [otp,setOtp] = useState<string>("")
    const Inputref = useRef<HTMLInputElement[]>([])

    return(
        <>
         <h1>Hello</h1>
         {
            new Array(totalinput).fill(0).map((el,index) =>
             <input maxLength={1}
             onChange={(e)=>setOtp(otp+e.target.value)}
             onKeyUp={ (e)=>{
                      
                     if( e.code === "Backspace" ) {
                      Inputref.current[index-1].focus()
                      Inputref.current[index-1].select()
                     }
                else{ Inputref.current[index+1].focus()}
                handleChnage(otp)
                    }
                    
             }
              ref={(el) => {
                // console.log(el)
                if(Inputref.current && el){
                    Inputref.current[index] = el
                }
              }}
              className="otpstyle"
               key={index}/>)
         }
        </>
    )
}