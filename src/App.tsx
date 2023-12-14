import SigninForm from "./_auth/forms/SigninForm";
import "./globals.css";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout";
import { Home } from "./_root/pages";
import { Toaster } from "@/components/ui/toaster"





import RootLayout from "./_root/RootLayout";
import SignupForm from "./_auth/forms/SignupForm";


const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
      
        {/* public */}
      
        <Route element={<AuthLayout/>}>
          <Route path='/sign-in' element={<SigninForm />} />
          <Route path='/sign-up' element={<SignupForm />} />
        </Route>
      
        {/* private */}
      
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      
      </Routes>
      <Toaster/>
    </main>
  );
};

export default App;
