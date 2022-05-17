type Game = {
    title: string;
};
  
type DLC = {
    extra: string;
};

interface Game2 {
    title: string;
};

interface DLC2 {
    extra: string;
};

type GameCollection = Game & DLC

interface GameCollection2 extends Game2, DLC2 {}

class CreateGame implements GameCollection {}

class CreateGame2 implements GameCollection {}

type getSimilars = (title: string) => void;

interface getSimilars2 {
    (title: string): void;
}

type Id = string | number;

//interface Id2 extends number {} // error

type Tuple = [number, number];

let tuple: Tuple = [1, 2] // error

interface Tuple2 {
    0: number;
    1: number;
  }
  
let tuple2: Tuple2 = [1, 2, 3] // pass


// type Blue = { a: string };
// type Blue = { b: string }; // error

interface Blue {
    a: string;
}
  
interface Blue {
    b: string;
}
  
const blue: Blue = {
    a: "blue",
    b: "edtech"
}