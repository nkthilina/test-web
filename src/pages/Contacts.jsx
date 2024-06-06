import  { useEffect, useState } from "react";
import Ellipse01 from "../assets/Ellipse 1.png";
import LeftImage from "../assets/left_bottom.jpg";
import RightImage from "../assets/right_top.jpg";
// import Logo from "../assets/02 1.png";
import LogOut from "../assets/bx_log-out-circle.png";
import { Link } from "react-router-dom";
import EditIcon from "../assets/Vector_edit.png";
import DeleteIcon from "../assets/Vector_delete.png";
import MalePhoto from "../assets/male.png";
import FemalePhoto from "../assets/female.png";
import GenderRefreshIcon from "../assets/tabler_refresh.png";
import InputCursorIcon from "../assets/Rectangle 2.png";
import axios from "axios";
import DeleteConfirmModal from "../../components/DeleteConfirmModal";
import UpdateConfirmModal from "../../components/UpdateConfirmModal";
// import DeleteSuccessModal from "../../components/DeleteSuccessModal";

function Contacts() {
  const [users, setUsers] = useState([]);
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [gender, setGender] = useState("");
  // const [phone, setPhone] = useState("");
  const [updateName, setUpdateName] = useState("");
  const [updateEmail, setUpdateEmail] = useState("");
  const [updateGender, setUpdateGender] = useState("");
  const [updatePhone, setUpdatePhone] = useState("");
  const [editUsers, setEditUsers] = useState(-1);
  const [showPopUp, setShowPopUp] = useState(false);
  const [showConfirmPopUp, setShowConfirmPopUp] = useState(false);
  const [deleteUsers, setDeleteUsers] = useState({});
  

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
        setEditUsers(-1);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3001/deleteUser/${deleteUsers?._id}`)
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

  
  const openDelete = (user) => {
    setShowPopUp(true);
    setDeleteUsers(user);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/contacts`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));

      return () => {
        setEditUsers(-1);
      };
  }, []);

  return (
    <div className="w-full h-screen relative font-poppins">
      {/* pop up */}
      <DeleteConfirmModal
        onClose={handleClose}
        visible={showPopUp}
        name={deleteUsers?.name}
        deleteFunction={handleDelete}
      />
      {/* end pop up */}

      {/* pop up confirm */}
      <UpdateConfirmModal
        title="Your contact has been saved successfully!"
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
            {/* <div className=" flex items-center ">
              <img src={Logo} alt="" className="w-7 h-6" />
              <span className="font-semibold text-2xl text-white">twc</span>
            </div> */}
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
          <div className="text-primary bg-white rounded-[30px]  px-4 sm:px-8  overflow-x-auto">
            <div className="pt-[12px] pb-[31px] inline-block min-w-full  rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead className="">
                  <tr className="px-1 mb-5">
                    <th className=""></th>
                    <th className=" whitespace-nowrap text-left py-3 ">full name</th>
                    <th className="text-left py-3">gender</th>
                    <th className="text-left py-3">e-mail</th>
                    <th className="text-left whitespace-nowrap py-3">phone number</th>
                    <th className="text-left "></th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => {
                    return user._id === editUsers ? (
                      <tr key={index} className="font-normal mb-5">
                        <td className="px-10">
                        <img
                            src={
                              user.gender === "Male" ? MalePhoto : FemalePhoto
                            }
                            alt=""
                            className="w-10 h-10"
                          />
                        </td>
                        <td>
                          <div className="relative flex">
                            <input
                              type="text"
                              name=""
                              id=""
                              value={updateName}
                              className=" px-1 py-1 mr-3 capitalize bg-gray-300 "
                              onChange={(e) => setUpdateName(e.target.value)}
                            />
                            <img
                              src={InputCursorIcon}
                              alt=""
                              className="absolute right-8 top-1 w-0.5 h-6  cursor-pointer"
                            />
                          </div>
                        </td>
                        <td className="flex">
                          <div className="relative">
                            <input
                              type="text"
                              value={updateGender}
                              className="mr-3 px-1 py-1 my-2 w-28 capitalize bg-gray-300"
                              readOnly
                            />
                            <button onClick={handleGenderChange}>
                              <img
                                src={GenderRefreshIcon}
                                alt=""
                                className="absolute right-2 top-1 w-6 h-6 m-2 cursor-pointer"
                              />
                            </button>
                          </div>
                        </td>
                        <td>
                          <div className="relative">
                            <input
                              type="email"
                              name=""
                              id=""
                              value={updateEmail}
                              className=" px-1 py-1 mr-3 bg-gray-300"
                              onChange={(e) => setUpdateEmail(e.target.value)}
                            />
                            <img
                              src={InputCursorIcon}
                              alt=""
                              className="absolute right-8 top-1 w-0.5 h-6  cursor-pointer"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="relative">
                            <input
                              type="text"
                              name=""
                              id=""
                              value={updatePhone}
                              className=" px-1 py-1 mr-3 capitalize bg-gray-300"
                              onChange={(e) => setUpdatePhone(e.target.value)}
                            />
                            <img
                              src={InputCursorIcon}
                              alt=""
                              className="absolute right-8 top-1 w-0.5 h-6  cursor-pointer"
                            />
                          </div>
                        </td>
                        <td className="flex items-center justify-center">
                          <button
                            onClick={handleUpdate}
                            className=" "
                          >
                            <span className="text-white  bg-primary rounded-full px-3 py-1 text-sm font-normal">
                              save
                            </span>
                          </button>
                        </td>
                      </tr>
                    ) : (
                      <tr key={index} className="font-normal mb-10">
                        <td className="px-10">
                          <img
                            src={
                              user.gender === "Male" ? MalePhoto : FemalePhoto
                            }
                            alt=""
                            className="w-10 h-10"
                          />
                        </td>
                        <td className=" capitalize text-start w-60">{user.name}</td>
                        <td className="w-32">{user.gender}</td>
                        <td className="w-60">{user.email}</td>
                        <td className="w-60">{user.phone}</td>
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
