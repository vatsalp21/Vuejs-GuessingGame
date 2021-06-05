const app = Vue.createApp({
  data() {
    return {
      showHint: false,
      answerStatus: "waiting...",
      hint: "waiting...",

      homePageTitle: "Guessing Game!",
      randomNumberArray: Array.from({ length: 3 }, () =>
        Math.floor(Math.random() * 99)
      ),
      randomIndexNumber: Math.floor(Math.random() * (4 - 1) + 1),
    };
  },

  methods: {
    saveRandomNumber(number) {
      randomNumber = this.randomNumberArray[this.randomIndexNumber - 1];
      if (number === randomNumber) {
        if (this.showHint == true) {
          document.getElementById("hint").style.backgroundColor = "#00ff2f";
        }
        this.hint = "good job!";
      }
      if (number === randomNumber) {
        this.answerStatus = "right";
        document.getElementById("answerStatus").style.backgroundColor =
          "#00ff2f";

        setTimeout(function () {
          window.location.reload();
        }, 1000);
      } else {
        if (number > randomNumber) {
          this.hint = "try a lesser number";
        } else if (number < randomNumber) {
          this.hint = "try a greater number";
        }
        this.answerStatus = "wrong";
        document.getElementById("answerStatus").style.backgroundColor =
          "#ff1900";
      }
    },

    toggleShowHint() {
      this.showHint = !this.showHint;
    },
  },
});

app.mount("#app");
