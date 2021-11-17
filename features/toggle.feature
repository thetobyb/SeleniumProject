 Feature: Toggle Button
    
    Scenario: Clicking the toggle button
        Given the loaded web-site
        When toggled using the button
        Then the heading should be black 

# Not fully working - throws error
     Scenario: Clicking form button
         Given the loaded web-site
         When toggled using the form button
         Then the div text should be 'Form Submitted'