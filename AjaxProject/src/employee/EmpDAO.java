package employee;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class EmpDAO {

	Connection conn = null;
	PreparedStatement pstmt = null;

	public Connection getConnect() {
		String url = "jdbc:oracle:thin:@localhost:1521:xe";
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
			conn = DriverManager.getConnection(url, "hr", "hr");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return conn;
	}

	public List<Employee> getEmpList() {
		conn = getConnect();
		List<Employee> employees = new ArrayList<>();
		String sql = "select employee_id, first_name, email, salary from employees order by employee_id desc";
		try {
			pstmt = conn.prepareStatement(sql);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				Employee emp = new Employee(rs.getInt("employee_id"), rs.getString("first_name"), rs.getString("email"),
						rs.getInt("salary"));
				employees.add(emp);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}

		return employees;
	}

	public int insertEmp(Employee emp) {
		String sql = String.format(
				"insert into employees (employee_id, last_name, email, hire_date, job_id) values(employees_seq.nextval,'%s','%s','%s','%s')",
				emp.getLastName(), emp.getEmail(), emp.getHireDate(), emp.getJobId());
		conn = getConnect();
		try {
			pstmt = conn.prepareStatement(sql);

			int r = pstmt.executeUpdate();
			conn.close();
			return r;
		} catch (SQLException e) {
			e.printStackTrace();
			try {
				conn.close();
			} catch (SQLException e1) {
				e1.printStackTrace();
			}
			return -1;
		}
	}
	
	public Map<String, String> getJobCode(){
		conn = getConnect();
		Map<String, String> jobs = new HashMap<String, String>();
		String sql = "select job_id, job_title from jobs order by job_id";
		try {
			pstmt = conn.prepareStatement(sql);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				jobs.put(rs.getString("job_id"), rs.getString("job_title"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}

		return jobs;
		
	}
	
	public int DeleteEmp(Employee emp) {
		String sql = String.format(
				"delete from employees where employee_id = %d", emp.getEmployeeId());
		conn = getConnect();
		try {
			pstmt = conn.prepareStatement(sql);

			int r = pstmt.executeUpdate();
			conn.close();
			return r;
		} catch (SQLException e) {
			e.printStackTrace();
			try {
				conn.close();
			} catch (SQLException e1) {
				e1.printStackTrace();
			}
			return -1;
		}
	}

}
