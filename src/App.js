// import { Route, Routes } from "react-router-dom";

// import Layout from "./Components/Layout/Layout";
// import Order from "./Pages/Order/Order";
// import Contact from "./Pages/Contact/Contact";
// import Company from "./Pages/Company/Company";
// import Faq from "./Pages/FAQ/Faq";
// import Index from "./Pages/Home/Index";
// import ViewProduct from "./Components/MenuCard/ViewProduct";

// function App() {
//   let i;
//   let password = "ansh@4275";

//   while (i !== password) {
//     i = prompt("Please Enter password");
//   }
//   return (
//     <div>
//       {i && (
//         <Layout>
//           <Routes>
//             <Route exact index element={<Index />} />
//             <Route exact path="/order" element={<Order />} />
//             <Route exact path="/contact" element={<Contact />} />
//             <Route exact path="/company" element={<Company />} />
//             <Route exact path="/faq" element={<Faq />} />
//             <Route path="/order/:slug" element={<ViewProduct />} />
//           </Routes>
//         </Layout>
//       )}
//     </div>
//   );
// }

// export default App;


import { Route, Routes } from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import Order from "./Pages/Order/Order";
import Contact from "./Pages/Contact/Contact";
import Company from "./Pages/Company/Company";
import Faq from "./Pages/FAQ/Faq";
import Index from "./Pages/Home/Index";
import ViewProduct from "./Components/MenuCard/ViewProduct";

function App() {
  return (
        <Layout>
          <Routes>
            <Route exact index element={<Index />} />
            <Route exact path="/order" element={<Order />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/company" element={<Company />} />
            <Route exact path="/faq" element={<Faq />} />
            <Route path="/order/:slug" element={<ViewProduct />} />
          </Routes>
        </Layout>
  );
}

export default App;