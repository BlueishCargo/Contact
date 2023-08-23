const submitBtn = document.querySelector("#bottomButton");

submitBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  console.log("wazzah")
  const clientName = document.querySelector("#clientName");
  const clientEmail = document.querySelector("#clientEmail");
  const clientSubject = document.querySelector("#details");
  const clientBudget = document.querySelector("#clientBudget");
  const clientTimeline = document.querySelector("#clientTimeline");
  
  Email.send({
    SecureToken : "6201a7ae-5a5d-47e0-a956-1bb3d3d5a01a",
    To : 'anisnaich15@gmail.com',
    From : `anisnaich15@gmail.com`,
    Subject : "Potential Client!",
    Body : `Name: ${clientName.value} <br> Email: ${clientEmail.value} <br> Subject: ${clientSubject.value} <br> Budget: ${clientBudget.value} <br> Timeline: ${clientTimeline.value}`
}).then(
  message => alert(message)
);
  }
)
