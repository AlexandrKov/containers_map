import ErrorRepository from "../js/ErrorRepository"

test("unknow error", () => {
    const errorRepo = new ErrorRepository;
    expect(errorRepo.translate(407)).toThrow('Unknown error')
})
test("unknow error", () => {
    const errorRepo = new ErrorRepository;
    errorRepo.addError(404, "Not Found")
    expect(errorRepo.translate(404)).toEqual("Not Found")
})