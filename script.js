// textarea plug
autosize(document.querySelectorAll(".note"));
//autosize(document.querySelectorAll("#test"));
//autosize(document.querySelectorAll("#test1"));

const getText = document.querySelector(".input>textarea");
const output = document.querySelector(".output>textarea");
//localStorage get input

// Database
let sinumerik = {
  1: "g00",
  2: "g01",
  3: "g02",
  4: "g03"
};
let hass = {
  1: "g0",
  2: "g1",
  3: "g2",
  4: "g3"
};
let hh = {
  1: "g0000",
  2: "g0001",
  3: "g0002",
  4: "g0003"
};

//choice language
let LnInput = sinumerik;
let LnOutPut = hass;

getText.addEventListener("keyup", getText1, false);

function getText1() {
  let input = this.value;
  //replace forEach Database
  Object.keys(LnInput).forEach(function(key) {
    let regex = new RegExp(LnInput[key], "g");
    input = input.replace(regex, LnOutPut[key]);
    //replace forEach Database WITH toUpperCase
    let regexUP = new RegExp(LnInput[key].toUpperCase(), "g");
    input = input.replace(regexUP, LnOutPut[key].toUpperCase());
  });
  output.value = input;
  // localStorage set input
  output.style.height = getText.style.height;
  localStorage.setItem("input", this.value);
}

set;

const choice = document.querySelectorAll(".choice");
// choice.forEach((button) => {
//     button.addEventListener("click", () => {
//         choice.forEach((e) => {
//             e.classList.remove("choicefocus");
//         })
//         button.classList.add("choicefocus");
//         LnInput = eval(button.getAttribute("data-value"));

//         console.log(LnInput);
//     })

// })
const choiceOut = document.querySelectorAll(".choiceOut");
// choiceOut.forEach((button) => {
//     button.addEventListener("click", () => {
//         choiceOut.forEach((e) => {
//             e.classList.remove("choicefocus");
//         })
//         button.classList.add("choicefocus");
//         LnOutPut = eval(button.getAttribute("data-value"));

//         console.log(LnOutPut);
//     })

// })

function choise11(choiceOut, button) {
  choiceOut.forEach(e => {
    e.classList.remove("choicefocus");
  });
  button.classList.add("choicefocus");
  return eval(button.getAttribute("data-value"));
}
choice.forEach(button => {
  button.addEventListener("click", () => {
    let test5 = button.getAttribute("data-value").trim();
    let test6 = document
      .querySelector(".choiceOut.choicefocus ")
      .getAttribute("data-value")
      .trim();

    if (test5 == test6) {
      let change = LnInput;
      LnInput = LnOutPut;
      LnOutPut = change;
      // choice.forEach((e) => {
      //     if (e.classList.contains("choicefocus")) {
      //         var Sinput = (e.getAttribute("data-value")).trim();

      //         choice.forEach((e) => {
      //             e.classList.remove("choicefocus")
      //         })

      //     }
      // })

      // choiceOut.forEach((e) => {

      //     if (e.classList.contains("choicefocus")) {
      //         var Soutput = (e.getAttribute("data-value"));
      //         choiceOut.forEach((e) => {
      //             e.classList.remove("choicefocus");
      //         })
      //     }
      // })

      for (i = 0; i < choice.length; i++) {
        if (choice[i].classList.contains("choicefocus")) {
          var Sinput = choice[i].getAttribute("data-value").trim();

          choice.forEach(e => {
            e.classList.remove("choicefocus");
          });
        }
      }
      for (i = 0; i < choiceOut.length; i++) {
        if (choiceOut[i].classList.contains("choicefocus")) {
          var Soutput = choiceOut[i].getAttribute("data-value").trim();

          choiceOut.forEach(e => {
            e.classList.remove("choicefocus");
          });
        }
      }

      document.querySelectorAll(".choiceOut").forEach(e => {
        let test1 = e.getAttribute("data-value").trim();
        if (test1 == Sinput) {
          e.classList.add("choicefocus");
        }
      });
      document.querySelectorAll(".choice").forEach(e => {
        let test1 = e.getAttribute("data-value").trim();
        if (test1 == Soutput) {
          e.classList.add("choicefocus");
        }
      });
    } else {
      LnInput = choise11(choice, button);
    }

    LnInput = choise11(choice, button);

    // if (LnInput == LnOutPut) {
    //     console.log("elo");
    // }

    const getText1 = document.querySelector(".input>textarea");
    input = getText1.value;
    //replace forEach Database
    Object.keys(LnInput).forEach(function(key) {
      let regex = new RegExp(LnInput[key], "g");
      input = input.replace(regex, LnOutPut[key]);
      //replace forEach Database WITH toUpperCase
      let regexUP = new RegExp(LnInput[key].toUpperCase(), "g");
      input = input.replace(regexUP, LnOutPut[key].toUpperCase());
    });
    output.value = input;
  });
});
choiceOut.forEach(button => {
  button.addEventListener("click", () => {
    let test5 = button.getAttribute("data-value").trim();
    let test6 = document
      .querySelector(".choice.choicefocus ")
      .getAttribute("data-value")
      .trim();

    if (test5 == test6) {
      let change = LnInput;
      LnInput = LnOutPut;
      LnOutPut = change;
      // choice.forEach((e) => {
      //     if (e.classList.contains("choicefocus")) {
      //         var Sinput = (e.getAttribute("data-value")).trim();

      //         choice.forEach((e) => {
      //             e.classList.remove("choicefocus")
      //         })

      //     }
      // })

      // choiceOut.forEach((e) => {

      //     if (e.classList.contains("choicefocus")) {
      //         var Soutput = (e.getAttribute("data-value"));
      //         choiceOut.forEach((e) => {
      //             e.classList.remove("choicefocus");
      //         })
      //     }
      // })

      for (i = 0; i < choice.length; i++) {
        if (choice[i].classList.contains("choicefocus")) {
          var Sinput = choice[i].getAttribute("data-value").trim();

          choice.forEach(e => {
            e.classList.remove("choicefocus");
          });
        }
      }
      for (i = 0; i < choiceOut.length; i++) {
        if (choiceOut[i].classList.contains("choicefocus")) {
          var Soutput = choiceOut[i].getAttribute("data-value").trim();

          choiceOut.forEach(e => {
            e.classList.remove("choicefocus");
          });
        }
      }

      document.querySelectorAll(".choiceOut").forEach(e => {
        let test1 = e.getAttribute("data-value").trim();
        if (test1 == Sinput) {
          e.classList.add("choicefocus");
        }
      });
      document.querySelectorAll(".choice").forEach(e => {
        let test1 = e.getAttribute("data-value").trim();
        if (test1 == Soutput) {
          e.classList.add("choicefocus");
        }
      });
    } else {
      LnOutPut = choise11(choiceOut, button);
    }

    const getText1 = document.querySelector(".input>textarea");
    input = getText1.value;
    //replace forEach Database
    Object.keys(LnInput).forEach(function(key) {
      let regex = new RegExp(LnInput[key], "g");
      input = input.replace(regex, LnOutPut[key]);
      //replace forEach Database WITH toUpperCase
      let regexUP = new RegExp(LnInput[key].toUpperCase(), "g");
      input = input.replace(regexUP, LnOutPut[key].toUpperCase());
    });
    output.value = input;
  });
});

