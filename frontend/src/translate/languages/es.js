const messages = {
  es: {
    translations: {
      signup: {
        title: "Registro",
        toasts: {
          success: "¡El usuario ha sido creado satisfactoriamente! ¡Ahora inicia sesión!",
          fail: "Error creando el usuario. Verifica la data reportada.",
        },
        form: {
          name: "Nombre",
          email: "Correo Electrónico",
          password: "Contraseña",
        },
        buttons: {
          submit: "Regístrate",
          login: "¿Ya tienes una cuenta? ¡Inicia sesión!",
        },
      },
      login: {
        title: "Inicio de Sesión",
        form: {
          email: "Correo Electrónico",
          password: "Contraseña",
        },
        buttons: {
          submit: "Ingresa",
          register: "¿No tienes cuenta? ¡Regístrate!",
        },
      },
      companies: {
        title: "Registrar Empresa",
        form: {
          name: "Nombre de Empresa",
          plan: "Plan",
          token: "Token",
          submit: "Registrar",
          success: "¡Empresa creada con éxito!",
        },
      },
      auth: {
        toasts: {
          success: "¡Inicio de sesión exitoso!",
        },
        token: "Token",
      },
      dashboard: {
        charts: {
          perDay: {
            title: "Tickets hoy: ",
          },
        },
      },
      connections: {
        title: "Conexiones",
        toasts: {
          deleted: "¡La conexión de WhatsApp ha sido borrada satisfactoriamente!",
        },
        confirmationModal: {
          deleteTitle: "Borrar",
          deleteMessage: "¿Estás seguro? Este proceso no puede ser revertido.",
          disconnectTitle: "Desconectar",
          disconnectMessage:
            "Estás seguro? Deberá volver a leer el código QR",
        },
        buttons: {
          add: "Agrega WhatsApp",
          disconnect: "Desconectar",
          tryAgain: "Inténtalo de nuevo",
          qrcode: "Código QR",
          newQr: "Nuevo Código QR",
          connecting: "Conectando",
        },
        toolTips: {
          disconnected: {
            title: "No se pudo iniciar la sesión de WhatsApp",
            content:
              "Asegúrese de que su teléfono celular esté conectado a Internet y vuelva a intentarlo o solicite un nuevo código QR",
          },
          qrcode: {
            title: "Esperando la lectura del código QR",
            content:
              "Haga clic en el botón 'CÓDIGO QR' y lea el Código QR con su teléfono celular para iniciar la sesión",
          },
          connected: {
            title: "Conexión establecida",
          },
          timeout: {
            title: "Se perdió la conexión con el teléfono celular",
            content:
              "Asegúrese de que su teléfono celular esté conectado a Internet y que WhatsApp esté abierto, o haga clic en el botón 'Desconectar' para obtener un nuevo código QR",
          },
        },
        table: {
          name: "Nombre",
          status: "Estado",
          lastUpdate: "Última Actualización",
          default: "Por Defecto",
          actions: "Acciones",
          session: "Sesión",
        },
      },
      whatsappModal: {
        title: {
          add: "Agregar WhatsApp",
          edit: "Editar WhatsApp",
        },
        form: {
          name: "Nombre",
          default: "Por Defecto",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "WhatsApp guardado satisfactoriamente.",
      },
      qrCode: {
        message: "Lée el código QR para empezar la sesión.",
      },
      contacts: {
        title: "Contactos",
        toasts: {
          deleted: "¡Contacto borrado satisfactoriamente!",
        },
        searchPlaceholder: "Buscar...",
        confirmationModal: {
          deleteTitle: "Borrar",
          importTitlte: "Importar contatos",
          deleteMessage:
            "¿Estás seguro que deseas borrar este contacto? Todos los tickets relacionados se perderán.",
          importMessage: "¿Quieres importar todos los contactos desde tu teléfono?",
        },
        buttons: {
          import: "Importar Contatos",
          add: "Agregar Contacto",
        },
        table: {
          id: "ID",
          name: "Nombre",
          whatsapp: "WhatsApp",
          email: "Correo Electrónico",
          tag: "Etiquetas",
          actions: "Acciones",
        },
      },
      contactModal: {
        title: {
          add: "Agregar contacto",
          edit: "Editar contato",
        },
        form: {
          mainInfo: "Detalles del contacto",
          extraInfo: "Información adicional",
          name: "Nombre",
          number: "Número de Whatsapp",
          email: "Correo Electrónico",
          extraName: "Nombre del Campo",
          extraValue: "Valor",
        },
        buttons: {
          addExtraInfo: "Agregar información",
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "Contacto guardado satisfactoriamente.",
      },
      queueModal: {
        title: {
          add: "Agregar cola",
          edit: "Editar cola",
        },
        form: {
          name: "Nombre",
          color: "Color",
          greetingMessage: "Mensaje de saludo",
          complationMessage: "Mensaje de conclución",
          outOfHoursMessage: "Mensaje fuera de horario",
          ratingMessage: "Revisar mensaje",
          token: "Token",
        },
        buttons: {
          okAdd: "Añadir",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
      },
      userModal: {
        title: {
          add: "Agregar usuario",
          edit: "Editar usuario",
        },
        form: {
          name: "Nombre",
          email: "Correo Electrónico",
          password: "Contraseña",
          profile: "Perfil",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "Usuario guardado satisfactoriamente.",
      },
      scheduleModal: {
        title: {
          add: "Nueva Agenda",
          edit: "Editar Agenda",
        },
        form: {
          body: "Mnesaje",
          contact: "Contacto",
          sendAt: "Fecha de Agenda",
          sentAt: "Fecha de Envio",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "Agenda guardada exitosamente.",
      },
      tagModal: {
        title: {
          add: "Nueva Etiqueta",
          edit: "Editar Etiqueta",
        },
        form: {
          name: "Nombre",
          color: "Color",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "Etiqueta guardada exitosamente.",
      },
      chat: {
        noTicketMessage: "Selecciona un ticket para empezar a chatear.",
      },
      uploads: {
        titles: {
          titleUploadMsgDragDrop: "ARRASTRA Y SUELTA ARCHIVOS EN EL CAMPO A CONTINUACIÓN",
          titleFileList: "Lista de archivo(s)"
        },
      },      
      ticketsManager: {
        buttons: {
          newTicket: "Nuevo",
        },
      },
      ticketsQueueSelect: {
        placeholder: "Departamento",
      },
      tickets: {
        toasts: {
          deleted: "El ticket en el que estabas ha sido borrado.",
        },
        notification: {
          message: "Mensaje de",
        },
        tabs: {
          open: { title: "Bandeja" },
          closed: { title: "Resueltos" },
          search: { title: "Buscar" },
        },
        search: {
          placeholder: "Buscar tickets y mensajes.",
        },
        buttons: {
          showAll: "Todos",
        },
      },
      transferTicketModal: {
        title: "Transferir Ticket",
        fieldLabel: "Escriba para buscar usuarios",
        fieldQueueLabel: "Transferir al departamento",
        fieldQueuePlaceholder: "Seleccione un departamento",
        noOptions: "No se encontraron usuarios con ese nombre",
        buttons: {
          ok: "Transferir",
          cancel: "Cancelar",
        },
      },
      ticketsList: {
        pendingHeader: "En espera",
        assignedHeader: "Atendiendo",
        noTicketsTitle: "Nada acá!",
        noTicketsMessage:
          "No se encontraron tickets con este estado o término de búsqueda",
        buttons: {
          accept: "Aceptar",
          closed: "Finalizar",
          reopen: "Reabrir"
        },
      },
      newTicketModal: {
        title: "Crear Ticket",
        fieldLabel: "Escribe para buscar un contacto",
        add: "Añadir",
        buttons: {
          ok: "Guardar",
          cancel: "Cancelar",
        },
      },
      mainDrawer: {
        listItems: {
          dashboard: "Dashboard",
          connections: "Conexiones",
          tickets: "Tickets",
          quickMessages: "Respuestas Rápidas",
          contacts: "Contactos",
          queues: "Departamentos & Chatbot",
          tags: "Etiquetas",
          administration: "Administración",
          users: "Usuarios",
          settings: "Configuraciones",
          helps: "Ayuda",
          messagesAPI: "API",
          schedules: "Agenda",
          campaigns: "Campañas",
          annoucements: "Informativos",
          chats: "Chat Interno",
          financeiro: "Facturas",
        },
        appBar: {
          user: {
            profile: "Perfil",
            logout: "Cerrar Sesión",
          },
        },
      },
      messagesAPI: {
        title: "API",
        textMessage: {
          number: "Número",
          body: "Mensaje",
          token: "Token registrado",
        },
        mediaMessage: {
          number: "Número",
          body: "Nombre de archivo",
          media: "Archivo",
          token: "Token registrado",
        },
      },
      notifications: {
        noTickets: "Sin notificaciones.",
      },
      quickMessages: {
        title: "Respuestas Rápidas",
        buttons: {
          add: "Nueva Respuesta",
        },
        dialog: {
          shortcode: "Atajo",
          message: "Respuesta",
        },
      },
      contactLists: {
        title: "Listas de Contactos",
        table: {
          name: "Nombre",
          contacts: "Contactos",
          actions: "Acciones",
        },
        buttons: {
          add: "Nueva Lista",
        },
        dialog: {
          name: "Nombree",
          company: "Empresa",
          okEdit: "Editar",
          okAdd: "Añadir",
          add: "Añadir",
          edit: "Editar",
          cancel: "Cancelar",
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage: "Esta acción no se puede revertir.",
        },
        toasts: {
          deleted: "Registro eliminado",
        },
      },
      contactListItems: {
        title: "Contactos",
        searchPlaceholder: "Buscar",
        buttons: {
          add: "Nuevo",
          lists: "Listas",
          import: "Importar",
        },
        dialog: {
          name: "Nombree",
          number: "Número",
          whatsapp: "Whatsapp",
          email: "Correo Electrónico",
          okEdit: "Editar",
          okAdd: "Añadir",
          add: "Añadir",
          edit: "Editar",
          cancel: "Cancelar",
        },
        table: {
          name: "Nombre",
          number: "Número",
          whatsapp: "Whatsapp",
          email: "Correo Electrónico",
          actions: "Acciones",
        },
        confirmationModal: {
          deleteTitle: "Borrar",
          deleteMessage: "¿Estás seguro? Este proceso no puede ser revertido.",
          importMessage: "¿Quieres importar contactos desde esta hoja de cálculo? ",
          importTitlte: "Importar",
        },
        toasts: {
          deleted: "Registro eliminado",
        },
      },
      campaigns: {
        title: "Campañas",
        searchPlaceholder: "Buscar",
        buttons: {
          add: "Nueva Campaña",
          contactLists: "Listas de Contactos",
        },
        table: {
          name: "Nombre",
          whatsapp: "Conexión",
          contactList: "Lista de Contactos",
          status: "Estado",
          scheduledAt: "Agenda",
          completedAt: "Completada",
          confirmation: "Confirmación",
          actions: "Acción",
        },
        dialog: {
          new: "Nueva Campaña",
          update: "Editar Campaña",
          readonly: "Sólo vista",
          form: {
            name: "Nombre",
            message1: "Mensaje 1",
            message2: "Mensaje 2",
            message3: "Mensaje 3",
            message4: "Mensaje 4",
            message5: "Mensaje 5",
            confirmationMessage1: "Mensaje de Confirmación 1",
            confirmationMessage2: "Mensaje de Confirmación 2",
            confirmationMessage3: "Mensaje de Confirmación 3",
            confirmationMessage4: "Mensaje de Confirmación 4",
            confirmationMessage5: "Mensaje de Confirmación 5",
            messagePlaceholder: "Contenido del mensaje",
            whatsapp: "Conexión",
            status: "Estado",
            scheduledAt: "Agenda",
            confirmation: "Confirmación",
            contactList: "Lista de Contacto",
          },
          buttons: {
            add: "Agregar",
            edit: "Atualizar",
            okadd: "Ok",
            cancel: "Cancelar envíos",
            restart: "Reiniciar envíos",
            close: "Cerrar",
            attach: "Adjuntar archivo",
          },
        },
        confirmationModal: {
          deleteTitle: "Borrar",
          deleteMessage: "Esta acción no puede ser revertida",
        },
        toasts: {
          success: "Operación realizada con éxito",
          cancel: "Campaña cancelada",
          restart: "Campaña reiniciada",
          deleted: "Registro eliminado",
        },
      },
      announcements: {
        title: "Informativos",
        searchPlaceholder: "Buscar",
        buttons: {
          add: "Nuevo Informativo",
          contactLists: "Listas de Informativos",
        },
        table: {
          priority: "Prioridad",
          title: "Título",
          text: "Texto",
          mediaName: "Archivo",
          status: "Estado",
          actions: "Acciones",
        },
        dialog: {
          edit: "Editar de Informativo",
          add: "Nuevo Informativo",
          update: "Editar Informativo",
          readonly: "Solo vista",
          form: {
            priority: "Prioridad",
            title: "Título",
            text: "Texto",
            mediaPath: "Archivo",
            status: "Estado",
          },
          buttons: {
            add: "Añadir",
            edit: "Atualizar",
            okadd: "Ok",
            cancel: "Cancelar",
            close: "Cerrar",
            attach: "Adjuntar Archivo",
          },
        },
        confirmationModal: {
          deleteTitle: "Borrar",
          deleteMessage: "Esta acción no puede ser revertida.",
        },
        toasts: {
          success: "Operación realizada con éxito",
          deleted: "Registro eliminado",
        },
      },
      campaignsConfig: {
        title: "Configuración de Campañas",
      },
      queues: {
        title: "Departamentos & Chatbot",
        table: {
          name: "Nombre",
          color: "Color",
          greeting: "Mensaje de saludo",
          actions: "Acciones",
        },
        buttons: {
          add: "Añadir",
        },
        confirmationModal: {
          deleteTitle: "Borrar",
          deleteMessage:
            "¿Estás seguro? ¡Esta acción no se puede revertir! Los servicios en esta cola seguirán existiendo, pero ya no tendrán ninguna cola asignada.",
        },
      },
      queueSelect: {
        inputLabel: "Departamentos",
      },
      users: {
        title: "Usuarios",
        table: {
          name: "Nombre",
          email: "Correo Electrónico",
          profile: "Perfil",
          actions: "Acción",
        },
        buttons: {
          add: "Añadir usuario",
        },
        toasts: {
          deleted: "Usuario eliminado exitosamente.",
        },
        confirmationModal: {
          deleteTitle: "Borrar",
          deleteMessage:
            "Todos los datos del usuario se perderán. Las llamadas abiertas de este usuario se moverán a la cola.",
        },
      },
      helps: {
        title: "Centro de Ayuda",
      },
      schedules: {
        title: "Agenda",
        confirmationModal: {
          deleteTitle: "¿Está seguro de que desea eliminar esta agenda?",
          deleteMessage: "Esta acción no puede ser revertida",
        },
        table: {
          contact: "Contacto",
          body: "Mensaje",
          sendAt: "Fecha de Agenda",
          sentAt: "Fecha de Envio",
          status: "Estado",
          actions: "Acción",
        },
        buttons: {
          add: "Nueva Agenda",
        },
        toasts: {
          deleted: "Agenda eliminada con éxito",
        },
      },
      tags: {
        title: "Etiquetas",
        confirmationModal: {
          deleteTitle: "¿Estás seguro de que deseas eliminar esta etiqueta?",
          deleteMessage: "Esta acción no puede ser revertida",
        },
        table: {
          name: "Nombre",
          color: "Color",
          tickets: "Registrados",
          actions: "Acción",
        },
        buttons: {
          add: "Nueva Etiqueta",
        },
        toasts: {
          deleted: "Etiqueta eliminada con éxito.",
        },
      },
      settings: {
        success: "Configuración guardada exitosamente.",
        title: "Configuración",
        settings: {
          userCreation: {
            name: "Creación de usuario",
            options: {
              enabled: "Activado",
              disabled: "Desactivado",
            },
          },
        },
      },
      messagesList: {
        header: {
          assignedTo: "Asignado a:",
          buttons: {
            return: "Devolver",
            resolve: "Resolver",
            reopen: "Reabrir",
            accept: "Aceptar",
          },
        },
      },
      messagesInput: {
        placeholderOpen: "Escribe un mensaje",
        placeholderClosed:
          "Vuelva a abrir o acepte este ticket para enviar un mensaje.",
        signMessage: "Firmar",
      },
      contactDrawer: {
        header: "Detalles del contacto",
        buttons: {
          edit: "Editar contacto",
        },
        extraInfo: "Otra información",
      },
      ticketOptionsMenu: {
        schedule: "Agendar",
        delete: "Borrar",
        transfer: "Transferir",
        registerAppointment: "Observaciones de Contacto",
        appointmentsModal: {
          title: "Observaciones do Contato",
          textarea: "Observación",
          placeholder: "Ingresa aquí los datos que deseas registrar",
        },
        confirmationModal: {
          title: "Borrar ticket #",
          message:
            "¡Atención! Todos los mensajes Todos los mensajes relacionados con el ticket se perderán.",
        },
        buttons: {
          delete: "Borrar",
          cancel: "Cancelar",
        },
      },
      confirmationModal: {
        buttons: {
          confirm: "Ok",
          cancel: "Cancelar",
        },
      },
      messageOptionsMenu: {
        delete: "Borrar",
        reply: "Responder",
        confirmationModal: {
          title: "¿Borrar mensaje?",
          message: "Esta acción no puede ser revertida.",
        },
      },
      backendErrors: {
        ERR_NO_OTHER_WHATSAPP: "Debe haber al menos una conexión de WhatsApp predeterminada.",
        ERR_NO_DEF_WAPP_FOUND:
          "No se encontró WhatsApp predeterminado. Verifique la página de conexiones.",
        ERR_WAPP_NOT_INITIALIZED:
          "Esta sesión de WhatsApp no ​​está inicializada. Verifique la página de conexiones.",
        ERR_WAPP_CHECK_CONTACT:
          "No se pudo verificar el contacto de WhatsApp. Verifique la página de conexiones.",
        ERR_WAPP_INVALID_CONTACT: "Este no es un número de whatsapp válido.",
        ERR_WAPP_DOWNLOAD_MEDIA:
          "No se pudieron descargar los medios de WhatsApp. Verifique la página de conexiones.",
        ERR_INVALID_CREDENTIALS:
          "Error de autenticación. Vuelva a intentarlo.",
        ERR_SENDING_WAPP_MSG:
          "Error al enviar el mensaje de WhatsApp. Verifique la página de conexiones.",
        ERR_DELETE_WAPP_MSG: "No se pudo borrar el mensaje de WhatsApp.",
        ERR_OTHER_OPEN_TICKET: "Ya hay un ticket abierto para este contacto.",
        ERR_SESSION_EXPIRED: "Sesión caducada. Inicie sesión.",
        ERR_USER_CREATION_DISABLED:
          "La creación de usuarios fue deshabilitada por el administrador.",
        ERR_NO_PERMISSION: "No tienes permiso para acceder a este recurso.",
        ERR_DUPLICATED_CONTACT: "Ya existe un contacto con este número.",
        ERR_NO_SETTING_FOUND: "No se encontró ninguna configuración con este ID.",
        ERR_NO_CONTACT_FOUND: "No se encontró ningún contacto con este ID.",
        ERR_NO_TICKET_FOUND: "No se encontró ningún ticket con este ID.",
        ERR_NO_USER_FOUND: "No se encontró ningún usuario con este ID.",
        ERR_NO_WAPP_FOUND: "No se encontró WhatsApp con este ID.",
        ERR_CREATING_MESSAGE: "Error al crear el mensaje en la base de datos.",
        ERR_CREATING_TICKET: "Error al crear el ticket en la base de datos.",
        ERR_FETCH_WAPP_MSG:
          "Error al obtener el mensaje en WhtasApp, tal vez sea demasiado antiguo.",
        ERR_QUEUE_COLOR_ALREADY_EXISTS:
          "Este color ya está en uso, elija otro.",
        ERR_WAPP_GREETING_REQUIRED:
          "El mensaje de saludo es obligatorio cuando hay más de una cola.",
      },
    },
  },
};

export { messages };
