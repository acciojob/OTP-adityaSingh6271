//your JS code here. If required.
function focusNextInput(currentInput) {
            if (currentInput.value.length === 1) {
                const nextInput = currentInput.nextElementSibling;
                if (nextInput) {
                    nextInput.focus();
                }
            }
        }

        function focusPrevInput(currentInput, event) {
            if (event.key === 'Backspace' && currentInput.value.length === 0) {
                const prevInput = currentInput.previousElementSibling;
                if (prevInput) {
                    prevInput.focus();
                }
            }
        }