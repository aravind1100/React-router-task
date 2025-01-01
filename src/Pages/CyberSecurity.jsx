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

export default CyberSecurity;
