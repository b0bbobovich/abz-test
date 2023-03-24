
const regEx = {
    // eslint-disable-next-line no-control-regex
    email: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
    phone: /^[+]{0,1}380([0-9]{9})$/
};

const errorsMessages = {
    username: "Username should contain 2-60 characters",
    email: "Must be a valid email according to RFC2822",
    phone: "Should start with +380 and contain 9 numbers",
    photo: "Must be jpeg/jpg type, less than 5 Mb and min 70x70px"
};


export function validateInputs(form) {
    const validation = {
        success: false,
        errors: {
            username: "",
            email: "",
            phone: "",
            photo: "",
        }
    };

    const isUsernameValid = validateUsername(form.username.value);
    const isEmailValid = validateEmail(form.email.value);
    const isPhoneValid = validatePhone(form.phone.value);
    const isPhotoValid = validatePhoto(form.photo);

    if (!isUsernameValid) validation.errors.username = errorsMessages.username;
    if (!isEmailValid) validation.errors.email = errorsMessages.email;
    if (!isPhoneValid) validation.errors.phone = errorsMessages.phone;
    if (!isPhotoValid) validation.errors.photo = errorsMessages.photo;

    if (isUsernameValid && isEmailValid && isPhoneValid && isPhotoValid) {
        validation.success = true;
    }
    return validation
}

function validateUsername(username) {
    return username.length > 1 && username.length <= 60;
}

function validateEmail(email) {
    return regEx.email.test(email);
}

function validatePhone(phone) {
    return regEx.phone.test(phone);
}

function validatePhoto(input) {
    if (input.files[0]) {
        const image = input.files[0];
        const allowedExtensions = ["jpg", "jpeg", "JPG", "JPEG"];
        const maxSize = 5;
        const minPxHeight = 70;
        const minPxWidth = 70;

        const last_dot = input.value.lastIndexOf('.');
        const extension = input.value.slice(last_dot + 1);
        const photoSize = image.size / 1000000;

        const isExtensionValid = allowedExtensions.includes(extension);
        const isSizeValid = photoSize < maxSize;
        const isPhotoPxSizesValid = validatePxSizes(image, minPxWidth, minPxHeight);
        return isExtensionValid && isSizeValid && isPhotoPxSizesValid
    }
    return false
}

function validatePxSizes(imageFile, minWidth, minHeight) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onload = function() {
        const img = new Image();
        img.src = this.result;
        img.onload = function() {
          const width = this.width;
          const height = this.height;
          resolve(width > minWidth && height > minHeight);
        };
      };
    });
  }
