$('#myform').validate({
    rules: {
        name: {
            required: true,
            lettersonly: true
        },
        email: {
            required: true,
            email: true
        },
        message: {
            required: true,
        },  
    },
    submitHandler : function () {
        var form = document.getElementById('myform');
        emailjs.init("user_PNCEOQZ1cgQWkLSt14S1O");
        emailjs.sendForm('service_af5q7k2', 'template_ts2x4ra', form)
        .then(function(response) {
            swal("Success!", "Email succesfully sent.", "success");
            setTimeout(function() {
                location.reload();
              }, 2000);
        }, function(error) {
           swal("Ooops!", "Somethning went wrong, please try again!", "error");
        });
    }
});

jQuery.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[a-z\s]+$/i.test(value);
}, "Letters and space only."); 