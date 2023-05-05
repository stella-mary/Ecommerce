import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Cart from './scenes/cart';
import Payment from './scenes/payment'
import Bill from './scenes/bill'
import Product from './scenes/product'
import Shop1 from './scenes/shop1'
import CheckOut1 from './scenes/checkOut1'
import CheckOut2 from './scenes/checkOut2'
import PaymentComplete1 from "./scenes/paymentComplete1";
import PaymentComplete2 from "./scenes/paymentComplete2";



function App() {

  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className="app">

          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              {/* <Route path="/" element={<Dashboard />} /> */}
              <Route path="cart" element={<Cart />} />
              <Route path="payment" element={<Payment />} />
              <Route path="bill" element={<Bill />} />
              <Route path="product" element={<Product />} />
              <Route path="shop1" element={<Shop1 />} />
              <Route path="checkout1" element={<CheckOut1 />} />
              <Route path="checkout2" element={<CheckOut2 />} />
              <Route path="Complete1" element={<PaymentComplete1 />} />
              <Route path="Complete2" element={<PaymentComplete2 />} />

            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
