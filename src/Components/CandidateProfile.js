import React, { useState } from "react";
import "./Style/CandidateProfile.css";

const CandidateProfile = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "", // Add name field
    email: "", // Add email field
    phone: "", // Add phone field
    address: "", // Add address field
    city: "", // Add city field
    state: "", // Add state field
    profilePic: null, // Add profile picture field
  });

  const [summary, setSummary] = useState("");
  const [workExperience, setWorkExperience] = useState([
    { company: "", role: "", startDate: "", endDate: "", description: "" },
  ]);
  const [education, setEducation] = useState([
    {
      institution: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
    },
  ]);
  const [skills, setSkills] = useState([""]);
  const [certifications, setCertifications] = useState([
    { name: "", issuer: "", issuedDate: "" },
  ]);
  const [achievements, setAchievements] = useState([""]);
  const [portfolio, setPortfolio] = useState([{ name: "", url: "" }]);
  const [resume, setResume] = useState(null);
  const [socialLinks, setSocialLinks] = useState({
    linkedin: "",
    github: "",
  });

  // Functions to handle form input changes and updates
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    setPersonalInfo({ ...personalInfo, profilePic: file });
  };

  const handleWorkExperienceChange = (index, field, value) => {
    const updatedWorkExperience = [...workExperience];
    updatedWorkExperience[index][field] = value;
    setWorkExperience(updatedWorkExperience);
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
  };

  const handleSkillsChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };

  const handleCertificationsChange = (index, field, value) => {
    const updatedCertifications = [...certifications];
    updatedCertifications[index][field] = value;
    setCertifications(updatedCertifications);
  };

  const handleAchievementsChange = (index, value) => {
    const updatedAchievements = [...achievements];
    updatedAchievements[index] = value;
    setAchievements(updatedAchievements);
  };

  const handlePortfolioChange = (index, field, value) => {
    const updatedPortfolio = [...portfolio];
    updatedPortfolio[index][field] = value;
    setPortfolio(updatedPortfolio);
  };

  const handleAddressChange = (updatedAddress) => {
    setPersonalInfo({ ...personalInfo, ...updatedAddress });
  };

  const addNewWorkExperience = () => {
    setWorkExperience([
      ...workExperience,
      { company: "", role: "", startDate: "", endDate: "", description: "" },
    ]);
  };

  const addNewEducation = () => {
    setEducation([
      ...education,
      {
        institution: "",
        degree: "",
        fieldOfStudy: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const addNewSkill = () => {
    setSkills([...skills, ""]);
  };

  const addNewCertification = () => {
    setCertifications([
      ...certifications,
      { name: "", issuer: "", issuedDate: "" },
    ]);
  };

  const addNewAchievement = () => {
    setAchievements([...achievements, ""]);
  };

  const addNewPortfolioItem = () => {
    setPortfolio([...portfolio, { name: "", url: "" }]);
  };

  // Functions to handle deleting data
  const deleteWorkExperience = (index) => {
    const updatedWorkExperience = [...workExperience];
    updatedWorkExperience.splice(index, 1);
    setWorkExperience(updatedWorkExperience);
  };

  const deleteEducation = (index) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setEducation(updatedEducation);
  };

  const deleteSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const deleteCertification = (index) => {
    const updatedCertifications = [...certifications];
    updatedCertifications.splice(index, 1);
    setCertifications(updatedCertifications);
  };

  const deleteAchievement = (index) => {
    const updatedAchievements = [...achievements];
    updatedAchievements.splice(index, 1);
    setAchievements(updatedAchievements);
  };

  const deletePortfolioItem = (index) => {
    const updatedPortfolio = [...portfolio];
    updatedPortfolio.splice(index, 1);
    setPortfolio(updatedPortfolio);
  };

  const handleSaveInfo = () => {
    // Implement your save logic here
    console.log("Saving candidate information:", personalInfo);
    // Optionally, you can reset the form fields after saving
    setPersonalInfo({
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      profilePic: null,
    });
  };

  const states = {
    AndhraPradesh: ["Amaravati", "Vishakapatnam", "Vijayawada"],
    ArunachalPradesh: ["Itanagar", "Pasighat", "Tawang"],
    Assam: ["Dispur", "Guwahati", "Silchar"],
    Bihar: ["Patna", "Gaya", "Muzaffarpur"],
    Chhattisgarh: ["Raipur", "Bilaspur", "Durg"],
    Goa: ["Panaji", "Margao", "Vasco da Gama"],
    Gujarat: ["Gandhinagar", "Ahmedabad", "Surat"],
    Haryana: ["Chandigarh", "Gurgaon", "Faridabad"],
    HimachalPradesh: ["Shimla", "Dharamshala", "Palampur"],
    Jharkhand: ["Ranchi", "Jamshedpur", "Dhanbad"],
    Karnataka: ["Bangalore", "Mysore", "Hubli"],
    Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode"],
    MadhyaPradesh: ["Bhopal", "Indore", "Gwalior"],
    Maharashtra: ["Mumbai", "Pune", "Satara", "Solapur"],
    Manipur: ["Imphal", "Bishnupur", "Chandel"],
    Meghalaya: ["Shillong", "Tura", "Nongpoh"],
    Mizoram: ["Aizawl", "Lunglei", "Champhai"],
    Nagaland: ["Kohima", "Dimapur", "Mokokchung"],
    Odisha: ["Bhubaneswar", "Cuttack", "Puri"],
    Punjab: ["Chandigarh", "Amritsar", "Ludhiana"],
    Rajasthan: ["Jaipur", "Jodhpur", "Kota"],
    Sikkim: ["Gangtok", "Pelling", "Ravangla"],
    TamilNadu: ["Chennai", "Madurai", "Coimbatore"],
    Telangana: ["Hyderabad", "Warangal", "Nizamabad"],
    Tripura: ["Agartala", "Dharmanagar", "Kailasahar"],
    UttarPradesh: ["Lucknow", "Kanpur", "Agra"],
    Uttarakhand: ["Dehradun", "Haridwar", "Rishikesh"],
    WestBengal: ["Kolkata", "Howrah", "Durgapur"],
  };

  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity(null); // Reset city when state changes
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  }; 

  const filteredCities = selectedState ? states[selectedState] : [];

  // Render the component
  return (
    <div className="container">
      <h1 className="text-center mb-4">Candidate Profile</h1>
      <div className="card profile-card">
        <div className="card-body">
          {/* Personal Information */}
          <div className="form-group">
            {/* Profile Picture */}
            <label htmlFor="profilePic">Profile Picture</label>
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="profilePic"
                accept="image/*"
                onChange={handleProfilePicChange}
              />
              <label className="custom-file-label" htmlFor="profilePic">
                Choose file
              </label>
            </div>
            {/* Image Preview */}
            {personalInfo.profilePic && (
              <img
                src={URL.createObjectURL(personalInfo.profilePic)}
                alt="Profile"
                className="profile-preview mt-3"
              />
            )}
            {/* End Image Preview */}
          </div>
          {/* End Profile Picture */}

          <h2 className="mb-3 section-title">Personal Information</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={personalInfo.name}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, name: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={personalInfo.email}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, email: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              value={personalInfo.phone}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, phone: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              value={personalInfo.address}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, address: e.target.value })
              }
            />
          </div>
          <div class="location-selectors">
            <select value={selectedState} onChange={handleStateChange}>
              <option value="">Select State</option>
              {Object.keys(states).map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            <select
              value={selectedCity}
              onChange={handleCityChange}
              disabled={!selectedState}
            >
              <option value="">Select City</option>
              {filteredCities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* End Personal Information */}
          {/* Work Experience */}
          <div className="mb-4">
            <h2 className="mb-3 section-title">Work Experience</h2>
            {workExperience.map((exp, index) => (
              <div key={index} className="mb-3">
                <div className="form-row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor={`company-${index}`}>Company</label>
                      <input
                        type="text"
                        className="form-control"
                        id={`company-${index}`}
                        value={exp.company}
                        onChange={(e) =>
                          handleWorkExperienceChange(
                            index,
                            "company",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor={`role-${index}`}>Role</label>
                      <input
                        type="text"
                        className="form-control"
                        id={`role-${index}`}
                        value={exp.role}
                        onChange={(e) =>
                          handleWorkExperienceChange(
                            index,
                            "role",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor={`startDate-${index}`}>Start Date</label>
                      <input
                        type="date"
                        className="form-control"
                        id={`startDate-${index}`}
                        value={exp.startDate}
                        onChange={(e) =>
                          handleWorkExperienceChange(
                            index,
                            "startDate",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor={`endDate-${index}`}>End Date</label>
                      <input
                        type="date"
                        className="form-control"
                        id={`endDate-${index}`}
                        value={exp.endDate}
                        onChange={(e) =>
                          handleWorkExperienceChange(
                            index,
                            "endDate",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor={`description-${index}`}>Description</label>
                  <textarea
                    className="form-control"
                    id={`description-${index}`}
                    rows="3"
                    value={exp.description}
                    onChange={(e) =>
                      handleWorkExperienceChange(
                        index,
                        "description",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div className="text-right">
                  <button
                    className="btn btn-danger btn-sm mr-2"
                    onClick={() => deleteWorkExperience(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            <div className="text-right">
              <button
                className="btn btn-primary"
                onClick={addNewWorkExperience}
              >
                Add Work Experience
              </button>
            </div>
          </div>

          {/* Education */}
          <div className="mb-4">
            <h2 className="mb-3 section-title">Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="mb-3">
                <div className="form-row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor={`institution-${index}`}>
                        Institution
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id={`institution-${index}`}
                        value={edu.institution}
                        onChange={(e) =>
                          handleEducationChange(
                            index,
                            "institution",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor={`degree-${index}`}>Degree</label>
                      <input
                        type="text"
                        className="form-control"
                        id={`degree-${index}`}
                        value={edu.degree}
                        onChange={(e) =>
                          handleEducationChange(index, "degree", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor={`fieldOfStudy-${index}`}>
                        Field of Study
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id={`fieldOfStudy-${index}`}
                        value={edu.fieldOfStudy}
                        onChange={(e) =>
                          handleEducationChange(
                            index,
                            "fieldOfStudy",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor={`startDate-${index}`}>Start Date</label>
                      <input
                        type="date"
                        className="form-control"
                        id={`startDate-${index}`}
                        value={edu.startDate}
                        onChange={(e) =>
                          handleEducationChange(
                            index,
                            "startDate",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor={`endDate-${index}`}>End Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id={`endDate-${index}`}
                    value={edu.endDate}
                    onChange={(e) =>
                      handleEducationChange(index, "endDate", e.target.value)
                    }
                  />
                </div>
                <div className="text-right">
                  <button
                    className="btn btn-danger btn-sm mr-2"
                    onClick={() => deleteEducation(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            <div className="text-right">
              <button className="btn btn-primary" onClick={addNewEducation}>
                Add Education
              </button>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-4">
            <h2 className="mb-3 section-title">Skills</h2>
            {skills.map((skill, index) => (
              <div key={index} className="form-group mb-3">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    value={skill}
                    onChange={(e) => handleSkillsChange(index, e.target.value)}
                    placeholder={`Skill ${index + 1}`}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteSkill(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="text-right">
              <button className="btn btn-primary" onClick={addNewSkill}>
                Add Skill
              </button>
            </div>
          </div>

          {/* Certifications and Licenses */}
          <div className="mb-4">
            <h2 className="mb-3 section-title">Certifications and Licenses</h2>
            {certifications.map((cert, index) => (
              <div key={index} className="mb-3">
                <div className="form-row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor={`certName-${index}`}>
                        Certification Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id={`certName-${index}`}
                        value={cert.name}
                        onChange={(e) =>
                          handleCertificationsChange(
                            index,
                            "name",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor={`issuer-${index}`}>Issuer</label>
                      <input
                        type="text"
                        className="form-control"
                        id={`issuer-${index}`}
                        value={cert.issuer}
                        onChange={(e) =>
                          handleCertificationsChange(
                            index,
                            "issuer",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor={`issuedDate-${index}`}>Issued Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id={`issuedDate-${index}`}
                    value={cert.issuedDate}
                    onChange={(e) =>
                      handleCertificationsChange(
                        index,
                        "issuedDate",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div className="text-right">
                  <button
                    className="btn btn-danger btn-sm mr-2"
                    onClick={() => deleteCertification(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            <div className="text-right">
              <button className="btn btn-primary" onClick={addNewCertification}>
                Add Certification
              </button>
            </div>
          </div>

          {/* Achievements and Awards */}
          <div className="mb-4">
            <h2 className="mb-3 section-title">Achievements and Awards</h2>
            {achievements.map((achievement, index) => (
              <div key={index} className="form-group mb-3">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    value={achievement}
                    onChange={(e) =>
                      handleAchievementsChange(index, e.target.value)
                    }
                    placeholder={`Achievement ${index + 1}`}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteAchievement(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="text-right">
              <button className="btn btn-primary" onClick={addNewAchievement}>
                Add Achievement
              </button>
            </div>
          </div>

          {/* Portfolio or Projects */}
          <div className="mb-4">
            <h2 className="mb-3 section-title">Portfolio or Projects</h2>
            {portfolio.map((item, index) => (
              <div key={index} className="mb-3">
                <div className="form-row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor={`projectName-${index}`}>
                        Project Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id={`projectName-${index}`}
                        value={item.name}
                        onChange={(e) =>
                          handlePortfolioChange(index, "name", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor={`projectUrl-${index}`}>Project URL</label>
                      <input
                        type="text"
                        className="form-control"
                        id={`projectUrl-${index}`}
                        value={item.url}
                        onChange={(e) =>
                          handlePortfolioChange(index, "url", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <button
                    className="btn btn-danger btn-sm mr-2"
                    onClick={() => deletePortfolioItem(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            <div className="text-right">
              <button className="btn btn-primary" onClick={addNewPortfolioItem}>
                Add Project
              </button>
            </div>
          </div>

          {/* Resume or CV Upload */}
          <div className="mb-4">
            <h2 className="mb-3 section-title">Resume or CV</h2>
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="resume"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setResume(e.target.files[0])}
              />
              <label className="custom-file-label" htmlFor="resume">
                {resume ? resume.name : "Choose file"}
              </label>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mb-4">
            <h2 className="mb-3 section-title">Social Media Links</h2>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="linkedin">LinkedIn</label>
                  <input
                    type="url"
                    className="form-control"
                    id="linkedin"
                    placeholder="Enter your LinkedIn profile URL"
                    value={socialLinks.linkedin}
                    onChange={(e) =>
                      setSocialLinks({
                        ...socialLinks,
                        linkedin: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="github">GitHub</label>
                  <input
                    type="url"
                    className="form-control"
                    id="github"
                    placeholder="Enter your GitHub profile URL"
                    value={socialLinks.github}
                    onChange={(e) =>
                      setSocialLinks({
                        ...socialLinks,
                        github: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              {/* Save Info Button */}
              <div className="text-center">
                <button className="btn btn-primary" onClick={handleSaveInfo}>
                  Save Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;
