<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CS472-WAP-Lesson 15 - Contact Messages</title>
    <%--  <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/sketchy/bootstrap.min.css" rel="stylesheet" integrity="sha384-N8DsABZCqc1XWbg/bAlIDk7AS/yNzT5fcKzg/TwfmTuUqZhGquVmpb5VvfmLcMzp" crossorigin="anonymous">  --%>
    <%--  <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/united/bootstrap.min.css" rel="stylesheet" integrity="sha384-WTtvlZJeRyCiKUtbQ88X1x9uHmKi0eHCbQ8irbzqSLkE0DpAZuixT5yFvgX0CjIu" crossorigin="anonymous">  --%>   
    <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/cosmo/bootstrap.min.css" rel="stylesheet" integrity="sha384-uhut8PejFZO8994oEgm/ZfAv0mW1/b83nczZzSwElbeILxwkN491YQXsCFTE6+nx" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <%@ include file="fragments/header.jsp"%>
    <div class="container"><br/>
    <form action="">
        <h2>List of Contact Messages</h2>
        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Gender</th>
                <th scope="col">Category</th>
                <th scope="col">Message</th>
                <th scope="col">&nbsp;</th>
                <th scope="col">&nbsp;</th>
            </tr>
            </thead>
            <tbody>
                <c:forEach var="contactData" items="${contactMessages}" varStatus="iteration">
                    <tr>
                        <th scope="row"><c:out value="${iteration.index+1}"></c:out>.</th>
                        <td><c:out value="${contactData.name}"></c:out></td>
                        <td><c:out value="${contactData.gender}"></c:out></td>
                        <td><c:out value="${contactData.category}"></c:out></td>
                        <td><c:out value="${contactData.message}"></c:out></td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                </c:forEach>
            </tbody>
        </table>        
    </form>
    </div>
    <div class="container">
        <br/>
        <br/>
        <span class="text-muted">Hit Count for this page: 1</span>
        <span style="float:right;" class="text-muted">Total Hit Count for the entire WebApp: 4</span>
    </div>

    <%@include file="fragments/footer.jsp"%>
</body>
</html>
