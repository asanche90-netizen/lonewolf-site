"use client";

import { forwardRef, useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";

const ENGAGEMENT_OPTIONS = [
  "Brand Domination",
  "Digital Conquest",
  "Visual Warfare",
  "Motion Combat",
  "Other (Likely Rejected)",
];

const WAR_CHEST_OPTIONS = [
  "Under $10K (Begin Again)",
  "$10K – $25K",
  "$25K – $50K",
  "$50K – $100K",
  "$100K+ (Respect)",
];

const STRIKE_WINDOW_OPTIONS = [
  "Immediate",
  "Within 30 Days",
  "Within 90 Days",
  "When the Time is Right",
];

type FormData = {
  name: string;
  organization?: string;
  email: string;
  phone?: string;
  engagement: string;
  warChest?: string;
  strikeWindow?: string;
  briefing: string;
};

const inputCls = (hasError: boolean) =>
  [
    "w-full bg-bg text-fg font-sans text-[15px] leading-[1.4]",
    "px-4 py-3 rounded-[2px]",
    "border",
    hasError ? "border-accent" : "border-border",
    "focus:outline-none focus:border-accent",
    "transition-colors duration-[120ms] ease-linear",
    "placeholder:text-muted placeholder:font-mono placeholder:tracking-[0.05em] placeholder:text-[12px]",
  ].join(" ");

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="block font-mono uppercase tracking-[0.05em] text-[12px] text-muted mb-2">
        {label}
        {required && (
          <span aria-hidden="true" className="text-accent ml-1">
            *
          </span>
        )}
      </span>
      {children}
      {error && (
        <p
          role="alert"
          className="mt-2 font-mono uppercase tracking-[0.05em] text-[11px] text-accent"
        >
          {error}
        </p>
      )}
    </label>
  );
}

export default function Form() {
  const [submitted, setSubmitted] = useState(false);
  const [showRejected, setShowRejected] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ mode: "onSubmit" });

  const onValid = async () => {
    setShowRejected(false);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
  };

  const onInvalid = () => {
    setShowRejected(true);
  };

  return (
    <section
      id="contact"
      className="relative px-6 md:px-12 py-32 md:py-48 border-t border-border"
    >
      <h2 className="font-display uppercase tracking-[-0.02em] leading-[0.95] text-fg text-[clamp(3rem,8vw,5rem)]">
        Begin the Hunt
      </h2>

      {!submitted && (
        <p className="mt-6 md:mt-8 font-display uppercase tracking-[-0.02em] leading-[1.05] text-accent text-[clamp(1.125rem,2.4vw,1.75rem)] max-w-3xl">
          Not every prospect becomes prey. Submit your application.
        </p>
      )}

      {submitted ? (
        <p className="mt-12 md:mt-16 font-display uppercase tracking-[-0.02em] leading-[1.05] text-fg text-[clamp(1.75rem,4vw,3rem)] max-w-3xl">
          Message received. The pack will decide. We do not reply to all
          applications.
        </p>
      ) : (
        <>
          {showRejected && Object.keys(errors).length > 0 && (
            <div
              role="alert"
              className="mt-10 md:mt-12 border border-accent px-5 py-4 max-w-3xl"
            >
              <p className="font-mono uppercase tracking-[0.05em] text-[13px] text-accent">
                Rejected. Recalibrate and try again.
              </p>
            </div>
          )}

          <form
            noValidate
            onSubmit={handleSubmit(onValid, onInvalid)}
            className="mt-10 md:mt-14 max-w-3xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <Field label="Name" required error={errors.name?.message}>
                <input
                  type="text"
                  placeholder="WHAT THEY CALL YOU"
                  aria-invalid={!!errors.name}
                  className={inputCls(!!errors.name)}
                  {...register("name", { required: "Name required" })}
                />
              </Field>

              <Field label="Organization">
                <input
                  type="text"
                  placeholder="THE EMPIRE YOU REPRESENT"
                  className={inputCls(false)}
                  {...register("organization")}
                />
              </Field>

              <Field label="Email" required error={errors.email?.message}>
                <input
                  type="email"
                  placeholder="WHERE WE STRIKE"
                  aria-invalid={!!errors.email}
                  className={inputCls(!!errors.email)}
                  {...register("email", {
                    required: "Email required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  })}
                />
              </Field>

              <Field label="Phone">
                <input
                  type="tel"
                  placeholder="FOR EMERGENCY EXTRACTION"
                  className={inputCls(false)}
                  {...register("phone")}
                />
              </Field>
            </div>

            <div className="mt-6 md:mt-8">
              <Field
                label="Engagement Type"
                required
                error={errors.engagement?.message}
              >
                <SelectField
                  defaultValue=""
                  aria-invalid={!!errors.engagement}
                  className={inputCls(!!errors.engagement)}
                  {...register("engagement", {
                    required: "Engagement type required",
                    validate: (v) => v !== "" || "Engagement type required",
                  })}
                >
                  <option value="" disabled>
                    SELECT ENGAGEMENT
                  </option>
                  {ENGAGEMENT_OPTIONS.map((o) => (
                    <option key={o} value={o}>
                      {o.toUpperCase()}
                    </option>
                  ))}
                </SelectField>
              </Field>
            </div>

            <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <Field label="War Chest">
                <SelectField
                  defaultValue=""
                  className={inputCls(false)}
                  {...register("warChest")}
                >
                  <option value="">SELECT BUDGET</option>
                  {WAR_CHEST_OPTIONS.map((o) => (
                    <option key={o} value={o}>
                      {o.toUpperCase()}
                    </option>
                  ))}
                </SelectField>
              </Field>

              <Field label="Strike Window">
                <SelectField
                  defaultValue=""
                  className={inputCls(false)}
                  {...register("strikeWindow")}
                >
                  <option value="">SELECT TIMELINE</option>
                  {STRIKE_WINDOW_OPTIONS.map((o) => (
                    <option key={o} value={o}>
                      {o.toUpperCase()}
                    </option>
                  ))}
                </SelectField>
              </Field>
            </div>

            <div className="mt-6 md:mt-8">
              <Field
                label="Briefing"
                required
                error={errors.briefing?.message}
              >
                <textarea
                  rows={6}
                  placeholder="STATE YOUR INTENT. WE READ EVERYTHING TWICE."
                  aria-invalid={!!errors.briefing}
                  className={`${inputCls(!!errors.briefing)} resize-y min-h-[140px]`}
                  {...register("briefing", { required: "Briefing required" })}
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-10 md:mt-12 w-full md:w-auto font-mono uppercase tracking-[0.05em] text-[14px] md:text-[15px] px-10 py-5 bg-accent text-bg border border-accent hover:bg-bg hover:text-fg hover:border-fg transition-colors duration-[120ms] ease-linear disabled:opacity-60 disabled:pointer-events-none"
            >
              {isSubmitting ? "Striking…" : "Commence the Hunt"}
            </button>
          </form>
        </>
      )}
    </section>
  );
}

const SelectField = forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(function SelectField({ children, className = "", ...props }, ref) {
  return (
    <div className="relative">
      <select
        ref={ref}
        {...props}
        className={`${className} appearance-none pr-10 cursor-pointer`}
      >
        {children}
      </select>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-mono text-muted text-[14px]"
      >
        ▾
      </span>
    </div>
  );
});
