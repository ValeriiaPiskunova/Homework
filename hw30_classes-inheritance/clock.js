const form = document.getElementById("time-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputTimezone =
    e.target.querySelector("input#timezone")?.value;

  if (inputTimezone) {
    new WorldClock(inputTimezone);
  } else {
    alert("Enter timezone please");
  }
});

class WorldClock {
  constructor(timezone) {
    this.timezone = timezone;
    this.clockElement = document.createElement("div");
    this.clockElement.classList.add("clock");
    this.render();
    this.addClickListener();
  }

  addClickListener() {
    this.clockElement.addEventListener("click", (e) => {
      const { target } = e;

      if (target.closest(".show-date")) {
        this.getCurrentDate();
      } else if (target.closest(".show-date-time")) {
        this.getCurrentDateTime();
      } else if (target.closest(".remove-clock")) {
        this.deleteClock();
      }
    });
  }

  getCurrentDate() {
    const date = new Date().toLocaleDateString("uk-UA", {
      timeZone: this.timezone,
    });

    this.clockElement.querySelector(".time-output").textContent =
      date;
  }

  getCurrentDateTime() {
    const time = new Date().toLocaleString("uk-UA", {
      timeZone: this.timezone,
    });

    this.clockElement.querySelector(".time-output").textContent =
      time;
  }

  deleteClock() {
    this.clockElement.remove();
  }

  render() {
    this.clockElement.innerHTML = `
    <p class="title">Time zone: ${this.timezone}</p>
   
    <button class="button show-date">Current date</button>
    <button class="button show-date-time">Current date&time</button>
    <button class="button remove-clock">Delete watch</button>
  
    <div class="time-output"></div>
    `;

    document
      .getElementById("clockContainer")
      .appendChild(this.clockElement);
  }
}
