DROP TABLE IF EXISTS GRAPH_DATA;

CREATE TABLE GRAPH_DATA (
    D DATE,
    TEAM VARCHAR(250) NOT NULL,
    CODE VARCHAR(250) NOT NULL,
    V DECIMAL(10,2) NOT NULL
) 
AS SELECT * FROM CSVREAD('classpath:/data.csv');

DROP TABLE IF EXISTS TBL_USERS;

CREATE TABLE TBL_USERS (
  id INT AUTO_INCREMENT  PRIMARY KEY,
  first_name VARCHAR(250) NOT NULL,
  last_name VARCHAR(250) NOT NULL,
  email VARCHAR(250) DEFAULT NULL
);

DROP VIEW IF EXISTS GROUPED_DATA;

CREATE VIEW GROUPED_DATA AS
SELECT
    d,
    team,
    MAX(CASE WHEN code = 'wacc' THEN v END) AS wacc,
    MAX(CASE WHEN code = 'co2_penalty' THEN v END) AS co2_penalty,
    MAX(CASE WHEN code = 'e_cars_sales' THEN v END) AS e_cars_sales,
    MAX(CASE WHEN code = 'employee_engagement' THEN v END) AS employee_engagement,
    MAX(CASE WHEN code = 'factory_utilization' THEN v END) AS factory_utilization,
    MAX(CASE WHEN code = 'interest_coverage' THEN v END) AS interest_coverage,
    MAX(CASE WHEN code = 'marketing_spend_rev' THEN v END) AS marketing_spend_rev,
    MAX(CASE WHEN code = 'scores' THEN v END) AS scores,
  
FROM (
    SELECT DISTINCT d, team, code, v 
    FROM GRAPH_DATA
) AS distinct_data
GROUP BY
    d, team;