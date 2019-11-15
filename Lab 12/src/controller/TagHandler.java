package controller;

import javax.servlet.jsp.tagext.JspTag;
import java.time.LocalDateTime;
import java.util.Calendar;
import java.util.Date;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.PageContext;
import javax.servlet.jsp.tagext.SimpleTagSupport;
import javax.servlet.jsp.tagext.TagSupport;

public class TagHandler  extends SimpleTagSupport{
    //attribute
    private String color;
    private String size;

    //setter
    public void setColor(String color) {
        this.color = color;
    }
    public void setSize(String size) {
        this.size = size;
    }

    @Override
    public void doTag() throws JspException{
        JspWriter out = getJspContext().getOut();
        try {
            Date date = new Date();
            if(color!=null || size != null) {
                String str = String.format("<span style='color:%s ; size:%s'>%s</span>", color,size,date.toString());
                out.write(str);
            }
        }catch(Exception e) {
            System.out.println(e);
        }
    }

}
