const RANK_MMR_AVGS = {
    'IRON': {
        'IV': ,
        'III': ,
        'II': ,
        'I': ,
    },
    'BRONZE': {
        'IV': ,
        'III': ,
        'II': ,
        'I': ,
    },
    'SILVER': {
        'IV': ,
        'III': ,
        'II': ,
        'I': ,
    },
    'GOLD': {
        'IV': ,
        'III': ,
        'II': ,
        'I': ,
    },
    'PLATINUM': {
        'IV': ,
        'III': ,
        'II': ,
        'I': ,
    },
    'DIAMOND': {
        'IV': ,
        'III': ,
        'II': ,
        'I': ,
    },
    'MASTER': {
        'IV': ,
        'III': ,
        'II': ,
        'I': ,
    },
    'GRANDMASTER': {
        'IV': ,
        'III': ,
        'II': ,
        'I': ,
    },
    'CHALLENGER': {
        'IV': ,
        'III': ,
        'II': ,
        'I': ,
    },
}

const TIER = {
    'IRON': 1,
    'BRONZE': 2,
    'SILVER': 3,
    'GOLD': 4,
    'PLATINUM': 5,
    'DIAMOND': 6,
    'MASTER': 7,
    'GRANDMASTER': 8,
    'CHALLENGER': 9,
}

const RANK = {
    'IV': 1,
    'III': 2,
    'II': 3,
    'I': 4,
}

function get_max_rank(rank_data) {
    if (rank_data.length === 0) return null;

    const data = rank_data.map(item => [item.tier, item.rank, item.leaguePoints]);
    const vals = data.map(item => get_rank_value(item[0], item[1]));

    let max = 0;
    for (let i = 1; i < vals.length; i++) {
        if (vals[max] < vals[i]) max = i;
    }

    return {
        tier: data[max][0],
        rank: data[max][1],
        LP: data[max][2], 
    };
}

function get_rank_value(tier, rank) {
    return RANK[rank] + TIER[tier] * 10;
}

module.exports = {
    get_max_rank: get_max_rank,
};