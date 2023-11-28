let loggedAccount = null;
let isAdmin = false;

$(document).ready(async function () {
    loggedAccount = await window.accountAPI.getLoggedAccount();
    isAdmin = loggedAccount.role === 'admin' ? true : false;

    const nameParts = loggedAccount.name.split(' ');
    $('.account-name').text(`${nameParts[nameParts.length - 2]}  ${nameParts[nameParts.length - 1]}`);
    
    const fisrtWelcome = localStorage.getItem('welcome');
    console.log(fisrtWelcome);
    if (fisrtWelcome === true) {
        $('#welcome-alert').addClass('show');
        console.log('dsdsds')

        localStorage.setItem('welcome', false);
    }

    $('.account-avatar').attr('src', `../../assets/uploads/account/${loggedAccount.avatar}`);

    $('.log-out-btn').on('click', function (event) {
        event.preventDefault();
        window.accountAPI.logout();
    })

    $('.change-screen').on('click', function (event) {
        event.preventDefault();
        const screen = $(this).data('screen');

        if (screen) {
            window.changeScreenAPI.goToScreen(screen);
        }
    });
});