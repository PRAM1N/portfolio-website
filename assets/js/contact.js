/*=============== EMAIL JS ==============*/
const contactForm = document.getElementById("contact-form"),
    contactMessage = document.getElementById("contact-message")

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publickey
    emailjs.sendForm('service_ounotyh','template_g8v875j','#contact-form','PeuOvzcJ1YoL_ngmG')
        .then(() => {
            //Show sent message
            contactMessage.textContent = 'Message sent successfully'

            //Remove message after 5 seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            //Clear input fields
            contactForm.reset()

        }, () => {
            //Show error message
            contactMessage.textContent = 'Message not send (service error)'
        })
}

contactForm.addEventListener('submit', sendEmail)