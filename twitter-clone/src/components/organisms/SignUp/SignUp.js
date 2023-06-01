import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import style from "./SignUp.module.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Modal from "@mui/material/Modal";
import { BsXLg } from "react-icons/bs";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [day, setDay] = useState("");
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    modalOpen();
  }, [close]);

  const modalOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getName = (e) => {
    setName(e.target.value);
  };

  const getPhone = (e) => {
    setPhone(e.target.value);
  };

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const getMonth = (event) => {
    setMonth(event.target.value);
  };
  const getYear = (e) => {
    setYear(e.target.value);
  };
  const getDay = (e) => {
    setDay(e.target.value);
  };

  const getUserData = (e) => {
    e.preventDefault();
    const nameRegex = /^[A-Za-z\s-]{2,}$/;
    const phoneRegex = /^[\d\s-]{7,15}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(name)) {
    } else if (!phoneRegex.test(phone)) {
    } else if (!emailRegex.test(email)) {
    } else if (month === "" || day === "" || year === "") {
    } else {
      const dateOfBirth = { year, month, day };
      const storedUserData = localStorage.getItem("userData");
      let userData = [];

      if (storedUserData) {
        userData = JSON.parse(storedUserData);
      }

      userData.push({ name, phone, email, dob: dateOfBirth });
      localStorage.setItem("userData", JSON.stringify(userData));

      console.log(userData);

      setName("");
      setPhone("");
      setEmail("");
      setDob("");
      setMonth("");
      setYear("");
      setDay("");
      navigate("/");
    }
  };

  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="registration-modal-title"
      aria-describedby="registration-modal-description"
    
    >
      <div className={style.Container}>
        <span>
          <BsXLg className={style.crossIcon} onClick={handleClose} />
          <span className={style.wrapperCrossIcon}>Step 1 of 5</span>
        </span>
        <form action="" className={style.wrapper}>
          <h2 className={style.heading}>Create your account</h2>

          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            className={style.Name}
            value={name}
            onChange={getName}
            size="medium"
            sx={{ width: "25rem" }}
          />

          <br />

          <TextField
            id="outlined-basic"
            label="Phone"
            variant="outlined"
            className={style.Email}
            value={phone}
            onChange={getPhone}
            size="medium"
            sx={{ width: "25rem" }}
          />

          <br />

          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            className={style.Phone}
            value={email}
            onChange={getEmail}
            sx={{ width: "25rem" }}
          />

          <br />
          <h6 className={style.headingDob}>Date of Birth</h6>
          <div className={style.text}>
            This will not be shown publicly. Confirm your own age, even if this
            account is for a business, a pet, or something else.
          </div>

          <div className={style.container}>
            <FormControl>
              <InputLabel>Month</InputLabel>
              <Select
                value={month}
                onChange={getMonth}
                style={{ minWidth: "200px" }}
              >
                {Array.from(Array(12), (_, i) => i + 1).map((month) => (
                  <MenuItem key={month} value={month} sx={{width:'5rem'}}> 
                    {new Date(0, month).toLocaleString("default", {
                      month: "long",
                    })}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl >
              <InputLabel>Day</InputLabel>
              <Select
              
                value={day}
                onChange={getDay}
                style={{ minWidth: "80px" }}
              >
                {Array.from(Array(31), (_, i) => i + 1).map((day) => (
                  <MenuItem key={day} value={day}>
                    {day}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl>
              <InputLabel>Year</InputLabel>
              <Select
                value={year}
                onChange={getYear}
                style={{ minWidth: "80px" }}
              >
                {Array.from(Array(121), (_, i) => 2023 - i).map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <button
            className={`${style.nextBtn} ${
              !name || !phone || !email || !month || !day || !year
                ? ""
                : style.enabled
            }`}
            onClick={getUserData}
            disabled={!name || !phone || !email || !month || !day || !year}
          >
            Submit
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default SignUp;
