// import React from "react";
// import { useState, useEffect } from "react";


// export default function listGroup() {
//     const [resourceType, setResourceType] = useState("posts")
//     const [items, setItems] = useState([])


//     useEffect(() => {console.log("resource changed")
//     return () => {
//         console.log("return from resource change")
//     }}, [resourceType])

//     return (
//         <>
//         <div>
//             <button onClick={() => setResourceType("posts")}>Posts</button>
//             <button onClick={() => setResourceType("users")}>Users</button>
//             <button onClick={() => setResourceType("comments")}>Comments</button>
//         </div>
//         <h1>{resourceType}</h1>
//         </>
//     )
// }




// import React from "react";
// import { useState, useEffect } from "react";


// export default function listGroup() {
//     const [windowWidth, setWindowWidth] = useState(window.innerWidth)

//     const handleResize = () => {
//         setWindowWidth(window.innerWidth)
//     }

    
// useEffect(() => {
//   window.addEventListener("resize", handleResize)
//   return () => {
//     window.removeEventListener("resize", handleResize)
// }
// }, [])

//     return (
//         <div>{windowWidth}</div>
//     )
// }







// import React from "react";
// import { useState, useEffect } from "react";


// export default function listGroup() {
//     const [resourceType, setResourceType] = useState("posts")
//     const [items, setItems] = useState([])


//     useEffect(() => {fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//     .then(response => response.json())
//     .then(json => setItems(json))}, [resourceType])

//     return (
//         <>
//         <div>
//             <button onClick={() => setResourceType("posts")}>Posts</button>
//             <button onClick={() => setResourceType("users")}>Users</button>
//             <button onClick={() => setResourceType("comments")}>Comments</button>
//         </div>
//         <h1>{resourceType}</h1>
//         {items.map(item => {
//             return <pre>{JSON.stringify(item)}</pre>
//         })}
//         </>
//     )
// }







// import React from "react";
// import { useState, useEffect } from "react";

// export default function listGroup() {
//     const [resourceType, setResourceType] = useState("posts")


//     useEffect(() => {fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//     .then(response => response.json())
//     .then(json => console.log(json))}, [resourceType])

//     return (
//         <>
//         <div>
//             <button onClick={() => setResourceType("posts")}>Posts</button>
//             <button onClick={() => setResourceType("users")}>Users</button>
//             <button onClick={() => setResourceType("comments")}>Comments</button>
//         </div>
//         <h1>{resourceType}</h1>
//         </>
//     )
// }





// import React from "react";
// import { useState, useEffect } from "react";

// export default function listGroup() {
//     const [resourceType, setResourceType] = useState("posts")

//     console.log("render")

//     // useEffect(() => {console.log("resource type changed")}, [resourceType])
//     useEffect(() => {console.log("onMount")}, [])

//     return (
//         <>
//         <div>
//             <button onClick={() => setResourceType("posts")}>Posts</button>
//             <button onClick={() => setResourceType("users")}>Users</button>
//             <button onClick={() => setResourceType("comments")}>Comments</button>
//         </div>
//         <h1>{resourceType}</h1>
//         </>
//     )
// }








// import React from "react";
// import { useState, useEffect } from "react";

// export default function listGroup() {
//     const [resourceType, setResourceType] = useState("posts")

//     useEffect(() => {console.log("render")})
//     // useEffect(() => {console.log("render")}, [resourceType])
//     return (
//         <>
//         <div>
//             <button onClick={() => setResourceType("posts")}>Posts</button>
//             <button onClick={() => setResourceType("users")}>Users</button>
//             <button onClick={() => setResourceType("comments")}>Comments</button>
//         </div>
//         <h1>{resourceType}</h1>
//         </>
//     )
// }
