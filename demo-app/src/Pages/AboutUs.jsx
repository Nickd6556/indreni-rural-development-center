import React from 'react';

const AboutUs = () => {
  return (
    <>
      <div className="aboutus-container">
        <div className="content">
          <h1>About Us</h1>
          <nav>
            <a href="/">Home</a>
            <span> / About Us</span>
          </nav>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-5">
            <img
              src="/images/aboutus.jpeg"
              alt="Indreni Rural Development Centre Nepal"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-7">
            <h6 className='mb-3' style={{ color: 'Red' }}>About Us</h6>
            <h2 className="mb-4">Indreni Rural Development Centre Nepal (IRDC)</h2>
            <p className='text-justify'>
              Indreni Rural Development Centre (IRDC) Nepal is a non-governmental
              organization (NGO) established in 1994, with the ultimate aim of
              sustainable development of rural communities of Nepal by mobilizing
              indigenous human and natural resources and with optimal utilization
              of locally developed technologies. It is registered in the District
              Administration Office in Butwal 02, Rupandehi, under the
              Association Registration Act 2034 and is affiliated with the Social
              Welfare Council under the Social Welfare Act.
            </p>
            <p className='text-justify'>
              This organization is working in various parts of Nepal in the fields
              of Education, Livelihoods, Environment, Disaster Risk Reduction
              Resource Management, Water Supply, Sanitation, Human Rights
              Promotion, and Good Governance, among others, in partnership with
              various government and non-government organizations. In order to
              systematize the organizational programs and activities.
            </p>
            <p className='text-justify'>
            Currently, the organization is working with IM Swedish Development Partner Nepal (IM) in the Social and Economic Empowerment of Marginalized Communities of Butwal 02, Rupandehi, and FHI 360 in the Civil Society Mutual Accountability Project in Butwal 02, Rupandehi, and Palpa districts. It is also implementing a WASH project in Buddhabhumi of Butwal 02, Rupandehi, with the support of the Rural Water Supply and Sanitation Fund Development Board. Similarly, this organization is working with IM and The Charitable Foundation (TCF) of Australia for "Livelihood Improvement of Tharu Communities (LIT) through Effective Management of Ponds in Buddhabhumi, Butwal 02, Rupandehi. This organization is working with Butwal 02, Rupandehi municipality, Banganga municipality, Shivraj municipality, and Mayadevi rural municipality in the Safer Migration (SaMi) Program with the technical support of Helvitas Nepal.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;