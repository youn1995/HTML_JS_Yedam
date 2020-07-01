<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <%
    String user3 = request.getParameter("id");
    String dept3 = request.getParameter("pass");
    %>
<table border="1">
    <tr>
        <td>사용자이름</td>
        <td><%=user3%></td>
    </tr>
    <tr>
        <td>성별</td>
        <td><%=dept3%></td>
    </tr>
</table>
    <%
    String user = request.getParameter("sex");
    String dept = request.getParameter("year");
    %>
<table border="1">
    <tr>
        <td>사용자이름</td>
        <td><%=user%></td>
    </tr>
    <tr>
        <td>성별</td>
        <td><%=dept%></td>
    </tr>
</table>
<%
    String user1 = request.getParameter("subject");
    String dept1 = request.getParameter("subject");
    %>
<table border="1">
    <tr>
        <td>관심</td>
        <td><%=user1%></td>
    </tr>
    <tr>
        <td>관심</td>
        <td><%=dept1%></td>
    </tr>
</table>
</body>
</html>