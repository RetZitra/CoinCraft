import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
  const [amount, setamount] = useState("")
  const [from ,setFrom]=useState("usd");
  const [to,setTo]=useState("inr");
  const [convertedAmount,setConvertedAmount]=useState("");
  const currencyInfo=useCurrencyInfo(from);
  const options=Object.keys(currencyInfo);
  const swap=()=>{
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setamount(convertedAmount);
  }
  const convert=()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            //currency change holeo ami jei ammount ta diechi seta jano thake
                            //mne currency usd theke inr korleo ami jei amount ta ei currency thek change korte chaichi seta jano same thake
                            onCurrencyChange={(currency)=>setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount)=>setamount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            //currency change hole ami jei currency te converted ammount ta dekte chaichi seta change hoi jache setTo er jonno inr theke onno kichu hoi jacche..sei according converted amount calculate hoi asche
                            onCurrencyChange={(currency)=>setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toLocaleUpperCase()} to {to.toLocaleUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
