// doi tuong validator
function Validator(options) {
    // ham thuc hien validate
    function validate(inputElement, rule) {
        var errorMessage = rule.test(inputElement.value);

        var errorElement = inputElement.parentElement.querySelector(
            options.formMessage
        );
        if (errorMessage) {
            errorElement.innerText = errorMessage;
            errorElement.style.color = 'red';
            inputElement.style.borderColor = 'red';
        } else {
            errorElement.innerText = '';
            inputElement.style.borderColor = 'green';
        }
    }
    // lay element cua form can validate
    var formElement = document.querySelector(options.form);
    if (formElement) {
        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);

            if (inputElement) {
                // xu ly khi blur ra ngoai
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                };
                // xu ly khi nguoi dung nhap
                inputElement.oninput = function () {
                    var errorElement = inputElement.parentElement.querySelector(
                        options.formMessage
                    );
                    errorElement.innerText = '';
                    inputElement.style.borderColor = 'green';
                };
            }
        });
    }
}

// dinh nghia rule
// nguyen tac:
// khi co loi tra ve message loi con dung thi khong tra ra cai gi
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim()
                ? undefined
                : message || 'Vui long nhap ten day du';
        },
    };
};
Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value)
                ? undefined
                : message || 'Vui long nhap truong email nay';
        },
    };
};
Validator.isPsw = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var pws =
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
            return pws.test(value)
                ? undefined
                : message || 'Vui long nhap truong mat khau nay';
        },
    };
};
Validator.isPswCf = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue()
                ? undefined
                : message || 'Vui long nhap truong nhap lai mat khau nay';
        },
    };
};
