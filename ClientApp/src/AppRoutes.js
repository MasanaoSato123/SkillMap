import Counter from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import Engineer from "./components/Engineer";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
   },
   {
    path: '/engineer',
    element: <Engineer />
   }
];

export default AppRoutes;
