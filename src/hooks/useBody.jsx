import { useState } from "react";

const bodyData = () => {
  const [dataUser, setData] = useState({
    email: "",
    password: "",
    verifyPassword: "",
  });
  const [valideUserData, setValideUserData] = useState({
    email: true,
    password: true,
    verifyPassword: true,
  })
  const handleEmail = (e) => {
    setValideUserData({ ...valideUserData, email: true })
    setData({ ...dataUser, ["email"]: e.target.value });
  };
  const handlePassowrd = (e) => {
    setValideUserData({ ...valideUserData, password: true })
    setData({ ...dataUser, ["password"]: e.target.value });
  };
  const handleVerifyPassword = (e) => {
    setValideUserData({ ...valideUserData, verifyPassword: true })
    setData({ ...dataUser, ["verifyPassword"]: e.target.value });
  };
  const handleValideUserData = (userData) => {
    let valide = {};
    if (userData.email === '' || !userData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      valide.email = false
    }
    if (userData.password === '' || userData.password.length < 6) {
      valide.password = false
    }

    setValideUserData(valide)
    return valide
  }
  return { dataUser, handleEmail, handlePassowrd, handleVerifyPassword, handleValideUserData, valideUserData };
};

export default bodyData;
