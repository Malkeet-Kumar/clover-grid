"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2, GlobeLock, Globe } from "lucide-react";
import { AdminPageLayout } from "@/components/AdminPageLayout";
import { useGet, usePost, usePut } from "@/hooks";
import { useEffect, useState } from "react";
import { ITableCol, Service } from "@/types";
import {
  SelectTrigger,
  SelectValue,
  SelectContent,
  Select,
  SelectItem,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import { ServiceForm } from "./modal";
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
            <SelectValue placeholder="Select a Category" />
          </SelectTrigger>
          <SelectContent side="bottom" align="start">
            {[
              "All",
              "web",
              "mobile",
              "cloud",
              "ai",
              "design",
              "saas",
              "support",
            ].map((filter) => (
              <SelectItem className="capitalize" key={filter} value={filter}>
                {filter}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button onClick={onAdd} size={"sm"}>
          <Plus className="h-4 w-4" />
          New Service
        </Button>
      </div>
    </div>
  );
};

export default function AdminJobsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editKey, setEditKey] = useState<string | null>(null);
  const [editValues, setEditValues] = useState<Service | null>(null);
  const [
    getState,
    { data: Services, pagination: jobsPagination },
    { fetchData: fetchJobs },
  ] = useGet<Service[], true>(
    "/services",
    {
      data: [],
      pagination: { limit: 10, page: 0, total: 0, totalPages: 0 },
    },
    true
  );
  const [createState, addedJob, { postData: createService }] = usePost<any>(
    "/services",
    []
  );
  const [updateState, updatedJob, { putData: updateService }] = usePut<number>(
    "/services",
    -1
  );

  useEffect(() => {
    fetchJobs();
  }, [addedJob, updatedJob, updateState.isLoading, createState.isLoading]);

  useEffect(() => {
    if (updateState.isSuccess) {
      toast.success("service updated!");
      setEditKey(null);
      setIsModalOpen(false);
    }
    if (updateState.isError) {
      toast.error(updateState.isError || "Error updating service!");
    }
  }, [updateState.isLoading]);

  useEffect(() => {
    if (createState.isSuccess) {
      toast.success("service created!");
      setIsModalOpen(false);
    }
    if (createState.isError) {
      toast.error(createState.isError || "Error creating service!");
    }
  }, [createState.isLoading]);

  useEffect(() => {
    if (editKey) {
      const job = Services.find(({ _id }: { _id: string }) => _id === editKey);
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

  const handleSubmit = (values: Service) => {
    editValues ? updateService(values) : createService(values);
  };

  const serviceColumns: ITableCol<Service>[] = [
    {
      key: "title",
      header: "Service Title",
      render: (_, service: Service) => (
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            {service.icon && (
              <img src={service.icon} alt={service.title} className="h-6 w-6" />
            )}
            <span className="font-medium">{service.title}</span>
          </div>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <Badge variant={service.published ? "default" : "secondary"}>
              {service.published ? "Published" : "Draft"}
            </Badge>
            <Badge variant="outline" className="capitalize">
              {service.category}
            </Badge>
          </div>
        </div>
      ),
      sortable: true,
    },
    {
      key: "description",
      header: "Description",
      render: (_, service: Service) => (
        <Tooltip>
          <TooltipTrigger>
            <p className="line-clamp-1">{service.description}</p>
          </TooltipTrigger>
          <TooltipContent className="bg-primary text-primary-foreground rounded-sm px-2 py-1">
            {service.description}
          </TooltipContent>
        </Tooltip>
      ),
    },
    {
      key: "features",
      header: "Features",
      render: (_, service: Service) => (
        <div className="flex flex-wrap gap-1">
          {service.features.slice(0, 4).map((feature) => (
            <Badge key={feature} variant="outline" className="text-xs">
              {feature}
            </Badge>
          ))}
          {service.features.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{service.features.length - 4}
            </Badge>
          )}
        </div>
      ),
    },
    {
      key: "technologies",
      header: "Technologies",
      render: (_, service: Service) => (
        <div className="flex flex-wrap gap-1">
          {service.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
          {service.technologies.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{service.technologies.length - 4}
            </Badge>
          )}
        </div>
      ),
    },
    {
      key: "pricing",
      header: "Starting Price",
      sortable: true,
      render: (_, service: Service) => (
        <span>
          {service.pricing.starting.toLocaleString()} {service.pricing.currency}
        </span>
      ),
    },
    {
      key: "createdAt",
      header: "Created At",
      sortable: true,
      render: (_, service: Service) => (
        <span>{new Date(service.createdAt).toLocaleDateString()}</span>
      ),
    },
    {
      key: "updatedAt",
      header: "Updated At",
      sortable: true,
      render: (_, service: Service) => (
        <span>{new Date(service.updatedAt).toLocaleDateString()}</span>
      ),
    },
    {
      key: "actions",
      header: "Actions",
      render: (_, service: Service) => (
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleEdit(service._id)}
          >
            <Edit className="h-4 w-4 hover:text-primary-foreground" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-destructive"
            onClick={() => console.log("Delete", service._id)}
          >
            <Trash2 className="h-4 w-4 hover:text-primary-foreground" />
          </Button>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  updateService({ ...service, published: !service.published })
                }
              >
                {service.published ? (
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
              {service.published ? "Unpublish" : "Publish"}
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
        data={Services}
        columns={serviceColumns}
        caption="A list of your job postings."
        page={0}
        totalPages={10}
        totalDocs={10}
        onPageChange={() => null}
        onLimitChange={() => null}
        onSortChange={() => null}
        loading={false}
      />
      <ServiceForm
        loading={updateState.isLoading || createState.isLoading}
        title="Add Service"
        open={isModalOpen}
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
                description: "",
                icon: "",
                features: [],
                technologies: [],
                pricing: { starting: 0, currency: "USD" },
                category: "web",
                published: false,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
              }
        }
        onReset={() => setEditKey(null)}
        onSubmit={(values: Service) => handleSubmit(values)}
      />
    </AdminPageLayout>
  );
}
