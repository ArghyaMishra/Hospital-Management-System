@echo off
title AIIMS Delhi - Arghya Mishra
echo =====================================================================
echo  AIIMS Delhi Hospital Management System
echo  Project Created and Developed Exclusively by Arghya Mishra
echo =====================================================================
echo.

echo [1/3] Launching Backend Server on port 4000...
start "Backend - AIIMS Delhi (Arghya Mishra)" cmd /k "cd /d "%~dp0backend" && node server.js"
ping 127.0.0.1 -n 3 >nul

echo [2/3] Launching Patient Portal Frontend on port 5173...
start "Frontend - AIIMS Delhi (Arghya Mishra)" cmd /k "cd /d "%~dp0frontend" && npm run dev"
ping 127.0.0.1 -n 3 >nul

echo [3/3] Launching Admin and Doctor Dashboard on port 5174...
start "Dashboard - AIIMS Delhi (Arghya Mishra)" cmd /k "cd /d "%~dp0dashboard" && npm run dev"
ping 127.0.0.1 -n 3 >nul

echo Opening Patient Portal (http://localhost:5173)...
start http://localhost:5173

echo Opening Admin Dashboard (http://localhost:5174)...
start http://localhost:5174

echo.
echo =====================================================================
echo  All services are now running on your laptop!
echo  Backend:   http://localhost:4000
echo  Frontend:  http://localhost:5173
echo  Dashboard: http://localhost:5174
echo.
echo  Default Admin Login:
echo    Email:    admin@hospital.com
echo    Password: admin123
echo =====================================================================
