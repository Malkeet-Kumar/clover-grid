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

import { Service } from "@/types";
import { Check } from "lucide-react";
import { ChipInputArray } from "@/components/ui/chip-input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { LoadingSpinner } from "@/components/loading-spinner";

const ServiceSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  icon: Yup.string().url("Must be a valid URL"),
  category: Yup.mixed<
    "web" | "mobile" | "cloud" | "ai" | "design" | "saas" | "support"
  >()
    .oneOf(["web", "mobile", "cloud", "ai", "design", "saas", "support"])
    .required("Category is required"),
  pricing: Yup.object().shape({
    starting: Yup.number().required("Starting price is required").min(0),
    currency: Yup.string().required("Currency is required"),
  }),
  published: Yup.boolean(),
});

export const ServiceForm: FC<{
  loading: boolean;
  initValues: Service;
  onSubmit: (values: Service) => void;
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
          validationSchema={ServiceSchema}
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
                <div className="flex items-center gap-2">
                  <Input
                    name="title"
                    placeholder="Service title"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Input
                    name="icon"
                    placeholder="Icon URL"
                    value={values.icon}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {touched.title && errors.title && (
                  <p className="text-sm text-red-500">{errors.title}</p>
                )}

                {/* Description */}
                <Textarea
                  name="description"
                  placeholder="Service description"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={4}
                />
                {touched.description && errors.description && (
                  <p className="text-sm text-red-500">{errors.description}</p>
                )}

                {/* Category */}
                <Select
                  onValueChange={(val) =>
                    handleChange({ target: { name: "category", value: val } })
                  }
                  defaultValue={values.category}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
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
                {touched.category && errors.category && (
                  <p className="text-sm text-red-500">{errors.category}</p>
                )}

                {/* Features */}
                <ChipInputArray
                  name="features"
                  placeholder="Features"
                  label="Features"
                />

                {/* Technologies */}
                <ChipInputArray
                  name="technologies"
                  placeholder="Technologies"
                  label="Technologies"
                />

                {/* Pricing */}
                <div className="flex gap-2">
                  <Input
                    type="number"
                    name="pricing.starting"
                    placeholder="Starting Price"
                    value={values.pricing.starting}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Select
                    onValueChange={(val) =>
                      handleChange({
                        target: { name: "pricing.currency", value: val },
                      })
                    }
                    defaultValue={values.pricing.currency}
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
                </div>

                {/* Published */}
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
