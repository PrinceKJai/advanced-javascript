class Counter {
    constructor(count, incrementCount) {
        this.count = count;
        this.incrementCount = incrementCount;
    }

    startTimer() {
        setInterval((function () {
            console.log("this", this);
            this.count += this.incrementCount;
            console.log("count", this.count);

        }).bind(this), 1000)
    }
}