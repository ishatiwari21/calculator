let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const clickedValue = e.target.innerHTML;

        if (clickedValue === '=') {
            try {
                string = eval(string); 
                document.querySelector('input').value = string;
            } catch (error) {
                document.querySelector('input').value = "Error"; 
            }
        } else if (clickedValue === 'C') { 
            string = "";
            document.querySelector('input').value = string;
        } else {
            string += clickedValue; 
            document.querySelector('input').value = string; 
        }
    });
});
