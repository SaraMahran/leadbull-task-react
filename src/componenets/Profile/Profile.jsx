import "./Profile.css";
const Profile = () => {
  return (
    <main className="profile-container">
      <div className="grid-item square-1"></div>
      <div className="grid-item square-2"></div>
      <div className="grid-item square-3"></div>
      <h1 className="profile-header">Profile</h1>
      <section className="company-brand">
        <div className="company-name">
          <p>
            LEAD<span>BULL LLC</span>
          </p>
        </div>
        <div className="vision">
          <h3>Vision</h3>
          <p>
            We enhance our data centers to personalize the contractor clients
            experience through telemarketing.
          </p>
          <div className="grid-item square-1"></div>
          <div className="grid-item square-2"></div>
          <div className="grid-item square-3"></div>
        </div>
        <div className="values">
          <h3>Values</h3>
          <p>
            Our core values include elimination of privacy concerns, and
            adherence to global marketing regulations.
          </p>
        </div>
        <div className="mission">
          <div className="grid-item square-1"></div>
          <div className="grid-item square-2"></div>
          <div className="grid-item square-3"></div>
          <h3>Mission</h3>
          <p>
            Our mission is to be the leading innovator in the telemarketing
            industry through our cloud based Lead-Gen solutions.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Profile;
