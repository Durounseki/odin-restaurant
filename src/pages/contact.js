import { ContactForm } from "../components/contact-form";
import { Banner } from '../components/banner.js';

function Contact(){

    const contactContent = document.createElement('div');
    contactContent.classList.add('page-content');

    const banner = new Banner('GET IN TOUCH');
    const bannerComponent = banner.createBanner();
    contactContent.append(bannerComponent);

    const getInTouch = document.createElement('h1');
    getInTouch.classList.add('get-in-touch');
    getInTouch.textContent = 'Got questions or feedback? Let us know!';

    const contactForm = new ContactForm();
    const contactFormComponent = contactForm.createForm();

    contactContent.appendChild(getInTouch);
    contactContent.appendChild(contactFormComponent);

    return contactContent;

}

export { Contact };
/* <div class="form-container">
            <form action="javascript:void(0);" method="POST" id="contact-form">
                <input type="hidden" name="access_key" value="1666fd03-5f41-41d4-b6cb-8d5748eb75b3">
                <div class="patient-details">
                    <fieldset id="details">
                        <legend>Reserva tu consulta</legend>
                        <div class="field">
                            <div class="input-group">
                                <label for="first-name">NOMBRE *</label>
                                <input type="text" name="first-name" id="first-name" placeholder="Ricardo" required minlength="1" maxlength="50">
                            </div>
                            <div class="input-group">
                                <label for="last-name">APELLIDOS *</label>
                                <input type="text" name="last-name" id="last-name" placeholder="Flores García" required minlength="1" maxlength="50">
                            </div>
                        </div>
                        <div class="field">
                            <div class="input-group">
                                <label for="email">E-MAIL *</label>
                                <input type="email" name="email" id="email" placeholder="ricardo.floresg@nutricion.com" required>
                            </div>
                            <div class="input-group">
                                <label for="phone-number">NÚMERO TELEFÓNICO *</label>
                                <!-- Telephone number should only include numbers and spaces or hyphens, the length should be at least 10 digits -->
                                <input type="tel" name="phone-number" id="phone-number" placeholder="5511223344" required pattern="[0-9\s\-]{10,}">
                            </div>
                        </div>
                        <div class="field">
                            <div class="input-group">
                                <label for="service">TIPO DE CONSULTA *</label>
                                <select name="service" id="service" required>
                                    <option value="0" selected disabled hidden>Elige una opcion</option>
                                    <option value="nutricion-clinica">Nutrición clínica</option>
                                    <option value="control-de-peso">Pérdida y control de peso</option>
                                    <option value="nutricion-deportiva">Nutrición deportiva</option>
                                    <option value="planes-entrenamiento">Planes de entrenamiento</option>
                                    <option value="educacion-diabetes">Diabetes</option>
                                    <option value="cineantropometria">Cineantropometría</option>
                                </select>
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div class="credit">Powered by <a href="https://web3forms.com/">Web3Forms</a></div>
                <div class="h-captcha" data-lang="es" data-captcha="true"></div>
                <div id="send-container">
                    <button class="submit-button" type="submit" id="submit">Enviar</button>
                </div>
                <div id="result"></div>
            </form>
        </div>
    </div> */