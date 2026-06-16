import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

interface ApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappNumber?: string;
}

type StepId = "contact" | "situation" | "tried" | "whyNow" | "investment";
type FormData = {
  contact: string;
  name: string;
  email: string;
  phone: string;
  situation: string;
  tried: string;
  whyNow: string;
  investment: string;
};

const steps = [
  {
    id: "contact" as StepId,
    type: "contact" as const,
    number: "01",
    question: "Antes de começar, me conta quem é você.",
    optional: false,
  },
  {
    id: "situation" as StepId,
    type: "radio" as const,
    number: "02",
    question: "Qual é a sua situação hoje?",
    optional: false,
    options: [
      "Aprendi sobre IA/automações, mas ainda não faturei nada",
      "Já fiz alguns projetos pontuais, mas sem consistência",
      "Tenho projetos e quero escalar o faturamento",
    ],
  },
  {
    id: "tried" as StepId,
    type: "textarea" as const,
    number: "03",
    question: "O que você já tentou para monetizar?",
    placeholder: "Ex: tentei vender, criei portfólio, fiz cursos, mandei propostas...",
    optional: true,
  },
  {
    id: "whyNow" as StepId,
    type: "textarea" as const,
    number: "04",
    question: "Por que agora é o momento certo?",
    placeholder: "O que mudou ou o que te fez buscar isso agora?",
    optional: false,
  },
  {
    id: "investment" as StepId,
    type: "radio" as const,
    number: "05",
    question: "Qual faixa de investimento faz sentido pra você?",
    optional: false,
    options: [
      "Até R$2.500",
      "R$2.500 a R$4.000",
      "R$4.000 a R$5.000",
      "Acima de R$5.000",
    ],
  },
];

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 56 : -56,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -56 : 56,
    opacity: 0,
    transition: { duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const DDI_OPTIONS = [
  { code: "+55", flag: "🇧🇷", label: "Brasil" },
  { code: "+1",  flag: "🇺🇸", label: "EUA / Canadá" },
  { code: "+351", flag: "🇵🇹", label: "Portugal" },
  { code: "+54",  flag: "🇦🇷", label: "Argentina" },
  { code: "+52",  flag: "🇲🇽", label: "México" },
  { code: "+57",  flag: "🇨🇴", label: "Colômbia" },
  { code: "+56",  flag: "🇨🇱", label: "Chile" },
  { code: "+44",  flag: "🇬🇧", label: "Reino Unido" },
  { code: "+49",  flag: "🇩🇪", label: "Alemanha" },
  { code: "+33",  flag: "🇫🇷", label: "França" },
  { code: "+34",  flag: "🇪🇸", label: "Espanha" },
  { code: "+39",  flag: "🇮🇹", label: "Itália" },
  { code: "+81",  flag: "🇯🇵", label: "Japão" },
  { code: "+86",  flag: "🇨🇳", label: "China" },
];

const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "11px",
  fontWeight: 600,
  color: "#a1a1aa",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  marginBottom: "6px",
  fontFamily: "'Archivo', sans-serif",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  border: "1.5px solid rgba(0,0,0,0.12)",
  borderRadius: "10px",
  fontSize: "15px",
  color: "#0a0a0a",
  fontFamily: "'Archivo', sans-serif",
  outline: "none",
  background: "#fafafa",
  boxSizing: "border-box",
  transition: "border-color 0.15s ease",
};

