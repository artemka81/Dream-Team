
/* Валидация форм */
$(document).ready(function() {
    // Анонимная самовызывающая функция
    (function(){
      var formValidation = {
        //Глобальные переменные для модуля
        isValue: true,
        
        // Инициализация модуля
        init: function(){
          // Вызов внутренних функция
          
          this.setUpListeners();

        },

        validateEmail: function(){
          valid = true;
          var fieldEmail = $("input[name=email]");
          fieldEmail.keyup(function () {
            // Переменные для валидации email
            var fieldEmailVal = fieldEmail.val();
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            if (!emailReg.test(fieldEmailVal)) {
              $(this).css("border-color", "red");
              valid = false;
            } else {
              $(this).css("border-color", "white");
            }
          });
          formValidation.isValue = valid;

        },
        
        // Прослышка событий
        setUpListeners: function (){
          // Слушаем событие клик по ссылке отправить форму
          $("#login").on("click", formValidation._validateForm).on("click", formValidation._sendEmail);
        },

        // Валидация полей ввода
        _validateForm: function(e){
          // Переменные для работы с формой
          var form = $('#form-fields'),
          errorMessage = $('.error-message'),
          inputs = form.find('input'),
          valid = true;
          // Валидируем в цикле все значения полей input 
          $.each(inputs, function(index, el){
            var input = $(el);
            var inputVal = $(el).val().trim();
            var placeHolder = $(this).attr("placeholder").toLowerCase();
            
            if (!inputVal) { 
              errorMessage.remove();              
              formValidation._showMessage(`Введите ${placeHolder}`, 'error-message');              
              valid = false;
            }
            // Удаляем блок с ошибкой при клике по полю ввода
            input.on('keyup', function(){
              $('.error-message').remove();              
            });
            // Валидируем email c шаблоном email (регулярное выражение)
            if (input.attr('type') === 'email'){
              if (inputVal !== '') { 
                var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
                if (emailReg.test(inputVal)) {
                  errorMessage.remove();                              
                }else{
                  errorMessage.remove();
                  formValidation._showMessage(`Введите корректный ${placeHolder}`, 'error-message');
                  valid = false;
                }       
              }            
            }
          });
          
          formValidation.isValue = valid;          
          e.preventDefault(); 
        },
        // Метод отправки формы
        _sendEmail: function(){          
          if (formValidation.isValue === true) {
            console.log('Вы успешно авторизировались!');
            // $('#form-validate').submit();
          }else{
            console.log('Вы не прошли авторизацию');
          }
        },

        // Метод который показывает сообщение об ошибки
        _showMessage: function(msg, className){
          // Переменные для отображения блока с ошибками          
          var wrapError = $('#wrap-error')          
          // Вставляем блок с текстом ошибки
          var divMessage = wrapError.append(`<div class="${className}">${msg}</div>`);
                            
        }        
      };
    
      formValidation.init();
    }());
});
















