/**
 * Balances players into teams of 5
 * @param player_list 
 * @pre List size must be a multiple of 5.
 *      [ {name: , role1: , role2:, MMR: }, ... ]
 * @post A list of team lists is returned
 *      [ [{name: , role: }, ...], [ ... ] ]
 */
function create_tournament_5v5(player_list) {
    // (1) Sort players by max MMR
    sorted_players = player_list.sort((a, b) => {
        // if a.MMR < b.MMR ==> [b, a], return > 0
        if (a.MMR < b.MMR) return 1;
        // if a.MMR > b.MMR ==> [a, b], return < 0
        else if (a.MMR > b.MMR) return -1;
        // a.MMR === b.MMR, return 0
        else return 0;
    });
    // (2) Get the number of teams
    num_teams = Math.floor(player_list / 5);
    
}

function zigzag_assign_tournament_5v5(player_list, teams_dict, team_fills_dict, team_id) {
    
}

/**
 * Checks player list to make sure algorithm will function with the
 *      given list of players
 * @param player_list 
 */
function validate_tournament_5v5(player_list) {
    // must contain at least 10 unique players at multiples of 5 increments
    return player_list.length >= 10 && player_list.length % 5 === 0;
}