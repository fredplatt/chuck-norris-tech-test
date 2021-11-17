export default function EmailSender(emails, joke) {
    const subject = "APIs do mailshots, Chuck Norris shoots males";
    const url = "http://localhost:8000/";
    emails.map((address) => {
      const emailObject = {
        From: "devfredplatt@gmail.com",
        To: address,
        Subject: subject,
        TextBody: joke,
      };
      const xhr = new XMLHttpRequest();
      xhr.open("POST", url);
  
      xhr.setRequestHeader("Accept", "application/json");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("Name", "CUSTOM-HEADER");
      xhr.setRequestHeader("Value", "value");
  
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          console.log(xhr.status);
          console.log(xhr.responseText);
        }
      };
  
      return xhr.send(JSON.stringify(emailObject));
    });
  }
  