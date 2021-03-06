import "./slider";
import { modals } from "./modules/modals";
import { tabs } from "./modules/tabs";
import { feedback } from "./modules/forms";

window.addEventListener("DOMContentLoaded", () => {
	"use strict";
	modals();

	tabs({
		headerSelector: ".glazing_slider",
		tabSelector: ".glazing_block",
		contentSelector: ".glazing_content",
		activeClass: "glazing_active",
	});

	tabs({
		headerSelector: ".decoration_slider",
		tabSelector: ".no_click",
		contentSelector: ".decoration_content > div > div",
		activeClass: "after_click",
	});

	tabs({
		headerSelector: ".balcon_icons",
		tabSelector: ".balcon_icons_img",
		contentSelector: ".big_img > img",
		activeClass: "do_image_more",
		display: "inline-block",
	});

  
	feedback();
});
