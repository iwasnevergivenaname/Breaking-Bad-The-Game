# Breaking-Bad-The-Game
can you, Walter Hartwell White, produce a good batch of product for your employer Gus Fring?

## how to play
inside of the secret lab, you must use your chemistry skills to cook the finest meth in the ABQ. look around your lab for helpful items.

### click on items to see them upclose
```html
<div id="hazmat-suit" class="close-up-modal">
    </div>
```

```css
.close-up-modal {
    display: none; /* Hidden by default */
    position: absolute; /* Stay in place */
    z-index: 1; /* Sit on top */
    background-repeat: no-repeat;
    background-size: 100%;
}

#hazmat-suit {
    height: 800px;
    width: 350px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url("../img/cleaned-up-hazmat.png");
    background-size: 100%;
}
```

```javascript
hazmatSuit.addEventListener("click", function () {
    isHazmatWorn = true;
    showModal(suitModal);
});

// show or hide pop up modal
function showModal(modal) {
    modal.style.display = "block";
}
```