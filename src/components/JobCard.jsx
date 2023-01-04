import React from 'react';
import { Link } from 'react-router-dom'

const JobCard = ({jobId, company_logoUrl, company_name, role, role_time, location, uploaded_time }) => {
  return (
    <Link to={`/job/${jobId}`}>
        <div className='rounded-md shadow-md'>

        </div>
    </Link>
    
  )
}

export default JobCard