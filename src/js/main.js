
$(document).ready(function() {
  (function(){
    var validation = {
      isValid: true,
      
      init: function(){
        // Вызов всех функций модуля
        this.setUpListeners();

      },
      
      setUpListeners: function(){
        // Прослушка событий (нажатие кнопки) 
        $('#login').on('click', validation.formValidate);
      },

      // Валидация полей ввода
      formValidate: function(e){
        // Создаем переменные формы
        var form   = $('#form-validate');
        var inputs = form.find('input:text');
        var valid = true;

        // Проверяем все поля на заполненность
        $.each(inputs, function(index, el){
          var input = $(el);
          var inputText = input.val().trim();
          if (inputText === '') {
            // Показываем ошибку 
            validation.showError('Какой-то текст', 'error-message-www');
          } else{
            console.log(inputText);
          }

        });

        e.preventDefault();
        console.log($(this).text());  
      },

      // Валидация поля "email"
      emailValidate: function(){
         
      },

      // Формируем блок с ошибками
      showError: function(message, className){
        // Создание дива
        var div = document.createElement("div");
        // Добавление класса к диву
        div.className = `error-message ${className}`;
        // Добавление текста ошибки
        div.append(message);
        // Вставляем блок с ошибкой в DOM-элемент 
        var wrapError = $('#wrap-error');
        wrapError.append(div);

        
        
        
      }

    };
    // Инициализируем модуль
    validation.init();

  }());
});