export function NavBar({ onNavigate }) {
  return (
    <header className="header purple-background">
      <div className="container">
        <div className="row">
          <div className="column-full d-flex align-center">
            <h1 className="white-text">Code Journal</h1>
            <h3>
              <button
                type="button"
                onClick={() => onNavigate('journal')}
                className="entries-link white-text">
                Entries
              </button>
              <button
                type="button"
                onClick={() => onNavigate('register')}
                className="entries-link white-text">
                Register
              </button>
              <button
                type="button"
                onClick={() => onNavigate('sign-in')}
                className="entries-link white-text">
                Sign In
              </button>
            </h3>
          </div>
        </div>
      </div>
    </header>
  );
}
