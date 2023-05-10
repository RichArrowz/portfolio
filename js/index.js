

// function toggleButton() {
    const checkbox = document.getElementById('checkbox');
    const button = document.getElementById('button');
    // button.disabled = !checkbox.Checked;

    checkbox.addEventListener('change' , function() {
        if (checkbox.checked) {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    });

// };
