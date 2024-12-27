import React from "react";

const CyberSecurity = () => {
  const cardsData = [
    {
      image:
        "https://media.istockphoto.com/id/1435605327/photo/cybersecurity-concept-global-network-security-technology-business-people-protect-personal.jpg?s=612x612&w=0&k=20&c=9QvqAsfANdpsNcYdZ0WlMd5lKaTR9BvnTpFnrtGbV0s=",
      title: "Top 10 Cybersecurity Best Practices for Businesses",
      author: "John Doe",
      date: "July 5, 2024",
    },
    {
      image:
        "https://t4.ftcdn.net/jpg/02/45/63/69/360_F_245636933_kY23ohGptK5t6n8wGSXIgLgVXWeHJRct.jpg",
      title: "Phishing Attacks: How to Recognize and Avoid Them",
      author: "Jane Smith",
      date: "June 20, 2024",
    },
    {
      image:
        "https://i.pinimg.com/474x/b9/8c/82/b98c8212c5c012985d88ced2417e0724.jpg",
      title:
        "The Importance of Strong Passwords and Multi-Factor Authentication",
      author: "David Lee",
      date: "May 15, 2024",
    },
  ];
  return (
    <div className="fluid-container">
      <div className="row justify-content-center align-items-end">
        {cardsData.map((card, index) => (
          <div key={index} className="col g-5">
            <div className="card  ">
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

export default CyberSecurity;
