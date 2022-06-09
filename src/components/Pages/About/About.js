import React from "react";

const About = () => {
  return (
    <section>
      <h2 className="text-3xl text-center mb-10 text-secondary">About me</h2>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img 
            src="https://scontent.fcgp24-1.fna.fbcdn.net/v/t1.6435-9/64581959_2368361370155576_5453960449844314112_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGfut7mtVros-zcOz1MWk6NUCWfVIVjfhpQJZ9UhWN-GmPrXhZC1eOSw-pqcUXYfNyPW-d2AgjsZjCbCoDJTzCz&_nc_ohc=KXnswz8imwsAX_e9kd9&tn=ekUGXQEMmc_kJn4Z&_nc_pt=1&_nc_ht=scontent.fcgp24-1.fna&oh=00_AT-cmKNXwb3t_5gU9MdMtzEV_TqKbAViKZDM026Wox-RkA&oe=62C709B7"
            className=" shadow-2xl w-56 h-56 rounded-3xl" alt="about.img"
          />
          <div className="lg:mr-24">
            <p class="py-6">
            Hi,  My name is Nishan Das.<br/>  
            I am front end developer. I start web development learning in July 2021.<br/> Recently I can completed front-end development with good knowledge.<br/> Now, I am looking for an internship for the full-time job based on front-end <br/>development. I want to grow up my skills by working with a good company.
            </p>
            <button class="btn btn-primary"><a href="https://drive.google.com/file/d/1ljNpGT2d-GBMFbJpqD1h86sU7ujd3K0C/view?usp=sharing">My Resume</a></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
