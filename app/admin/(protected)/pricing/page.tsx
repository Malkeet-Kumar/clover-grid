"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2, GlobeLock, Globe } from "lucide-react";
import { AdminPageLayout } from "@/components/AdminPageLayout";
import { useGet, usePost, usePut } from "@/hooks";
import { useEffect, useState } from "react";
import { ITableCol, PricePlan } from "@/types";
import {
  SelectTrigger,
  SelectValue,
  SelectContent,
  Select,
  SelectItem,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import { PricePlanForm } from "./modal";
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
          New Plan
        </Button>
      </div>
    </div>
  );
};

export default function AdminJobsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editKey, setEditKey] = useState<string | null>(null);
  const [editValues, setEditValues] = useState<PricePlan | null>(null);
  const [
    getState,
    { data: PricePlans, pagination: jobsPagination },
    { fetchData: fetchJobs },
  ] = useGet<PricePlan[], true>(
    "/pricing",
    {
      data: [],
      pagination: { limit: 10, page: 0, total: 0, totalPages: 0 },
    },
    true
  );
  const [createState, addedJob, { postData: createPricePlan }] = usePost<any>(
    "/pricing",
    []
  );
  const [updateState, updatedJob, { putData: updatePricePlan }] =
    usePut<number>("/pricing", -1);

  useEffect(() => {
    fetchJobs();
  }, [addedJob, updatedJob, updateState.isLoading, createState.isLoading]);

  useEffect(() => {
    if (updateState.isSuccess) {
      toast.success("PricePlan updated!");
      setEditKey(null);
      setIsModalOpen(false);
    }
    if (updateState.isError) {
      toast.error(updateState.isError || "Error updating PricePlan!");
    }
  }, [updateState.isLoading]);

  useEffect(() => {
    if (createState.isSuccess) {
      toast.success("PricePlan created!");
      setIsModalOpen(false);
    }
    if (createState.isError) {
      toast.error(createState.isError || "Error creating PricePlan!");
    }
  }, [createState.isLoading]);

  useEffect(() => {
    if (editKey) {
      const plan = PricePlans.find((p) => p._id === editKey);
      if (!plan) return;
      setEditValues(() => plan);
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

  const handleSubmit = (values: Partial<PricePlan>) => {
    editValues ? updatePricePlan(values) : createPricePlan(values);
  };

  const pricePlanColumns: ITableCol<PricePlan>[] = [
    {
      key: "name",
      header: "Plan Name",
      render: (_, plan: PricePlan) => (
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-medium">{plan.name}</span>
            {plan.ctaText && plan.ctaUrl && (
              <a
                href={plan.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary underline"
              >
                {plan.ctaText}
              </a>
            )}
          </div>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <Badge variant={plan.published ? "default" : "secondary"}>
              {plan.published ? "Published" : "Draft"}
            </Badge>
            {plan.popular && <Badge variant="outline">Popular</Badge>}
            <Badge variant="outline" className="capitalize">
              {plan.category}
            </Badge>
          </div>
        </div>
      ),
      sortable: true,
    },
    {
      key: "description",
      header: "Description",
      render: (_, plan: PricePlan) => (
        <Tooltip key={plan._id}>
          <TooltipTrigger>
            <p className="line-clamp-1">{plan.description}</p>
          </TooltipTrigger>
          <TooltipContent className="bg-primary text-primary-foreground rounded-sm px-2 py-1">
            {plan.description}
          </TooltipContent>
        </Tooltip>
      ),
    },
    {
      key: "pricing",
      header: "Price",
      sortable: true,
      render: (_, plan: PricePlan) => (
        <span>
          {plan.price.toLocaleString()} {plan.currency} ({plan.billing})
        </span>
      ),
    },
    {
      key: "features",
      header: "Features",
      render: (_, plan: PricePlan) => (
        <div className="flex flex-wrap gap-1">
          {plan.features.slice(0, 4).map((f) => (
            <Badge key={f} variant="outline" className="text-xs">
              {f}
            </Badge>
          ))}
          {plan.features.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{plan.features.length - 4}
            </Badge>
          )}
        </div>
      ),
    },
    {
      key: "limitations",
      header: "Limitations",
      render: (_, plan: PricePlan) => (
        <div className="flex flex-wrap gap-1">
          {plan?.limitations?.slice(0, 4).map((l) => (
            <Badge key={l} variant="secondary" className="text-xs">
              {l}
            </Badge>
          ))}
          {plan?.limitations?.length > 4 && (
            <Badge variant="secondary" className="text-xs">
              +{plan?.limitations?.length - 4}
            </Badge>
          )}
        </div>
      ),
    },
    {
      key: "createdAt",
      header: "Created At",
      sortable: true,
      render: (_, plan: PricePlan) => (
        <span>{new Date(plan.createdAt).toLocaleDateString()}</span>
      ),
    },
    {
      key: "updatedAt",
      header: "Updated At",
      sortable: true,
      render: (_, plan: PricePlan) => (
        <span>{new Date(plan.updatedAt).toLocaleDateString()}</span>
      ),
    },
    {
      key: "actions",
      header: "Actions",
      render: (_, plan: PricePlan) => (
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleEdit(plan?._id)}
          >
            <Edit className="h-4 w-4 hover:text-primary-foreground" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-destructive"
            onClick={() => console.log("Delete", plan._id)}
          >
            <Trash2 className="h-4 w-4 hover:text-primary-foreground" />
          </Button>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  updatePricePlan({ ...plan, published: !plan.published })
                }
              >
                {plan.published ? (
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
              {plan.published ? "Unpublish" : "Publish"}
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
        data={PricePlans}
        columns={pricePlanColumns}
        caption="A list of your job postings."
        page={0}
        totalPages={10}
        totalDocs={10}
        onPageChange={() => null}
        onLimitChange={() => null}
        onSortChange={() => null}
        loading={false}
      />
      <PricePlanForm
        loading={updateState.isLoading || createState.isLoading}
        title="Add Price Plan"
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initValues={
          editValues
            ? editValues
            : {
                name: "",
                description: "",
                price: 0,
                currency: "USD",
                billing: "one-time",
                features: [],
                limitations: [],
                popular: false,
                ctaText: "",
                ctaUrl: "",
                category: "web",
                published: false,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
              }
        }
        onReset={() => setEditKey(null)}
        onSubmit={(values: Partial<PricePlan>) => handleSubmit(values)}
      />
    </AdminPageLayout>
  );
}
