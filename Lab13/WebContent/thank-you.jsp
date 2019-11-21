<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CS472-WAP-Lessons 15 and 16</title>
<%-- <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/sketchy/bootstrap.min.css" rel="stylesheet" integrity="sha384-N8DsABZCqc1XWbg/bAlIDk7AS/yNzT5fcKzg/TwfmTuUqZhGquVmpb5VvfmLcMzp" crossorigin="anonymous">   --%>
    <%--  <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/united/bootstrap.min.css" rel="stylesheet" integrity="sha384-WTtvlZJeRyCiKUtbQ88X1x9uHmKi0eHCbQ8irbzqSLkE0DpAZuixT5yFvgX0CjIu" crossorigin="anonymous">  --%>    
	<link href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/cosmo/bootstrap.min.css" rel="stylesheet" integrity="sha384-uhut8PejFZO8994oEgm/ZfAv0mW1/b83nczZzSwElbeILxwkN491YQXsCFTE6+nx" crossorigin="anonymous"> 
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <%@ include file="fragments/header.jsp"%>

    <div class="container">
        <div class="container">
            <br/>
            <span style="float:right;" class="text-muted"><c:out value="${currDateTime}"></c:out></span>
        </div>
        <p>
            <br/>
            <div class="card">
                <div class="card-header">
                    <h2>Thank you! Your message has been received as follows:</h2>
                </div>
                <div class="card-body">
                    <h4 class="card-title">Name: <c:out value="${contactFormData.name}"></c:out></h4>
                    <br/>
                    <h5 class="card-subtitle mb-2 text-muted">Gender: <c:out value="${contactFormData.gender}"></c:out></h5>
                    <br/>
                    <h5 class="card-subtitle mb-2 text-muted">Category: <c:out value="${contactFormData.category}"></c:out></h5>
                    <br/>
        <p class="card-text">Message: <c:out value="${contactFormData.message}"></c:out></p>
        <br/><br/>
        <p>Please feel free to <a href="./contact-form" class="card-link">Contact Us</a> again</p>
    </div>
    </div>
    </p>
    <div class="container">
        <span class="text-muted">Hit Count for this page: 1</span>
        <span style="float:right;" class="text-muted">Total Hit Count for the entire WebApp: 8</span>
    </div>
    </div>

    <%@include file="fragments/footer.jsp"%>

</body>
</html>
