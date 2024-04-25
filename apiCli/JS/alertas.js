Swal.fire({
    title: 'WELCOME!',
    text: 'This is your weather app',
    timer:'5000',
    timerProgressBar: 'true',
    allowOutsideClick: 'false',
    allowEscapeKey: 'false',
    allowEnterKey: 'true',
}).then(() => {

Swal.fire({
    html: 'please accept our <a href="#">terms and conditions</a>',
    confirmButtonText:'I AGREE',
    toast:'true',
    icon:'info',
    padding: '1rem',
    backDrop:'True',
    position:'bottom',
    allowOutsideClick: 'false',
    allowEscapeKey: 'false',
    allowEnterKey: 'false',

    alertClass:{
        content: 'alert-class'
    }
    });
});