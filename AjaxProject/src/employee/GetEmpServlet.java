package employee;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class GetEmpServlet
 */
@WebServlet({ "/GetEmpServlet", "/GetEmpListServlet" })
public class GetEmpServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetEmpServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("text/html;charset=utf-8");
//		response.getWriter().append("Served at: ").append(request.getContextPath()).append(" 승Youn is back");
		PrintWriter out = response.getWriter();
		//hr.employee(employee_id, first_name, email, salary)
		EmpDAO empDAO = new EmpDAO();
		List<Employee> list = empDAO.getEmpList();
		out.write("[");
		for(int i =0; i<list.size(); i++) {
				String str = String.format("{\"id\":\"%s\",\"first_name\":\"%s\",\"email\":\"%s\",\"salary\":\"%d\"}"
						, list.get(i).employeeId, list.get(i).firstName, list.get(i).email, list.get(i).salary);
					out.write(str);				
				if(i < list.size()-1) {
					out.write(",");
				}
		}
		out.write("]");
		
//		out.write("[{\"id\":\"user1\",\"first_name\":\"Hong\",\"age\":\"30\"},");
//		out.write("{\"id\":\"user2\",\"first_name\":\"Kong\",\"age\":\"20\"}]");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
