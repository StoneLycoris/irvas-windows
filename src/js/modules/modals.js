export const modals = () => {
	const bindModal = ({
		triggerSelector,
		modalSelector,
		closeSelector,
		closeClickOverlay = true,
	}) => {
		const triggers = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector),
			windows = document.querySelectorAll("[data-modal]"),
			scroll = calcScroll();

		let previousActiveElement;

		const checkBoxes = document.querySelectorAll(".checkbox-custom");

		checkBoxes.forEach((checkBox) => {
			checkBox.addEventListener("keydown", (e) => {
				if (e.key === "Enter") {
					checkBox.checked = true;
				}
			});
		});

		triggers.forEach((trigger) => {
			trigger.addEventListener("click", (e) => {
				if (e.target) {
					e.preventDefault();
				}

				windows.forEach((window) => {
					window.style.display = "none";
				});

				previousActiveElement = document.activeElement;

				modal.style.display = "block";
				modal.querySelector("input").focus();
				document.body.classList.add("modal-open");
				document.body.style.marginRight = `${scroll}px`;
			});
		});

		const closeModal = () => {
			windows.forEach((window) => {
				window.style.display = "none";
			});
			modal.style.display = "none";
			document.body.classList.remove("modal-open");
			document.body.style.marginRight = `0px`;
			previousActiveElement.focus();
		};

		close.addEventListener("click", () => {
			closeModal();
		});

		modal.addEventListener("click", (e) => {
			if (e.target === modal && closeClickOverlay) {
				closeModal();
			}
		});

		document.addEventListener("keydown", (e) => {
			if (e.key === "Escape") {
				closeModal();
			}
		});
	};

	const showModalByTime = (selector, time) => {
		setTimeout(function () {
			document.querySelector(selector).style.display = "block";
			document.body.classList.add("modal-open");
		}, time);
	};

	const calcScroll = () => {
		const div = document.createElement("div");

		div.style.height = "50px";
		div.style.width = "50px";
		div.style.overflowY = "scroll";
		div.style.visibility = "hidden";

		document.body.appendChild(div);

		const scrollWidth = div.offsetWidth - div.clientWidth;

		div.remove();

		return scrollWidth;
	};

	bindModal({
		triggerSelector: ".popup_engineer_btn",
		modalSelector: ".popup_engineer",
		closeSelector: ".popup_engineer .popup_close",
	});

	bindModal({
		triggerSelector: ".phone_link",
		modalSelector: ".popup",
		closeSelector: ".popup .popup_close",
	});

	bindModal({
		triggerSelector: ".popup_calc_btn",
		modalSelector: ".popup_calc",
		closeSelector: ".popup_calc_close",
	});

	bindModal({
		triggerSelector: ".popup_calc_button",
		modalSelector: ".popup_calc_profile",
		closeSelector: ".popup_calc_profile_close",
		closeClickOverlay: false,
	});

	bindModal({
		triggerSelector: ".popup_calc_profile_button",
		modalSelector: ".popup_calc_end",
		closeSelector: ".popup_calc_end_close",
		closeClickOverlay: false,
	});

	showModalByTime(".popup", 60000);
};
