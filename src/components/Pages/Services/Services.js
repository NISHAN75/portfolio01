import React from "react";


const Services = () => {
  return (
    <div className="mt-10">
      <h2 className="text-3xl text-secondary text-center mb-20">services</h2>

      <div className="card-area grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
        <div class="card card-compact lg:w-96 bg-white shadow-xl mb-10">
          <div class="card-body text-black">
            <h2 class="card-title ">Web Design</h2>
            <p>The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with. The new becomes threatening, the old reassuring.</p>
          </div>
        </div>
        <div class="card card-compact lg:w-96 bg-white shadow-xl mb-10">
          <div class="card-body text-black">
            <h2 class="card-title ">Web Development</h2>
            <p>We love what we do and we do what our clients love & work with great clients all over the world to create thoughtful and purposeful websites</p>
          </div>
        </div>
        <div class="card card-compact lg:w-96 bg-white shadow-xl mb-10">
          <div class="card-body text-black">
            <h2 class="card-title ">web responsive design</h2>
            <p>Learning HTML and CSS is a lot more challenging than it used to be. Responsive web design adds more layers of complexity to design and develop websites.</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Services;
