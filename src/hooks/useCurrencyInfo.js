import { useEffect,useState } from "react";
//eta holo custom hook
//usestate jamon puro function ta kei return kore sesh e tamon amra ekhane hook(usecurrencyinfo) take return korchi export kore
//ar hook/function er modddhe ki return hocche na ekta data jeta change hocche seta..data take kivabe change korchi sei functionallity ta kora ache amr hook er modddhe..ar data take change jokhon korchi seta hook ke kano korte hocche? na data ta change hole amk ui te show korte hobe
//ar useeffect ta use korchi karon currency ta change hole amk api ta bar bar call korte hobe ar data-te sei rokhom value dhukbe...basically function ta call hobe with different currency value ar sei jonno data er value change hobe ar data er value change hole usestate hook er jonno seta ui teo change korbe
//detail explain kora ache recoding e
function useCurrencyInfo(currency){
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        // console.log(data);
    },[currency])
    return data;
}
export default useCurrencyInfo;