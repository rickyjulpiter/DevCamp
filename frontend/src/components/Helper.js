
const conv = (num) => {
    // Create our number formatter.
    var formatter = new Intl.NumberFormat('id', {
        style: 'currency',
        currency: 'IDR',
    });

    return formatter.format(num); /* $2,500.00 */
}

export default conv;