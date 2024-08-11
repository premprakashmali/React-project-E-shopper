import { Password } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { NavLink,useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
import axios  from 'axios';


function Login() {

  const redirect = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem('uid_1'))
    {
        redirect('/dashboard');
    }
});

  const [logindata, setFormvalue] = useState({
    email:"",
    password:"",
   
  })

  const onChangehandel = async (e)=>{
    setFormvalue({...logindata,[e.target.name]:e.target.value})
    console.log(logindata);

  }

  function validation(){
    var ans = true;
    if(logindata.email ==""){
      toast.error('email is filed required')
      ans=false;
      return false;
    }
    if(logindata.password==""){
      toast.error('password is filed required')
      ans=false;
      return false;
    }
    return true;
  }

  const submithandel = async (e) => {
    e.preventDefault();
    if (validation()) {
        const res_arr = await axios.get(`http://localhost:3000/admin?email=${logindata.email}`,);
        console.log(res_arr)
        if (res_arr.data.length>0) {

            if (res_arr.data[0].password == logindata.password)
             {
                if(res_arr.data[0].status=="Unblock"){

                    localStorage.setItem('uid_1',res_arr.data[0].id)
                    localStorage.setItem('uname_1',res_arr.data[0].name)
                    localStorage.setItem('uimg_1',res_arr.data[0].img)

                    toast.success('Login success')
                    return redirect('/dashboard')
                }
                else{
                    toast.error('Account Blocked conatct shop')
                    setFormvalue({...logindata,email:"",password:""});
                    return false;
                }

            }
            else {
                toast.error('password does not match')
                setFormvalue({ ...logindata, email: "", password: "" })
                return false;
            }

        }
        else {
            toast.error('email does not exit')
            setFormvalue({ ...logindata, email: "", password: "" })
            return false;
        }
    }
}


  return (
    <div>
      <Helmet>
        {/* <!-- Bootstrap Core and vandor --> */}
        <link rel="stylesheet" href="Admin/plugins/bootstrap/css/bootstrap.min.css" />

        {/* <!-- Core css --> */}
        <link rel="stylesheet" href="Admin/css/main.css" />
        <link rel="stylesheet" href="Admin/css/theme1.css" />
      </Helmet>
    

      <div className="auth bg">
        <div className="auth_left" style={{ backgroundColor: "black" }}>

          <div className="card">
            <div className="card-body">
              <form action="" method='post'onSubmit={submithandel} onChange={onChangehandel} >
                <div className="card-title text-center">Login to your account</div>

                <div className="form-group">
                  <label className="form-label">Email address</label>
                  <input value={logindata.email} name='email' type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                  <label className="form-label">Password</label>
                  <input value={logindata.password} name='password' type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="form-group">
                  <label className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-label">Remember me</span>
                  </label>
                </div>
                <div className="form-footer">
                  <button className="btn btn-primary btn-block">Sign in</button>
                </div>
              </form>
            </div>
            {/* <div className="text-center text-muted">
              Don't have account yet? <NavLink to="/register">Sign up</NavLink>
            </div> */}
          </div>
        </div>
        <div className="auth_right full_img" />
      </div>
      <Helmet>
        {/* <script src="Admin/bundles/lib.vendor.bundle.js"></script>
        <script src="Admin/js/core.js"></script> */}
      </Helmet>

    </div>
  )
}

export default Login