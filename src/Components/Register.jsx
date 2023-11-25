import { useState } from "react";
import { toast } from "react-toastify";

export const Register = () => {
  const [id, idchange] = useState('');
  const [name, namechange] = useState('');
  const [password, passwordchange] = useState('');
  const [email, emailchange] = useState('');
  const [phone, phonechange] = useState('');
  const [country, countrychange] = useState('');
  const [address, addresschange] = useState('');
  const [gender, genderchange] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let regobj = { id, name, password, email, phone, country, address, gender };
    //console.log(regobj);
    fetch("http://localhost:8000/user",{
      method:"POST",
      headers:{'content-type':'application/json'},
      body:JSON.stringify(regobj)
  }).then((res)=>{
    toast.success('Register succesfully');
  }).catch((err)=>{
    toast.error('Failed :'+err.message);
    });
  }
  return (
    <div className="offset-lg-3 col-lg-6">
      <form className="container" onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-header">
            <h1>User Registration</h1>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="">
                    User Name <span className="errmsg">*</span>
                  </label>
                  <input
                    value={id}
                    onChange={(e) => idchange(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="">
                    Password <span className="errmsg">*</span>
                  </label>
                  <input
                    value={password}
                    onChange={(e) => passwordchange(e.target.value)}
                    type="password"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="">
                    Full Name<span className="errmsg">*</span>
                  </label>
                  <input className="form-control" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="">
                    Email<span className="errmsg">*</span>
                  </label>
                  <input
                    value={email}
                    onChange={(e) => emailchange(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="">
                    Phone<span className="errmsg">*</span>
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => phonechange(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="">
                    Country<span className="errmsg">*</span>
                  </label>
                  <select
                    value={country}
                    onChange={(e) => countrychange(e.target.value)}
                    className="form-control"
                    name=""
                    id=""
                  >
                    <option value="india">India</option>
                    <option value="usa">Usa</option>
                    <option value="singapore">Singapore</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="">Address</label>
                  <textarea
                    value={address}
                    onChange={(e) => addresschange(e.target.value)}
                    className="form-control"
                    name=""
                    id=""
                  ></textarea>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="">Gender</label>
                  <br></br>
                  <input
                    type="radio"
                    checked={gender === 'male'}
                    onChange={(e) => genderchange(e.target.value)}
                    name="genger"
                    value="male"
                    className="app-check"
                  ></input>
                  <label>Male</label>
                  <input
                    type="radio"
                    checked={gender === 'female'}
                    onChange={(e) => genderchange(e.target.value)}
                    name="genger"
                    value="female"
                    className="app-check"
                  ></input>
                  <label>Female</label>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
            <a className="btn btn-danger">Back</a>
          </div>
        </div>
      </form>
    </div>
  );
};
