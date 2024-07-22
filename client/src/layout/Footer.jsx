// src/layout/Footer.jsx


const Footer = () => {
  const date = new Date()

  return (
   <div className="bg-success mt-3">
      <p className="py-3 text-end text-white me-4">
      copyright { String.fromCharCode(169)}
      {' ' + date.getFullYear()} Websites &apos;R&apos; Us
      </p>
      
   </div>
  );
};

export default Footer;

