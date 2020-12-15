# Simple GitHub backend

A simple backend for accessing the GitHub API. This backend has 3 working endpoints:

 - `/rest/repos/<user>`  
   This endpoint will return a list of repositories by the user.
 - `/rest/repos/<user>/<repo>`  
   This endpoint will return the information of the repository. 
 - `/rest/repos/<user>/<repo>/readme`  
   This endpoint will return the readme file.
