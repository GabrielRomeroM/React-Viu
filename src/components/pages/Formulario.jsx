import "../../../public/css/formulario.css";

function Formulario() {
  return (
    <>
      <body className="body-container">
        <header className="header-page">
          <nav className="header-container">
            <div className="logo-container">
              <img src="img/viulogo.png" alt="Logo" />
            </div>
            <ul>
              <li className="help-button">
                <a href="#">Ayuda</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <form className="form-container">
            <label for="nombre">Nombres*</label>
            <input type="text" name="nombre" id="input-container" />
            <br />
            <label for="apellidos">Apellidos*</label>
            <input type="text" name="apellidos" id="input-container" />
            <br />
            <label for="email">Email*</label>
            <input type="email" name="email" id="input-container" />
            <br />
            <label for="contraseña">Contraseña*</label>
            <input type="password" name="contraseña" id="input-container" />
            <br />
            <label for="contraseña">Repetir Contraseña*</label>
            <input type="password" name="contraseña" id="input-container" />
            <br />
            <input type="submit" value="Registrarse" />
            <br />
            <div className="form-footer">
              <small>*Campos obligatorios</small>
              <br />
              <a href="ayuda/ayuda.html" target="_blank">
                <p>¿No puedes registrarte?</p>
              </a>
            </div>
          </form>
        </main>
      </body>
    </>
  );
}

export default Formulario;
