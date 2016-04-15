# emusicstore
An e-commerce app for music.

## Tools used
SpringBoot
AngularJS

## System Requirements
JDK 1.8 or later
Maven 3.0+

## Running The Application

### Running from an IDE

You can run the application from your IDE as a simple Java application after importing it. Import steps will vary depending on your IDE and build system. Most IDEs can import Maven projects directly, for example Eclipse users can select Import…​ → Existing Maven Projects from the File menu.

If you can’t directly import the project into your IDE, you may be able to generate IDE metadata using a build plugin. Maven includes plugins for Eclipse and IDEA; Gradle offers plugins for various IDEs.

### Running as a packaged application

If you use the Spring Boot Maven or Gradle plugins to create an executable jar you can run the application using java -jar. For example:

```
$ java -jar target/myproject-0.0.1-SNAPSHOT.jar
```

### Using the Maven plugin


The Spring Boot Maven plugin includes a run goal which can be used to quickly compile and run the application. Applications run in an exploded form just like in your IDE.

```
$ mvn spring-boot:run
```


