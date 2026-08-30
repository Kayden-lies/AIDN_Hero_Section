export default function ShowcaseForm() {
  return (
    <section className="showcase-form-section">
      <div className="showcase-form-card">
        <h2>Submit Your Project</h2>

        <p>
          Share your HOP 2026 project with the AIDN community.
        </p>

        <form>
          <div className="form-field">
            <label htmlFor="teamName">Team Name</label>
            <input
              id="teamName"
              name="teamName"
              type="text"
              placeholder="Enter your team name"
            />
          </div>

          <div className="form-field">
            <label htmlFor="projectName">Project Name</label>
            <input
              id="projectName"
              name="projectName"
              type="text"
              placeholder="Enter your project name"
            />
          </div>

          <div className="form-field">
            <label htmlFor="description">Project Description</label>
            <textarea
              id="description"
              name="description"
              rows={5}
              placeholder="Tell us briefly about what you built..."
            />
          </div>

          <div className="form-field">
            <label htmlFor="github">GitHub / Repository Link</label>
            <input
              id="github"
              name="github"
              type="url"
              placeholder="https://github.com/..."
            />
          </div>

          <div className="form-field">
            <label htmlFor="prototype">Prototype Link</label>
            <input
              id="prototype"
              name="prototype"
              type="url"
              placeholder="https://..."
            />
          </div>

          <div className="form-field">
            <label htmlFor="demo">Demo Video Link</label>
            <input
              id="demo"
              name="demo"
              type="url"
              placeholder="https://..."
            />
          </div>

          <div className="form-field">
            <label htmlFor="documentation">Documentation / Presentation</label>
            <input
              id="documentation"
              name="documentation"
              type="url"
              placeholder="https://..."
            />
          </div>

          <button type="submit">
            Submit Project
          </button>
        </form>
      </div>
    </section>
  );
}
