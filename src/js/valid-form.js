$(document).ready(function(){

	// $('#span-send').on('click', function(){
	// 	console.log('Span Click!');
	// 	$('#form-validate').submit();
	// });

	(function(){

		var formValidation = {

			isValid: true,

			init: function(){
				//вызов внутренних функцый
				this._setUpListeners();
			},

			_setUpListeners: function(){
				$('#form-validate .button').on('click', formValidation._validateForm);
			},

			_validateForm: function(event){
				event.preventDefault();
				console.log('life is good');
				var form = $('#form-validate'),
					inputs = form.find('input'),
					checkbox = form.find('input:checkbox'),
					valid = true;

				$.each(inputs, function(index, val){
					var input = $(val),
						value = input.val().trim(),
						formGroup = input.parents('.form-group'),
						formEmail = $('.form-full-email'),
						formPassword = $('.form-full-password'),
						errorEnter = $('.block-error__enter'),
						errorEmail = $('.error-message__email'),
						errorPassword = $('.error-message__password');

					if( value.length === 0){
						errorPassword.prependTo(formPassword);
						errorEmail.prependTo(formEmail);
						valid = false;						
					}

					formEmail.on('keydown', function(){
						formGroup.find(errorEmail).remove();
					});

					formPassword.on('keydown', function(){
						formGroup.find(errorPassword).remove();
					});

				});

				formValidation.isValid = valid;
				console.log(valid);
				console.log(formValidation.isValid);

				if ( formValidation.isValid == true ) {
					console.log('GOOD');
					$('#form-validate').submit();
				} else {
					console.log('BAD');
				}

			},

			_sendEmail: function(){
				console.log('formValidation.isValid = ' + formValidation.isValid);
				if ( formValidation.isValid === true ) {
					console.log('Sending form!');
				} else {
					console.log('Validation FAILED!');
				}
			}

			
		};
		
		formValidation.init();

	}());

});