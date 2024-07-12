const marks ={
    maths:99,
    science:95,
    social:90,
    kannada:89,
    english:94,

    getAvg(){
        let avg= (this.maths+this.english+this.kannada+this.science)/4;
        console.log(avg);
    }
};
marks.getAvg();