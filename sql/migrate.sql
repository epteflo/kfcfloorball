insert into matches(id, a_score, b_score, match_date, deadline, venue, `limit`, state, distribution_mode) select id, team_a_score, team_b_score, timestamp(date, time), deadline, place, `limit`, state, team_dist_mode from kfcfloorball.matches;

insert into users(id, login, name, email, nickname, role, password) select id, login, fullname, email, nick, role, password from kfcfloorball.users;

insert into checkins(id, user_id, match_id, state, goal, assist, team, order_in_team) select id, user_id, match_id, state, score, assist, team, order_in_team from kfcfloorball.users_matches;
