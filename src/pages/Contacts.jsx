import React, { useEffect, useState } from "react";
import Ellipse01 from "../assets/Ellipse 1.png";
import LeftImage from "../assets/left_bottom.jpg";
import RightImage from "../assets/right_top.jpg";
import Logo from "../assets/02 1.png";
import LogOut from "../assets/bx_log-out-circle.png";
import { Link } from "react-router-dom";
import EditIcon from "../assets/Vector_edit.png";
import DeleteIcon from "../assets/Vector_delete.png";
import MalePhoto from "../assets/male.png";
import FemalePhoto from "../assets/female.png";
import GenderRefreshIcon from "../assets/tabler_refresh.png";
import axios from "axios";
import PopUpModal from "../../components/PopUpModal";
import PopUpConfirmModal from "../../components/PopUpConfirmModal";

function Contacts() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [gender, setGender] = useState("");
  // const [phone, setPhone] = useState("");
  const [updateName, setUpdateName] = useState("");
  const [updateEmail, setUpdateEmail] = useState("");
  const [updateGender, setUpdateGender] = useState("");
  const [updatePhone, setUpdatePhone] = useState("");
  const [users, setUsers] = useState([]);
  const [editUsers, setEditUsers] = useState(-1);
  const [showPopUp, setShowPopUp] = useState(false);
  const [showConfirmPopUp, setShowConfirmPopUp] = useState(false);
  const [deleteUsers, setDeleteUsers] = useState({});
  // const [showDropdown, setShowDropdown] = useState(false);

  const handleGenderChange = () => {
    const newGender = updateGender === "Male" ? "Female" : "Male";
    setUpdateGender(newGender);
  };

  const handleEdit = (_id) => {
    axios
      .get(`http://localhost:3001/editUser/` + _id)
      .then((res) => {
        // setUsers(res.data);
        setUpdateName(res.data.name);
        setUpdateGender(res.data.gender);
        setUpdateEmail(res.data.email);
        setUpdatePhone(res.data.phone);
      })
      .catch((err) => console.log(err));
    setEditUsers(_id);
  };

  const handleUpdate = () => {
    axios
      .put(`http://localhost:3001/editUser/` + editUsers, {
        // _id: editUsers,
        name: updateName,
        email: updateEmail,
        gender: updateGender,
        phone: updatePhone,
      })
      .then((res) => {
        console.log(res);
        setShowConfirmPopUp(true);
        // location.reload();
        // setEditUsers(-1);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3001/deleteUser/${deleteUsers?._id}`)
      // .delete("http://localhost:3001/deleteUser/" + deleteUsers._id)
      .then((res) => {
        console.log(res);
        setShowPopUp(false);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  console.log(deleteUsers);

  const handleClose = (user) => {
    setShowPopUp(false);
    setDeleteUsers(user);
  };
  // const handleConfirmClose = () => {
  //   setShowConfirmPopUp(false);
  //   location.reload();
  //   setEditUsers(-1);
  // };

  const openDelete = (user) => {
    setShowPopUp(true);
    setDeleteUsers(user);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/contacts`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full h-screen relative">

      {/* pop up */}
      <PopUpModal
        onClose={handleClose}
        visible={showPopUp}
        name={deleteUsers?.name}
        deleteFunction={handleDelete}
      />
      {/* end pop up */}

      {/* pop up confirm */}
      <PopUpConfirmModal
        onClose={() => setShowConfirmPopUp(false)}
        visible={showConfirmPopUp}
        updateFunction={() => {
          setShowConfirmPopUp(false); 
          window.location.reload(); 
        }}
      />
      {/* end pop up confirm */}

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

        {/* form */}
        <div className="absolute z-10 sm:mx-5 lg:mx-10 xl:mx-40">
          {/* logo */}
          <div className="lg:mt-20">
            <div className=" flex items-center ">
              <img src={Logo} alt="" className="w-7 h-6" />
              <span className="font-semibold text-2xl text-white">twc</span>
            </div>
            <div className="text-white grid grid-rows-2 grid-flow-col">
              <span className="font-bold text-3xl">contacts</span>
              <span className="font-semibold text-2xl">portal</span>
            </div>
          </div>
          {/* end logo */}
          <div className="flex justify-between mt-20 mb-7">
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
              <table>
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
                    return user._id === editUsers ? (
                      <tr key={index} className="font-normal">
                        <td className="px-10">
                          {/* <img src={user.image} alt="" className="w-10 h-10" /> */}
                          <img src={MalePhoto} alt="" className="w-10 h-10" />
                        </td>
                        <td>
                          <input
                            type="text"
                            name=""
                            id=""
                            value={updateName}
                            className="mx-3 px-1 capitalize bg-gray-300"
                            onChange={(e) => setUpdateName(e.target.value)}
                          />{" "}
                        </td>
                        <td className="flex">
                          {/* <input
                          type="text"
                          name=""
                          id=""
                          value={updateGender}
                          className="mx-3 px-1 capitalize bg-gray-300"
                          onChange={(e) => setUpdateGender(e.target.value)}
                        />{" "}
                        <img src={GenderRefreshIcon} alt="" /> */}

                          {/* test */}
                          {/* <div className="relative">
                            <input
                              type="text"
                              name=""
                              id=""
                              value={updateGender}
                              className="mx-3 px-1 my-2 capitalize bg-gray-300"
                              onChange={(e) => setUpdateGender(e.target.value)}
                              onFocus={() => setShowDropdown(true)}
                              readOnly // Prevent typing directly into the input
                            />
                            {showDropdown && (
                              <div className="absolute top-full left-0 z-10 bg-white border border-gray-300 shadow-lg rounded-md">
                                <ul>
                                  <li
                                    onClick={() => handleGenderSelect("Male")}
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                  >
                                    Male
                                  </li>
                                  <li
                                    onClick={() => handleGenderSelect("Female")}
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                  >
                                    Female
                                  </li>
                                </ul>
                              </div>
                            )}
                            <button onClick={() => setUpdateGender("")}>
                              <img
                                src={GenderRefreshIcon}
                                alt=""
                                className="absolute right-2 top-0 w-6 h-6 m-2 cursor-pointer"
                              />
                            </button>
                          </div> */}
                          <div className="relative">
                            <input
                              type="text"
                              value={updateGender}
                              className="mx-3 px-1 my-2 w-28 capitalize bg-gray-300"
                              readOnly // Prevent typing directly into the input
                            />
                            <button onClick={handleGenderChange}>
                              <img
                                src={GenderRefreshIcon}
                                alt=""
                                className="absolute right-2 top-0 w-6 h-6 m-2 cursor-pointer"
                              />
                            </button>
                          </div>
                          {/* end test */}
                        </td>
                        <td>
                          <input
                            type="email"
                            name=""
                            id=""
                            value={updateEmail}
                            className="mx-3 px-1 bg-gray-300"
                            onChange={(e) => setUpdateEmail(e.target.value)}
                          />{" "}
                        </td>
                        <td>
                          <input
                            type="text"
                            name=""
                            id=""
                            value={updatePhone}
                            className="mx-3 px-1 bg-gray-300"
                            onChange={(e) => setUpdatePhone(e.target.value)}
                          />{" "}
                        </td>
                        <td className=" ">
                          <button
                            onClick={handleUpdate}
                            // onClick={() => setShowConfirmPopUp(false)}
                            className=" items-center justify-center my-auto"
                          >
                            <span className="text-white bg-primary rounded-full px-3 py-1 text-sm font-normal mx-auto items-center justify-center">
                              save
                            </span>
                          </button>
                        </td>
                      </tr>
                    ) : (
                      <tr key={index} className="font-normal">
                        <td className="px-10">
                          {/* <img src={user.image} alt="" className="w-10 h-10" /> */}
                          <img src={user.gender === "Male" ? MalePhoto : FemalePhoto} alt="" className="w-10 h-10" />
                        </td>
                        <td className="px-10 capitalize">{user.name}</td>
                        <td className="px-10">{user.gender}</td>
                        <td className="px-10">{user.email}</td>
                        <td className="px-10">{user.phone}</td>
                        <td className="px-10 ">
                          <div className="flex items-center justify-center gap-4 my-auto">
                            <button onClick={() => handleEdit(user._id)}>
                              <img src={EditIcon} alt="" className="w-4 h-4" />
                            </button>
                            <button onClick={() => openDelete(user)}>
                              <img
                                src={DeleteIcon}
                                alt=""
                                className="w-4 h-4"
                              />
                            </button>
                            {/* <button onClick={() => setShowPopUp(user._id)}>
                            <img src={DeleteIcon} alt="" className="w-4 h-4" />
                          </button> */}
                            {/* <button onClick={() => handleDelete(user._id)}>
                            <img src={DeleteIcon} alt="" className="w-4 h-4" />
                          </button> */}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* end form */}

        <div className="absolute z-10 right-14 bottom-12 ">
          <Link
            to="/login"
            className="underline text-white font-normal text-2xl flex items-center gap-4"
          >
            <img src={LogOut} alt="" className="w-[43px] h-[43px] " />
            <span>logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
