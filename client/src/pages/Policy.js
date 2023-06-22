import React from 'react'
import { Layout } from '../components/layout/Layout'
import "./Policy.css"

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/privacy-policy.jpg"
            alt="privacy policy"
            style={{ width: "80%", margin : "100px 40px 100px 50px" }}
          />
        </div>
        <div className="col-md-6">
          <p className='mt-5'><b>Information Collection:</b> Clearly state the types of information collected from users.</p>
          <p><b>Data Usage:</b> Explain how the collected information will be used.</p>
          <p><b>Data Sharing:</b> Clarify if and when user information is shared with third parties.</p>
          <p><b>Security Measures:</b> Highlight the security measures in place to protect user data.</p>
          <p><b>Cookies and Tracking Technologies:</b> Describe the use of cookies and tracking technologies.</p>
          <p><b>User Rights:</b> Inform users of their rights regarding their personal information.</p>
          <p><b>Data Retention:</b> Specify the duration for which user data is retained.</p>
          <p><b> Consent and Opt-Out:</b> Explain how users can give consent and opt out of certain data uses.</p>
          <p><b> Compliance with Laws:</b> State compliance with relevant data protection laws.</p>
          <p><b>Updates to the Privacy</b> Policy: Notify users about updates to the privacy policy.</p>
        </div>
      </div>
    </Layout>
  )
}

export default Policy



