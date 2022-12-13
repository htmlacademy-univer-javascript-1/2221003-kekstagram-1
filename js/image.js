/* eslint-disable indent */
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const fileChooser = document.querySelector('.img-upload__input');
const preview = document.querySelector('.img-upload__preview_img');
const miniatures = document.querySelectorAll('.effects__preview');

fileChooser.addEventListener('change', () => {
    const file = fileChooser.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
        preview.src = URL.createObjectURL(file);
        for (const miniature of miniatures) {
            miniature.style.backgroundImage = `url(${preview.src})`;
        }
    }
});

export { fileChooser };
