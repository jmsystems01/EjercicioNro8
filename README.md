# EjercicioNro8
Ejercicio Calendario

a.	A list of any requirements you could not implement.
    1.	Allow the user to specify three inputs: A Start Date, the Number of days to display and a Country Code literal 
    (the country code literal value must be defined by the user with the keyboard).
    COMPLETADO
    
    2.	Render a calendar that spans as many weeks as necessary in order to cover the defined number of days.
    COMPLETADO
    
    3.	The days should be color coded as follows (they must match the picture above): 

        A.	Weekends are yellow. 
        B.	Weekdays are green. 
        C.	Holidays are orange.
        D.	Invalid days are hidden and the background should be gray.
    COMPLETADO
    
    4.	The Holidays must be dynamically extracted from the API defined at http://holidayapi.com holidays are 
        only required for the year 2008.
        A.	This is a RESTful API, for which we expect web requests to be created and handled appropriately.
        B.	We also expect different result codes to be handled.
    
    NO TERNIMADO
    
    5.	Extra credit will be given for adding a rollover label on Holidays.
    NO TERNIMADO

b.	Bugs you’ve identified but didn’t have time to fix.
        A.  The DaysToShow field, acept negative numbers and calculate an invalid numbers of calendars to draw.
        B.  Hide a days outside of range a days defined in Date Origin and Day to Finish.
    
c.	Things you would do if you had more time to complete the task.
        A.  Don't give me time to implement a comunication with a Holiday WebService.
