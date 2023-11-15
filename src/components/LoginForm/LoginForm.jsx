import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

// TODO Use Tailwind
function LoginForm() {
  return (
    <div className="flex flex-col m-auto mt-[100px] w-[600px] bg-[#fff] pb-[30px]">
      <div className="flex flex-col items-center gap-[10px] w-[100%] mt-[30px]">
        <h1 className="text-[#0A65CC] text-[50px] font-[700]">Log In</h1>
        <div className="w-[60px] h-[5px]  bg-[#0A65CC] rounded-[10px]"></div>
      </div>
      <div className="mt-[55px] flex flex-col gap-[25px]">
        <div className="flex items-center m-auto w-[480px] h-[80px] bg-[#eaeaea] rounded-[5px]">
          <img src={email_icon} alt="" className="mx-0 my-[30px] p-2" />
          <input type="email" placeholder="EMAIL ID" className="h-[50px] w-[400px] bg-transparent rounded-none outline-none text-[#797979] font-[20px] p-2"/>
        </div>
        <div className="flex items-center m-auto w-[480px] h-[80px] bg-[#eaeaea] rounded-[5px]">
          <img src={password_icon} alt="" className="mx-0 my-[30px] p-2" />
          <input type="password" placeholder="PASSWORD" className="h-[50px] w-[400px] bg-transparent rounded-none outline-none text-[#797979] font-[20px] p-2" />
        </div>
      </div>
      <div className="pl-[60px] mt-[30] text-[#797979] font-20px]">
        Forgot Password? <span className="text-[#0A65CC] cursor-pointer">Click Here</span>
      </div>
      <div className="flex gap-[30px] mx-auto my-[40px]">
        <div className="flex justify-center items-center w-[220px] h-[60px] text-[#fff] bg-[#0A65CC] rounded-[50px] text-[20px] font-[700] cursor-pointer">Log In</div>
      </div>
    </div>
  );
}

export default LoginForm;
