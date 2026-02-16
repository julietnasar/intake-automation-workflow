function onFormSubmit(e) {
  const name = e.values[1];
  const email = e.values[2];
  const service = e.values[4];

  // send confirmation email to client 
  MailApp.sendEmail({
    to: email,
    subject: "We received your request",
    htmlBody:  `<p>Hi ${name},</p>
    <p>Thanks for your request about <b>${service}</b>.</p>
    <p>We'll be in touch soon.</p>
    <p>Best,<br>Juliet</p>`
  });

  // update status of client request on sheet to new
  const sheet = SpreadsheetApp.getActiveSheet();
  const lastRow = sheet.getLastRow();
  const statusColumn = sheet.getLastColumn();

  sheet.getRange(lastRow, statusColumn).setValue("New");

  // send email to team that there is a new request
  MailApp.sendEmail({
    to: email,
    subject: "New Client Request",
    htmlBody:  `<p>Hi Team!,</p>
    <p>There is a new request from ${name} about ${service}</b>.</p>`
  });


}
