const done = false;

const demo = new Promise((resolve, reject) => {
    if(done) {
        const what = "It is set as true"
        resolve(what)
    }
    else {
        const why = "It is not set as true"
        reject(why)
    }
})

const checkIfItIsDone = () => {
    demo.then((ok) => {
        console.log('Work is done')
    }).catch((err) => {
        console.log('Work is not done');
    })
}

checkIfItIsDone();