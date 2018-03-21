## Test A-CAD project.
### Main goal: 
`Implement functionality analogue to AutoCAD like tools`.

### Start project: 
To start a project initialize import of project or open pom.xml as project.
Used IDEA: IntelliJ 2017 Ultimate version (with web-app support).
Requirement: JAVA 8, embedded tomcat is used from the box with spring boot configured application.
Deployed web-application is available after start via: 
[http://localhost:8888/](http://localhost:8888/)
 
### Input data:
From start based project contains mocked data of schema-1 for draw, manipulation and properties 
representation. 
Each `Schema` object (@see `Schema.java`) contains property for grid drawing, like:


TODO steps:
1) Add draw objects with schema representation as grid with configured options.
2) Add support and drawing of objects of avaialable types (check entities package and JavaDoc to classes)
3) Add possibility to manipulate with object's options, right-side menu view of object options and possibility to change them.
4) Add support of add new, save added objects with changed properties.
5) Add possibility to move \ rotate objects, linked objects together.

TODO:...
