import React from 'react';

const Careers = () => {
  return (
    <>
      <div className="Careers-container">
        <div className="content">
          <h1>Careers</h1>
          <nav>
            <a href="/">Home</a>
            <span> / Careers</span>
          </nav>
        </div>
      </div>
      <JobCard /> {/* Include the JobCard component */}
    </>
  );
};

function JobCard() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card shadow-sm rounded">
            <div className="card-body">
              <h5 className="card-title">
                <span className="text-muted me-2">
                  <i className="bi bi-calendar-date"></i> 2023-08-29
                </span>
                RE-VACANCY NOTICE
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Livestock Technician
              </h6>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span className="fw-bold">Corporate Title:</span> Livestock Technician
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">No. of Vacancies:</span> [1]
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Offered Salary:</span>
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Posted date:</span> 2023-Aug-29
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Apply Before (Deadline):</span> 2023-Sep-03
                </li>
              </ul>
              <button className="btn btn-primary mt-3">Read More</button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm rounded">
            <div className="card-body">
              <h5 className="card-title">
                <span className="text-muted me-2">
                  <i className="bi bi-calendar-date"></i> 2023-08-21
                </span>
                Livestock Technician
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Livestock Technician
              </h6>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span className="fw-bold">Corporate Title:</span> Livestock Technician
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">No. of Vacancies:</span> [1]
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Offered Salary:</span> Salary and Benefits: As per the organization's / project's rule.
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Posted date:</span> 2023-Aug-21
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Apply Before (Deadline):</span> 2023-Aug-25
                </li>
              </ul>
              <button className="btn btn-primary mt-3">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Careers;