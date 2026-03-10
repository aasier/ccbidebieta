# Configuración DNS para clubciclistabidebieta.com

## Pasos a seguir en tu proveedor de dominio

### 1. Accede al panel de control de tu dominio
Entra en el panel donde gestionas `clubciclistabidebieta.com`

### 2. Elimina los registros antiguos de WordPress
Borra los registros A y CNAME que apuntan a tu hosting actual de WordPress

### 3. Añade estos nuevos registros DNS:

#### Registro CNAME para www
```
Tipo: CNAME
Nombre/Host: www
Valor/Destino: TU_USUARIO.github.io.
TTL: 3600 (o automático)
```

#### Registros A para el dominio raíz (@)
```
Tipo: A
Nombre/Host: @ (o dejar vacío)
Valor/IP: 185.199.108.153
TTL: 3600

Tipo: A
Nombre/Host: @ (o dejar vacío)
Valor/IP: 185.199.109.153
TTL: 3600

Tipo: A
Nombre/Host: @ (o dejar vacío)
Valor/IP: 185.199.110.153
TTL: 3600

Tipo: A
Nombre/Host: @ (o dejar vacío)
Valor/IP: 185.199.111.153
TTL: 3600
```

### 4. Tiempo de propagación
Los cambios DNS pueden tardar entre 1 y 48 horas en propagarse completamente.

### 5. Verificar configuración
Después de unas horas, verifica con:
```bash
dig www.clubciclistabidebieta.com
dig clubciclistabidebieta.com
```

## Proveedores comunes

### Si usas Namecheap:
1. Advanced DNS > Add New Record
2. Añade los registros como se indica arriba

### Si usas GoDaddy:
1. DNS Management > Add Record
2. Añade los registros como se indica arriba

### Si usas Cloudflare:
1. DNS > Add record
2. Añade los registros como se indica arriba
3. Desactiva el proxy (nube gris) para el CNAME inicialmente

## Importante
⚠️ Reemplaza `TU_USUARIO` con tu nombre de usuario real de GitHub en el registro CNAME

## Verificación en GitHub
Una vez configurado el DNS:
1. Ve a tu repositorio en GitHub
2. Settings > Pages
3. En "Custom domain" escribe: `www.clubciclistabidebieta.com`
4. Espera a que aparezca el check verde
5. Activa "Enforce HTTPS"
