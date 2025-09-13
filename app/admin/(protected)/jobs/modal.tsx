"use client";

import { FC } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
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

import { JobPost } from "@/types";
import {
  Check,
  DollarSign,
  IndianRupee,
  JapaneseYen,
  Trash,
} from "lucide-react";
import { ChipInputArray } from "@/components/ui/chip-input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { LoadingSpinner } from "@/components/loading-spinner";

const JobSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  department: Yup.string().required("Department is required"),
  location: Yup.string().required("Location is required"),
  type: Yup.mixed<"full-time" | "part-time" | "contract" | "remote">()
    .oneOf(["full-time", "part-time", "contract", "remote"])
    .required("Job type is required"),
  description: Yup.string().required("Description is required"),
  experience: Yup.string().required("Experience is required"),
  applyUrl: Yup.string()
    .url("Must be a valid URL")
    .required("Apply URL is required"),
  published: Yup.boolean(),
  featured: Yup.boolean(),
});

interface JobFormProps {
  loading: boolean;
  initValues: JobPost;
  onSubmit: (values: JobPost) => void;
  onReset?: () => void;
  onClose: () => void;
  open: boolean;
  className?: string;
  title: string;
}

export const JobForm: FC<JobFormProps> = ({
  loading = false,
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
        {/* Fixed Header */}
        <DialogHeader className="shrink-0 px-4">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        <Formik
          initialValues={initValues}
          validationSchema={JobSchema}
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
            <Form className=" border-t pt-1 border-border flex flex-col flex-1 overflow-hidden">
              <div className="flex-1 overflow-y-auto py-1 px-6 space-y-4">
                <div className="flex flex-row justify-evenly gap-2">
                  <div className="flex-1">
                    <Input
                      name="title"
                      placeholder="Job title"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.title && errors.title && (
                      <p className="text-sm text-red-500">{errors.title}</p>
                    )}
                  </div>
                  <div className="flex-1">
                    <Input
                      name="department"
                      placeholder="Department"
                      value={values.department}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.department && errors.department && (
                      <p className="text-sm text-red-500">
                        {errors.department}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-row justify-evenly gap-4">
                  <div className="w-full">
                    <Input
                      name="location"
                      placeholder="Location"
                      value={values.location}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.location && errors.location && (
                      <p className="text-sm text-red-500">{errors.location}</p>
                    )}
                  </div>
                  <div>
                    <Select
                      onValueChange={(val) =>
                        handleChange({ target: { name: "type", value: val } })
                      }
                      defaultValue={values.type}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-time">Full-time</SelectItem>
                        <SelectItem value="part-time">Part-time</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                        <SelectItem value="remote">Remote</SelectItem>
                      </SelectContent>
                    </Select>
                    {touched.type && errors.type && (
                      <p className="text-sm text-red-500">{errors.type}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Textarea
                    name="description"
                    placeholder="Job description"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={4}
                  />
                  {touched.description && errors.description && (
                    <p className="text-sm text-red-500">{errors.description}</p>
                  )}
                </div>

                <div>
                  <ChipInputArray
                    name="requirements"
                    placeholder="Requirements"
                    label="Requirements"
                  />
                </div>
                <div>
                  <div>
                    <ChipInputArray
                      name="skills"
                      placeholder="Skills"
                      label="Skills"
                    />
                  </div>
                  <div>
                    <ChipInputArray
                      name="responsibilities"
                      placeholder="Responsibilities"
                      label="Responsibilities"
                    />
                  </div>
                  <ChipInputArray
                    name="benifits"
                    placeholder="Benifits"
                    label="Benifits"
                  />
                </div>

                {/* Location */}
                <div className="flex flex-row justify-evenly gap-2">
                  <div>
                    <Input
                      name="salary.min"
                      placeholder="Min Salary"
                      type="number"
                      value={values.salary?.min}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.location && errors.location && (
                      <p className="text-sm text-red-500">{errors.location}</p>
                    )}
                  </div>
                  <div>
                    <Input
                      name="salary.max"
                      placeholder="Max Salary"
                      type="number"
                      value={values.salary?.max}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.location && errors.location && (
                      <p className="text-sm text-red-500">{errors.location}</p>
                    )}
                  </div>
                  <div>
                    <Select
                      onValueChange={(val) =>
                        handleChange({
                          target: { name: "salary.currency", value: val },
                        })
                      }
                      defaultValue={values.salary?.currency}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Currency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="INR">
                          <IndianRupee className="hover:text-primary-foreground w-4 h-4" />
                          INR
                        </SelectItem>
                        <SelectItem value="USD">
                          <DollarSign className="hover:text-primary-foreground w-4 h-4" />{" "}
                          USD
                        </SelectItem>
                        <SelectItem value="JPY">
                          <JapaneseYen className="hover:text-primary-foreground w-4 h-4" />{" "}
                          JPY
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {touched.type && errors.type && (
                      <p className="text-sm text-red-500">{errors.type}</p>
                    )}
                  </div>
                </div>
                {/* Apply URL */}
                <div className="flex justify-evenly gap-2">
                  <div className="flex-1">
                    <Input
                      name="applyUrl"
                      placeholder="Application URL"
                      value={values.applyUrl}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.applyUrl && errors.applyUrl && (
                      <p className="text-sm text-red-500">{errors.applyUrl}</p>
                    )}
                  </div>
                  <div className="flex-1">
                    <Input
                      name="experience"
                      placeholder="Expirience"
                      type="number"
                      value={values.experience}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.location && errors.location && (
                      <p className="text-sm text-red-500">{errors.location}</p>
                    )}
                  </div>
                </div>
                <div className="flex justify-evenly gap-2">
                  <div className="flex-1 flex gap-3 items-center">
                    <Label>Published </Label>
                    <Switch
                      name="published"
                      checked={values.published}
                      onCheckedChange={() =>
                        setFieldValue("published", !values.published)
                      }
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="flex-1 flex gap-3 items-center">
                    <Label>Featured </Label>
                    <Switch
                      name="featured"
                      checked={values.featured}
                      onCheckedChange={() =>
                        setFieldValue("featured", !values.featured)
                      }
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
              </div>

              <DialogFooter className="shrink-0 mt-4 px-4 pt-2 border-t border-border flex justify-end gap-2">
                <Button
                  type="reset"
                  variant="secondary"
                  onClick={() => {
                    onReset?.();
                  }}
                  size={"sm"}
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
