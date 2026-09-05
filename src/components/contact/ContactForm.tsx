import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";
import { FiAlertCircle, FiCheckCircle, FiSend } from "react-icons/fi";
import { Button } from "../ui/Button";
import { fadeInUp } from "../../lib/animations";

/**
 * EmailJS identifiers. All three are public by design — they ship in any
 * browser bundle — but keeping them in env vars means changing the service or
 * template never touches this file. The literals are the current values, used
 * as a fallback so the form keeps working without a local .env.
 */
const EMAILJS = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "service_i2gaioo",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "template_xj5nmd7",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "dQWwUPTTaWi9j13x9",
};

const fieldClass =
  "w-full rounded-xl border border-border bg-surface-2/50 px-4 py-3 text-sm text-fg " +
  "placeholder:text-muted/70 transition-[border-color,box-shadow,background-color] " +
  "hover:border-border-strong focus:border-accent focus:bg-surface focus:outline-none " +
  "focus:ring-4 focus:ring-[color:var(--accent-ring)]/25";

const labelClass = "mb-2 block text-xs font-medium uppercase tracking-wider text-muted";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<Status>("idle");
  /** EmailJS rejects with { status, text } — the text names the real cause. */
  const [errorDetail, setErrorDetail] = useState<string | null>(null);
  const [form, setForm] = useState({ from_name: "", email: "", message: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorDetail(null);
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        {
          ...form,
          // The template is an auto-reply to the visitor, so {{to_name}} is
          // whoever filled the form — not the site owner.
          to_name: form.from_name,
          reply_to: form.email,
        },
        EMAILJS.publicKey
      );
      setStatus("sent");
    } catch (err) {
      const detail = err as { status?: number; text?: string };
      setErrorDetail(
        detail?.status ? `${detail.status} — ${detail.text ?? "sin detalle"}` : null
      );
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center rounded-card border border-border bg-surface p-10 text-center"
      >
        <span className="grid size-14 place-items-center rounded-full bg-success-soft text-success">
          <FiCheckCircle size={26} />
        </span>
        <h3 className="mt-5 text-xl font-semibold">{t("contact.successTitle")}</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">{t("contact.success")}</p>
        <Button
          variant="secondary"
          size="sm"
          className="mt-6"
          onClick={() => {
            setForm({ from_name: "", email: "", message: "" });
            setErrorDetail(null);
            setStatus("idle");
          }}
        >
          {t("contact.sendAnother")}
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.form
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      onSubmit={handleSubmit}
      className="rounded-card border border-border bg-surface p-6 sm:p-7"
      noValidate={false}
    >
      <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted">
        {t("contact.formTitle")}
      </h3>

      <div className="mt-6 space-y-5">
        <div>
          <label htmlFor="from_name" className={labelClass}>
            {t("contact.name")}
          </label>
          <input
            id="from_name"
            name="from_name"
            type="text"
            required
            autoComplete="name"
            value={form.from_name}
            onChange={handleChange}
            placeholder={t("contact.namePlaceholder")}
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            {t("contact.email")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder={t("contact.emailPlaceholder")}
            className={fieldClass}
          />
          <p className="mt-2 text-xs text-muted">{t("contact.helper")}</p>
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            {t("contact.message")}
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder={t("contact.messagePlaceholder")}
            className={`${fieldClass} min-h-32 resize-y`}
          />
        </div>
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="mt-5 flex gap-3 rounded-xl border border-warning/30 bg-warning-soft p-4 text-sm text-warning"
        >
          <FiAlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden />
          <span>
            <strong className="block font-medium">{t("contact.errorTitle")}</strong>
            {t("contact.error")}
            {import.meta.env.DEV && errorDetail && (
              <code className="mt-2 block font-mono text-xs opacity-80">{errorDetail}</code>
            )}
          </span>
        </div>
      )}

      <Button type="submit" size="lg" className="mt-6 w-full" disabled={status === "sending"}>
        {status === "sending" ? (
          t("contact.sending")
        ) : (
          <>
            <FiSend size={15} />
            {t("contact.send")}
          </>
        )}
      </Button>
    </motion.form>
  );
}

export default ContactForm;
