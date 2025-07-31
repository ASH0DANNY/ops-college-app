import PageLayout from "@/components/layout/PageLayout";

export default function PrincipalMessagePage() {
  return (
    <PageLayout>
      <div className="principal-message-container">
        <div className="principal-message-header">
          <h1>Principal&apos;s Message</h1>
        </div>
        <div className="principal-message-content">
          <div className="message-text">
            <div className="principal-info">
              <img
                src="/principal.jpg"
                alt="Principal"
                className="principal-image"
              />
              <h2>Dr. Jane Smith</h2>
              <p className="designation">Principal, College of Education</p>
            </div>
            <div className="message-body">
              <p>Dear Students and Parents,</p>
              <p>
                It gives me immense pleasure to welcome you to our College of
                Education. As the Principal, I am proud to lead an institution
                that has been at the forefront of teacher education for decades.
              </p>
              <p>Our college stands committed to:</p>
              <ul>
                <li>
                  Excellence in teacher education and professional development
                </li>
                <li>
                  Creating a nurturing environment for learning and growth
                </li>
                <li>Promoting innovative teaching methodologies</li>
                <li>Building strong ethical and moral values</li>
              </ul>
              <p>
                In today&apos;s rapidly evolving educational landscape, we
                strive to prepare our students not just as teachers, but as
                educational leaders who will shape the future of education.
              </p>
              <p>
                I encourage all students to take full advantage of our diverse
                learning opportunities and state-of-the-art facilities.
              </p>
              <p className="signature">
                Dr. Jane Smith
                <br />
                Principal
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
