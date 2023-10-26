import ErrorRepository from "../js/ErrorRepository"

test("Неизвестная ошибка", () => {
    const errorRepo = new ErrorRepository;
    expect(errorRepo.translate(407)).toBe('Unknown error')
})
test("Получить текст ошибки", () => {
    const errorRepo = new ErrorRepository;
    errorRepo.addError(404, "Not Found")
    expect(errorRepo.translate(404)).toEqual("Not Found")
})