"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import {
  User,
  Wifi,
  CreditCard,
  TrendingUp,
  Download,
  Upload,
  Calendar,
  Settings,
  LogOut,
  ArrowUp,
  FileText,
  Zap,
  Shield,
  Clock,
  AlertCircle,
  CheckCircle,
  Smartphone,
  Laptop,
  Tv,
  Router,
  Bell,
  Gift,
  Users,
  Phone,
  MessageCircle,
  MapPin,
  Activity,
  WifiIcon as Wifi4,
  Signal,
  Eye,
  EyeOff,
} from "lucide-react"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [currentSpeed, setCurrentSpeed] = useState({ download: 0, upload: 0 })
  const [isSpeedTesting, setIsSpeedTesting] = useState(false)
  const [showAccountNumber, setShowAccountNumber] = useState(false)

  // Datos simulados del usuario (expandidos)
  const userData = {
    name: "Juan Carlos Pérez",
    cedula: "12345678",
    email: "juan.perez@email.com",
    phone: "300 123 4567",
    accountNumber: "RAI-2024-001234",
    installationDate: "2023-06-15",
    address: "Calle 123 #45-67, Bogotá, Colombia",
    currentPlan: {
      name: "Plan Hogar Plus",
      speed: "100 Mbps",
      price: 89900,
      features: ["Internet de alta velocidad", "WiFi gratis", "Soporte 24/7", "Sin cláusula de permanencia"],
    },
    serviceStatus: {
      status: "online",
      uptime: "99.8%",
      lastOutage: "2024-02-15",
      nextMaintenance: "2024-04-20",
    },
    bills: [
      { id: 1, date: "2024-01-15", amount: 89900, status: "Pagada", period: "Enero 2024" },
      { id: 2, date: "2024-02-15", amount: 89900, status: "Pagada", period: "Febrero 2024" },
      { id: 3, date: "2024-03-15", amount: 89900, status: "Pendiente", period: "Marzo 2024" },
    ],
    usage: {
      currentMonth: 450,
      limit: 1000,
      percentage: 45,
      dailyAverage: 15,
      peakHours: "20:00 - 23:00",
    },
    connectedDevices: [
      { name: "iPhone de Juan", type: "smartphone", status: "online", ip: "192.168.1.101" },
      { name: "Laptop Dell", type: "laptop", status: "online", ip: "192.168.1.102" },
      { name: "Smart TV Samsung", type: "tv", status: "offline", ip: "192.168.1.103" },
      { name: "Router Principal", type: "router", status: "online", ip: "192.168.1.1" },
    ],
    equipment: {
      router: {
        model: "RAICES WiFi 6 Pro",
        serialNumber: "RWF6P-2024-5678",
        firmwareVersion: "v2.1.4",
        wifiPassword: "MiWiFi2024!",
      },
    },
    notifications: [
      { id: 1, type: "info", message: "Tu factura de marzo está disponible", date: "2024-03-16", read: false },
      { id: 2, type: "success", message: "Pago procesado exitosamente", date: "2024-03-10", read: true },
      {
        id: 3,
        type: "warning",
        message: "Mantenimiento programado para el 20 de abril",
        date: "2024-03-05",
        read: false,
      },
    ],
    referrals: {
      totalReferred: 3,
      activeReferrals: 2,
      earnedCredits: 50000,
      availableCredits: 25000,
    },
    supportTickets: [
      { id: "TK-001", subject: "Velocidad lenta en horas pico", status: "Resuelto", date: "2024-02-20" },
      { id: "TK-002", subject: "Configuración de router", status: "En progreso", date: "2024-03-10" },
    ],
  }

  const availableUpgrades = [
    {
      name: "Plan Gamer Pro",
      speed: "200 Mbps",
      price: 129900,
      features: ["Internet ultra rápido", "Gaming optimizado", "WiFi 6", "Soporte prioritario"],
      popular: true,
    },
    {
      name: "Plan Empresarial",
      speed: "500 Mbps",
      price: 199900,
      features: ["Máxima velocidad", "IP estática", "Soporte empresarial", "Backup de conexión"],
      popular: false,
    },
  ]

  const runSpeedTest = () => {
    setIsSpeedTesting(true)
    setCurrentSpeed({ download: 0, upload: 0 })

    const interval = setInterval(() => {
      setCurrentSpeed((prev) => {
        const newDownload = Math.min(prev.download + Math.random() * 20, 95 + Math.random() * 10)
        const newUpload = Math.min(prev.upload + Math.random() * 15, 45 + Math.random() * 10)

        if (newDownload >= 95 && newUpload >= 45) {
          clearInterval(interval)
          setIsSpeedTesting(false)
        }

        return { download: newDownload, upload: newUpload }
      })
    }, 100)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case "smartphone":
        return <Smartphone className="h-5 w-5" />
      case "laptop":
        return <Laptop className="h-5 w-5" />
      case "tv":
        return <Tv className="h-5 w-5" />
      case "router":
        return <Router className="h-5 w-5" />
      default:
        return <Wifi className="h-5 w-5" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Header del Dashboard */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">¡Bienvenido, {userData.name}!</h1>
              <div className="flex items-center space-x-4 mt-1">
                <p className="text-gray-600">Cédula: {userData.cedula}</p>
                <div className="flex items-center">
                  <p className="text-gray-600 mr-2">
                    Cuenta: {showAccountNumber ? userData.accountNumber : "RAI-****-****"}
                  </p>
                  <button
                    onClick={() => setShowAccountNumber(!showAccountNumber)}
                    className="text-raicesBlue hover:text-blue-600"
                  >
                    {showAccountNumber ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="relative">
                <Button variant="outline" size="sm">
                  <Bell className="h-4 w-4 mr-2" />
                  Notificaciones
                  {userData.notifications.filter((n) => !n.read).length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {userData.notifications.filter((n) => !n.read).length}
                    </span>
                  )}
                </Button>
              </div>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Configuración
              </Button>
              <Button variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Cerrar Sesión
              </Button>
            </div>
          </div>
        </div>

        {/* Navegación por pestañas */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-6 px-6 overflow-x-auto">
              {[
                { id: "overview", label: "Resumen", icon: User },
                { id: "plan", label: "Mi Plan", icon: Wifi },
                { id: "bills", label: "Facturas", icon: CreditCard },
                { id: "speed", label: "Velocidad", icon: Zap },
                { id: "devices", label: "Dispositivos", icon: Smartphone },
                { id: "support", label: "Soporte", icon: MessageCircle },
                { id: "referrals", label: "Referidos", icon: Users },
                { id: "upgrade", label: "Mejorar Plan", icon: TrendingUp },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                    activeTab === tab.id
                      ? "border-raicesBlue text-raicesBlue"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <tab.icon className="h-4 w-4 mr-2" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Contenido de las pestañas */}
        <div className="space-y-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Estado del Servicio */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Estado del Servicio</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-8 w-8 text-green-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Servicio</p>
                      <p className="text-sm text-green-600 font-semibold">En línea</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <Activity className="h-8 w-8 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Uptime</p>
                      <p className="text-sm text-blue-600 font-semibold">{userData.serviceStatus.uptime}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <Signal className="h-8 w-8 text-purple-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Calidad</p>
                      <p className="text-sm text-purple-600 font-semibold">Excelente</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <MapPin className="h-8 w-8 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Ubicación</p>
                      <p className="text-sm text-orange-600 font-semibold">Bogotá</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cards principales */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Plan Actual */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Plan Actual</h3>
                    <Wifi className="h-6 w-6 text-raicesBlue" />
                  </div>
                  <p className="text-xl font-bold text-raicesBlue">{userData.currentPlan.name}</p>
                  <p className="text-gray-600">{userData.currentPlan.speed}</p>
                  <p className="text-lg font-semibold text-gray-800 mt-2">
                    {formatCurrency(userData.currentPlan.price)}/mes
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Activo desde: {userData.installationDate}</p>
                </div>

                {/* Próxima Factura */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Próxima Factura</h3>
                    <Calendar className="h-6 w-6 text-green-600" />
                  </div>
                  <p className="text-2xl font-bold text-green-600">{formatCurrency(userData.currentPlan.price)}</p>
                  <p className="text-gray-600">Vence: 15 Abril 2024</p>
                  <p className="text-sm text-gray-500 mt-2">Estado: Al día</p>
                </div>

                {/* Uso de Datos */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Uso del Mes</h3>
                    <Download className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="mb-2">
                    <div className="flex justify-between text-sm">
                      <span>{userData.usage.currentMonth} GB</span>
                      <span>Ilimitado</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-600 h-2 rounded-full"
                        style={{ width: `${userData.usage.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">Promedio: {userData.usage.dailyAverage} GB/día</p>
                </div>

                {/* Dispositivos Conectados */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Dispositivos</h3>
                    <Wifi4 className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="text-2xl font-bold text-blue-600">
                    {userData.connectedDevices.filter((d) => d.status === "online").length}
                  </p>
                  <p className="text-gray-600">de {userData.connectedDevices.length} conectados</p>
                  <p className="text-sm text-gray-500 mt-2">Pico: {userData.usage.peakHours}</p>
                </div>
              </div>

              {/* Notificaciones Recientes */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Notificaciones Recientes</h3>
                <div className="space-y-3">
                  {userData.notifications.slice(0, 3).map((notification) => (
                    <div
                      key={notification.id}
                      className={`flex items-start space-x-3 p-3 rounded-lg ${
                        !notification.read ? "bg-blue-50 border-l-4 border-raicesBlue" : "bg-gray-50"
                      }`}
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        {notification.type === "info" && <Bell className="h-4 w-4 text-blue-500" />}
                        {notification.type === "success" && <CheckCircle className="h-4 w-4 text-green-500" />}
                        {notification.type === "warning" && <AlertCircle className="h-4 w-4 text-yellow-500" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-800">{notification.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{notification.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "plan" && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Detalles de tu Plan</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="bg-gradient-to-r from-raicesBlue to-raicesRed rounded-lg p-6 text-white mb-6">
                    <h4 className="text-2xl font-bold mb-2">{userData.currentPlan.name}</h4>
                    <p className="text-xl mb-1">{userData.currentPlan.speed}</p>
                    <p className="text-2xl font-bold">{formatCurrency(userData.currentPlan.price)}/mes</p>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-semibold text-gray-800">Características incluidas:</h5>
                    {userData.currentPlan.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Shield className="h-4 w-4 text-green-600 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Información del Equipo */}
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h6 className="font-semibold text-gray-800 mb-3">Equipo Instalado</h6>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Router:</span>
                        <span className="text-sm font-medium">{userData.equipment.router.model}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Serie:</span>
                        <span className="text-sm font-medium">{userData.equipment.router.serialNumber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Firmware:</span>
                        <span className="text-sm font-medium">{userData.equipment.router.firmwareVersion}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">WiFi:</span>
                        <span className="text-sm font-medium">{userData.equipment.router.wifiPassword}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-800 mb-4">Información de la Cuenta</h5>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 text-gray-500 mr-3" />
                      <div>
                        <p className="text-sm text-gray-600">Titular</p>
                        <p className="font-medium">{userData.name}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <CreditCard className="h-4 w-4 text-gray-500 mr-3" />
                      <div>
                        <p className="text-sm text-gray-600">Cédula</p>
                        <p className="font-medium">{userData.cedula}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-gray-500 mr-3" />
                      <div>
                        <p className="text-sm text-gray-600">Teléfono</p>
                        <p className="font-medium">{userData.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-gray-500 mr-3" />
                      <div>
                        <p className="text-sm text-gray-600">Dirección</p>
                        <p className="font-medium">{userData.address}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-gray-500 mr-3" />
                      <div>
                        <p className="text-sm text-gray-600">Cliente desde</p>
                        <p className="font-medium">{userData.installationDate}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h6 className="font-semibold text-raicesBlue mb-2">¿Necesitas más velocidad?</h6>
                    <p className="text-sm text-gray-600 mb-3">
                      Mejora tu plan y disfruta de mayor velocidad y beneficios adicionales.
                    </p>
                    <Button
                      onClick={() => setActiveTab("upgrade")}
                      className="bg-raicesBlue hover:bg-blue-600 text-white"
                    >
                      Ver Planes Disponibles
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "bills" && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Historial de Facturas</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Período
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Fecha
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Monto
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Estado
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {userData.bills.map((bill) => (
                      <tr key={bill.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{bill.period}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bill.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {formatCurrency(bill.amount)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              bill.status === "Pagada" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {bill.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <FileText className="h-4 w-4 mr-1" />
                              Descargar
                            </Button>
                            {bill.status === "Pendiente" && (
                              <Button size="sm" className="bg-raicesBlue hover:bg-blue-600 text-white">
                                Pagar
                              </Button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "speed" && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Test de Velocidad</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-raicesBlue to-raicesRed rounded-full w-48 h-48 mx-auto flex items-center justify-center mb-6">
                    <div className="text-white">
                      <div className="text-3xl font-bold">{Math.round(currentSpeed.download)}</div>
                      <div className="text-sm">Mbps</div>
                      <div className="text-xs mt-1">Descarga</div>
                    </div>
                  </div>

                  <Button
                    onClick={runSpeedTest}
                    disabled={isSpeedTesting}
                    className="bg-raicesBlue hover:bg-blue-600 text-white px-8 py-2"
                  >
                    {isSpeedTesting ? (
                      <>
                        <Clock className="h-4 w-4 mr-2 animate-spin" />
                        Probando...
                      </>
                    ) : (
                      <>
                        <Zap className="h-4 w-4 mr-2" />
                        Iniciar Test
                      </>
                    )}
                  </Button>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center">
                      <Download className="h-6 w-6 text-raicesBlue mr-3" />
                      <div>
                        <p className="font-semibold text-gray-800">Velocidad de Descarga</p>
                        <p className="text-sm text-gray-600">Tu plan: {userData.currentPlan.speed}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-raicesBlue">{Math.round(currentSpeed.download)}</p>
                      <p className="text-sm text-gray-600">Mbps</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center">
                      <Upload className="h-6 w-6 text-green-600 mr-3" />
                      <div>
                        <p className="font-semibold text-gray-800">Velocidad de Subida</p>
                        <p className="text-sm text-gray-600">Simétrica incluida</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">{Math.round(currentSpeed.upload)}</p>
                      <p className="text-sm text-gray-600">Mbps</p>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-2">Consejos para mejorar tu velocidad:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Conecta tu dispositivo directamente al router con cable Ethernet</li>
                      <li>• Cierra aplicaciones que no estés usando</li>
                      <li>• Reinicia tu router si experimentas lentitud</li>
                      <li>• Contacta soporte si la velocidad es menor al 80% de tu plan</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "devices" && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Dispositivos Conectados</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {userData.connectedDevices.map((device, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`p-2 rounded-lg ${device.status === "online" ? "bg-green-100" : "bg-gray-100"}`}
                        >
                          {getDeviceIcon(device.type)}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">{device.name}</h4>
                          <p className="text-sm text-gray-600">{device.ip}</p>
                        </div>
                      </div>
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          device.status === "online" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {device.status === "online" ? "En línea" : "Desconectado"}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Tipo: {device.type}</span>
                      <span>Conectado: {device.status === "online" ? "Ahora" : "Hace 2h"}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h5 className="font-semibold text-raicesBlue mb-2">Gestión de Red</h5>
                <p className="text-sm text-gray-600 mb-3">
                  Controla el acceso y prioridad de tus dispositivos conectados.
                </p>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4 mr-2" />
                    Configurar Red
                  </Button>
                  <Button variant="outline" size="sm">
                    <Shield className="h-4 w-4 mr-2" />
                    Control Parental
                  </Button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "support" && (
            <div className="space-y-6">
              {/* Contacto Rápido */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Contacto y Soporte</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 border rounded-lg">
                    <Phone className="h-8 w-8 text-raicesBlue mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-800 mb-2">Línea de Soporte</h4>
                    <p className="text-raicesBlue font-bold">018000-RAICES</p>
                    <p className="text-sm text-gray-600">24/7 disponible</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <MessageCircle className="h-8 w-8 text-green-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-800 mb-2">WhatsApp</h4>
                    <p className="text-green-600 font-bold">300 123 4567</p>
                    <p className="text-sm text-gray-600">Respuesta inmediata</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <User className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-800 mb-2">Chat en Vivo</h4>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                      Iniciar Chat
                    </Button>
                    <p className="text-sm text-gray-600 mt-1">Lun-Vie 8AM-6PM</p>
                  </div>
                </div>
              </div>

              {/* Tickets de Soporte */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-800">Mis Tickets de Soporte</h3>
                  <Button className="bg-raicesBlue hover:bg-blue-600 text-white">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Nuevo Ticket
                  </Button>
                </div>
                <div className="space-y-4">
                  {userData.supportTickets.map((ticket) => (
                    <div key={ticket.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-gray-800">{ticket.subject}</h4>
                          <p className="text-sm text-gray-600">Ticket #{ticket.id}</p>
                          <p className="text-sm text-gray-500">Creado: {ticket.date}</p>
                        </div>
                        <span
                          className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            ticket.status === "Resuelto"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {ticket.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "referrals" && (
            <div className="space-y-6">
              {/* Programa de Referidos */}
              <div className="bg-gradient-to-r from-raicesBlue to-raicesRed rounded-lg p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Programa de Referidos</h3>
                <p className="mb-4">Refiere amigos y gana créditos para tu factura mensual</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold">{userData.referrals.totalReferred}</p>
                    <p className="text-sm">Amigos Referidos</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold">{formatCurrency(userData.referrals.earnedCredits)}</p>
                    <p className="text-sm">Créditos Ganados</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold">{formatCurrency(userData.referrals.availableCredits)}</p>
                    <p className="text-sm">Disponibles</p>
                  </div>
                </div>
              </div>

              {/* Cómo Funciona */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">¿Cómo Funciona?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-raicesBlue" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">1. Refiere</h4>
                    <p className="text-sm text-gray-600">Comparte tu código con amigos y familiares</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">2. Se Conectan</h4>
                    <p className="text-sm text-gray-600">Cuando se registren con tu código</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Gift className="h-8 w-8 text-yellow-600" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">3. Ganas</h4>
                    <p className="text-sm text-gray-600">Recibes $25,000 de crédito</p>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-lg font-semibold text-gray-800 mb-2">Tu Código de Referido</p>
                  <div className="bg-gray-100 rounded-lg p-4 inline-block">
                    <p className="text-2xl font-bold text-raicesBlue">RAICES-{userData.cedula}</p>
                  </div>
                  <div className="mt-4 space-x-2">
                    <Button className="bg-raicesBlue hover:bg-blue-600 text-white">Compartir Código</Button>
                    <Button variant="outline">Copiar Enlace</Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "upgrade" && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Mejora tu Plan</h3>
                <p className="text-gray-600 mb-6">
                  Descubre nuestros planes superiores y disfruta de mayor velocidad y beneficios exclusivos.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {availableUpgrades.map((plan, index) => (
                    <div
                      key={index}
                      className={`relative border-2 rounded-lg p-6 ${
                        plan.popular ? "border-raicesBlue bg-blue-50" : "border-gray-200"
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-raicesBlue text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Más Popular
                          </span>
                        </div>
                      )}

                      <div className="text-center mb-4">
                        <h4 className="text-xl font-bold text-gray-800">{plan.name}</h4>
                        <p className="text-lg text-raicesBlue font-semibold">{plan.speed}</p>
                        <p className="text-2xl font-bold text-gray-800 mt-2">
                          {formatCurrency(plan.price)}
                          <span className="text-sm font-normal text-gray-600">/mes</span>
                        </p>
                      </div>

                      <div className="space-y-2 mb-6">
                        {plan.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <Shield className="h-4 w-4 text-green-600 mr-2" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button
                        className={`w-full ${
                          plan.popular
                            ? "bg-raicesBlue hover:bg-blue-600 text-white"
                            : "bg-raicesRed hover:bg-red-600 text-white"
                        }`}
                      >
                        <ArrowUp className="h-4 w-4 mr-2" />
                        Cambiar a este Plan
                      </Button>

                      <p className="text-xs text-gray-500 text-center mt-2">
                        Cambio inmediato • Sin costo de instalación
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-raicesBlue to-raicesRed rounded-lg p-6 text-white">
                <h4 className="text-xl font-bold mb-2">¿Necesitas ayuda para elegir?</h4>
                <p className="mb-4">
                  Nuestros asesores están listos para ayudarte a encontrar el plan perfecto para tus necesidades.
                </p>
                <Button variant="outline" className="bg-white text-raicesBlue hover:bg-gray-100">
                  Contactar Asesor
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
