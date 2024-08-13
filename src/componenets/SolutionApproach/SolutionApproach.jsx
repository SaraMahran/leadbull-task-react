import "./SolutionApproach.css";

const SolutionApproach = () => {
  const features = [
    { title: "Unlimited Data Centers" },
    { title: "Targeted Servers" },
    { title: "Lead Handling" },
    { title: "Consistent Sales" },
    { title: "Unlimited Data Centers" },
    { title: "24/7 Support Channels" },
    { title: "Compliance (Privacy & Regulations)" },
  ];
  return (
    <>
      <main className="main-content">
        <div className="background"></div>
        <section className="solution">
          <h1 className="solution-heading">OUR SOLUTION APPROACH</h1>
          <p className="solution-text">
            By offering tailored telemarketing and digital marketing solutions
            that are <br />
            designed to meet the unique needs of each client, Leadbull LLC{" "}
            <br />
            Technologies is able to provide unparalleled value pushing its
            clients to handle increased estimates.
          </p>
        </section>
        <section className="approach-container">
          <div className="approach-title">APPROACH</div>
          <div className="approach-grid">
            {features.map((feature, index) => (
              <div key={index} className="approach-feature">
                {feature.title}
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default SolutionApproach;
