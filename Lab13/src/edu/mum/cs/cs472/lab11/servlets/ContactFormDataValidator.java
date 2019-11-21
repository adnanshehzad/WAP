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

@WebServlet(name = "ContactFormDataValidator", urlPatterns = {"/contact-form-data-validator"}, description = "ContactFormDataValidator")
public class ContactFormDataValidator extends HttpServlet {
	//instance field
	private ContactsDAO contactsDAO;

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String customerName = request.getParameter("customerName");
        String gender = request.getParameter("radioGender");
        String category = request.getParameter("ddlCategory");
        String message = request.getParameter("message");
        System.out.println("name = "+ customerName + ", gender = " + gender + ", cat = " + category + ", msg = " + message);
        ContactFormData jbcontactFormData = new ContactFormData(customerName, gender, category, message);
        request.setAttribute("contactFormData", jbcontactFormData);
        // Check for missing fields data
        String missingFieldsMsg = "";
        if(customerName.equals("")) {
            missingFieldsMsg += "<span style='color:red;font-size:1em'>Name is missing.</span><br/>";
        }
        if(gender == null) {
            missingFieldsMsg += "<span style='color:red;'>Gender is missing.</span><br/>";
        }
        if(category.equals("null")) {
            missingFieldsMsg += "<span style='color:red;'>Category is missing.</span><br/>";
        }
        if(message.equals("")) {
            missingFieldsMsg += "<span style='color:red;'>Message is missing.</span><br/>";
        }
        if(!missingFieldsMsg.equals("")) {
            request.setAttribute("isErrMsgsPresent", true);
            request.setAttribute("errMsgs", missingFieldsMsg);
            // forward (return) back to sender
            request.getRequestDispatcher("/contact-form").forward(request, response);
            
        } else {
        	request.getRequestDispatcher("/contact-form-controller").forward(request, response);
        	/*
        	ContactFormData contactFormData = (ContactFormData)request.getAttribute("contactFormData");
            ContactFormData savedContactFormData = contactsDAO.saveContactFormData(contactFormData);
            // set it in requestScope
            request.setAttribute("savedContactFormData", savedContactFormData);
            System.out.println("in doPost , can save dave or not?");
            System.out.println(savedContactFormData.toString());
            request.getRequestDispatcher("/browse-messages").forward(request, response);
			*/
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.sendRedirect("contact-form");
    }
}
