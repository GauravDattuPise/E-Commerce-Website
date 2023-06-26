import React from 'react'
import { Layout } from '../components/layout/Layout'

const About = () => {
  return (
    <Layout title={"About us - Ecommerce"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-5">
          <p className="text-justify mt-5">
            Welcome to our ecommerce website! We're thrilled to bring you a diverse and extensive selection
            of products, all conveniently available at your fingertips. At our ecommerce platform, we strive
            to offer an unparalleled shopping experience. With a user-friendly interface and intuitive
            navigation, finding your desired items has never been easier. From fashion and accessories to
            electronics and home goods, our carefully curated collection ensures that you'll find exactly
            what you're looking for.
          </p>
          <p>We take pride in our commitment to quality and customer satisfaction. Our dedicated team is
            here to assist you every step of the way, ensuring that your shopping journey is seamless and
            enjoyable. With secure payment options and prompt delivery, you can shop with confidence, knowing
            that your satisfaction is our top priority.Thank you for choosing our ecommerce website. We're excited
            to have you join our community of satisfied customers, and we look forward to serving you with the best
            products and exceptional service. 
            <h4 style={{marginLeft : "50px"}}>Happy shopping!</h4>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About