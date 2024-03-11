import React, { useState } from "react";
import "./Style/RecruiterProfile.css";

const RecruiterProfile = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    profilePic: null,
    companyLogo: null,
  });

  const handleProfilePicChange = (e, type) => {
    const file = e.target.files[0];
    if (type === "profilePic") {
      setPersonalInfo({ ...personalInfo, profilePic: file });
    } else if (type === "companyLogo") {
      setPersonalInfo({ ...personalInfo, companyLogo: file });
    }
  };

  const [companyInfo, setCompanyInfo] = useState({
    companyName: "",
    address: "",
    city: "",
    state: "",
    profilePic: null,
  });

  const [jobPostingsCount, setJobPostingsCount] = useState(0);

  const handleSaveInfo = () => {
    console.log("Saving recruiter information:", { personalInfo, companyInfo });
    setPersonalInfo({
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      profilePic: null,
      companyLogo: null,
    });
    setCompanyInfo({
      companyName: "",
      address: "",
      city: "",
      state: "",
      profilePic: null,
    });

    // Here you would save the recruiter information and update the job postings count accordingly
    // For demonstration purpose, we'll just set a random job postings count
    setJobPostingsCount(Math.floor(Math.random() * 10)); // Random number between 0 to 10
  };

  const companies = [
    { name: "Company A", logo: "company_a_logo.jpg" },
    { name: "Company B", logo: "company_b_logo.jpg" },
    { name: "Company C", logo: "company_c_logo.jpg" },
    // Add more companies as needed
  ];

  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleCompanySelect = (company) => {
    setSelectedCompany(company);
  };

  return (
    <div className="recruiter-profile">
      <div className="container">
        <h1 className="text-center mb-4">Recruiter Profile</h1>
        <div className="card profile-card">
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="profilePic">Profile Picture</label>
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="profilePic"
                  accept="image/*"
                  onChange={(e) => handleProfilePicChange(e, "profilePic")}
                />
                <label className="custom-file-label" htmlFor="profilePic">
                  Choose file
                </label>
              </div>
              {/* Profile Picture Preview */}
              {personalInfo.profilePic && (
                <img
                  src={URL.createObjectURL(personalInfo.profilePic)}
                  alt="Profile"
                  className="profile-preview mt-3"
                />
              )}
              {/* End Profile Picture Preview */}
            </div>
            <div className="form-group">
              <label htmlFor="companySelect">Select Company</label>
              <select
                id="companySelect"
                className="form-control"
                onChange={(e) =>
                  handleCompanySelect(JSON.parse(e.target.value))
                }
              >
                <option value="">Choose a company</option>
                {companies.map((company, index) => (
                  <option key={index} value={JSON.stringify(company)}>
                    {company.name}
                  </option>
                ))}
              </select>
            </div>
            {/* Company Logo Preview */}
            {selectedCompany && (
              <div className="profile-preview mt-3">
                <img
                  src={selectedCompany.logo}
                  alt={selectedCompany.name}
                  className="company-logo"
                />
              </div>
            )}
            {/* End Company Logo Preview */}

            <h2 className="mb-3 section-title">Personal Information</h2>
            <div className="form-row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={personalInfo.name}
                    onChange={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        name: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={personalInfo.email}
                    onChange={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    value={personalInfo.phone}
                    onChange={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        phone: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    value={personalInfo.address}
                    onChange={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        address: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    value={personalInfo.city}
                    onChange={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        city: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    className="form-control"
                    id="state"
                    value={personalInfo.state}
                    onChange={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        state: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>

            <h2 className="mb-3 section-title">Company Information</h2>
            <div className="form-group">
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                className="form-control"
                id="companyName"
                value={companyInfo.companyName}
                onChange={(e) =>
                  setCompanyInfo({
                    ...companyInfo,
                    companyName: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="companyAddress">Company Address</label>
              <input
                type="text"
                className="form-control"
                id="companyAddress"
                value={companyInfo.address}
                onChange={(e) =>
                  setCompanyInfo({ ...companyInfo, address: e.target.value })
                }
              />
            </div>
            <div className="form-row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="companyCity">City</label>
                  <input
                    type="text"
                    className="form-control"
                    id="companyCity"
                    value={companyInfo.city}
                    onChange={(e) =>
                      setCompanyInfo({ ...companyInfo, city: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="companyState">State</label>
                  <input
                    type="text"
                    className="form-control"
                    id="companyState"
                    value={companyInfo.state}
                    onChange={(e) =>
                      setCompanyInfo({ ...companyInfo, state: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <h2 className="mb-3 section-title">Job Postings</h2>
            <div className="mb-4">
              <p>Number of Job Postings: {jobPostingsCount}</p>
            </div>

            <div className="text-center">
              <button className="btn btn-primary" onClick={handleSaveInfo}>
                Save Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterProfile;
