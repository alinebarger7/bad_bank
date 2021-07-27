function Withdraw(){
  const [show, setShow]                       = React.useState(true);
  const [withdrawAmount, setWithdrawAmount]   = React.useState('');
  const [status, setStatus]                   = React.useState(''); 
  const balance = 100;
  const ctx = React.useContext(UserContext);
  const updatedBalance = balance - withdrawAmount;

  function validate() {
    if (isNaN(withdrawAmount) || withdrawAmount <= 0 || withdrawAmount === '') {
      alert('Error: please make a valid positive numerical entry.');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    if (withdrawAmount > balance) {
      alert('Error: Insufficient funds. Please try again.')
    }
    return true;
}
  function withdrawFunds() {
    console.log(withdrawAmount);
    if (!validate(withdrawAmount, 'withdrawAmount')) return;
    ctx.users.push({withdrawAmount});
    setShow(false);
  }
  
  function clearFunds() {
    setWithdrawAmount('');
    setShow(true);
  }

  return (
    <Card
    bgcolor="primary"
    header="Make a Withdrawal"
    status={status}
    body={show ? (  
            <>
            Current Balance: ${updatedBalance}<br /><br />
            Amount to Withdraw:<br/>
            <input type="input" className="form-control" id="withdrawAmount" placeholder="Enter Amount" value={withdrawAmount} onChange={e => setWithdrawAmount(e.currentTarget.value)} /><br/>
            <button type="submit" className="btn btn-light" onClick={withdrawFunds}>Withdraw Funds</button>
            </>
          ):(
            <>
            <h5>Success! Your balance is now: ${updatedBalance}</h5>
            <button type="submit" className="btn btn-light" onClick={clearFunds}>Withdraw More?</button>
            </>
          )}
  />
  )
}
