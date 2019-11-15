package com.example.Servlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;

@WebServlet("/thank-you")
public class ThankyouServlet extends HttpServlet {
    private int hitcounter;
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        hitcounter++;
        response.sendRedirect("/index.jsp");
//        response.setContentType("text/html");
//        PrintWriter out=response.getWriter();
//        out.println("<h1> Thank you. Your Data has been received Successfully </h1>");
//        out.println("<p> " + new Date().toString() +  "</p>");
//        out.println("<p> " + hitcounter + "Times" +  "</p>");
    }

    @Override
    public void init() throws ServletException {
        super.init();
        hitcounter=0;
    }
}
