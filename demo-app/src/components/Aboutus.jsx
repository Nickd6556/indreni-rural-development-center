import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src="/images/aboutus.jpeg"
            alt="Indreni Rural Development Centre Nepal"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h2 className="mb-4">Indreni Rural Development Centre Nepal (IRDC)</h2>
          <p>
            Indreni Rural Development Centre (IRDC) Nepal is a non-governmental
            organization (NGO) established in 1994, with the ultimate aim of
            sustainable development of rural communities of Nepal by mobilizing
            indigenous human and natural resources and with optimal utilization
            of locally developed technologies. It is registered in the District
            Administration Office in Butwal 02, Rupandehi, under the
            Association Registration Act 2034 and is affiliated with the Social
            Welfare Council under the Social Welfare Act.
          </p>
          <p>
            This organization is working in various parts of Nepal in the fields
            of Education, Livelihoods, Environment, Disaster Risk Reduction
            Resource Management, Water Supply, Sanitation, Human Rights
            Promotion, and Good Governance, among others, in partnership with
            various government and non-government organizations. In order to
            systematize the organizational...
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;