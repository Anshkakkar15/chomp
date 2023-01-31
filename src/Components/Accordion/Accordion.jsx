import React from 'react'

import { CiMedicalCross } from "react-icons/ci";

const Accordion = ({data}) => {
  return (
    <div className='my-5'>
      {data.map((items) => (
        <div div className="container">
          <div className="d-flex justify-content-between align-items-center chomp_primary_color border-bottom">
            <button
              class="accordion-button py-4 fs-5 fw-semibold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${items.id}`}
              aria-expanded="true"
              aria-controls={`collapse${items.id}`}
            >
              {items.heading}
            </button>
            <CiMedicalCross
              className={`primary-bg-img chomp_body_color icon `}
            />
          </div>
          <div
            id={`collapse${items.id}`}
            class="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body lh-lg chomp_body_color">
              {items.details}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion
