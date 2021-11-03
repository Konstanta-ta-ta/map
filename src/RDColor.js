export function RDColor () {

    let colors = "1,2,3,4,5,6,7,8,9,0,A,B,C,D,E,F";
    colors = colors.split(",");
    let res = "#";
    for (let i = 0; i < 6; i++) {
        res += colors[Math.floor(Math.random() * 16)];
    }
    return res;

}