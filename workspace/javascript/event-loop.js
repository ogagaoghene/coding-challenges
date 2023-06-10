const function1 = () => console.log("Func 1 is called");
const function2 = () => console.log("Func 2 is called");
const function3 = () => {
    console.log("foo");
    setTimeout(function1, 2000)
    function2();
}

function3();


