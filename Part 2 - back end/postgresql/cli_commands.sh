# How to check which ports in your computer that are actively listening to incoming requests:
sudo lsof -i -P -n | grep LISTEN

# check postgres port
sudo lsof -i :5432     

# dmg postgres
# # starting postgres
# pg_ctl -D /usr/local/var/postgres start

# # stopping postgres server
# pg_ctl -D /usr/local/var/postgres stop

# # check server status
# pg_ctl -D /usr/local/var/postgres status

# location for data in dmg postgres
ls /Library/PostgreSQL/16/data


# brew postgres
psql --version
brew services restart postgresql@16
brew services start postgresql@16
brew services stop postgresql@16

# location for data in brew postgres
/usr/local/var/postgres@16


# Start postgres
# restart machine
/Library/PostgreSQL/16/bin/pg_ctl -D /Library/PostgreSQL/16/data start

