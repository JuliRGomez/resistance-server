SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: actors; Type: TABLE DATA; Schema: public; Owner: rao
--

COPY "actors" (actor_id, name, "createdAt", "updatedAt") FROM stdin;
\.
COPY "actors" (actor_id, name, "createdAt", "updatedAt") FROM '/Users/moonita/Documents/Node/resistence-server/imdb_node/2250.dat';


-- -- --
-- -- -- Data for Name: content_types; Type: TABLE DATA; Schema: public; Owner: rao
-- -- --

COPY "content_types" (content_type_id, name, "createdAt", "updatedAt") FROM stdin;
\.
COPY "content_types" (content_type_id, name, "createdAt", "updatedAt") FROM '/Users/moonita/Documents/Node/resistence-server/imdb_node/2239.dat';

-- -- --
-- -- -- Data for Name: content_ratings; Type: TABLE DATA; Schema: public; Owner: rao
-- -- --

COPY "content_ratings" (content_rating_id, "content_type_id", name, description, "createdAt", "updatedAt") FROM stdin;
\.
COPY "content_ratings" (content_rating_id, "content_type_id", name, description, "createdAt", "updatedAt") FROM '/Users/moonita/Documents/Node/resistence-server/imdb_node/2241.dat';

-- --
-- -- Data for Name: contents; Type: TABLE DATA; Schema: public; Owner: rao
-- --

COPY "contents" (content_id, title, description, "total_seasons", "imbd_score", "release_date", "play_time", "content_rating", "total_episodes", "content_type", "imdb_link", "imdb_core_votes", "rating_details", languages, "createdAt", "updatedAt") FROM stdin;
\.
COPY "contents" (content_id, title, description, "total_seasons", "imbd_score", "release_date", "play_time", "content_rating", "total_episodes", "content_type", "imdb_link", "imdb_core_votes", "rating_details", languages, "createdAt", "updatedAt") FROM '//Users/moonita/Documents/Node/resistence-server/imdb_node/2243.dat';

--
-- Data for Name: content_actors; Type: TABLE DATA; Schema: public; Owner: rao
--

COPY "content_actors" ("actor_id", "content_id", "createdAt", "updatedAt") FROM stdin;
\.
COPY "content_actors" ("actor_id", "content_id", "createdAt", "updatedAt") FROM '/Users/moonita/Documents/Node/resistence-server/imdb_node/2251.dat';


-- -- --
-- -- -- Data for Name: directors; Type: TABLE DATA; Schema: public; Owner: rao
-- -- --

COPY "directors" (director_id, name, "createdAt", "updatedAt") FROM stdin;
\.
COPY "directors" (director_id, name, "createdAt", "updatedAt") FROM '/Users/moonita/Documents/Node/resistence-server/imdb_node/2253.dat';

-- -- --
-- -- -- Data for Name: episode_list; Type: TABLE DATA; Schema: public; Owner: rao
-- -- --

COPY "episode_lists" (episode_id, "season_num", "episode_name", "content_id", "release_date", "episode_rating", "episode_num", description, "episode_imdb_link", "episode_score_votes", "createdAt", "updatedAt") FROM stdin;
\.
COPY "episode_lists" (episode_id, "season_num", "episode_name", "content_id", "release_date", "episode_rating", "episode_num", description, "episode_imdb_link", "episode_score_votes", "createdAt", "updatedAt") FROM '/Users/moonita/Documents/Node/resistence-server/imdb_node/2245.dat';

-- -- --
-- -- -- Data for Name: genres; Type: TABLE DATA; Schema: public; Owner: rao
-- -- --

COPY "genres" (genre_id, name, "createdAt", "updatedAt") FROM stdin;
\.
COPY "genres" (genre_id, name, "createdAt", "updatedAt") FROM '/Users/moonita/Documents/Node/resistence-server/imdb_node/2247.dat';

-- --
-- -- Data for Name: content_directors; Type: TABLE DATA; Schema: public; Owner: rao
-- --

COPY "content_directors" ("director_id", "content_id", "createdAt", "updatedAt") FROM stdin;
\.
COPY "content_directors" ("director_id", "content_id", "createdAt", "updatedAt") FROM '/Users/moonita/Documents/Node/resistence-server/imdb_node/2254.dat';

-- -- --
-- -- -- Data for Name: content_genres; Type: TABLE DATA; Schema: public; Owner: rao
-- -- --

COPY "content_genres" ("genre_id", "content_id", "createdAt", "updatedAt") FROM stdin;
\.
COPY "content_genres" ("genre_id", "content_id", "createdAt", "updatedAt") FROM '/Users/moonita/Documents/Node/resistence-server/imdb_node/2248.dat';

-- -- --
-- -- -- Data for Name: languages; Type: TABLE DATA; Schema: public; Owner: rao
-- -- --

COPY "languages" (lenguage_id, name, "createdAt", "updatedAt") FROM stdin;
\.
COPY "languages" (lenguage_id, name, "createdAt", "updatedAt") FROM '/Users/moonita/Documents/Node/resistence-server/imdb_node/2256.dat';