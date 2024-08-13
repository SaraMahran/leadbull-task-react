import "./Revenue.css";
const Revenue = () => {
  const stats = [
    { number: "75+", label: "Independent Member Firms" },
    { number: "35+", label: "Contracting LLCs" },
    { number: "75+", label: "Affiliate Network" },
    { number: "75+", label: "Countries" },
  ];
  return (
    <section className="revenue">
      <div className="grid-item square-1"></div>
      <div className="grid-item square-2"></div>
      <div className="grid-item square-3"></div>
      <h1 className="revenue-heading-1">OVER $9 MILLION</h1>
      <div className="grid-item square-1"></div>
      <div className="grid-item square-2"></div>
      <div className="grid-item square-3"></div>
      <section className="revenue-section">
        <h3 className="revenus-heading-2">
          In combined revenue generated for our contractor clients
        </h3>
        <div className="grid-item square-1"></div>
        <div className="grid-item square-2"></div>
        <div className="grid-item square-3"></div>
        <p class="revenue-paragraph">
          Our services allow clients to gain a better chance of fulfilling
          customers needs and catching their interest, Leading to higher net
          revenue and sustained customer satisfaction and loyalty. Many top
          global contractors
          <br /> <a href="#">Read More</a>
        </p>
      </section>
      <section className="stats-bar">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item-wrapper">
            <div className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
            {index < stats.length - 1 && <span className="separator">|</span>}
          </div>
        ))}
      </section>
    </section>
  );
};

export default Revenue;
