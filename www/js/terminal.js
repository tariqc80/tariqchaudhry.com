(function(window, $, undefined) {

    var $terminal = $('.terminal'),
        $cmd_input = $('<input />'),
        prompt = 'root@tariqchaudhry.com:~#';

    var $content = $terminal.find('.content');

    function setPrompt() {
        $cmd_input.val('');
        $content.append('\n\n' + prompt + ' ');
        $content.append($cmd_input);
        $cmd_input.focus();
    }

    function output(text) {
        $content.append('\n' + text);
    }

    function submitCommand(command) {
        switch (command) {
            case 'help':
                output('\nAvailable commands:\n\n' +
                    '\thelp - this help message\n' +
                    '\twhois tariq - about me\n');
                break;
            case 'whois tariq':
                output('Domain Name: tariqchaudhry.com\n' +
                    'Email: tariqc80 at gmail dot com\n' +
                    'City: Brooklyn\n' +
                    'State/Province: New York\n' +
                    'Postal Code: 11201\n' +
                    'Country: US\n');
                break;
            default:
                output('command not found: ' + command);
        }
    }

    function processPrompt(text) {
        $cmd_input.detach();
        $content.append($cmd_input.val());
        submitCommand(text.trim());
        setPrompt();
    }

    $terminal.on('keyup', 'input', function(e) {
        if (e.keyCode === 13) {
            processPrompt(this.value);
        }
    });

    $terminal.on('click', function() {
        $cmd_input.focus();
    });

    setPrompt();

})(window, jQuery);
