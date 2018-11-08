const bulmaColorCodes = [
    'primary',
    'info',
    'success',
    'link',
    'warning',
    'danger',
];

export function getRandomColor(ignore) {
    let color = ignore;
    while (ignore === color) {
        color = bulmaColorCodes[Math.floor(Math.random() * 100) % bulmaColorCodes.length]
    }

    return color
}

export default bulmaColorCodes