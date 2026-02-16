function onFormSubmit(e) {
  const name = e.values[1];
  const email = e.values[2];
  const service = e.values[4];

  MailApp.sendEmail({
    to: email,
    subject: "We received your request",
    htmlBody:  `<p>Hi ${name},</p>
    <p>Thanks for your request about <b>${service}</b>.</p>
    <p>We'll be in touch soon.</p>
    <p>Best,<br>{{YOUR_NAME}}</p>`
  });


  const sheet = SpreadsheetApp.getActiveSheet();
  const lastRow = sheet.getLastRow();
  const statusColumn = sheet.getLastColumn();

  sheet.getRange(lastRow, statusColumn).setValue("New");


}
