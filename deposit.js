function Deposit(){
  const [show, setShow]                       = React.useState(true);
  const [depositAmount, setDepositAmount]     = React.useState('');
  const [status, setStatus]                   = React.useState(''); 
  const balance = 100;
  const ctx = React.useContext(UserContext);
  const updatedBalance = + balance + + depositAmount;

  function validate() {
    if (isNaN(depositAmount) || depositAmount <= 0 || depositAmount === '') {
      alert('Error: please make a valid positive numerical entry.');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
}
  function depositFunds() {
    console.log(depositAmount);
    if (!validate(depositAmount, 'depositAmount')) return;
    ctx.users.push({depositAmount});
    setShow(false);
  }
  
  function clearFunds() {
    setDepositAmount('');
    setShow(true);
  }

  return (
    <Card
    bgcolor="primary"
    header="Make a Deposit"
    status={status}
    body={show ? (  
            <>
            Current Balance: ${updatedBalance}<br /><br />
            Amount to Deposit:<br/>
            <input type="input" className="form-control" id="depositAmount" placeholder="Enter Amount" value={depositAmount} onChange={e => setDepositAmount(e.currentTarget.value)} /><br/>
            <button type="submit" className="btn btn-light" onClick={depositFunds}>Deposit Funds</button>
            </>
          ):(
            <>
            <h5>Success! Your balance is now: ${updatedBalance}</h5>
            <button type="submit" className="btn btn-light" onClick={clearFunds}>Deposit More</button>
            </>
          )}
  />
  )
}

//export {updatedBalance}