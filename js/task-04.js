const general = function ({ 
    ownContainer,
    counterValue = 0, 
    step = 1
} = {} ) {
this._value = counterValue;
this._step = step;
 this._refs = this._getRefs (ownContainer);
 this._bindEbents()
}

general.prototype._getRefs = function (ownContainer) {
console.log(ownContainer);

const refs = {};
refs.container = document.querySelector(ownContainer);
refs.incrementBtn =  refs.container.querySelector("[data-action = increment]")
refs.decrementBtn = refs.container.querySelector("[data-action = decrement]")
refs.value = refs.container.querySelector("#value")

console.log(refs.value)
console.log(refs.incrementBtn)
console.log(refs.decrementBtn);

return refs;
}


general.prototype._bindEbents = function () {
    this._refs.incrementBtn.addEventListener ("click", () => {
 this.increment()   
 this.updateValue ()
    })

this._refs.decrementBtn.addEventListener("click", () => {
    this.decrement()
    this.updateValue ()
})


}

general.prototype.updateValue = function () {
this._refs.value.textContent = this._value
}

general.prototype.increment = function () {
 this._value += this._step   
}

general.prototype.decrement = function () {
 this._value -= this._step   
}


const counter = new general ( { step: 1, ownContainer : "#counter"})
console.log("counter",counter)
