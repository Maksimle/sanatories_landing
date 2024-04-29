function validateForm() {
    // Очищаем существующие сообщения об ошибках перед новой проверкой
    var errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(errorMessage) {
      errorMessage.remove();
    });

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    var isValid = true;

    var nameRegex = /^[A-Za-zА-Яа-яЁё]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(name)) {
      isValid = false;
      displayErrorMessage('name', 'Пожалуйста, введите ваше имя только из букв');
    }

    if (!emailRegex.test(email)) {
      isValid = false;
      displayErrorMessage('email', 'Пожалуйста, введите корректный email');
    }

    if (message === '') {
      isValid = false;
      displayErrorMessage('message', 'Пожалуйста, введите ваше сообщение');
    }

    return isValid;
  }

  function displayErrorMessage(inputId, message) {
    var inputElement = document.getElementById(inputId);
    var errorMessageElement = document.createElement('div');
    errorMessageElement.className = 'error-message';
    errorMessageElement.textContent = message;

    var parentElement = inputElement.parentElement;
    parentElement.appendChild(errorMessageElement);
  }