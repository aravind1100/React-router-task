import React from "react";

const Fullstack = () => {
  const cardsData = [
    {
      image:
        "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190626123927/untitlsssssed.png",
      title:
        "The MERN Stack: Mastering MongoDB, Express.js, React, and Node.js",
      author: "John Smith",
      date: "December 10, 2024",
    },
    {
      image: "https://www.keycdn.com/img/support/full-stack-development.png",
      title: "Building RESTful APIs with Node.js and Express.js",
      author: "Jane Doe",
      date: "November 15, 2024",
    },
    {
      image:
        "https://qalbit.com/blog/wp-content/uploads/2023/08/Exploring-Frontend-Frameworks-React.js-vs.-Vue.js-vs.-Angular.js.png",
      title: "Frontend Frameworks: React, Vue, and Angular",
      author: "David Lee",
      date: "October 25, 2024",
    },
  ];
  return (
    <div className="fluid-container">
      <div className="row">
        {cardsData.map((card, index) => (
          <div key={index} className="col col-12 col-lg-6 col-xxl-4 g-5 ">
            <div className="card">
              
              <img src={card.image} alt={card.title} className="card-img-top" />
              <div className="card-body">
                <a
                  href=""
                  className="card-title text-decoration-none text-dark fs-5 fw-semibold"
                >
                  {card.title}
                </a>
                <p className="card-author mt-2 mb-0">
                  <span>By</span>{" "}
                  <a className="text-decoration-none" href="">
                    {card.author}
                  </a>
                </p>
                <p className="card-text mt-2 mb-0">{card.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fullstack;
