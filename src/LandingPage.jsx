import { useState } from "react";
import "./LandingPage.css";
import toast from "react-hot-toast";

export default function LandingPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState({});
  const [projects, setProjects] = useState([]); //to store submissions
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};

    //validation of user's input by use of trim

    if (!title.trim()) newErrors.title = "No title written";
    if (!description.trim()) newErrors.description = "No description written";

    setErrors(newErrors); //store errors
    if (Object.keys(newErrors).length > 0) return;

    const newProject = {
      title: title.trim(),
      description: description.trim(),
    };

    setProjects((prev) => [newProject, ...prev]); //adds new ones and doesnt delete old ones 
    toast.success("Project added!");

    setTitle("");//these 2 clear the earlier input
    setDescription("");
    setErrors({});
  }

  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  ); //searches for the keyword

  return (
    <div className="main-container1">
      <div className="initial-content">
        <form onSubmit={handleSubmit} className="form">
          <h3>Add project</h3>

          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="title"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p>{errors.title}</p>}

          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="description"
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {errors.description && <p>{errors.description}</p>}

          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>

      <div className="container2">
        <div className="search">
          <input
            type="text"
            placeholder="Search for Projects"
            className="search-box"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-btn" type="button">
            Search
          </button>
        </div>

        <div className="content">
          {(
            filteredProjects.map((p) => (
              <div className="project-item">
                <h2>{p.title}</h2>
                <p>{p.description}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
