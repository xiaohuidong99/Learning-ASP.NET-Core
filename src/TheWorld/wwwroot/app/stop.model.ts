export class Stop {
    constructor(
        public id?: number,
        public name?: string,
        public arrival?: Date,
        public longitude?: number,
        public latitude?: number,
        public order?: number
    ) { }
}