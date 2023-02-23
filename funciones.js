<script src="https://kit.fontawesome.com/c3f1086a51.js" crossorigin="anonymous"></script>

<script>
[...document.getElementsByTagName("td")].forEach(el => {
    el.addEventListener("mouseenter", setColor);
    el.addEventListener("mouseleave", removeColor);
});
 
function setColor() {
    this.style.backgroundColor="rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")";
}
function removeColor() {
    this.style.backgroundColor="inherit";
}
</script>
 
