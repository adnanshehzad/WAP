package com.example.Servlet;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;

@WebServlet("/contact-form")
public class PracticeServlet extends HttpServlet {
    private int hitCount;
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        hitCount++;
        response.setContentType("text/html");
        PrintWriter out=response.getWriter();
        String name=request.getParameter("username");
        String gender = request.getParameter("gender");
        String category = request.getParameter("category");
        String feedback=request.getParameter("feedback");
        //out.println("<p> " + hitCount +  "</p>");
        if(name.isEmpty() || feedback.isEmpty()){
            request.setAttribute("errorname","Name cannot be Empty!!! ");
            request.setAttribute("errorfeedback","Feedback cannot be Empty!!! ");
            RequestDispatcher dispatcher = request.getRequestDispatcher("index.jsp");
            dispatcher.forward( request, response);
        }
        else
        {
            response.sendRedirect("Thankyou.jsp?name="+request.getParameter("username") +"?gender="+request.getParameter("gender") + "?category="+request.getParameter("category"));
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        hitCount++;
        response.setContentType("text/html");
        PrintWriter out=response.getWriter();
        out.println("<h1> Hello World via Servlet </h1>");
        out.println("<p> " + new Date().toString() +  "</p>");
        out.println("<p> " + hitCount +"times" +  "</p>");
    }

    @Override
    public void init() throws ServletException {
        super.init();
        hitCount=0;
    }
}
