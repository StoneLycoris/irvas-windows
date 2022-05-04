export const tabs = ({
	headerSelector,
	tabSelector,
	contentSelector,
	activeClass,
}) => {
	const header = document.querySelector(headerSelector),
		tabs = document.querySelectorAll(tabSelector),
		contents = document.querySelectorAll(contentSelector);

	const hideTabContent = () => {
		contents.forEach((content) => {
			content.style.display = "none";
		});

		tabs.forEach((tab) => {
			tab.classList.remove(activeClass);
		});
	};

	const showTabContent = (index = 0) => {
		contents[index].style.display = "block";
		tabs[index].classList.add(activeClass);
	};

	hideTabContent();
	showTabContent();

	header.addEventListener("click", (e) => {
		const target = e.target;
		if (
			target &&
			(target.classList.contains(tabSelector.replace(/\./, "")) ||
				target.parentNode.classList.contains(
					tabSelector.replace(/\./, "")
				))
		) {
			tabs.forEach((tab, index) => {
				if (target === tab || target.parentNode === tab) {
					hideTabContent();
					showTabContent(index);
				}
			});
		}
	});
};
