import { $ } from "./utils/querySelector.js";

const $output = $("#output");
const $changeTxtBtn = $("#changeTxtBtn");

$changeTxtBtn.addEventListener("click", () => {
    $output.textContent = "다행이다 ㅋㅋ";
});