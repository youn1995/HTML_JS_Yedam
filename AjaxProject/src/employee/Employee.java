package employee;

public class Employee {
	int employeeId;
	String firstName;
	String email;
	int salary;
	String lastName;
	String hireDate;
	String jobId;

	public Employee() {
		super();
	}

	public Employee(String email, String lastName, String hireDate, String jobId) {
		super();
		this.email = email;
		this.lastName = lastName;
		this.hireDate = hireDate;
		this.jobId = jobId;
	}

	public Employee(int employeeId, String firstName, String email, int salary) {
		super();
		this.employeeId = employeeId;
		this.firstName = firstName;
		this.email = email;
		this.salary = salary;
	}

	public Employee(String firstName, String lastName, String email, String jobId, String hireDate, int salary) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.jobId = jobId;
		this.hireDate = hireDate;
		this.salary = salary;
	}

	public int getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getSalary() {
		return salary;
	}

	public void setSalary(int salary) {
		this.salary = salary;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getHireDate() {
		return hireDate;
	}

	public void setHireDate(String hireDate) {
		this.hireDate = hireDate;
	}

	public String getJobId() {
		return jobId;
	}

	public void setJobId(String jobId) {
		this.jobId = jobId;
	}

}
