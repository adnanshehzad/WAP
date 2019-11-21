package edu.mum.cs.cs472.lab11.servlets;

import edu.mum.cs.cs472.lab11.daos.ContactsDAO;
import edu.mum.cs.cs472.lab11.model.ContactFormData;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@WebServlet(name = "BrowseMessagesController", urlPatterns = {"/browse-messages"}, description = "BrowseMessagesController")
public class BrowseMessagesController extends HttpServlet {

    private ContactsDAO contactsDAO;

    public BrowseMessagesController() {
        this.contactsDAO = new ContactsDAO();
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	List<ContactFormData> contactMessages;
    	String query = request.getParameter("searchString");
    	System.out.println("Query: " + query);
    	if(query != null && !query.isEmpty()) {
    		contactMessages = contactsDAO.searchContactFormData(query);
    	} else {
    		contactMessages = contactsDAO.getAllContactFormData();	
    	}

        // set it in requestScope , recall in *.jsp file
        request.setAttribute("contactMessages", contactMessages);
        // forward to View (jsp ui)
        request.getRequestDispatcher("/browse-messages.jsp").forward(request, response);
        //response.sendRedirect(request.getContextPath() + "/browse-messages.jsp");
    }
}
