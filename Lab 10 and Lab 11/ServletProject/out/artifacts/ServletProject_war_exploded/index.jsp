
<%--
  Created by IntelliJ IDEA.
  User: INNOVATION
  Date: 11/11/2019
  Time: 11:46 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="/WEB-INF/tag.tld" prefix="adn" %>
<html>
  <head>
    <title>Servlet First Project Practice</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </head>
  <body>

  <form action="contact-form" method="post" name="loginform">
    <div class="container">
      <div><p id="pcolor"><span style="color: red; "> ${errorname}</span></p></div>
      <div><p id="pfeedback"><span style="color: red; "> ${errorfeedback}</span></p></div>
    <div class="form-group">
      <label form="exampleNameLabel">Name</label>
      <input type="text" class="form-control" name="username"  placeholder="Name: John H.Smith">
      <small id="emailHelp" class="form-text text-muted">We'll never share your Credentials with anyone else.</small>
    </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gender" id="exampleRadios1" value="Male" checked>
        <label class="form-check-label" for="exampleRadios1">
           MALE
        </label>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <input class="form-check-input" type="radio" name="gender" id="exampleRadios2" value="Female">
          <label class="form-check-label" for="exampleRadios2">
             FEMALE
          </label>
      </div>
        <br>
      <div class="form-group ">
        <select id="category1" class="form-control" name="category">
          <option selected>Feedback</option>
          <option>Inquiry</option>
          <option>Complaint</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleFormControlMessage">Message</label>
        <textarea class="form-control" name="feedback" id="exampleFormControlMessage" rows="3"></textarea>
      </div>
      <br>
      <div>
        <p>Current Date and Time is: <adn:today color='blue' size='22px'/>  </p>
      </div>
    <button type="submit" class="btn btn-primary">Submit</button>


    </div>
  </form>
  </body>
</html>
