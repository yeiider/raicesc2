"use client"

import { useEffect, useState } from "react"
import { Cookie, Settings2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const CONSENT_COOKIE = "raices_cookie_consent"
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365

type CookiePreferences = {
  necessary: true
  personalization: boolean
  analytics: boolean
}

function savePreferences(preferences: CookiePreferences) {
  document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(JSON.stringify(preferences))}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`
}

export function CookieConsent() {
  const [open, setOpen] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [personalization, setPersonalization] = useState(true)
  const [analytics, setAnalytics] = useState(false)

  useEffect(() => {
    const hasConsent = document.cookie
      .split(";")
      .some((cookie) => cookie.trim().startsWith(`${CONSENT_COOKIE}=`))

    if (!hasConsent) setOpen(true)
  }, [])

  const handleSave = (preferences: CookiePreferences) => {
    savePreferences(preferences)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-lg gap-0 overflow-hidden p-0">
        <div className="bg-primary/10 px-6 py-5">
          <div className="flex items-start gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Cookie aria-hidden="true" />
            </div>
            <DialogHeader className="gap-2 text-left">
              <DialogTitle className="text-xl text-foreground">Tratamiento de cookies</DialogTitle>
              <DialogDescription className="leading-relaxed text-foreground/70">
                Usamos cookies para personalizar tu experiencia, recordar tus preferencias y mejorar el funcionamiento de nuestro sitio.
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>

        <div className="flex flex-col gap-4 px-6 py-5">
          {!showPreferences ? (
            <p className="text-sm leading-relaxed text-muted-foreground">
              Puedes aceptar todas las cookies, rechazar las que no sean necesarias o configurar tus preferencias. Las cookies esenciales siempre estarán activas para que el sitio funcione correctamente.
            </p>
          ) : (
            <div className="flex flex-col gap-4" aria-label="Preferencias de cookies">
              <CookieOption label="Cookies necesarias" description="Permiten funciones básicas y seguras del sitio." checked disabled />
              <CookieOption
                label="Cookies de personalización"
                description="Recuerdan tus preferencias para ofrecerte una experiencia más relevante."
                checked={personalization}
                onCheckedChange={(checked) => setPersonalization(checked === true)}
              />
              <CookieOption
                label="Cookies analíticas"
                description="Nos ayudan a entender cómo se utiliza el sitio y mejorarlo."
                checked={analytics}
                onCheckedChange={(checked) => setAnalytics(checked === true)}
              />
            </div>
          )}
          <a href="/politicas-de-privacidad" className="text-xs font-medium text-primary underline underline-offset-4 hover:text-primary/80">
            Conoce más sobre nuestra política de privacidad
          </a>
        </div>

        <DialogFooter className="border-t bg-muted/30 px-6 py-4 sm:flex-row sm:justify-between">
          <Button variant="ghost" onClick={() => setShowPreferences((current) => !current)} className="justify-start px-0 text-muted-foreground hover:bg-transparent hover:text-foreground">
            <Settings2 data-icon="inline-start" />
            {showPreferences ? "Ocultar preferencias" : "Configurar cookies"}
          </Button>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button variant="outline" onClick={() => handleSave({ necessary: true, personalization: false, analytics: false })}>
              Solo necesarias
            </Button>
            <Button onClick={() => handleSave({ necessary: true, personalization, analytics })}>
              Aceptar selección
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function CookieOption({
  label,
  description,
  checked,
  disabled = false,
  onCheckedChange,
}: {
  label: string
  description: string
  checked: boolean
  disabled?: boolean
  onCheckedChange?: (checked: boolean | "indeterminate") => void
}) {
  return (
    <label className="flex items-start gap-3 rounded-lg border p-3">
      <Checkbox checked={checked} disabled={disabled} onCheckedChange={onCheckedChange} className="mt-0.5" />
      <span className="flex flex-col gap-1">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <span className="text-xs leading-relaxed text-muted-foreground">{description}</span>
      </span>
    </label>
  )
}
