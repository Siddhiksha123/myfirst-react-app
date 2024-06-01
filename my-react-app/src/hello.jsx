function Hello()
{ 
  // eslint-disable-next-line no-unused-vars
  let myName='Swati';
  let number=456;
  let fullName=()=>{
    return 'Swati Yadav'
    
  }
  return <p>
    MessageNO: {number}Hello this is the future speaking.I am your student {fullName()}
  </p>
}

export default Hello;