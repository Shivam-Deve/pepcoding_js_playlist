(function immediate(a) {
    return (function immediate(b) {
        console.log(a);
    })(1)
})(0)