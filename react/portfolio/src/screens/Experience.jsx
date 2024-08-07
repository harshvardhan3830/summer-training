import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import ExperienceDetials from "../components/common/ExperienceDetials";
import { experienceDetails } from "../constants/ExperienceDetails";

const Experience = () => {
  const [details, setDetails] = useState(experienceDetails);
  return (
    <Layout>
      <div>
        <p className=" text-4xl font-bold">Experience</p>
        {details?.map((detail) => (
          <ExperienceDetials
            key={detail?.id}
            title={detail?.title}
            description={detail?.description}
            company={detail?.company}
            dates={detail?.dates}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Experience;
