const nodemailer=require('nodemailer')
const nodemailerConfig =require('./nodemailerConfig')
    const sendEmail=async({to,subject,text,html})=>{
    
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport(nodemailerConfig);

  let info = await transporter.sendMail({
    from: 'soorajsurendran8196@gmail.com',
    to,
    subject,
    text,
    html,
  });



}

module.exports=sendEmail