export const login = (container) => {
  const html = `
 <div class="logIng">
    <div>
      <img src="resources/garabatoLogin.png" alt="logoDeLoging" data-action = "home">
    </div>
    <div class="bottonSection">
      <button id='signIn' data-action = "signIn">Iniciar Sesión</button><br>
      <button class="signUpBotton"  data-action ="signUp">Registarse</button>
    </div>
    
    <div class="terms">
      <p>Al iniciar sesión aceptas nuestros términos de servicio y estás al tanto de nuestro aviso de privacidad.</p>
    </div>
  </div>
  `;
  // eslint-disable-next-line no-param-reassign
  container.innerHTML = html;
};
