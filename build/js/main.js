
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
        
        // Прослышка событий
        setUpListeners: function (){
          // Слушаем событие клик по ссылке отправить форму
          $("#login").on("click", formValidation._validateForm);
        },

        // Валидация полей ввода
        _validateForm: function(e){
          // Переменные для работы с формой
          var form = $('#form-fields'),
          inputs = form.find('input'),
          errorMessage = $('.error-message'),
          valid = true;
          // Валидируем в цикле все значения полей input 
          $.each(inputs, function(index, el){
            var input = $(el);
            var inputVal = $(el).val().trim();
            var placeHolder = $(this).attr("placeholder").toLowerCase();
            if (!inputVal) { 
              errorMessage.remove();
              formValidation._showMessage(`Введите ${placeHolder}`, 'error-message');
            }  
            inputs.on('click', function(){
              $('.error-message').remove();              
            })
          });             
            

          e.preventDefault();                    
          
        },

        // Метод который показывает сообщение об ошибки
        _showMessage: function(msg, className){
          // Переменные для отображения блока с ошибками
          var wrapError = $('#wrap-error');
          // Вставляем блок с текстом ошибки
          var divMessage = wrapError.append(`<div class="${className}">${msg}</div>`);                   
        }        
      };
    
      formValidation.init();
    }());
});
















