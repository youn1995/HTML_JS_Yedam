package employee;

import java.io.IOException;
import java.util.Enumeration;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/AddEmplServlet")
public class AddEmplServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

    public AddEmplServlet() {
        super();
    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int methodChange = 0; 
		response.setContentType("text/html;charset=utf-8");
		Enumeration<String> paramNames = request.getParameterNames();
		while(paramNames.hasMoreElements()) {
	         String paramName = (String)paramNames.nextElement();
	         if(paramName.equals("last_name")) {
	        	 methodChange = 1;
	        	 break;
	         }
		}
		
		if(methodChange == 1) {
			String lastName = request.getParameter("last_name");
			String email = request.getParameter("email");
			String hireDate = request.getParameter("hire_date");
			String jobId =request.getParameter("job_id");
			
			Employee emp = new Employee(email, lastName, hireDate, jobId);
			EmpDAO empDAO = new EmpDAO();
			int isSucess =empDAO.insertEmp(emp);
			if(isSucess == -1) {			 
				response.getWriter().append("X.");
			} else {
				response.getWriter().append("O.");
				request.getRequestDispatcher("employeeList.html").forward(request,response);
			}
		}
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		doGet(request, response);
		response.getWriter().append("Served at: "+"Post");
		 String lastName = request.getParameter("last_name");
		 String email = request.getParameter("email");
		 response.getWriter().append(lastName + " "+ email);
		 
		 
	}

}
