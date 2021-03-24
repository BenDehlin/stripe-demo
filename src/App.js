import "./App.css"
import StripeCheckout from "react-stripe-checkout"
import axios from "axios"
const { REACT_APP_STRIPE_KEY } = process.env

function App() {
  const onToken = (token) => {
    // token.card = void 0
    console.log({ token })
    axios
      .post("/api/payment", { token, amount: 100 })
      .then((res) => alert("success"))
      .catch((err) => console.log(err))
  }
  return (
    <div className="App">
      <div className="App-header">
      <StripeCheckout
        token={onToken}
        stripeKey={REACT_APP_STRIPE_KEY}
        amount={1000}
      />
      </div>
    </div>
  )
}

export default App
