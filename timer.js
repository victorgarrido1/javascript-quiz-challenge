let time = 75;

//Listen for click

startBtn.addeventListener("click", function () {
    startPrompt.classList.add("hidden")

//Show question container
questionContainer.classList.remove("hidden")


timer.textContent = time;
let timeInterval = setInterval(function () {
    time --;
timer.textContent = time
}), 1000)

})

<script>
var timer = document.querySelector("#timer");
var start document.querySelector("#Start");
var startPrompt = document.querySelector("")

</script>


