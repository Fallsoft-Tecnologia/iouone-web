export class InfoBodyForm {
  idealWeight: number;
  level: string;
  height: number;
  weight: number;

  constructor(idealWeight: number, level: string, height: number, weight: number) {
    this.idealWeight = idealWeight;
    this.level = level;
    this.height = height;
    this.weight = weight;
  }
}
