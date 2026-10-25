import { useState } from "react";

import "../styles/Contact.css";

// Valores iniciales del formulario (también se usan para resetearlo)
const INITIAL_FORM = { name: "", email: "", message: "" };

const CONTACT_LINKS = [
  { icon: "✉", label: "EMAIL / SOFIPVK16@GMAIL.COM", href: "mailto:sofipvk16@gmail.com" },
  { icon: "🌐", label: "GITHUB / SOFIPVK16-SUDO", href: "https://github.com/sofipvk16-sudo", external: true },
  { icon: "💼", label: "LINKEDIN / SOFÍA PAVISKOV", href: "https://www.linkedin.com/in/sofia-paviskov-450ba5283/", external: true },
];

/*
  Contact: sección de contacto con links y un formulario controlado.
*/
function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [sent, setSent] = useState(false);

  // Actualiza el campo que cambió usando su atributo "name"
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(`Input "${name}":`, value);
    setForm((current) => ({ ...current, [name]: value }));
    setSent(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // evita que la página se recargue
    console.log("Formulario enviado:", form);
    setSent(true);
    setForm(INITIAL_FORM);
  };

  const handleReset = () => {
    console.log("Formulario reseteado");
    setForm(INITIAL_FORM);
    setSent(false);
  };

  return (
    <section className="contact" id="contact">
      <div className="section-inner">
        {/* Título */}
        <div className="contact-header reveal">
          <h2 className="section-title">
            LET&apos;S WORK
            <br />
            TOGETHER
          </h2>
          <span className="plus-icon">+</span>
        </div>

        <div className="contact-grid reveal">
          {/* Texto y links de contacto */}
          <div className="contact-info">
            <p>Actualmente estoy abierta a nuevos proyectos, oportunidades laborales y colaboraciones freelance. Construyamos experiencias digitales con código e intención.</p>

            <div className="contact-links">
              {CONTACT_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="contact-row"
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <span className="icon">{link.icon}</span> {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Formulario */}
          <form className="contact-form" onSubmit={handleSubmit} onReset={handleReset}>
            <label className="form-field">
              <span>NOMBRE</span>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Tu nombre" required />
            </label>

            <label className="form-field">
              <span>EMAIL</span>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="tu@email.com" required />
            </label>

            <label className="form-field">
              <span>MENSAJE</span>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Contame sobre tu proyecto..." rows="5" required />
            </label>

            {/* Botones enviar / borrar */}
            <div className="form-actions">
              <button type="submit" className="project-link form-submit">ENVIAR ↗</button>
              <button type="reset" className="project-link">BORRAR</button>
            </div>

            {/* Mensaje de enviado */}
            {sent && (
              <p className="form-success" role="status">
                ¡Gracias! Recibí tu mensaje.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
