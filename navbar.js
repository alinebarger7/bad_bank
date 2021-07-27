function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#" title="Home">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/" title="Create your very own 100% safe and secure account!">Create Account</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#/deposit/" title="Too much money? Dump it here!">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/" title="I guess you can try to get some money back.">Withdraw</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#/alldata/" title="View all data">All Data</a>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}