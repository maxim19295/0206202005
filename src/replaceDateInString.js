export const replaceDateInString = () =>{
    let date = new Date();
    let monthString = '';
    switch (date.getMonth()) {
        case 0: monthString='января';
        break;
        case 1: monthString='февраля';
        break;
        case 2: monthString='марта';
        break;
        case 3: monthString='апреля';
        break;
        case 4: monthString='мая';
        break;
        case 5: monthString='июня';
        break;
        case 6: monthString='июля';
        break;
        case 7: monthString='август';
        break;
        case 8: monthString='сентября';
        break;
        case 9: monthString='октября';
        break;
        case 10: monthString='ноября';
        break;
        case 11: monthString='декабря';
        break;
        default: {}
    }
    return `${date.getDate()} ${monthString} ${date.getFullYear()}`;

}