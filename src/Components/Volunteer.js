import React, { useState } from 'react';
import '../index.css';
const countries = [
  "India", "United States", "Canada", "Australia", "United Kingdom", "Germany",
  "France", "Japan", "China", "Brazil", "South Africa", "Russia", "Mexico", "Italy",
  "Spain", "Netherlands", "Singapore", "Sweden", "Norway", "New Zealand"
];
const Volunteer = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    city: '',
    state: '',
    pincode: '',
    country: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.mobile.match(/^\d{10}$/)) newErrors.mobile = 'Mobile must be 10 digits';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Invalid email format';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.pincode.match(/^\d{6}$/)) newErrors.pincode = 'Pincode must be exactly 6 digits';
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert('Form submitted successfully!');
      setFormData({
        fullName: '',
        mobile: '',
        email: '',
        city: '',
        state: '',
        pincode: '',
        country: '',
      });
      setErrors({});
    }
  };
  return (
    <>
    <div>
      <div id='volunteer' className="form-container">
      <form className="volunteer-form" onSubmit={handleSubmit}>
        <h2>Volunteer Form</h2>
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        {errors.fullName && <p className="error">{errors.fullName}</p>}
        <label>Mobile Number</label>
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
        />
        {errors.mobile && <p className="error">{errors.mobile}</p>}
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <label>City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
        {errors.city && <p className="error">{errors.city}</p>}
        <label>State</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />
        {errors.state && <p className="error">{errors.state}</p>}

        <label>Pincode</label>
        <input
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
        />
        {errors.pincode && <p className="error">{errors.pincode}</p>}
        <label>Country</label>
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
        >
          <option value="">-- Select Country --</option>
          {countries.map((country, idx) => (
            <option key={idx} value={country}>{country}</option>
          ))}
        </select>
        {errors.country && <p className="error">{errors.country}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
    </>
  );
};
export default Volunteer;



























// import React from "react"
// const Registration = () => {
//   const submitHandler = (e) => {
//     e.preventDefault();
//   }
//   return (
//     <>
//     <h1 className="volunteer-heading">Volunteer form</h1>
    
//     <form onSubmit={submitHandler}>
//       <div className="form">
//         <label htmlFor="fullname">Full Name</label>
//         <br/>
//         <input type="text" className="fullname"/>
//         <br/>
//         <label htmlFor="mobile">Mobile</label>
//         <br/>
//         <input type="number" className="mobile" required/>
//         <br/>
//         <label htmlFor="email">Email</label>
//         <br/>
//         <input type="email" className="email" required/>
//         <br/>
//         <label htmlFor="city">City</label>
//         <br/>
//         <input type="text" className="city" required/>
//         <br/>
//         <label htmlFor="state">State</label>
//         <br/>
//         <input type="text" className="state" required/>
//         <br/>
//         <label htmlFor="pincode">PINCODE</label>
//         <br/>
//         <input type="number" className="pincode" required/>
//         <br/>
//         <button className="sbutton">submit</button>
        
//       </div>

//     </form>
    

//     </>
    
//   )
// }

// export default Registration