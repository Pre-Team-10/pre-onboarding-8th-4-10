import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CommentListContainer from "./containers/CommentListContainer";

function App() {
  return (
    <div>
      <ToastContainer pauseOnHover={false} />
      <CommentListContainer />
    </div>
  );
}

export default App;
