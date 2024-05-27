import { useState } from "react";

const Inquiry = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    remarks: "",
  });
  const onChange = (e) => {
    setContactInfo({
      ...contactInfo,
      [e.target.id]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(contactInfo);
  };

  return (
    <div>
      <form className="mt-2">
        <div className="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={contactInfo.name}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={contactInfo.email}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label for="remarks">Remarks</label>
          <textarea
            id="remarks"
            name="remarks"
            value={contactInfo.remarks}
            onChange={onChange}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mt-2"
          disabled={!contactInfo.name || !contactInfo.email}
          onClick={onSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Inquiry;