const ApplicationForm = ({
  isOpen,
  onClose,
  whatsappNumber = "5528999339279",
}: ApplicationFormProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [ddi, setDdi] = useState("+55");
  const [emailTouched, setEmailTouched] = useState(false);
  const [form, setForm] = useState<FormData>({
    contact: "",
    name: "",
    email: "",
    phone: "",
    situation: "",
    tried: "",
    whyNow: "",
    investment: "",
  });
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const step = steps[currentStep];
  const progress = ((currentStep) / steps.length) * 100;

  // Focus textarea when landing on a textarea step
  useEffect(() => {
    if (step.type === "textarea" && textareaRef.current) {
      setTimeout(() => textareaRef.current?.focus(), 320);
    }
  }, [currentStep, step.type]);

  // Reset on close
  useEffect(() => {
    if (!isOpen) {
      setCurrentStep(0);
      setDirection(1);
      setSubmitted(false);
      setDdi("+55");
      setEmailTouched(false);
      setForm({ contact: "", name: "", email: "", phone: "", situation: "", tried: "", whyNow: "", investment: "" });
    }
  }, [isOpen]);

  const canAdvance = () => {
    if (step.optional) return true;
    if (step.type === "contact") return Boolean(form.name && isValidEmail(form.email) && form.phone);
    return Boolean(form[step.id]);
  };

  const goNext = () => {
    if (!canAdvance()) return;
    if (currentStep < steps.length - 1) {
      setDirection(1);
      setCurrentStep((s) => s + 1);
    } else {
      submit();
    }
  };

  const goPrev = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep((s) => s - 1);
    }
  };

  const handleRadioSelect = (value: string) => {
    setForm((f) => ({ ...f, [step.id]: value }));
  };

  const submit = () => {
    setSubmitted(true);

    const payload = {
      name: form.name,
      email: form.email,
      phone: `${ddi} ${form.phone}`,
      situation: form.situation,
      tried: form.tried,
      whyNow: form.whyNow,
      investment: form.investment,
      submittedAt: new Date().toISOString(),
      source: "lp-mentoria",
    };

    fetch("https://autowebhook.iasociety.com.br/webhook/forms-mentoria-lp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => {});
  };

  const handleWhatsAppContact = () => {
    const msg = "Olá Felipe, tenho uma dúvida sobre a Mentoria Individual.";
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  const isLastStep = currentStep === steps.length - 1;

  if (!isOpen) return null;

  // Tela de confirmação
  if (submitted) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: "rgba(0,0,0,0.78)", backdropFilter: "blur(8px)" }}
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "48px 40px",
            maxWidth: "480px",
            width: "100%",
            textAlign: "center",
            boxShadow: "0 40px 100px rgba(0,0,0,0.45)",
          }}
        >
          {/* Ícone de sucesso */}
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background: "rgba(0,227,165,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
            }}
          >
            <CheckCircle size={32} style={{ color: "#00E3A5" }} />
          </div>

          {/* Título */}
          <h2
            style={{
              fontFamily: "'Archivo', sans-serif",
              fontSize: "22px",
              fontWeight: 800,
              color: "#0a0a0a",
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              margin: "0 0 12px",
            }}
          >
            Aplicação recebida!
          </h2>

          {/* Mensagem principal */}
          <p style={{ fontSize: "15px", color: "#52525b", lineHeight: 1.6, margin: "0 0 32px" }}>
            Nossa equipe vai entrar em contato com você em breve para marcarmos a nossa call.
          </p>

          {/* Divisor */}
          <div
            style={{
              height: "1px",
              background: "rgba(0,0,0,0.08)",
              margin: "0 0 24px",
            }}
          />

          {/* Contato opcional */}
          <p
            style={{
              fontSize: "13px",
              color: "#a1a1aa",
              marginBottom: "14px",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              fontWeight: 600,
              fontFamily: "'Archivo', sans-serif",
            }}
          >
            Alguma dúvida? Fala direto com o Felipe
          </p>

          <button
            onClick={handleWhatsAppContact}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px 24px",
              borderRadius: "8px",
              border: "none",
              background: "#25D366",
              color: "#ffffff",
              fontFamily: "'Archivo', sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              cursor: "pointer",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              transition: "opacity 0.15s ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "0.88"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "1"; }}
          >
            <WhatsAppIcon />
            Falar no WhatsApp
          </button>

          <div style={{ marginTop: "24px" }}>
            <button
              onClick={onClose}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#a1a1aa",
                fontSize: "13px",
                fontFamily: "'Archivo', sans-serif",
              }}
            >
              Fechar
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.78)", backdropFilter: "blur(8px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full flex flex-col"
        style={{
          maxWidth: "620px",
          height: "min(640px, 90vh)",
          background: "#ffffff",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 40px 100px rgba(0,0,0,0.45)",
        }}
      >
        {/* Progress bar */}
        <div style={{ height: "3px", background: "rgba(0,0,0,0.06)", flexShrink: 0 }}>
          <motion.div
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{ height: "100%", background: "#4F46E5" }}
          />
        </div>

        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 24px 0",
            flexShrink: 0,
          }}
        >
          <p
            style={{
              fontSize: "11px",
              fontWeight: 600,
              color: "#a1a1aa",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontFamily: "'Archivo', sans-serif",
              margin: 0,
            }}
          >
            {step.number} de {String(steps.length).padStart(2, "0")}
          </p>
          <button
            onClick={onClose}
            aria-label="Fechar"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#a1a1aa",
              padding: "4px",
              display: "flex",
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Question area */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "16px 40px 0",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{ width: "100%" }}
            >
              {/* Question label */}
              <p
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontSize: "clamp(20px, 3.5vw, 26px)",
                  fontWeight: 800,
                  color: "#0a0a0a",
                  letterSpacing: "-0.02em",
                  textTransform: "uppercase",
                  lineHeight: 1.2,
                  marginBottom: "8px",
                }}
              >
                {step.question}
                {step.optional && (
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 400,
                      color: "#a1a1aa",
                      textTransform: "none",
                      letterSpacing: "normal",
                      marginLeft: "8px",
                    }}
                  >
                    (opcional)
                  </span>
                )}
              </p>

              {/* Contact fields */}
              {step.type === "contact" && (
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "20px" }}>

                  {/* Nome */}
                  <div>
                    <label style={labelStyle}>Nome</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      placeholder="Seu nome completo"
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = "#4F46E5"; }}
                      onBlur={(e) => { e.target.style.borderColor = "rgba(0,0,0,0.12)"; }}
                    />
                  </div>

                  {/* E-mail */}
                  <div>
                    <label style={labelStyle}>E-mail</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      onBlur={() => setEmailTouched(true)}
                      placeholder="seu@email.com"
                      style={{
                        ...inputStyle,
                        borderColor: emailTouched && form.email && !isValidEmail(form.email) ? "#f43f5e" : "rgba(0,0,0,0.12)",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = emailTouched && form.email && !isValidEmail(form.email) ? "#f43f5e" : "#4F46E5";
                      }}
                    />
                    {emailTouched && form.email && !isValidEmail(form.email) && (
                      <p style={{ fontSize: "12px", color: "#f43f5e", marginTop: "4px", fontFamily: "'Archivo', sans-serif" }}>
                        Digite um e-mail válido
                      </p>
                    )}
                  </div>

                  {/* Telefone + DDI */}
                  <div>
                    <label style={labelStyle}>Telefone / WhatsApp</label>
                    <div style={{ display: "flex", gap: "8px" }}>
                      {/* DDI selector */}
                      <div style={{ position: "relative", flexShrink: 0 }}>
                        <select
                          value={ddi}
                          onChange={(e) => setDdi(e.target.value)}
                          style={{
                            appearance: "none",
                            WebkitAppearance: "none",
                            padding: "12px 32px 12px 12px",
                            border: "1.5px solid rgba(0,0,0,0.12)",
                            borderRadius: "10px",
                            fontSize: "15px",
                            color: "#0a0a0a",
                            fontFamily: "'Archivo', sans-serif",
                            background: "#fafafa",
                            cursor: "pointer",
                            outline: "none",
                            height: "100%",
                          }}
                        >
                          {DDI_OPTIONS.map((opt) => (
                            <option key={opt.code} value={opt.code}>
                              {opt.flag} {opt.code}
                            </option>
                          ))}
                        </select>
                        {/* Seta customizada */}
                        <span style={{
                          position: "absolute",
                          right: "10px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          pointerEvents: "none",
                          fontSize: "10px",
                          color: "#a1a1aa",
                        }}>▼</span>
                      </div>
                      {/* Número */}
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                        placeholder="(11) 99999-9999"
                        style={{ ...inputStyle, flex: 1 }}
                        onFocus={(e) => { e.target.style.borderColor = "#4F46E5"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(0,0,0,0.12)"; }}
                      />
                    </div>
                  </div>

                </div>
              )}

              {/* Radio options */}
              {step.type === "radio" && (
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "20px" }}>
                  {step.options!.map((opt) => {
                    const selected = form[step.id] === opt;
                    return (
                      <button
                        key={opt}
                        onClick={() => handleRadioSelect(opt)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          padding: "14px 16px",
                          borderRadius: "10px",
                          border: `1.5px solid ${selected ? "#4F46E5" : "rgba(0,0,0,0.1)"}`,
                          background: selected ? "rgba(79,70,229,0.06)" : "#fafafa",
                          cursor: "pointer",
                          textAlign: "left",
                          transition: "border-color 0.15s ease, background 0.15s ease",
                          fontFamily: "'Archivo', sans-serif",
                          fontSize: "15px",
                          color: "#0a0a0a",
                          lineHeight: 1.4,
                          width: "100%",
                        }}
                      >
                        <span
                          style={{
                            width: "18px",
                            height: "18px",
                            borderRadius: "50%",
                            border: `2px solid ${selected ? "#4F46E5" : "rgba(0,0,0,0.2)"}`,
                            background: selected ? "#4F46E5" : "transparent",
                            flexShrink: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.15s ease",
                          }}
                        >
                          {selected && (
                            <span
                              style={{
                                width: "6px",
                                height: "6px",
                                borderRadius: "50%",
                                background: "#fff",
                              }}
                            />
                          )}
                        </span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Textarea */}
              {step.type === "textarea" && (
                <textarea
                  ref={textareaRef}
                  value={form[step.id]}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, [step.id]: e.target.value }))
                  }
                  placeholder={step.placeholder}
                  rows={4}
                  style={{
                    width: "100%",
                    marginTop: "20px",
                    padding: "14px 16px",
                    border: "1.5px solid rgba(0,0,0,0.12)",
                    borderRadius: "10px",
                    fontSize: "15px",
                    color: "#0a0a0a",
                    fontFamily: "'Archivo', sans-serif",
                    resize: "none",
                    outline: "none",
                    background: "#fafafa",
                    lineHeight: 1.6,
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#4F46E5";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(0,0,0,0.12)";
                  }}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 40px 28px",
            flexShrink: 0,
          }}
        >
          {/* Back button */}
          <button
            onClick={goPrev}
            disabled={currentStep === 0}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "10px 20px",
              borderRadius: "8px",
              border: "1.5px solid rgba(79,70,229,0.4)",
              background: "transparent",
              color: currentStep === 0 ? "rgba(0,0,0,0.2)" : "#4F46E5",
              borderColor: currentStep === 0 ? "rgba(0,0,0,0.1)" : "rgba(79,70,229,0.4)",
              cursor: currentStep === 0 ? "not-allowed" : "pointer",
              fontFamily: "'Archivo', sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              transition: "opacity 0.15s ease",
            }}
          >
            <ArrowLeft size={14} />
            Voltar
          </button>

          {/* Next / Submit button */}
          <button
            onClick={goNext}
            disabled={!canAdvance() && step.type === "textarea" && !step.optional}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "10px 24px",
              borderRadius: "8px",
              border: "none",
              background: canAdvance() ? "#4F46E5" : "rgba(0,0,0,0.1)",
              color: canAdvance() ? "#ffffff" : "rgba(0,0,0,0.3)",
              cursor: canAdvance() ? "pointer" : "not-allowed",
              fontFamily: "'Archivo', sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              transition: "background 0.15s ease, color 0.15s ease",
            }}
          >
            {isLastStep ? "Enviar Aplicação" : "Próximo"}
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
