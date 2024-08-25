"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea"; // Adjust the import to match your component library

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
    to_name: "Aquamind team", // Assuming to_name is static for the template
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.from_name) errors.from_name = "Name is required";
    if (!formData.from_email) {
      errors.from_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.from_email)) {
      errors.from_email = "Email is invalid";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      emailjs
        .send(
          "service_mmgv69r", // replace with your EmailJS service ID
          "template_x5bff99", // replace with your EmailJS template ID
          formData,
          "eWKOxf8vd_IBGpYrc" // replace with your EmailJS public key
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFormData({
            from_name: "",
            from_email: "",
            message: "",
            to_name: "Aquamind team",
          }); // Reset form
        })
        .catch((error) => {
          console.log("FAILED...", error);
        });
    }
  };

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Contact Us
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a question or need more information? Fill out the form below,
              and one of our representatives will be in touch shortly.
            </p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              className="max-w-lg flex-1"
            />
            {errors.from_name && (
              <p className="text-red-500">{errors.from_name}</p>
            )}
            <Input
              type="email"
              placeholder="Email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              className="max-w-lg flex-1"
            />
            {errors.from_email && (
              <p className="text-red-500">{errors.from_email}</p>
            )}
            <Textarea
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="max-w-lg flex-1"
            />
            {errors.message && <p className="text-red-500">{errors.message}</p>}
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
