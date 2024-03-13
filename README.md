# Warick Business School - Technical Test


#### Run Application

The code has been set up as a 'mono-repo'. All the code is in one repository but the parts, frontend, backend and database are separated.

Gradle has been employed as the glue holding the different parts together. The command below is all that is needed to run all the parts

```
gradle bootRun
```
#### Jar application

Gradle builds the code so that all of it can be run from an executable jar.

```
gradle bootJar
java -jar <built jar>.jar
```

#### Frontend

The frontend can be found on port 8080
```
http://localhost:8080
```
but it can also be run standalone so that it can be run in an IDE (for debugging etc)

```
cd frontend
npm run dev
```

#### Storybook

To run the basic components in isolation and to see how they look what they can do run storybook as follows:
```
cd frontend
npm run storybook
```

#### Database

To see the database and interact the following url can be used while the application is running:
```
http://localhost:8080/h2-console
```

#### Database APIs
```
http://localhost:8080/api/graph/
```

