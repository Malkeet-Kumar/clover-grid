"use client";

import { FC } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

import { Check } from "lucide-react";
import { ChipInputArray } from "@/components/ui/chip-input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { LoadingSpinner } from "@/components/loading-spinner";
import { PricePlan } from "@/types";

const PricePlanSchema = Yup.object().shape({
  name: Yup.string().required("Plan name is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.number().required("Price is required").min(0),
  currency: Yup.string().required("Currency is required"),
  billing: Yup.mixed<"one-time" | "recurring">()
    .oneOf(["one-time", "recurring"])
    .required("Billing type is required"),
  category: Yup.string().required("Category is required"),
  ctaText: Yup.string().required("CTA text is required"),
  ctaUrl: Yup.string()
    .url("Must be a valid URL")
    .required("CTA URL is required"),
  features: Yup.array().of(Yup.string()),
  limitations: Yup.array().of(Yup.string()),
  published: Yup.boolean(),
});

export const PricePlanForm: FC<{
  loading: boolean;
  initValues: Partial<PricePlan>;
  onSubmit: (values: Partial<PricePlan>) => void;
  onReset?: () => void;
  onClose: () => void;
  open: boolean;
  title: string;
  className?: string;
}> = ({
  loading,
  initValues,
  title,
  onSubmit,
  onReset,
  onClose,
  open,
  className,
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className={cn("max-w-2xl flex flex-col h-[90vh] px-0", className)}
      >
        <DialogHeader className="shrink-0 px-4">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        <Formik
          initialValues={initValues}
          validationSchema={PricePlanSchema}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            setFieldValue,
          }) => (
            <Form className="border-t pt-1 border-border flex flex-col flex-1 overflow-hidden">
              <div className="flex-1 overflow-y-auto py-1 px-6 space-y-4">
                {/* Name & Description */}
                <Input
                  name="name"
                  placeholder="Plan Name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.name && errors.name && (
                  <p className="text-sm text-red-500">{errors.name}</p>
                )}

                <Textarea
                  name="description"
                  placeholder="Plan Description"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={3}
                />
                {touched.description && errors.description && (
                  <p className="text-sm text-red-500">{errors.description}</p>
                )}

                {/* Price, Currency & Billing */}
                <div className="flex gap-2">
                  <Input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={values.price}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Select
                    onValueChange={(val) =>
                      handleChange({ target: { name: "currency", value: val } })
                    }
                    defaultValue={values.currency}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD</SelectItem>
                      <SelectItem value="INR">INR</SelectItem>
                      <SelectItem value="JPY">JPY</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select
                    onValueChange={(val) =>
                      handleChange({ target: { name: "billing", value: val } })
                    }
                    defaultValue={values.billing}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Billing" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="one-time">One-time</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="yearly">Yearly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Category */}
                <Select
                  onValueChange={(val) =>
                    handleChange({ target: { name: "category", value: val } })
                  }
                  defaultValue={values.category}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web">Web</SelectItem>
                    <SelectItem value="mobile">Mobile</SelectItem>
                    <SelectItem value="cloud">Cloud</SelectItem>
                    <SelectItem value="ai">AI</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="saas">SaaS</SelectItem>
                    <SelectItem value="support">Support</SelectItem>
                  </SelectContent>
                </Select>

                {/* Features */}
                <ChipInputArray
                  name="features"
                  placeholder="Features"
                  label="Features"
                />

                {/* Limitations */}
                <ChipInputArray
                  name="limitations"
                  placeholder="Limitations"
                  label="Limitations"
                />

                {/* CTA */}
                <Input
                  name="ctaText"
                  placeholder="CTA Text"
                  value={values.ctaText}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.ctaText && errors.ctaText && (
                  <p className="text-sm text-red-500">{errors.ctaText}</p>
                )}

                <Input
                  name="ctaUrl"
                  placeholder="CTA URL"
                  value={values.ctaUrl}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.ctaUrl && errors.ctaUrl && (
                  <p className="text-sm text-red-500">{errors.ctaUrl}</p>
                )}

                {/* Published & Popular */}
                <div className="flex gap-4">
                  <div className="flex items-center gap-3">
                    <Label>Published</Label>
                    <Switch
                      checked={values.published}
                      onCheckedChange={() =>
                        setFieldValue("published", !values.published)
                      }
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <Label>Popular</Label>
                    <Switch
                      checked={values.popular}
                      onCheckedChange={() =>
                        setFieldValue("popular", !values.popular)
                      }
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
              </div>

              {/* Footer */}
              <DialogFooter className="shrink-0 mt-4 px-4 pt-2 border-t border-border flex justify-end gap-2">
                <Button
                  type="reset"
                  variant="secondary"
                  onClick={() => onReset?.()}
                  size="sm"
                  disabled={loading}
                >
                  Reset
                </Button>
                <Button size="sm" type="submit" disabled={loading}>
                  {loading ? <LoadingSpinner size={16} /> : <Check size={16} />}
                  {initValues._id ? "Update" : "Save"}
                </Button>
              </DialogFooter>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};
