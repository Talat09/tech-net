import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  return (
    <>
      <h1 className="bg-green-500 text-4xl text-center text-white py-4 font-bold">
        Tech Net
      </h1>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
