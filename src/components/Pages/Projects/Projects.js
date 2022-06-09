import React from "react";

const Projects = () => {
  return (
    <section>
      <h2 className="text-3xl text-center mb-20">My Projects</h2>

      <div className="projects-area">
        <div className="card-area grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
          <div class="card card-compact lg:w-96 bg-white shadow-xl mb-10">
            <div class="card-body text-black">
              <div className="img">
                <img
                  src="https://pbs.twimg.com/media/FUzyjvHakAI5HgE?format=jpg&name=small"
                  alt="bicycles.png"
                />
              </div>
              <h2 class="card-title ">Bicycles website</h2>
              <p>
                this site development with react js.The most recent set of a
                stock, bond, or any other bicaly parts order and sell is was
                manufuscer in web site.i use firebase and mongodb.
              </p>
              <a
                className="font-bold cursor-pointer text-primary"
                href="https://biycle-web.firebaseapp.com/"
              >
                Live Website Link
              </a>
            </div>
          </div>
          <div class="card card-compact lg:w-96 bg-white shadow-xl mb-10">
            <div class="card-body text-black">
              <div className="img">
                <img
                  src="https://pbs.twimg.com/media/FUzyPrqakAAaSKb?format=jpg&name=small"
                  alt="furniture img"
                />
              </div>
              <h2 class="card-title ">furniture website</h2>
              <p>
                The most recent set of a stock, bond, or any other furniture
                updating.this my website You can delivered furniture and stock
                it and update furniture.it was developed by react js.i use
                firebase.
              </p>
              <a
                className="font-bold cursor-pointer text-primary"
                href="https://furniture-web-8900a.firebaseapp.com/"
              >
                Live Website Link
              </a>
            </div>
          </div>
          <div class="card card-compact lg:w-96 bg-white shadow-xl mb-10">
            <div class="card-body text-black">
              <div className="img">
                <img
                  src="https://pbs.twimg.com/media/FUzyn8caUAIItTQ?format=jpg&name=large"
                  alt="financial img"
                />
              </div>
              <h2 class="card-title ">financial website</h2>
              <p>
                this is site financial website.Helping make your financial
                dreams come true Capitalise on low hanging fruit to identify a
                ballpark value added activity to beta test. Override the digital
                divide with additional clickthroughs.it is developed by react
                js.i use firebase.
              </p>
              <a
                className="font-bold cursor-pointer text-primary"
                href="https://financial-website-b12a2.web.app/"
              >
                Live Website Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
