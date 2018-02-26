$(document).ready(function() {

	(function(){

		var button = $('a.button-login');		
		var errors_block = $('#error-massages');
		var empty_email = $('#error-massages .error-message__email');
		var empty_password = $('#error-massages .error-message__password');
		var error_email_password = $('#error-massages .block-error');

		//$(empty_email).show();


		var formValidation = {

			isValid: true,
			
			init: function(){
				this._setUpListeners();
			},

			_setUpListeners: function(){
				$(button).on('click', formValidation._validateForm).on('click', formValidation._submitForm);				
			},

			_validateForm: function(e){
				e.preventDefault();				
				formValidation._clearErrors;

				var valid = false;
				var valid_email_format = false;				
				var email_value = $('#form-fields input[name=email]').val().trim();
				var password_value = $('#form-fields input[name=password]').val().trim();
				
				var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;				
				if (pattern.test(email_value)){
					valid_email_format = true;
				}

				var check_email_password = formValidation._checkEmailPassword(email_value,password_value);

				if ( !email_value) {
					$(empty_email).slideDown('500');
				} else if ( !password_value ) {
					$(empty_password).slideDown('500');
				} else if ( !valid_email_format ) {
					$(empty_email).slideDown('500').text('Введите email в формате example@mail.com');
				} else if ( !check_email_password ) {
					$(error_email_password).slideDown('500').append('<div class="added_test">Тестовый набор: test@mail.com пароль: 123qwe</div>');
				} else {
					valid = true;
				}

				$('#form-fields input[name=email]').on('change', formValidation._clearErrors );
				$('#form-fields input[name=email]').on('focus', formValidation._clearErrors );
				$('#form-fields input[name=password]').on('focus', formValidation._clearErrors );
				$('#form-fields input[name=password]').on('change', formValidation._clearErrors );

				formValidation.isValid = valid;
			},

			_clearErrors: function(){
				errors_block.children('div').slideUp('500');
				$('.added_test').remove();
			},

			_checkEmailPassword: function(email, password){
				var valid = false;
				var test_email = 'test@mail.com';
				var test_password = '123qwe';
				var form_action = $('#form-validate').attr( 'action' );

				if ( email == test_email && password == test_password ) {
					valid = true;
				}else if (form_action == '/sign-up.html' && email != test_email ) {
					valid = true;
				}

				return valid;
			},

			_submitForm: function(e){
				if (formValidation.isValid) {
					$('#form-validate').submit();
				}
			}
		};

		formValidation.init();

	}());

});