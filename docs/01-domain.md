/****** Fase 1 - DISEÑO DEL DOMINIO ******/

Contexto: Finalidad del proyecto, plantearemos un poco el contexto y la finalidad del proyecto.
    - Tenemos turnos;
    - Personas responsables;
    - Incidentes que ocurren en horarios específicos;
    - Necesidad de trazabilidad;
    - Auditoría de acciones;
    - Roles claro.

Actores del sistema (Usuarios)
Importante: Todos los actores son usuarios, con ROLES DISTINTOS.
Roles: 
    1. ADMIN
        * Configura el sistema;
        * Crea usuarios;
        * Ve todo.
    
    2. SUPERVISOR
        * Crea turnos;
        * Asigna personal;
        * Gestion incidentes.
    
    3. OPERATOR
        * Partipa en turnos;
        * Registra incidentes.

Los roles NO SON USUARIOS DISTINTOS, son COMPORTAMIENTOS.

Entidades principales del dominio.
1) User: Representa a una persona del sistema.
Responsabilidades:
    - Autenticarse;
    - Tener un rol;
    - Participar en turnos;
    - Ser responsable de incidentes.

2) Shift (Turno): Representa un bloque de trabajo.
Características:
    - Fecha;
    - Hora inicio/fin;
    - Usuarios asignados;
    - Turno activo o finalizado.

(Un turno CONTEXTUALIZA ACCIONES)

3) Incident (Incidente): Evento ocurrido durante un turno.
Características:
    - Títulos;
    - Descripción;
    - Severidad;
    - Estado;
    - Turno asociado;
    - Responsable;
    - Fechas clave.

Todo incidente PERTENECE A UN TURNO.

4) AuditLog (Auditoría): Registro de acciones importantes.
Qué registra:
    - Quién hizo la acción;
    - Qué acción;
    - Sobre qué entidad;
    - Cuándo.

Relacionees entre entidades (conceptual)
User n:n Shift
    - Muchos a muchos: Un usuario puede tener varios turnos, un turno tiene varios usurios.

Shift 1:n Incident
    - Uno a muchos: Un turno puede tener varios incidentes.

User 1:n AuditLog
    - Uno a muchos.

ESTADOS Y ENUMS DEL DOMINIO.
Roles:
    ADMIN
    SUPERVISOR
    OPERATOR

Severidad de incidentes:
    LOW
    MEDIUM
    HIGH
    CRITICAL

Estado de incidentes:
    OPEN
    IN_PROGRESS
    RESOLVED

REGLAS DE PROGRAMA (Criterios).
Turnos:
    * Un turno no puede solaparte con otro del mismo usuario.
    * Un turno puede estar:
        - ACTIVO
        - FINALIZADO
    * Un turno activo permite registrar incidentes.

Incidentes:
    * Solo se crean dentro de un turno activo.
    * Deben tener severidad.
    * solo SUPERVISOR o ADMIN pueden cerrar incidentes.
    * OPERATOR puede crear, pero no cerrar.

Seguridad:
    * Cada request autenticado.
    * Acceso según rol.
    * Acciones auditadas.

