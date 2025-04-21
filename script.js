function handleCommand(e) {
    if (e.key === 'Enter') {
      const input = document.getElementById('input');
      const output = document.getElementById('output');
      const command = input.value.trim();
      output.innerHTML += `<div>> ${command}</div>`;
  
      const [baseCmd, ...args] = command.split(" ");
      const argText = args.join(" ");
  
      switch (baseCmd.toLowerCase()) {
        case 'help':
          output.innerHTML += `<div>Comandos disponibles: help, about, clear, skills, say, developer, owner, projects, plugin, social, contact, motd, quote</div>`;
          break;
  
        case 'about':
          output.innerHTML += `<div>Portfolio interactivo desarrollado por <strong>ShadowDevX</strong> con HTML, CSS y JS.</div>`;
          break;
  
        case 'clear':
          output.innerHTML = '';
          break;
  
        case 'skills':
          output.innerHTML += `<div>C, JS, Java, HTML, C#Script, Python...</div>`;
          break;
  
        case 'say':
          if (argText) {
            output.innerHTML += `<div>${argText}</div>`;
            speak(argText);
          } else {
            output.innerHTML += `<div>Uso: say [mensaje]</div>`;
          }
          break;
  
        case 'developer':
          output.innerHTML += `<div>Este portfolio ha sido desarrollado por <strong>ShadowDevX</strong>.</div>`;
          speak("Este portfolio ha sido desarrollado por ShadowDevX");
          break;
  
        case 'owner':
          output.innerHTML += `<div>El propietario y creador de este portfolio es <strong>ShadowDevX</strong>.</div>`;
          speak("El propietario y creador de este portfolio es ShadowDevX");
          break;
  
        case 'projects':
          output.innerHTML += `<div>- Chat JS<br>- Configuración de Plugins Minecraft<br>- API Java</div>`;
          break;
  
        case 'plugin':
          output.innerHTML += `<div>Experiencia en configuración de plugins de Minecraft (Spigot, PaperMC), archivos YML, permisos, comandos y optimización del servidor.</div>`;
          break;
  
        case 'social':
          output.innerHTML += `<div>GitHub: <a href="https://github.com/ShadowDeveloperX" target="_blank">github.com/ShadowDeveloperX</a><br>Discord: <a href="shadow.jar" target="_blank">shadow.jar</a></div>`;
          break;
  
        case 'contact':
          output.innerHTML += `<div>Puedes contactar conmigo en: <strong>shadowdevxx@gmail.com</strong></div>`;
          break;
  
        case 'motd':
          const mensajes = [
            "¡Bienvenido al portfolio de ShadowDevX!",
            "Recuerda: cada línea de código cuenta.",
            "Cree. Codea. Comparte.",
            "¿Estás listo para explorar mis proyectos?"
          ];
          output.innerHTML += `<div>${mensajes[Math.floor(Math.random() * mensajes.length)]}</div>`;
          break;
  
        case 'quote':
          const quotes = [
            "El software es como el sexo: es mejor cuando es libre. – Linus Torvalds",
            "Hablar es barato. Enséñame el código. – Linus Torvalds",
            "El mejor error es el que no se comete dos veces.",
            "Todo gran desarrollador fue un principiante alguna vez."
          ];
          const random = quotes[Math.floor(Math.random() * quotes.length)];
          output.innerHTML += `<div>${random}</div>`;
          speak(random);
          break;
  
        default:
          output.innerHTML += `<div>Comando no reconocido. Escribe 'help' para ver los disponibles.</div>`;
      }
  
      input.value = '';
      output.scrollTop = output.scrollHeight;
    }
  }
  
  // 🗣 Función de voz
  function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "es-ES";
    window.speechSynthesis.speak(utterance);
  }
  