This is my first attempt at the 'Rock around the clock' round of code gofing as presented at the PEI Devs Sept meetup.

The language of implementation is javascript.

I've also started a js golfing utility harness: with the idea being that the user could pass an 'ungolfed' file and the harness would provide utility functions.  These functions would likely include: 
    - minifying, returning the minified size (an important parameter in golfing)
        - this could also be accompanied by stats such as
            - global minimum,
            - change in size since last run)
    - running a user defined test harness (in the case of 'Rock around the clock' a diff against a 'golden master'). 
