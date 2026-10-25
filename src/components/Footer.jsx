import "../styles/Footer.css";

/*
  Footer: pie de página reutilizable.
  El año se calcula automáticamente para no tener que actualizarlo a mano.
*/
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <span>FULL STACK DEVELOPER · LA PLATA, ARGENTINA</span>
      <span>© {year} IMSOFIIE</span>
    </footer>
  );
}

export default Footer;
