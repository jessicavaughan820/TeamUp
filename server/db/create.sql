CREATE TABLE IF NOT EXISTS players (
  player_id serial Primary KEY
  first_name VARCHAR (100) NOT NULL,
  last_name VARCHAR (100) NOT NULL,
  email VARCHAR (100) NOT NULL,
  phone VARCHAR (15) NOT NULL,
  postition VARCHAR (50) NOT NULL,
  years_experience INT,
  on_team BIT,
)