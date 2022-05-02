const modals = () => {
	function bindModal(triggerSelector, modalSelector, closeSelector) {
		const trigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector),
			scroll = calcScroll();

		trigger.forEach((item) => {
			item.addEventListener("click", (e) => {
				if (e.target) {
					e.preventDefault();
				}

				modal.style.display = "block";
				document.body.classList.add("modal-open");
				document.body.style.marginRight = `${scroll}px`;
			});
		});

		close.addEventListener("click", () => {
			modal.style.display = "none";
			document.body.classList.remove("modal-open");
			document.body.style.marginRight = `0px`;
		});

		modal.addEventListener("click", (e) => {
			if (e.target === modal) {
				modal.style.display = "none";
				document.body.classList.remove("modal-open");
				document.body.style.marginRight = `0px`;
			}
		});
	}

	function showModalByTime(selector, time) {
		setTimeout(function () {
			document.querySelector(selector).style.display = "block";
			document.body.classList.add("modal-open");
		}, time);
	}

	function calcScroll() {
		let div = document.createElement("div");

		div.style.height = "50px";
		div.style.width = "50px";
		div.style.overflowY = "scroll";
		div.style.visibility = "hidden";

		document.body.appendChild(div);

		let scrollWidth = div.offsetWidth - div.clientWidth;

		div.remove();

		return scrollWidth;
	}

	bindModal(
		".popup_engineer_btn",
		".popup_engineer",
		".popup_engineer .popup_close"
	);

	bindModal(".phone_link", ".popup", ".popup .popup_close");

	showModalByTime(".popup", 60000);
};

export default modals;
