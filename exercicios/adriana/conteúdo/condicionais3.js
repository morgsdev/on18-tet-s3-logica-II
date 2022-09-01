switch (horario >= 0 && horario < 6) {
    case true:
      console.log("madrugada");
      break;
    case false:
      switch (horario >= 6 && horario < 12) {
        case true:
          console.log("manhã");
          break;
        case false:
          switch (horario >= 12 && horario < 18) {
            case true:
              console.log("tarde");
              break;
            case false:
              switch (horario > 18 && horario < 24) {
                case true:
                  console.log("noite");
                case false:
                  console.log("horário inválido");
              }
          }
      }
  }
  