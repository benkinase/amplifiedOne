// import React, { useContext, useState, useEffect } from "react";
// import { PetContext } from "../contexts/PetContext";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const ItemForm = () => {
//   const { addPet, clearList, editItem, editPet } = useContext(PetContext);
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [date, setDate] = useState(new Date());

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!editItem) {
//       addPet(name, age, date);

//       setName("");
//       setAge("");
//       setDate("");
//     } else {
//       editPet(name, age, date, editItem.id);
//     }
//   };
//   console.log(name, age, date);
//   useEffect(() => {
//     if (editItem) {
//       setName(editItem.name);
//       setAge(editItem.age);
//       setDate(editItem.date);
//     } else {
//       setName("");
//       setAge("");
//       setDate("");
//     }
//   }, [editItem, addPet]);

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="orange-text">
//         <div className="input-field">
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//             className="input"
//             placeholder="name"
//           />
//         </div>
//         <div className="input-field">
//           <input
//             type="number"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//             className="input"
//             required
//             placeholder="Age"
//           />
//         </div>
//         <div className="input-field">
//           <DatePicker selected={date} onChange={(d) => setDate(d)} />
//         </div>
//         <div className="buttons">
//           <button type="submit" className="btns">
//             {editItem ? "Edit Pet" : "Add Pet"}
//           </button>
//           <button className="clear btns" onClick={clearList}>
//             Clear
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ItemForm;
