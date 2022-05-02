export const modals = () => {
	const bindModal = (triggerSelector, modalSelector, closeSelector) => {
		const triggers = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector),
			scroll = calcScroll();

		triggers.forEach((trigger) => {
			trigger.addEventListener("click", (e) => {
				if (e.target) {
					e.preventDefault();
				}

				modal.style.display = "block";
				modal.querySelector("input").focus();
				document.body.classList.add("modal-open");
				document.body.style.marginRight = `${scroll}px`;
			});
		});

		const closeModal = () => {
			modal.style.display = "none";
			document.body.classList.remove("modal-open");
			document.body.style.marginRight = `0px`;
		};

		close.addEventListener("click", () => {
			closeModal();
		});

		modal.addEventListener("click", (e) => {
			if (e.target === modal) {
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

	bindModal(
		".popup_engineer_btn",
		".popup_engineer",
		".popup_engineer .popup_close"
	);

	bindModal(".phone_link", ".popup", ".popup .popup_close");

	showModalByTime(".popup", 60000);
};
