import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Configuración del transportador de correo
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number.parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
})

// Plantilla HTML para promoción especial
const promoEmailTemplate = (data: { name: string; phone: string }) => `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nueva Solicitud - Promoción 30 Días Gratis</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f8fafc;
            line-height: 1.6;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
            color: white;
            padding: 30px 20px;
            text-align: center;
        }
        .logo {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .promo-badge {
            background: rgba(255, 255, 255, 0.2);
            border: 2px solid rgba(255, 215, 0, 0.8);
            border-radius: 8px;
            padding: 15px;
            margin: 20px 0;
            backdrop-filter: blur(10px);
        }
        .promo-text {
            font-size: 36px;
            font-weight: 900;
            color: #ffd700;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            margin: 0;
        }
        .content {
            padding: 30px 20px;
        }
        .info-card {
            background: #f1f5f9;
            border-left: 4px solid #1e40af;
            padding: 20px;
            margin: 20px 0;
            border-radius: 0 8px 8px 0;
        }
        .info-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 0;
            border-bottom: 1px solid #e2e8f0;
        }
        .info-row:last-child {
            border-bottom: none;
        }
        .label {
            font-weight: 600;
            color: #475569;
        }
        .value {
            color: #1e293b;
            font-weight: 500;
        }
        .footer {
            background: #1e293b;
            color: white;
            padding: 20px;
            text-align: center;
            font-size: 14px;
        }
        .timestamp {
            color: #64748b;
            font-size: 12px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">GLOBAL RAÍCES S.A.S</div>
            <p style="margin: 0; opacity: 0.9;">Conectividad sin Límites</p>
            
            <div class="promo-badge">
                <div class="promo-text">30 DÍAS GRATIS</div>
                <p style="margin: 5px 0 0 0; font-size: 14px;">Nueva Solicitud de Promoción</p>
            </div>
        </div>
        
        <div class="content">
            <h2 style="color: #1e40af; margin-top: 0;">Nueva Solicitud Recibida</h2>
            <p>Se ha recibido una nueva solicitud para la promoción de <strong>30 días gratis</strong>.</p>
            
            <div class="info-card">
                <h3 style="margin-top: 0; color: #1e40af;">Información del Cliente</h3>
                <div class="info-row">
                    <span class="label">Nombre:</span>
                    <span class="value">${data.name}</span>
                </div>
                <div class="info-row">
                    <span class="label">Teléfono:</span>
                    <span class="value">${data.phone}</span>
                </div>
                <div class="info-row">
                    <span class="label">Promoción:</span>
                    <span class="value">30 días gratis + instalación gratuita</span>
                </div>
            </div>
            
            <div style="background: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; padding: 15px; margin: 20px 0;">
                <p style="margin: 0; color: #92400e;"><strong>Acción requerida:</strong> Contactar al cliente para coordinar la instalación y activación del servicio.</p>
            </div>
            
            <div class="timestamp">
                Solicitud recibida el: ${new Date().toLocaleString("es-CO", {
    timeZone: "America/Bogota",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
})}
            </div>
        </div>
        
        <div class="footer">
            <p style="margin: 0;">Global Raíces S.A.S - Conectividad sin Límites</p>
            <p style="margin: 5px 0 0 0; opacity: 0.8;">Suroccidente Colombiano</p>
        </div>
    </div>
</body>
</html>
`

