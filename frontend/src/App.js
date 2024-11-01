import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PoliticaPrivacidad from './PoliticaPrivacidad';
import './App.css';

function Main() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Inicio</Link> | <Link to="/politica-privacidad">Política de Privacidad</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/politica-privacidad" component={PoliticaPrivacidad} />
        </Switch>
      </div>
    </Router>
  );
}

export default Main;
function App() {
  // Estado para almacenar los sitios registrados
  const [sitios, setSitios] = useState([]);

  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    ubicacion: '',
    descripcion: '',
    imagenUrl: '',
    responsable: '',
    correo: '',
    telefono: ''
  });

  // useEffect para obtener los sitios del backend al cargar la página
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/sitios`)
      .then(response => response.json())
      .then(data => setSitios(data))
      .catch(error => console.error('Error fetching sitios:', error));
  }, []);

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Enviar los datos al backend
    fetch(`${process.env.REACT_APP_BACKEND_URL}/sitios`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(newSitio => {
        // Agregar el nuevo sitio al estado de sitios
        setSitios([...sitios, newSitio]);
        // Limpiar el formulario
        setFormData({
          nombre: '',
          ubicacion: '',
          descripcion: '',
          imagenUrl: '',
          responsable: '',
          correo: '',
          telefono: ''
        });
      })
      .catch(error => console.error('Error creando sitio:', error));
  };

  // Función para manejar los cambios en los campos del formulario
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  // Función para manejar el botón flotante de volver arriba
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="App">
     <div className="navigation-buttons" style={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
  
</div>
      <header className="App-header-banner" style={{ backgroundImage: 'url(/banner.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', padding: '50px 20px', color: 'white', borderRadius: '10px', marginBottom: '40px', position: 'relative' }}>
  <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '10px' }}>
    <h1>Explora y Descubre la Belleza de Colombia</h1>
    <p>En esta página podrás registrar y explorar diversos sitios turísticos de Colombia, para que otros puedan conocer y disfrutar de las maravillas que ofrece nuestro país.</p>
  </div>
  <button
    onClick={() => {
      const registroElement = document.querySelector('.registro-formulario');
      if (registroElement) {
        registroElement.scrollIntoView({ behavior: 'smooth' });
      }
    }}
    style={{
      padding: '10px 20px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
    }}
    onMouseEnter={(e) => e.target.style.backgroundColor = '#218838'}
    onMouseLeave={(e) => e.target.style.backgroundColor = '#28a745'}
  >
    Registrar Lugar
  </button>
  <button
    onClick={() => {
      const sitiosElement = document.querySelector('.sitios-registrados');
      if (sitiosElement) {
        sitiosElement.scrollIntoView({ behavior: 'smooth' });
      }
    }}
    style={{
      padding: '10px 20px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
    }}
    onMouseEnter={(e) => e.target.style.backgroundColor = '#218838'}
    onMouseLeave={(e) => e.target.style.backgroundColor = '#28a745'}
  >
    Ver Sitios Registrados
  </button>
  <button
    onClick={() => {
      const contactoElement = document.querySelector('.informacion-admin');
      if (contactoElement) {
        contactoElement.scrollIntoView({ behavior: 'smooth' });
      }
    }}
    style={{
      padding: '10px 20px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
    }}
    onMouseEnter={(e) => e.target.style.backgroundColor = '#218838'}
    onMouseLeave={(e) => e.target.style.backgroundColor = '#28a745'}
  >
    Contáctenos
  </button>
  
</header>

      <section className="descripcion" style={{ marginBottom: '40px' }}> <div className="imagenes-ejemplo" style={{ display: 'flex', gap: '20px', marginBottom: '20px', justifyContent: 'center', padding: '10px 0', backgroundColor: '#f5f5f5', borderRadius: '10px' }}>
          <img src="/imagen1.jpg" alt="Ejemplo de sitio 1" style={{ width: '40%', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
          <img src="/imagen2.jpg" alt="Ejemplo de sitio 2" style={{ width: '40%', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
        </div>
        <p style={{ marginTop: '20px', textAlign: 'left' }}>Esta plataforma te permite registrar lugares turísticos y compartir información detallada para ayudar a otros a conocer más sobre Colombia. ¡Comparte los sitios que más te apasionan!</p>
      </section>
      <section className="registro-formulario">
  <h2>Registrar un nuevo lugar</h2>
  <button
  onClick={() => setMostrarFormulario(!mostrarFormulario)}
  style={{
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  }}
  onMouseEnter={(e) => e.target.style.backgroundColor = '#218838'}
  onMouseLeave={(e) => e.target.style.backgroundColor = '#28a745'}
>
  {mostrarFormulario ? 'Ocultar formulario' : 'Registrar un nuevo lugar'}
</button>

  {mostrarFormulario && (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Nombre del lugar:</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Ubicación:</label>
        <input type="text" name="ubicacion" value={formData.ubicacion} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Descripción:</label>
        <textarea name="descripcion" style={{ resize: 'none' }} value={formData.descripcion} onChange={handleChange}></textarea>
      </div>
      <div className="form-group">
        <label>Imagen URL:</label>
        <input type="text" name="imagenUrl" value={formData.imagenUrl} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Responsable:</label>
        <input type="text" name="responsable" value={formData.responsable} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Correo:</label>
        <input type="email" name="correo" value={formData.correo} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Teléfono:</label>
        <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} />
      </div>
      <button type="submit">Registrar</button>
    </form>
  )}
</section>

      <section className="sitios-registrados">
        <h2>Sitios Registrados</h2>
        <p>A continuación, encontrarás una lista de los sitios registrados por nuestra comunidad. Puedes explorar sus características, ubicación y quién es el responsable de cada uno de estos lugares maravillosos.</p>
        <div className="tarjetas-sitios">
          {sitios.map((sitio, index) => (
            <div key={index} className="tarjeta-sitio">
              <h3>{sitio.nombre}</h3>
              <img src={sitio.imagenUrl} alt={`Imagen de ${sitio.nombre}`} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
              <p>{sitio.descripcion}</p>
              <p><strong>Ubicación:</strong> {sitio.ubicacion}</p>
              <p><strong>Responsable:</strong> {sitio.responsable}</p>
              <p><strong>Contacto:</strong> {sitio.telefono}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="informacion-admin" style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h2>Información del Administrador</h2>
        <p>Nombre: Administrador de la Plataforma Turística de Colombia</p>
        <p>Correo: admin@ejemplo.com</p>
        <p>Teléfono: 123456789</p>
        <p>Gracias por visitar nuestra plataforma y contribuir al crecimiento del turismo en nuestro hermoso país. Estamos comprometidos en hacer que la experiencia sea lo más sencilla y enriquecedora posible para todos los usuarios.</p>
      </section>
      {/* Botón flotante para volver arriba */}
<button onClick={scrollToTop} style={{ position: 'fixed', bottom: '20px', right: '20px', padding: '10px 15px', fontSize: '16px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '50%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', cursor: 'pointer' }}>
  ↑
</button>

    </div>
  );
}

export default App;
