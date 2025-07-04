# Traducción al Español para BigCapital

Este documento describe la implementación completa de la traducción al español para el proyecto BigCapital.

## ✅ Implementación Completada

### Frontend (webapp)

1. **Habilitación del idioma español**:
   - ✅ Actualizado `packages/webapp/src/constants/languagesOptions.tsx`
   - ✅ Actualizado `packages/webapp/src/components/AppIntlLoader.tsx`
   - ✅ Añadidas claves `spanish` en todos los archivos de idioma

2. **Traducciones existentes**:
   - ✅ `packages/webapp/src/lang/es/index.json` (2,276 líneas - completo)
   - ✅ `packages/webapp/src/lang/es/locale.tsx` (validaciones yup)
   - ✅ `packages/webapp/src/lang/es/authentication.tsx`

3. **Configuración de moment.js**:
   - ✅ Ya importado `moment/locale/es-us` en `App.tsx`

### Backend (server)

1. **Estructura de traducciones**:
   - ✅ Creada carpeta `packages/server/src/i18n/es/`
   - ✅ Traducidos 19 archivos principales:

2. **Archivos de traducción creados**:
   - ✅ `account.json` - Cuentas contables
   - ✅ `invoice.json` - Facturas
   - ✅ `expense.json` - Gastos
   - ✅ `transaction_type.json` - Tipos de transacción
   - ✅ `ability.json` - Permisos y habilidades
   - ✅ `item.json` - Artículos/inventario
   - ✅ `receipt.json` - Recibos
   - ✅ `balance_sheet.json` - Balance general
   - ✅ `profit_loss_sheet.json` - Estado de resultados
   - ✅ `manual_journal.json` - Diarios manuales
   - ✅ `item_category.json` - Categorías de artículos
   - ✅ `cash_flow_statement.json` - Estado de flujo de caja
   - ✅ `role.json` - Roles de usuario
   - ✅ `vendor_credit.json` - Créditos de proveedor
   - ✅ `inventory_adjustment.json` - Ajustes de inventario
   - ✅ `warehouses.json` - Almacenes
   - ✅ `branches.json` - Sucursales
   - ✅ `transactions_locking.json` - Bloqueo de transacciones
   - ✅ `financial_sheet.json` - Hojas financieras

## 🚀 Cómo usar

### Para usuarios
1. Inicia sesión en BigCapital
2. Ve a **Preferencias** → **General**
3. Selecciona **Español** en el campo "Idioma"
4. Guarda los cambios
5. La aplicación se recargará automáticamente en español

### Para desarrolladores
1. Las traducciones se cargan automáticamente según el idioma seleccionado
2. El sistema usa `react-intl-universal` para el frontend
3. El backend usa NestJS i18n module
4. Los archivos de validación yup están configurados

## 📁 Estructura de archivos

```
packages/
├── webapp/src/lang/es/
│   ├── index.json           # Traducciones principales (2,276 líneas)
│   ├── locale.tsx           # Validaciones yup
│   └── authentication.tsx   # Autenticación
└── server/src/i18n/es/
    ├── account.json         # Cuentas
    ├── invoice.json         # Facturas
    ├── expense.json         # Gastos
    └── ...                  # 19 archivos total
```

## 🎯 Características

- **Traducción completa**: Interfaz de usuario, mensajes, validaciones y reportes
- **Formateo de fechas**: Configurado para español
- **Validaciones**: Mensajes de error en español
- **Reportes financieros**: Balance, estado de resultados, flujo de caja
- **Módulos completos**: Facturas, gastos, inventario, contabilidad

## 🔧 Archivos modificados

1. `packages/webapp/src/constants/languagesOptions.tsx`
2. `packages/webapp/src/components/AppIntlLoader.tsx`
3. `packages/webapp/src/lang/en/index.json`
4. `packages/webapp/src/lang/es/index.json`
5. `packages/webapp/src/lang/ar/index.json`
6. `packages/webapp/src/lang/sv/index.json`
7. Nuevos archivos en `packages/server/src/i18n/es/`

## ✨ Resultado

La aplicación BigCapital ahora está completamente traducida al español, incluyendo:
- Interfaz de usuario completa
- Mensajes del sistema
- Validaciones de formularios
- Reportes financieros
- Documentos (facturas, recibos, etc.)
- Mensajes de error
- Ayuda contextual

Los usuarios hispanohablantes pueden usar BigCapital en su idioma nativo con una experiencia completamente localizada. 