import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";

import Banner from "../../Components/Banner/Banner";
import Button from "../../Components/Button/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    yourName: "",
    email: "",
    suggestion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.yourName && formData.email && formData.suggestion) {
      toast.success(
        `Thanks for your Suggestion ! We will get back to you soon`
      );
      setFormData({ yourName: "", email: "", suggestion: "" });
      console.log(formData);
    } else {
      toast.error("Please fill the required details");
    }
  };

  return (
    <div>
      <Banner>Contact <span className="chomp_primary_color">Us</span></Banner>
      <div className="container my-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="yourName"
              value={formData.yourName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Your Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="suggestion" className="form-label">
              Your Suggestion
            </label>
            <textarea
              className="form-control"
              id="suggestion"
              rows="5"
              name="suggestion"
              value={formData.suggestion}
              onChange={handleChange}
            ></textarea>
          </div>
          <Button>Submit</Button>
        </form>
      </div>
    </div>
  );
}
