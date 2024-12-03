import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/home";
import RegisterForm from "./components/register_form";
import InboxRegisterForm from "./components/inbox_register_form";
import NotificationForm from "./components/notification_form";
import IndividualNotificationForm from "./components/individual_notification_form";
import Excel from "./components/excel";
import Order from "./components/order";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/inbox" element={<InboxRegisterForm />} />
        <Route path="/notification" element={<NotificationForm />} />
        <Route path="/individual" element={<IndividualNotificationForm />} />
        <Route path="/excel" element={<Excel />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
