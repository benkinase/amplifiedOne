import React from "react";

export default function ItemList() {
  return <div>pets</div>;
}

// import React, { useContext } from "react";
// import { PetContext } from "../contexts/PetContext";
// //import Fuse from "fuse.js";

// function PetList() {
//   //const { pets, deletePet, findItem } = useContext(PetContext);

//   const PETS = (
//     <div className='pet-list container white-text'>
//       <table className='table pet-detail '>
//         <thead className='thead-light'>
//           <tr>
//             <th>name</th>
//             <th>age</th>
//             <th>Date</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {pets &&
//             pets.map((pet, index) => {
//               return (
//                 <tr key={index}>
//                   <td>{pet.name}</td>
//                   <td>{pet.age}</td>
//                   <td>{pet.date}</td>
//                   <td>
//                     <i
//                       onClick={() => deletePet(pet.id)}
//                       className='fas fa-trash-alt'
//                     ></i>

//                     <i
//                       onClick={() => findItem(pet.id)}
//                       className='fas fa-edit edit space'
//                     ></i>
//                   </td>
//                 </tr>
//               );
//             })}
//         </tbody>
//       </table>
//     </div>
//   );
//   const NOPETS = <div className='empty'>Empty collection</div>;

//   if (pets.length > 0) {
//     return PETS;
//   } else {
//     return NOPETS;
//   }
// }

// export default PetList;
