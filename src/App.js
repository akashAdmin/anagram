// import React from "react";

// import axios from "axios";
// import { useEffect } from "react";

// function Car (props){
//   return(
// <li>{props.brand}</li>
// )}
// const App =()=> {
//   const cars= ["bmw", "audi","benz"]
//   return(
//     <ul>
//       {cars.map((car,index)=>(
//         <Car key={index} brand={car}/>
//       ))}
//     </ul>
//    )}
// export default App  



// import React, { useState } from "react";

// function App() {

//   const list = [
//     "Banana",
//     "Apple",
//     "Orange",
//     "Mango",
//     "Pineapple",
//     "Watermelon"
//   ];

//   const [filterList, setFilterList] = useState(list);

//   const handleSearch = (event) => {

//     if (event.target.value === "") {
//       setFilterList(list);
//       return;
//     }
//     const filteredValues = list.filter(
//       (item) =>
//         item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
//     );
//     setFilterList(filteredValues);
//   };
//   return (
//     <div className="app">
//       <div>
//         Search: <input name="query" type="text" onChange={handleSearch} />
//       </div>
//       {filterList &&
//         filterList.map((item, index) => (
//           <div key={index}>{item}</div> //Display each item
//         ))}
//     </div>
//   );
// }

// export default App;



// import  React,{ useState } from "react";

// const App = ()=>{
//   const [state,setState]=useState(0);
//  return(
//     <div>
//       <h2>{state}</h2>
//       <button onClick={()=>{
//         setState(state+1)
//       }}></button>
//        <button onClick={()=>{
//         setState(state-1)
//       }}></button>
// </div>
//   )
// }
// export default App;


// import React from "react";


// const Cars =["bmw", "audi","benz","RR"]
// const App =()=>{
// return(
//   <div>
//     <ul>
//       {Cars.map((car,index)=>{
//         return(
//           <li>{car}</li>
//         )
//       })}
//     </ul>
//   </div>
// )
// }
// export default App;





// import React, { useState } from 'react';

// const ImageSlider = () => {
//   const images = [
//     'image1.jpg',
//     'image2.jpg',
//     'image3.jpg',
//     // Add more image URLs as needed
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleAccordionClick = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-md-8">
//           <div className="carousel slide" data-ride="carousel">
//             <div className="carousel-inner">
//               {images.map((image, index) => (
//                 <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
//                   <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="accordion" id="imageAccordion">
//             {images.map((image, index) => (
//               <div
//                 key={index}
//                 className={`card ${index === activeIndex ? 'border-success' : ''}`}
//                 onClick={() => handleAccordionClick(index)}
//               >
//                 <img src={image} className="card-img-top" alt={`Thumbnail ${index + 1}`} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
//         setData(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h2>Axios Example</h2>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <pre>{JSON.stringify(data, null, 2)}</pre>
//       )}
//     </div>
//   );
// };

// export default App;


    //   import React from 'react';

      // const variableA = "toor";
      // const variableB = "root";
      
      // function App() {
      //   const reversedVariableA = variableA.split('').reverse().join('');
      //   console.log(reversedVariableA);
      
      //   return (
      //     <div>
      //       {reversedVariableA === variableB ? (
      //         <h2>{`The ${variableA} and ${variableB} are the same`}</h2>
      //       ) : (
      //         <div>Error</div>
      //       )}
      //     </div>
      //   );
      // }
      // export default App;
   


      const Anagram1 = "listen";
      const Anagram2 = "silent";
      
      const App = () => {
        const sortAna1 = Anagram1.split("").sort().join("");
        const sortAna2 = Anagram2.split("").sort().join("");
      
        if (sortAna1 === sortAna2) {
          console.log("It's an anagram.");
        } else {
          console.log("It's not an anagram.");
        }
      };
      App() 