///////////////////////////////////////////////////////////////////////////////////////////////

const exchange = document.querySelector(".exchange");
exchange.addEventListener("click", exchange1, false);

function exchange1() {
  let change = LnInput;
  LnInput = LnOutPut;
  LnOutPut = change;
  // choice.forEach((e) => {
  //     if (e.classList.contains("choicefocus")) {
  //         var Sinput = (e.getAttribute("data-value")).trim();

  //         choice.forEach((e) => {
  //             e.classList.remove("choicefocus")
  //         })

  //     }
  // })

  // choiceOut.forEach((e) => {

  //     if (e.classList.contains("choicefocus")) {
  //         var Soutput = (e.getAttribute("data-value"));
  //         choiceOut.forEach((e) => {
  //             e.classList.remove("choicefocus");
  //         })
  //     }
  // })

  for (i = 0; i < choice.length; i++) {
    if (choice[i].classList.contains("choicefocus")) {
      var Sinput = choice[i].getAttribute("data-value").trim();

      choice.forEach(e => {
        e.classList.remove("choicefocus");
      });
    }
  }
  for (i = 0; i < choiceOut.length; i++) {
    if (choiceOut[i].classList.contains("choicefocus")) {
      var Soutput = choiceOut[i].getAttribute("data-value").trim();

      choiceOut.forEach(e => {
        e.classList.remove("choicefocus");
      });
    }
  }

  document.querySelectorAll(".choiceOut").forEach(e => {
    let test1 = e.getAttribute("data-value").trim();
    if (test1 == Sinput) {
      e.classList.add("choicefocus");
    }
  });
  document.querySelectorAll(".choice").forEach(e => {
    let test1 = e.getAttribute("data-value").trim();
    if (test1 == Soutput) {
      e.classList.add("choicefocus");
    }
  });

  document.querySelector(".input>textarea").value = document.querySelector(
    ".output>textarea"
  ).value;

  const getText1 = document.querySelector(".input>textarea");
  input = getText1.value;
  //replace forEach Database
  Object.keys(LnInput).forEach(function(key) {
    let regex = new RegExp(LnInput[key], "g");
    input = input.replace(regex, LnOutPut[key]);
    //replace forEach Database WITH toUpperCase
    let regexUP = new RegExp(LnInput[key].toUpperCase(), "g");
    input = input.replace(regexUP, LnOutPut[key].toUpperCase());
  });
  output.value = input;
}

if (localStorage.length) {
  getText.value = localStorage.getItem("input");
  getText1 = document.querySelector(".input>textarea");
  input = getText1.value;
  //replace forEach Database
  Object.keys(LnInput).forEach(function(key) {
    let regex = new RegExp(LnInput[key], "g");
    input = input.replace(regex, LnOutPut[key]);
    //replace forEach Database WITH toUpperCase
    let regexUP = new RegExp(LnInput[key].toUpperCase(), "g");
    input = input.replace(regexUP, LnOutPut[key].toUpperCase());
  });
  output.value = input;
} else {
  getText.value = "";
}
