"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  Edit,
  Trash2,
  Eye,
  MapPin,
  Clock,
  DollarSign,
  GlobeLock,
  Globe,
} from "lucide-react";
import { fetchApi, getJobPosts } from "@/lib/api";
import { AdminPageLayout } from "@/components/AdminPageLayout";
import { useGet, usePost, usePut, useStore } from "@/hooks";
import { useEffect, useState } from "react";
import { ITableCol, JobPost } from "@/types";
import {
  SelectTrigger,
  SelectValue,
  SelectContent,
  Select,
  SelectItem,
} from "@/components/ui/select";
import { Plus, Search } from "lucide-react";
import { JobForm } from "./modal";
import { DataTable } from "@/components/data-table";
import { Tooltip } from "@/components/ui/tooltip";
import { TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";
import { toast } from "react-toastify";

export const Actions = ({ onAdd = () => null, onFilter = () => null }: any) => {
  return (
    <div>
      <div className="w-full flex flex-col sm:flex-row gap-4 items-center">
        <Select value={"All"} onValueChange={(val) => onFilter(val)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent side="bottom" align="start">
            {["All", "Published", "Featured"].map((filter) => (
              <SelectItem key={filter} value={filter}>
                {filter}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button onClick={onAdd} size={"sm"}>
          <Plus className="h-4 w-4" />
          New Job
        </Button>
      </div>
    </div>
  );
};

export default function AdminJobsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editKey, setEditKey] = useState<string | null>(null);
  const [editValues, setEditValues] = useState<JobPost | null>(null);
  const [
    getState,
    { data: jobPosts, pagination: jobsPagination },
    { fetchData: fetchJobs },
  ] = useGet<JobPost[], true>(
    "/jobs",
    {
      data: [],
      pagination: { limit: 10, page: 0, total: 0, totalPages: 0 },
    },
    true
  );
  const [createState, addedJob, { postData: createJob }] = usePost<any>(
    "/jobs",
    []
  );
  const [updateState, updatedJob, { putData: updateJob }] = usePut<number>(
    "/jobs",
    -1
  );

  useEffect(() => {
    fetchJobs();
  }, [addedJob, updatedJob, updateState.isLoading, createState.isLoading]);

  useEffect(() => {
    if (updateState.isSuccess) {
      toast.success("Job updated!");
      setEditKey(null);
      setIsModalOpen(false);
    }
    if (updateState.isError) {
      toast.error(updateState.isError || "Error updating job!");
    }
  }, [updateState.isLoading]);

  useEffect(() => {
    if (createState.isSuccess) {
      toast.success("Job created!");
      setIsModalOpen(false);
    }
    if (createState.isError) {
      toast.error(createState.isError || "Error creating job!");
    }
  }, [createState.isLoading]);

  useEffect(() => {
    if (editKey) {
      const job = jobPosts.find(({ _id }: { _id: string }) => _id === editKey);
      if (!job) return;
      setEditValues(() => job);
      setIsModalOpen(true);
    } else {
      setEditValues(null);
    }
  }, [editKey]);

  const handleEdit = (id: string) => {
    if (editKey === id) {
      setEditKey(null);
    } else {
      setEditKey(id);
    }
  };

  const handleSubmit = (values: JobPost) => {
    editValues ? updateJob(values) : createJob(values);
  };

  const jobColumns: ITableCol<JobPost>[] = [
    {
      key: "title",
      header: "Job Title",
      render: (_, job: JobPost) => (
        <div className="flex flex-col">
          <span className="font-medium">{job.title}</span>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <Badge variant={job.published ? "default" : "secondary"}>
              {job.published ? "Published" : "Draft"}
            </Badge>
            {job.featured && <Badge variant="outline">Featured</Badge>}
            <Badge variant="outline" className="capitalize">
              {job.type}
            </Badge>
          </div>
        </div>
      ),
      sortable: true,
    },
    {
      key: "description",
      header: "Description",
      render: (_, job: JobPost) => (
        <Tooltip>
          <TooltipTrigger>
            <p className="line-clamp-1">{job.description}</p>
          </TooltipTrigger>
          <TooltipContent className="bg-primary text-primary-foreground rounded-sm px-2 py-1">
            {job.description}
          </TooltipContent>
        </Tooltip>
      ),
    },
    {
      key: "location",
      header: "Location",
      sortable: true,
      render: (_, job: JobPost) => <span>{job.location}</span>,
    },
    {
      key: "experience",
      header: "Experience",
      sortable: true,
    },
    {
      key: "salary",
      header: "Salary",
      sortable: true,
      render: (_, job: JobPost) =>
        job.salary ? (
          <span>
            {job.salary.min.toLocaleString()} -{job.salary.max.toLocaleString()}{" "}
            {job.salary.currency}
          </span>
        ) : (
          "-"
        ),
    },
    {
      key: "skills",
      header: "Skills",
      render: (_, job: JobPost) => (
        <div className="flex flex-wrap gap-1">
          {job.skills.slice(0, 4).map((skill) => (
            <Badge key={skill} variant="outline" className="text-xs">
              {skill}
            </Badge>
          ))}
          {job.skills.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{job.skills.length - 4}
            </Badge>
          )}
        </div>
      ),
    },
    {
      key: "actions",
      header: "Actions",
      render: (_, job: JobPost) => (
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href={`/careers`}>
              <Eye className="h-4 w-4 hover:text-primary-foreground" />
            </Link>
          </Button>
          <Button variant="ghost" size="sm" onClick={() => handleEdit(job._id)}>
            <Edit className="h-4 w-4 hover:text-primary-foreground" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-destructive"
            onClick={() => console.log("Delete", job._id)}
          >
            <Trash2 className="h-4 w-4 hover:text-primary-foreground" />
          </Button>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="text-destructive"
                onClick={() => updateJob({ ...job, published: !job.published })}
              >
                {job.published ? (
                  <GlobeLock className="h-4 w-4 hover:text-primary-foreground" />
                ) : (
                  <Globe className="h-4 w-4 hover:text-primary-foreground" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent
              side="top"
              className="px-2 py-1 m-1 bg-primary text-primary-foreground rounded-md"
            >
              {job.published ? "Unpublish" : "Pulish"}
            </TooltipContent>
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <AdminPageLayout
      title="Jobs"
      breadcrumb={[{ label: "Home", href: "/admin" }, { label: "Jobs" }]}
      actions={[<Actions onAdd={() => setIsModalOpen(true)} />]}
    >
      <DataTable
        data={jobPosts}
        columns={jobColumns}
        caption="A list of your job postings."
        page={0}
        totalPages={10}
        totalDocs={10}
        onPageChange={() => null}
        onLimitChange={() => null}
        onSortChange={() => null}
        loading={false}
      />
      <JobForm
        loading={updateState.isLoading || createState.isLoading}
        title="Add Job"
        onClose={() => {
          setIsModalOpen(false);
          setEditKey(null);
        }}
        initValues={
          editValues
            ? editValues
            : {
                _id: "",
                title: "",
                department: "",
                location: "",
                type: "full-time",
                description: "",
                requirements: [],
                responsibilities: [],
                skills: [],
                experience: "",
                salary: {
                  min: 0,
                  max: 0,
                  currency: "USD",
                },
                benefits: [],
                applyUrl: "",
                published: false,
                featured: false,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
              }
        }
        onReset={() => setEditKey(null)}
        onSubmit={(values: JobPost) => handleSubmit(values)}
        open={isModalOpen}
      />
    </AdminPageLayout>
  );
}
