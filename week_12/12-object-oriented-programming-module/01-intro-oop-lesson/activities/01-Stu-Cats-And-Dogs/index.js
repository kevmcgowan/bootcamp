const dogs = {
    raining: true,
    Noise: 'woof!',
    makeNoise: () => {
        if (this.raining === true) {
            console.log(this.noise)
        }
    }
}

const cats = {
    raining: false,
    Noise: 'meow!',
    makeNoise: () => {
        if (this.raining === true) {
            console.log(this.noise)
        }
    }
}

dogs.makeNoise();
cats.raining = true;
cats.makeNoise();

const massHysteria = (dogs, cats) =>{
    if (dogs.raining === true && cats.raining === true){
        console.logs('dogs and cats living in mass hysteria')
    }
}