# Poke-catcher lab

## HTML 
- main page
    - Div to hold 3 of our images
- results page
    - display all caught pokemon
        div with Ps for each seen pokemon
    - table with images/stats for each caught pokemon

## JS

- grab 3 random pokemon from our data
    - getPokemon function(array, amount) -> returns an array of 3 unique pokemon
        - initialize 3 pokemon -> set to random of poke array
        - compare if any are the same
        - keep initializing until they're unique
        - return array of 3 unique pokemon
-  create three pokemon images
    - renderPokemon(array)
        - for each pokemon in array, create image and set source to that elements img_source
        - add event listener
    - append them to our container div
        - attachPokemon(array, element)
            - attach each element in array to given element
- on click ->
    - repeat process, incrementing caught for clicked pokemon

### local state

- add all seen pokemon to local storage if not seen before, if seen increment seen
    - updatePokeStats(obj, isCaught)
        - grabPokeStats()
        - if !isCaught
            - check if we have it
                - find by ID
                - true -> increment seen
                - false -> initialize with seen 1, caught 0
            - return
        - else 
            - increment caught
        - setPokeStats()

