import React from 'react';

const Fullstack = () => {

    const cardsData = [
        {
          image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190626123927/untitlsssssed.png", 
          title: "The MERN Stack: Mastering MongoDB, Express.js, React, and Node.js",
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
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoZnPLvFFZV5j4aL4VYo4nkM8ZPc1KbXwJLQ&s", 
          title: "Frontend Frameworks: React, Vue, and Angular",
          author: "David Lee",
          date: "October 25, 2024",
        }
      ];
    return (
        <div className="fluid-container">
        <div className="row justify-content-center align-items-end">
          {cardsData.map((card, index) => (
            <div key={index} className="col g-5 ">
              <div className="card ">
                <a href="" className="card-img-top">
                  <img
                    src={card.image}
                    alt={card.title}
                    width="600"
                    height="314"
                  />
                </a>
                <div className="card-body" id="card-details">
                  <a
                    className="card-title text-decoration-none text-dark fs-5 fw-semibold"
                    href=""
                  >
                    {card.title}
                  </a>
                  <p className="card-author mt-2 mb-0">
                    <span id="by">By</span>{" "}
                    <a className="text-decoration-none" href="">
                      {card.author}
                    </a>
                  </p>
                  <div id="card-footer" className="mt-2">
                    <p className="mb-0 card-text">{card.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Fullstack;