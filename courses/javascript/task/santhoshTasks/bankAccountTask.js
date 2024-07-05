/*
Create account object {id, balance}
@Parameters
  - accountNumber: number
  - initialBalance: number
  
@Return
  {id: accountNumber, balance: initialBalance}
*/
function createAccount(accountNumber, initialBalance) {
  
    if(typeof accountNumber !== "number") {
      throw new Error(`Passed account number ${accountNumber} is not a number data type`)
    }
    
    const account = {
      id: accountNumber,
      balance: initialBalance
    }
    return account;
  }
  
  
  const firstAccount = createAccount(1234, 500);
  const secondAccount = createAccount(5678, 1000);
  console.log(firstAccount);
  console.log(secondAccount);
  
  /*
  to deposit money into an account
  @Parameter
    - account: object {id, balance}
    - amount: number
    
  Implementation
  sum previous account balance to new amount
  account.balance = account.balance + amount
  */
  function deposit(account, amount) {
    if(typeof amount !== "number") {
      throw new Error("Please provide amount has a number data type");
    }
    
    account.balance = account.balance + amount;
    console.log(`
    Deposited ${amount} into account ${account.id} 
    and total balance is ${account.balance}
    `)
  }
  
   /*
  to withdraw money into an account
  @Parameter
    - account: object {id, balance}
    - amount: number
    
  Implementation
  sum previous account balance to new amount
  account.balance = account.balance + amount
  */
  function withdraw(account, amount) {
    if(typeof amount !== "number") {
      throw new Error("Please provide amount has a number data type");
    }
    
    account.balance = account.balance - amount;
    console.log(`
    Withdraw ${amount} in account ${account.id} 
    and total balance is ${account.balance}
    `)
  }
  
  
  
  deposit(firstAccount, 150);
  withdraw(firstAccount, 50);
  deposit(secondAccount, 677);
  withdraw(secondAccount,200)
  
  
  /*
  To check account balance
  @Parameter
    - account: object {id, balance};
  */
  function checkBalance(account) {
    console.log(`
      Account: ${account.id}
      Balance: ${account.balance}
    `)
  }
  
  
  checkBalance(secondAccount);
  checkBalance(firstAccount);
  
  
  
  
  
  
  
  