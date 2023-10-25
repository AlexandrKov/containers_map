export default class ErrorRepository {
    constructor() {
        this.map = new Map();
    }

    addError(key, value) {
        this.map.set(key, value)
    }

    translate(code) {
        if (this.map.has(code)) {
            return this.map.get(code)
        } else {
            return 'Unknown error'
        }
    }
}
// const errorRepo = new ErrorRepository;
// errorRepo.addError(403, "forBidden")
// errorRepo.addError(404, "Not Found")
// errorRepo.addError(500, "Internet Server Error")
// console.log(errorRepo.translate(407))
// console.log(errorRepo.translate(500))
// console.log(errorRepo.translate(404))

// console.log(errorRepo)