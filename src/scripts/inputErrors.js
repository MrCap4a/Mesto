const errorMessages = {
    valueMissing: 'Вы пропустили это поле.',
    tooShort: (minLength, currentLength) =>
        `Минимальное количество символов: ${minLength}. Длина текста сейчас: ${currentLength} символ.`,
    tooLong: (maxLength, currentLength) =>
        `Максимум ${maxLength} символов. Сейчас ${currentLength}.`,
    invalidValue: 'Некорректное значение.',
    typeMissmatch: 'Введите адрес сайта.'
};

export default errorMessages;