// Plantilla HTML para prueba gratuita de 30 días
const freeTrialEmailTemplate = (data: {
    name: string
    email: string
    phone: string
    location: string
    area: string
}) => `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nueva Solicitud - Prueba RAICES 30 Días</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f8fafc;
            line-height: 1.6;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
            color: white;
            padding: 30px 20px;
            text-align: center;
        }
        .logo {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .trial-badge {
            background: rgba(255, 255, 255, 0.15);
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-radius: 12px;
            padding: 20px;
            margin: 20px 0;
            backdrop-filter: blur(10px);
        }
        .trial-text {
            font-size: 28px;
            font-weight: 700;
            margin: 0;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
        }
        .content {
            padding: 30px 20px;
        }
        .info-card {
            background: #f1f5f9;
            border-left: 4px solid #1e40af;
            padding: 20px;
            margin: 20px 0;
            border-radius: 0 8px 8px 0;
        }
        .info-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 0;
            border-bottom: 1px solid #e2e8f0;
        }
        .info-row:last-child {
            border-bottom: none;
        }
        .label {
            font-weight: 600;
            color: #475569;
            flex: 1;
        }
        .value {
            color: #1e293b;
            font-weight: 500;
            flex: 2;
            text-align: right;
        }
        .location-badge {
            background: #dbeafe;
            color: #1e40af;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
        }
        .footer {
            background: #1e293b;
            color: white;
            padding: 20px;
            text-align: center;
            font-size: 14px;
        }
        .timestamp {
            color: #64748b;
            font-size: 12px;
            margin-top: 20px;
        }
        .priority-notice {
            background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
            color: white;
            padding: 15px;
            border-radius: 8px;
            margin: 20px 0;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">GLOBAL RAÍCES S.A.S</div>
            <p style="margin: 0; opacity: 0.9;">Conectividad sin Límites</p>
            
            <div class="trial-badge">
                <div class="trial-text">Prueba RAICES 30 días gratis</div>
                <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">Nueva Solicitud de Instalación</p>
            </div>
        </div>
        
        <div class="content">
            <h2 style="color: #1e40af; margin-top: 0;">Nueva Solicitud de Prueba Gratuita</h2>
            <p>Se ha recibido una nueva solicitud para la <strong>prueba gratuita de 30 días</strong> con instalación incluida.</p>
            
            <div class="info-card">
                <h3 style="margin-top: 0; color: #1e40af;">Información del Cliente</h3>
                <div class="info-row">
                    <span class="label">Nombre completo:</span>
                    <span class="value">${data.name}</span>
                </div>
                <div class="info-row">
                    <span class="label">Correo electrónico:</span>
                    <span class="value">${data.email}</span>
                </div>
                <div class="info-row">
                    <span class="label">Teléfono:</span>
                    <span class="value">${data.phone}</span>
                </div>
                <div class="info-row">
                    <span class="label">Área:</span>
                    <span class="value">
                        <span class="location-badge">${data.area}</span>
                    </span>
                </div>
                <div class="info-row">
                    <span class="label">Ubicación específica:</span>
                    <span class="value">${data.location}</span>
                </div>
            </div>
            
            <div class="priority-notice">
                <p style="margin: 0; font-weight: 600;">⚡ ACCIÓN PRIORITARIA REQUERIDA</p>
                <p style="margin: 5px 0 0 0; font-size: 14px;">Contactar al cliente en las próximas 2 horas para coordinar la instalación</p>
            </div>
            
            <div style="background: #f0f9ff; border: 1px solid #0ea5e9; border-radius: 8px; padding: 15px; margin: 20px 0;">
                <h4 style="margin: 0 0 10px 0; color: #0369a1;">Próximos pasos:</h4>
                <ul style="margin: 0; padding-left: 20px; color: #0369a1;">
                    <li>Verificar cobertura en la zona específica</li>
                    <li>Coordinar fecha y hora de instalación</li>
                    <li>Confirmar disponibilidad técnica</li>
                    <li>Enviar información del técnico asignado</li>
                </ul>
            </div>
            
            <div class="timestamp">
                Solicitud recibida el: ${new Date().toLocaleString("es-CO", {
    timeZone: "America/Bogota",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
})}
            </div>
        </div>
        
        <div class="footer">
            <p style="margin: 0;">Global Raíces S.A.S - Conectividad sin Límites</p>
            <p style="margin: 5px 0 0 0; opacity: 0.8;">Suroccidente Colombiano • +13,000 hogares conectados</p>
        </div>
    </div>
</body>
</html>
`

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { type, data } = body

        if (!type || !data) {
            return NextResponse.json({ error: "Tipo y datos son requeridos" }, { status: 400 })
        }

        let subject = ""
        let htmlContent = ""
        const recipientEmail = process.env.NOTIFICATION_EMAIL || "info@globalraices.com"

        if (type === "promo") {
            subject = `🎉 Nueva Solicitud - Promoción 30 Días Gratis - ${data.name}`
            htmlContent = promoEmailTemplate(data)
        } else if (type === "free-trial") {
            subject = `⚡ URGENTE - Nueva Solicitud Prueba Gratuita - ${data.name} (${data.location})`
            htmlContent = freeTrialEmailTemplate(data)
        } else {
            return NextResponse.json({ error: "Tipo de formulario no válido" }, { status: 400 })
        }

        // Enviar correo
        await transporter.sendMail({
            from: `"Global Raíces S.A.S" <${process.env.SMTP_USER}>`,
            to: recipientEmail,
            subject: subject,
            html: htmlContent,
        })

        return NextResponse.json({ message: "Correo enviado exitosamente" }, { status: 200 })
    } catch (error) {
        console.error("Error enviando correo:", error)
        return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
    }
}
