import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/home";
import NotificationForm from "./components/notification_form";
import InboxForm from "./components/inbox_form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inbox" element={<InboxForm />} />
        <Route path="/notification" element={<NotificationForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
