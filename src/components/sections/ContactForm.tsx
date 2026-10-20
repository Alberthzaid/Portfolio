"use client";

import { useForm, type SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";
import { saveContact, type ContactPayload } from "@/lib/contact";

const fieldClass =
  "w-full rounded-2xl border border-input bg-transparent px-4 py-3 text-base text-primary placeholder:text-muted-foreground " +
  "outline-none transition-colors focus:border-primary aria-invalid:border-destructive";
const labelClass = "mb-2 block text-xs tracking-[0.2em] text-muted-foreground uppercase";
const errorClass = "mt-2 block text-sm text-destructive";

const toastTheme = { background: "#121211", color: "#e1e0cc" };

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactPayload>();

  const onSubmit: SubmitHandler<ContactPayload> = async (data) => {
    try {
      await saveContact(data);
      reset();
      await Swal.fire({
        ...toastTheme,
        position: "top-end",
        icon: "success",
        title: "Thanks! Your message was sent.",
        showConfirmButton: false,
        timer: 1800,
      });
    } catch (error) {
      console.error(error);
      await Swal.fire({
        ...toastTheme,
        position: "top-end",
        icon: "error",
        title: "Your message could not be sent. Please try again or reach out by email.",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex w-full flex-col gap-6 rounded-3xl border border-border bg-card p-6 md:p-10"
    >
      <div>
        <label htmlFor="contact-email" className={labelClass}>
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          aria-invalid={errors.email ? "true" : "false"}
          className={fieldClass}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email format",
            },
          })}
        />
        {errors.email && (
          <span role="alert" className={errorClass}>
            {errors.email.message}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="contact-name" className={labelClass}>
          Your name
        </label>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          placeholder="Jane Doe"
          aria-invalid={errors.name ? "true" : "false"}
          className={fieldClass}
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <span role="alert" className={errorClass}>
            {errors.name.message}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="contact-idea" className={labelClass}>
          How can I help you?
        </label>
        <textarea
          id="contact-idea"
          rows={5}
          placeholder="Tell me about your project or idea"
          aria-invalid={errors.idea ? "true" : "false"}
          className={`${fieldClass} resize-y`}
          {...register("idea", { required: "Message is required" })}
        />
        {errors.idea && (
          <span role="alert" className={errorClass}>
            {errors.idea.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="self-start rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 md:text-base"
      >
        {isSubmitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
