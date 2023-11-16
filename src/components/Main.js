// import { Grid } from '@mui/material'
// import React, { useState } from 'react'
// import Navbar from './Navbar'
// import Leftpanel from './Leftpanel'
// import Middle from './Middle'
// import Rightpanel from './Rightpanel'
// import Footer from './Footer'
// import Sidebar from './Sidebar'

// function Main() {

//   const [subCollect,setSubCollect] = useState("Inbox")
//   const [search,setSearch] = useState("")
//   const [isLeftPanelVisible, setIsLeftPanelVisible] = useState(true);

//   // Function to toggle the left panel visibility
//   const toggleLeftPanel = () => {
//     setIsLeftPanelVisible(!isLeftPanelVisible);
//   };

//   return (
//     <div >
//       <Grid container>
//         <Grid item xs={12}>
//            <Navbar setSearch={setSearch}/>
//         </Grid>
//         {/* <Grid item xs={0.5}>
//           <Sidebar />
//         </Grid> */}
//         <Grid item xs={2}>
//            <Leftpanel setSubCollect={setSubCollect}/>
//         </Grid>
//         <Grid item xs={8}>
//           <Middle search={search} subCollect={subCollect}/>
//         </Grid>
//         <Grid item xs={1}>
//             <Rightpanel/>
//         </Grid>
//         <Grid item xs={12}>
//             <Footer/>
//         </Grid>
//       </Grid>
//     </div>
//   )
// }

// export default Main
import { Grid } from '@mui/material';
import React, { useState } from 'react';
import Navbar from './Navbar';
import Leftpanel from './Leftpanel';
import Middled from './Middled';
import Rightpanel from './Rightpanel';
import Footer from './Footer';

function Main() {
  const [subCollect, setSubCollect] = useState("Inbox");
  const [search, setSearch] = useState("");
  const [isLeftPanelVisible, setIsLeftPanelVisible] = useState(true);

  // Function to toggle the left panel visibility
  const toggleLeftPanel = () => {
    setIsLeftPanelVisible(!isLeftPanelVisible);
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Navbar setSearch={setSearch} toggleLeftPanel={toggleLeftPanel} />
        </Grid>
        {isLeftPanelVisible && (
          <Grid item xs={2} >
          
            <Leftpanel setSubCollect={setSubCollect} />
          </Grid>
        )}
        <Grid item xs={isLeftPanelVisible ? 9 : 10}>
          <Middled search={search} subCollect={subCollect} />
        </Grid>
        <Grid item xs={1}>
          <Rightpanel />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;
