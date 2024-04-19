// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const Modal = ({ pokemon }) => {
//     const [pokeInfo, setPokeInfo] = useState([]);

//     useEffect(() => {
//       getData();
//     }, [pokemon]);
    
//     const getData = async () => {
//         try {
//             const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}/`);
//             setPokeInfo(response.data);
//         } catch (error) {
//             console.log(error);
//         }
//     }
    
//     return (
//         <div>
//             <dialog id="my_modal_3" className="modal">
//                 <div className="modal-box">
//                     <form method="dialog">
                    
//                     <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
//                     </form>
//                     <h3 className="font-bold text-lg">hello {pokeInfo.name}</h3>
//                     <p className="py-4">Press ESC key or click on ✕ button to close</p>
//                 </div>
//             </dialog>
//         </div>
        
//     );
// };

// export default Modal;