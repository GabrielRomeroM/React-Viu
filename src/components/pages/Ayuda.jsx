import "../../../public/css/ayuda.css";

function Ayuda() {
  return (
    <>
      <body className="body-ayuda">
        <header className="header-ayuda">
          <nav className="nav-container-ayuda" >
            <div className="logo-container">
              <img src="img/viulogo.png" alt="Logo" />
            </div>
          </nav>
        </header>
        <main>
          <section>
            <form className="form-container">
              <label for="Nombres">Nombres*</label>
              <input type="text" name="Nombres" className="input-container" />
              <br />
              <label for="apellidos">Apellidos*</label>
              <input type="text" name="apellidos" className="input-container" />
              <br />
              <label for="email">Email*</label>
              <input type="email" name="email" className="input-container" />
              <br />
              <label for="Reclamo">Reclamo*</label>
              <textarea
                name="Reclamo"
                rows=""
                className="textarea-container"
              ></textarea>
              <br />
              <div className="button-container">
                <button type="submit" className="button">
                  Enviar
                </button>
                <br />
                <button type="reset" className="button">
                  Cancelar
                </button>
              </div>
            </form>
          </section>
        </main>
      </body>
    </>
  );
}

export default Ayuda;
