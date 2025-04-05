import {
	differenceInDays,
	differenceInHours,
	differenceInMinutes,
	differenceInSeconds,
	differenceInWeeks,
	differenceInMonths,
	differenceInYears,
	format,
} from "date-fns";

import "./styles/main.css";

const DOM = (() => {
	const countdown = document.getElementById("countdown");

	const textContainer = document.createElement("div");
	textContainer.id = "text";
	countdown.append(textContainer);

	const dateToday = document.createElement("div");
	dateToday.id = "today";
	dateToday.classList.add("time-container");
	countdown.append(dateToday);

	const yearsContainer = document.createElement("div");
	yearsContainer.id = "years";
	yearsContainer.classList.add("time-container");
	countdown.append(yearsContainer);

	const monthsContainer = document.createElement("div");
	monthsContainer.id = "months";
	monthsContainer.classList.add("time-container");

	countdown.append(monthsContainer);

	const weeksContainer = document.createElement("div");
	weeksContainer.id = "weeks";
	weeksContainer.classList.add("time-container");

	countdown.append(weeksContainer);

	const daysContainer = document.createElement("div");
	daysContainer.id = "days";
	daysContainer.classList.add("time-container");

	countdown.append(daysContainer);

	const hoursContainer = document.createElement("div");
	hoursContainer.id = "hours";
	hoursContainer.classList.add("time-container");

	countdown.append(hoursContainer);

	const minutesContainer = document.createElement("div");
	minutesContainer.id = "minutes";
	minutesContainer.classList.add("time-container");

	countdown.append(minutesContainer);

	const secondsContainer = document.createElement("div");
	secondsContainer.id = "seconds";
	secondsContainer.classList.add("time-container");

	countdown.append(secondsContainer);

	const deadline = document.createElement("div");
	deadline.id = "deadline";
	deadline.classList.add("time-container");
	deadline.textContent =
		`Einschulung: ` + format(new Date("2025-09-10 08:00:00"), "dd.MM.yyyy");

	countdown.append(deadline);
})();

function updateCountdown() {
	const targetDate = new Date("2025-09-10 08:00:00");
	const now = new Date();

	const years = differenceInYears(targetDate, now);
	const months = differenceInMonths(targetDate, now);
	const weeks = differenceInWeeks(targetDate, now);
	const days = differenceInDays(targetDate, now);
	const hours = differenceInHours(targetDate, now).toLocaleString();
	const minutes = differenceInMinutes(targetDate, now).toLocaleString();
	const seconds = differenceInSeconds(targetDate, now).toLocaleString();

	if (seconds <= 0) {
		document.getElementById("countdown").textContent = "Countdown abgelaufen!";
		return;
	}
	document.getElementById("text").textContent = `Countdown:`;

	document.getElementById("today").textContent =
		`Aktuell: ` + format(new Date(), "dd.MM.yyyy - hh:mm:ss");

	document.getElementById("years").textContent = `${years} Jahre`;
	document.getElementById("months").textContent = `${months} Monate`;
	document.getElementById("weeks").textContent = `${weeks} Wochen`;
	document.getElementById("days").textContent = `${days} Tage`;
	document.getElementById("hours").textContent = `${hours} Stunden`;
	document.getElementById("minutes").textContent = `${minutes} Minuten`;
	document.getElementById("seconds").textContent = `${seconds} Sekunden`;
}

updateCountdown();

setInterval(updateCountdown, 1000);
