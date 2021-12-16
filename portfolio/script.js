const unlock_btn = document.getElementsByClassName("unlock-btn")[0]
const html = document.getElementsByTagName("html")[0]
const blur_screen = document.getElementsByClassName("blur-screen")[0]
const pwd_field = document.getElementsByClassName("password")[0]

unlock_btn.addEventListener("click",
    () => {
        unlock_btn.classList.add("hidden-btn")
        pwd_field.classList.add("shown-pwd")
        blur_screen.style.filter = "blur(12px)"
    }
)

pwd_field.onkeyup = (e) => {
    if (e.which == 13) {
        var user_input = pwd_field.value
        if (user_input == "12345678") {
            html.classList.remove("hidden")
            pwd_field.classList.remove("shown-pwd")
            blur_screen.style.filter = "none"
        }
    }
}