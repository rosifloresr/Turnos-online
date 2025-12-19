/****** Fase 2 - BASES DE LA API ******/

BASES GENERALES.
Base URL
    /api/v1

Autenticación
    - JWT Access Token -> Authorization: Bearer <Token>
    - Refresh Token -> httpOnly cookie o header
    - Todos los endpoints (menos auth) requieren token

Formato de respuestas
    {
        "succes": true,
        "data": {},
        "message": "optional"
    }

Errores:
    {
        "success": false,
        "error": "ERROR_CODE",
        "message": "Mensaje descriptivo"
    }

AUTH MODULE
Login
    POST /auth/login

Request
    {
        "email": "user@mail.com",
        "password": "123456"
    }
Response 200
    {
        "accessToken": "...",
        "refreshToken": "..."
    }

Refresh Token
    POST /auth/refresh

Response 200
    {
        "accessToken": "new-token"
    }

Logout
    POST /auth/logout

USERS MODULE (ADMIN)
+ crear usuario
    POST /users
Roles: ADMIN

Request 
    {
        "name": "Juan Perez",
        "email": "juan@gmmail.com",
        "role": "OPERATOR"
    }

Listar usuarios
    GET /users
Roles:  ADMIN, SUPERVISOR

SHIFT MODULE
+ Crear turno
    POST /shifts
Roles: SUPERVISOR, ADMIN

Request
    {
        "date": "2025-10-12",
        "startTime": "08:00",
        "endTime": "16:00",
        "userIds": [1, 2, 3]
    }

Turnos activos:
    GET /shifts/active
Roles: todos los autenticados.

Turnos del usuario:
    GET /shifts/my

INCIDENTS MODULE
+ Crear incidente
    POST /incidents
Roles: OPERATOR, SUPERVISOR, ADMIN

Request
    {
    "title": "Falla en sensor",
    "description": "Sensor de presión fuera de rango",
    "severity": "HIGH",
    "shiftId": 10
    } 

Cambiar estado
    PATH /incidents/:id/status
Roles: SUPERVISOR, ADMIN

Request
    {
        "status": "RESOLVED"
        }

Incidentes activos
    GET /incidents/active

DASHBOARD MODULE
Van a ser las métricas principales
    GET /dashboard/summary

Response
    {
    "activeShifts": 3,
    "openIncidents": 5,
    "criticalIncidents": 2,
    "avgResolutionTime": "01:35"
    }

AUDIT MODULE
Logs
    GET /audit
Roles: ADMIN