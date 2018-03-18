<jsp:directive.page contentType="text/html" pageEncoding="UTF-8" />
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html lang="en">
<head>
    <title>HOME</title>
    <link href="<c:url value='/bootstrap.min.css'/>" rel="stylesheet">
</head>

<body>
<div style="margin: 70px; border: 2px solid;">
    <h2>Schema editor selection.</h2>
    <div>
        <div id="canceling" style="display: inline">
            <button class="btn btn-lg btn-primary"
                    onclick="location.href='/enter-edit-schema/1'">Open schema 1
            </button>
            <button class="btn btn-lg btn-primary"
                    onclick="location.href='/enter-edit-schema/2'">Open schema 2
            </button>
        </div>
    </div>
</div>
</body>
</html>