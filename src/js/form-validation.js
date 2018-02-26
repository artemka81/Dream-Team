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

				var valid = true;				
				var email_value = $('#form-fields input[name=email]').val().trim();
				var password_value = $('#form-fields input[name=password]').val().trim();
				var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
				
				if (pattern.test(email_value)){
					email = true;
				} else {
					email = false;
					password = false;
				}

				if ( !email_value) {
					valid = false;
					$(empty_email).slideDown('500');
				} else if ( !password_value ) {
					valid = false;
					$(empty_password).slideDown('500');
				} else if ( !email && !password ) {
					valid = false;
					$(error_email_password).slideDown('500');
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