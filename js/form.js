document.addEventListener("DOMContentLoaded", () => {
    
    document.querySelector("#user-btn").addEventListener("click", (e) => {
       
        // Get form field values
        let fname = document.querySelector('input[name="fname"]').value;
        let lname = document.querySelector('input[name="lname"]').value;
        let email = document.querySelector('input[name="email"]').value;
        let hiddenField = document.querySelector('input[name="mysecret"]').value;

        // Display form field values
        console.log(`fname: ${fname}`);
        console.log(`lname: ${lname}`);
        console.log(`email: ${email}`);
        console.log(`mysecret: ${hiddenField}`);

        // Clear form field values after form submission
        document.querySelector('input[name="fname"]').value = "";
        document.querySelector('input[name="lname"]').value = "";
        document.querySelector('input[name="email"]').value = "";

        // Prevent default behavior of form submission
        e.preventDefault();

    });

    document.querySelector("#class-btn").addEventListener("click", (e) => {
        // Prevent default behavior of form submission
        e.preventDefault();

        // Return all input values for name attribute
        let yearBtns = document.querySelectorAll('input[name="class-year"]');
        
        // Loop through values to find 'checked' value
        for (let year of yearBtns) {
            if (year.checked) {
                console.log(`class-year: ${year.value}`)
            }
        }
    });

    document.querySelector("#piano-btn").addEventListener("click", (e) => {
        // Return form option values
        let selectedPianos = document.querySelector('select[name="pianoTypes"]');
        
        // Return the option value with a selected index
        let value = selectedPianos.options[selectedPianos.selectedIndex].value;
        console.log(`Selected option value is: ${value}`)
        e.preventDefault();
        
    });
    console.log("DOM Content Loaded");
})