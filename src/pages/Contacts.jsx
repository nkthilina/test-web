import React, { useEffect, useState } from "react";
import Ellipse01 from "../assets/Ellipse 1.png";
import LeftImage from "../assets/left_bottom.jpg";
import RightImage from "../assets/right_top.jpg";
import Logo from "../assets/02 1.png";
import TWC_Text from "../assets/TWC_Logo_Revamp_2021 1.png";
import ContactsPortal from "../assets/contacts portal.png";
import LogOut from "../assets/bx_log-out-circle.png";
import { Link } from "react-router-dom";
import EditIcon from "../assets/Vector_edit.png";
import DeleteIcon from "../assets/Vector_delete.png";
// import MalePhoto from "../assets/male.png";
import FemalePhoto from "../assets/female.png";
import axios from "axios";

function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); 
  const [gender, setGender] = useState("male");
  const [phone, setPhone] = useState("");
  const [users, setUsers] = useState([]);
  const [editUsers, setEditUsers] = useState(-1);

  const handleEdit = (id) => {
setEditUsers(id);
  };

  const handleUpdate = (id) => {  
    axios
      .put(`http://localhost:3001/contacts/`+editUsers, {
        name: name,
        email: email,
        gender: gender,
        phone: phone,
        // name: users[editUsers].name,
        // email: users[editUsers].email,
        // gender: users[editUsers].gender,
        // phone: users[editUsers].phone,
      })
      .then((res) => {
        console.log(res);
        location.reload();
        setEditUsers(-1);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      // .get("mongodb://localhost:27017")
      .get("http://localhost:3001/contacts")
      // .get("http://localhost:3001/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full h-screen relative">
      <div className="relative w-full h-screen flex">
        {/* bg image */}
        <img
          src={Ellipse01}
          alt=""
          className="  w-full h-full object-cover z-10"
        />
        <div className="absolute left-0 bottom-0">
          <img src={LeftImage} alt="" className="w-60 h-60" />
        </div>
        <div className="absolute right-0 top-0">
          <img src={RightImage} alt="" className="w-60 h-60" />
        </div>
        {/* end bg image */}

        {/* logo */}
        <div className="">
          <div className="absolute z-10 flex left-10 top-10">
            <img src={Logo} alt="" className="" />
            <img src={TWC_Text} alt="" className="" />
          </div>
          <div className="absolute z-10 flex left-16 top-16">
            <img src={ContactsPortal} alt="" className="" />
          </div>
        </div>
        {/* end logo */}

        {/* form */}
        <div className="absolute z-10 mt-60 mx-40">
          <div className="flex justify-between mb-7">
            <h1 className=" text-white capitalize font-bold text-5xl">
              Contacts
            </h1>
            <Link
              to="/contacts/new"
              className="border rounded-full border-solid my-auto py-1 px-8 text-white text-normal"
            >
              add new contact
            </Link>
          </div>
          <div className="text-primary bg-white rounded-[30px]">
            <div className="pt-[12px] pb-[31px]">
              <thead className="">
                <tr className="px-1">
                  <th className="px-10"></th>
                  <th className="px-10 whitespace-nowrap">full name</th>
                  <th className="px-10">gender</th>
                  <th className="px-10">e-mail</th>
                  <th className="px-10 whitespace-nowrap">phone number</th>
                  <th className="px-10"></th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => {
                  return ( user.id === editUsers ? (
                    <tr key={index} className="font-normal">
                      <td className="px-10">
                        {/* <img src={user.image} alt="" className="w-10 h-10" /> */}
                        <img src={FemalePhoto} alt="" className="w-10 h-10" />
                      </td>
                      <td><input type="text" name="" id="" value={user.name} className="px-10 capitalize" onChange={(e) => setName(e.target.value)}/> </td>
                      <td><input type="text" name="" id="" value={user.gender} className="px-10 capitalize" onChange={(e) => setGender(e.target.value)}/> </td>
                      <td><input type="email" name="" id="" value={user.email} className="px-10 " onChange={(e) => setEmail(e.target.value)}/> </td>
                      <td><input type="text" name="" id="" value={user.phone} className="px-10 " onChange={(e) => setPhone(e.target.value)}/> </td>
                      <td className=" ">
                        <button onClick={handleUpdate} className=" items-center justify-center my-auto">
                            <img src={EditIcon} alt="" className="w-4 h-4" />
                          </button>
                      </td>
                    </tr>                 
                   ) : (
                    <tr key={index} className="font-normal">
                      <td className="px-10">
                        {/* <img src={user.image} alt="" className="w-10 h-10" /> */}
                        <img src={FemalePhoto} alt="" className="w-10 h-10" />
                      </td>
                      <td className="px-10 capitalize">{user.name}</td>
                      <td className="px-10">{user.gender}</td>
                      <td className="px-10">{user.email}</td>
                      <td className="px-10">{user.phone}</td>
                      <td className="px-10 ">
                        <div className="flex items-center justify-center gap-4 my-auto">
                          <button onClick={() => handleEdit(user.id)}>
                            <img src={EditIcon} alt="" className="w-4 h-4" />
                          </button>
                          <Link to="/contacts/delete">
                            <img src={DeleteIcon} alt="" className="w-4 h-4" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                   )
                  )
                    
                })}
                
              </tbody>
            </div>
          </div>
        </div>
        {/* end form */}

        <div className="absolute z-10 right-14 bottom-12 flex text-center justify-items-center">
          <img src={LogOut} alt="" className="w-[43px] h-[43px]" />
          <Link to="/login" className="underline text-white font-normal ">
            logout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
