# https://hub.docker.com/r/genschsa/mysql-employees
# https://dev.mysql.com/doc/employee/en/
docker pull genschsa/mysql-employees
docker run -d \
  --name mysql-employees \
  -p 3306:3306 \
  -e MYSQL_ROOT_PASSWORD=college \
  -v $PWD/data:/var/lib/mysql \
  genschsa/mysql-employees
