import './Contact.css'

export const Contact = () => {
  return (
    
<div className="login-box">
  <p>Contact me</p>
  <form>
    <div className="user-box">
      <input name="" type="text"/>
      <label>Email</label>
    </div>
    <div className="user-box">
      <input name="" type="text"/>
      <label>Your name</label>
    </div>
    <div className="user-box">
      <input  name="" type="text"/>
      <label>How can I help you?</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
  <p>¡Send me your ideas!</p>
</div>
  )
}