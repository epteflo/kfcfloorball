insert into kfcfloorball_dev2.matches(id, team_a_score, team_b_score, match_date, `deadline`, venue, `limit`, state) select id, team_a_score, team_b_score, timestamp(date, time), `deadline`, place, `limit`, state from kfcfloorball_dev.matches;

insert into kfcfloorball_dev2.users(id, login, name, email, nickname, role, password) select id, login, fullname, email, nick, role, password from kfcfloorball_dev.users;

insert into kfcfloorball_dev2.checkins(id, user_id, match_id, state, goal, assist, team, order_in_team) select id, user_id, match_id, state, score, assist, team, order_in_team from kfcfloorball_dev.users_matches;