function Contact() {
  return (
    <div>
      <form>
        <label for="cname">Name:</label>
        <br></br>
        <input type="text" id="cname" name="cname"></input>
        <br></br>
        <label for="cemail">Email:</label>
        <br></br>
        <input type="email" id="cemail" name="cemail"></input>
        <br></br>
        <label for="cmessage">Message:</label>
        <br></br>
        <input type="text" id="cmessage" name="cmessage"></input>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
